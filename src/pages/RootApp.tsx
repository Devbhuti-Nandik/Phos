const RootApp = () => {
  return (
    <div className="h-screen bg-appBg flex items-center justify-center p-4">
      {/* Main App Container */}
      <div
        className=" 
        w-full h-full 
        bg-panelBg 
        rounded-2xl 
        shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
        overflow-hidden
        p-4
        "
      >
        {/* Top Bar */}
        <div className="h-16 text-white bg-softBg flex items-center px-6 rounded-2xl border-b border-white/5">
          Toolbar
        </div>

        {/* Middle Section */}
        <div className="min-h-[82vh] flex flex-1 overflow-hidden justify-between gap-4">
          {/* Left Panel */}
          <div className="min-h-[76vh] w-52 text-white bg-softBg mt-6 p-4 rounded-2xl border-r border-white/5">
            Presets
          </div>
          <div className="mt-6 flex flex-col justify-between gap-4">
            {/* Canvas Area */}
            <div className="text-white w-5xl bg-softBg flex-1 flex items-center justify-center rounded-2xl">
              Canvas
            </div>
            {/* Bottom Filmstrip */}
            <div className="h-24 min-w-4xl text-white bg-softBg flex items-center px-4 gap-3 rounded-2xl border-t border-white/5">
              Thumbnails
            </div>
          </div>
          {/* Right Panel */}
          <div className="min-h-[76vh] w-72 text-white bg-softBg mt-6 p-4 rounded-2xl border-l border-white/5">
            Adjustments
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootApp;
