import { useEffect, useState } from "react";
import type { EditorImage } from "../types/EditorImage";

export const useImageUpload = () => {
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const VALID_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp"]; // supported image types

  const [uploadedImage, setUploadedImage] = useState<EditorImage | null>(null);

  useEffect(() => {
    // remove older blob urls from memory, to prevent memory leak
    return () => {
      if (uploadedImage?.preview) {
        URL.revokeObjectURL(uploadedImage.preview);
      }
    };
  }, [uploadedImage]);

  const onImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      //TODO: Replace with real error pop-up
      console.error(
        "Invalid image type. Support image types are png, jpeg, webp."
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      console.error("File size must be within 10 MB.");
      return;
    }

    setUploadedImage({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    });
  };

  return { uploadedImage, onImageUpload };
};
