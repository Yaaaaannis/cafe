export default function Merch() {
  return (
    <div className="w-full h-screen flex bg-[#FFFFEF] overflow-hidden">
      {/* Left: Tote bag image */}
      <div className="w-1/2 h-full relative">
        <img
          src="/merch.png"
          alt="merchandise tote bag"
          className="w-[720px] h-[1079.87px] object-cover"
        />
      </div>
      {/* Right: Text content */}
      <div className="w-1/2 h-full bg-[#FFFFEF] flex flex-col pt-12 items-end px-12 relative">
        <div className="w-full flex flex-col items-end">
          {/* Title block */}
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
            <div>buy us</div>
            <div>some</div>
            <div>merch!</div>
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
            Take a piece of <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Pure Coffee</b> with you wherever you go with our exclusive line of curated merchandise. From elegantly designed <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>tote bags</b> perfect for your daily essentials, to <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>barista-style aprons</b> crafted for both form and function, each item reflects the refined spirit of our café. Our <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>reusable cups</b>, made with sustainable materials, let you enjoy your favorite brew on the move — while reducing waste in style. Thoughtfully designed and made to last, our merchandise isn't just practical — <br/><b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>it's a statement of taste.</b>
          </div>
          
          {/* Available in-store now text */}
          <div className="mt-4 "
            style={{
              width: '442px',
              fontFamily: 'DinaChaumont Text',
              fontWeight: 800,
              fontSize: '24px',
              lineHeight: '28px',
              textAlign: 'right',
              color: '#6C584D',
            }}
          >
            Available in-store now.
          </div>
        </div>
      </div>
    </div>
  );
} 