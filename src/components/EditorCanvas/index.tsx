import UploadButton from "@components/common/UploadButton";
import { useImageUpload } from "@hooks/useImageUpload";
import { useRef } from "react";
import CanvasScreen from "./CanvasScreen";

const EditorCanvas = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { uploadedImage, onImageUpload } = useImageUpload();

  const onOpenFilePicker = () => {
    inputRef.current?.click(); // opens file explorer for selecting files
  };

  return (
    <div
      className=" 
        w-full
        h-full
        flex
        items-center
        justify-center
        overflow-hidden
        select-none"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*" // all kinds of image file upload is allowed
        className="hidden"
        onChange={onImageUpload}
      />
      {!uploadedImage && (
        <UploadButton handleOpenFilePicker={onOpenFilePicker} />
      )}
      {uploadedImage && (
        <div
          className="
          w-full
          h-full
          flex
          items-center
          justify-center"
        >
          <CanvasScreen uploadedImage={uploadedImage} />
        </div>
      )}
    </div>
  );
};

export default EditorCanvas;
