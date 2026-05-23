import UploadIcon from "@assets/icons/UploadAdd.svg";

const UploadButton = () => {
  return (
    <button
      className="relative
        h-24
        w-24
        rounded-2xl
        border
        border-dashed
        border-violet/60
        flex
        justify-center
        items-center
        overflow-visible
        group
        cursor-pointer"
    >
      <div
        className="absolute
          inset-0
          rounded-2xl
          bg-violet-500/20
          blur-xl
          opacity-0
          scale-90
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:scale-110"
      />
      <div
        className="
          relative
          z-10
          h-full
          w-full
          rounded-2xl
          bg-[#0f1015]/80
          flex
          justify-center
          items-center
        "
      >
        <img
          className="h-6 w-6 opacity-80"
          src={UploadIcon}
          alt="Upload image"
        />
      </div>
    </button>
  );
};

export default UploadButton;
