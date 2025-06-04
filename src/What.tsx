export default function What() {
  return (
    <div className="w-full h-screen flex bg-[#FFFFEF] overflow-hidden">
      {/* Left: Coffee machine image */}
      <div className="w-1/2 h-full relative ">
        <img
          src="/pic2.png"
          alt="coffee machine background"
          className="w-[720px] h-[1079.87px] object-cover"/* _DSC2716 1 */

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
            <div>Black</div>
            <div>coffee</div>
            <div>enjoyer</div>
          </div>
          <div className="pt-24"
            style={{
             
              width: '442px',
              height: '712px',
              fontFamily: 'sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '28px',
              textAlign: 'right',
              color: '#6C584D',
            }}
          >
           At  <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Pure Coffee, quality</b> is our hallmark. We source only the <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>finest specialty-grade coffee beans</b> from renowned estates around the world, roasted to perfection to reveal their full <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>depth</b>  and <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>character</b>. For those who prefer an alternative to coffee, our <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>ceremonial-grade matcha</b> offers a smooth, vibrant experience, rich in antioxidants and tradition. Complementing our beverages is a <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>handpicked</b> selection of <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>freshly baked viennoiseries</b> — from buttery cookies to delicate brownies — crafted daily by our in-house pâtissier. Every detail is designed to <b style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>elevate your taste experience to the highest standard.</b> 
          </div>
        </div>
      </div>
  
    </div>
  );
} 