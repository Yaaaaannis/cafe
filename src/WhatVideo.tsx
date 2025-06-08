export default function WhatVideo() {
  return (
    <div className="w-full h-screen flex bg-[#FFFFEF] overflow-hidden">
      {/* Left: Video */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full  "
        >
          <source src="/credit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Right: Text content */}
      <div className="w-1/2 h-full bg-[#FFFFEF] flex flex-col pt-12 items-end px-12 relative overflow-hidden">
        <div className="w-full flex flex-col items-end">
          {/* Bloc titre positionné comme sur Figma */}
          <div 
            style={{
              width: '443.08px',
              height: '240px',         
              fontFamily: 'DinaChaumont',
              fontWeight: 800,
              fontSize: '128px',
              lineHeight: '93px',
              textAlign: 'right',
              color: '#6C584D',
            }}
          >
            <div>Who</div>
            <div>made</div>
            <div>this ?</div>
          </div>
          <div className="pt-24"
            style={{
              width: '442px',
              fontFamily: 'sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '28px',
              textAlign: 'right',
              color: '#6C584D',
            }}
          >
            <div>Dev by <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>@yannis_dev</b></div>
            <div>Design by <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>@super8.studio</b></div>
            <div className="mt-4">Font : <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Dina Chaumont</b></div>
          </div>
        </div>
      </div>
    </div>
  );
} 