import type { EditorImage } from "../../../types/EditorImage";
import { useEffect, useRef } from "react";

type CanvasScreenProps = {
  uploadedImage: EditorImage | null;
};

const CanvasScreen = ({ uploadedImage }: CanvasScreenProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const renderCanvas = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement
  ) => {
    const dpr = window.devicePixelRatio || 1;

    // Canvas CSS size
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // Orginal canvas size after adjust with device pixel ratio --> make blurry uploaded images look sharper
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;

    // Resets all transformations to avoid compound scaling for next renders
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Clear previous rendered image (already painted pixels)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Always after canvas size adjustment, since resizing canvas would reset its context state
    ctx.scale(dpr, dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Adjusting the scale to make the image content-fit
    const scale = Math.min(
      canvasWidth / image.width,
      canvasHeight / image.height
    );

    // Actual rendered image size
    const renderedWidth = image.width * scale;
    const renderedHeight = image.height * scale;

    // Canvas coordinates where image will be rendered --> center
    const x = (canvasWidth - renderedWidth) / 2;
    const y = (canvasHeight - renderedHeight) / 2;

    //Final draw
    ctx.drawImage(image, x, y, renderedWidth, renderedHeight);
  };

  useEffect(() => {
    if (!uploadedImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const image = new Image();
    image.src = uploadedImage.preview;

    image.onload = () => {
      imageRef.current = image; // Preserve image across multiple re-renders

      if (image.src !== uploadedImage.preview) return; // Prevent stale renders

      renderCanvas(canvas, ctx, imageRef.current);
    };
  }, [uploadedImage]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};

export default CanvasScreen;
