import EditorCanvas from "@components/EditorCanvas";

const RootApp = () => {
  return (
    <div
      className="
      h-screen 
      w-full 
      bg-panelBg 
      bg-linear-to-br
      from-[#151822]
      via-appBg
      to-[#090a0f] flex-1 flex-col overflow-hidden"
    >
      {/* Main App Container */}
      {/* Top Bar */}
      <div className="h-20 text-white flex items-center px-6 border-b border-white/5">
        Topbar
      </div>
      <div>
        {/* Middle Section */}
        <div className="h-screen w-full flex flex-1 overflow-hidden justify-between gap-4">
          {/* Left Panel */}
          <div className="h-5/6 w-1/5 text-white glass my-6 mx-4 p-4 rounded-2xl border-r border-white/5">
            Presets
          </div>
          <div className="h-5/6 w-3/5 mt-6 flex flex-col justify-between gap-4">
            {/* Canvas Area */}
            <div
              className="
              h-4/5 
              flex 
              flex-col 
              items-center 
              justify-center 
              text-white ring-1 
              ring-white/4   
              relative
              z-10
              bg-black/40
              border border-white/10
              p-6
              rounded-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
              <EditorCanvas />
            </div>
            {/* Bottom Filmstrip */}
            <div className="h-1/5 text-white glass flex items-center px-4 gap-3 rounded-2xl border-t border-white/5">
              Thumbnails
            </div>
          </div>
          {/* Right Panel */}
          <div className="h-5/6 w-1/5 text-white glass my-6 mx-4 p-4 rounded-2xl border-l border-white/5">
            Adjustments
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootApp;
