export default function Opening() {
  return (
    <div className="w-full h-screen flex">
      {/* Left: Coffee machine image */}
      <div className="w-1/2 h-full relative">
        <img
          src="/pic1.png"
          alt="coffee machine background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right: Text content */}
      <div className="w-1/2 h-full bg-[#FFFFEF] flex flex-col pt-12 items-end px-12 relative">
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
            <div>We're</div>
            <div>Open !</div>
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
            Welcome to <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Pure Coffee</b>, an exclusive haven for coffee connoisseurs seeking <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>refinement, comfort</b>, and <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>exceptional taste</b>. Nestled in the heart of the city, our café offers a curated selection of single-origin beans, expertly crafted brews, and artisanal pastries in a setting that blends <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>modern elegance with timeless sophistication</b>. Whether you're here for a quiet morning espresso or an afternoon meeting in our private lounge, <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Pure Coffee</b> is more than just a café — it's a <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>sanctuary</b> for those who appreciate the <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>finer things in life</b>.
          </div>
        </div>
      </div>
    </div>
  );
} 