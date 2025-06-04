import glass from '/glass2.svg';
import coffee from '/glass3.svg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MatchaMenu() {
  const glassRef = useRef(null);
  const coffeeRef = useRef(null);

  useEffect(() => {
    gsap.to(glassRef.current, {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    gsap.to(coffeeRef.current, {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });
  }, []);

  return (
    <div className="w-full h-full flex bg-[#FFFFEF]">
      {/* Left: Menu content */}
      <div className="w-1/2 h-full flex flex-col items-start justify-start pl-16 pt-12">
        {/* Title */}
        <div
          style={{
            fontFamily: 'DinaChaumont',
            fontWeight: 800,
            fontSize: '64px',
            lineHeight: '60px',
            color: '#6C584D',
            textAlign: 'left',
          }}
          className="mb-8"
        >
          <div>Matcha</div>
          <div>Selection</div>
        </div>
        {/* Menu List */}
        <div className="flex flex-col gap-2 w-[440px] text-left">
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Ceremonial Matcha (Hot)</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Premium-grade Uji matcha, smooth and umami-rich with a delicate vegetal finish<br className="-mb-4"/>180ml – €5.80</div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Iced Matcha Latte</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Refreshing, slightly sweet, made with your choice of milk<br className="-mb-4"/>300ml – €6.20<br className="-mb-4"/><span className="pl-4">• Oat, almond, or coconut milk – €0.50</span></div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Matcha Latte (Hot)</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Creamy and vibrant with subtle notes of sweetness<br className="-mb-4"/>250ml – €6.00<br className="-mb-4"/><span className="pl-4">• House-made vanilla, honey, or lavender syrup – €0.60</span></div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Matcha Tonic</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Sparkling water over matcha, bright and energizing<br className="-mb-4"/>300ml – €6.50</div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Matcha Affogato</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Scoop of artisanal vanilla bean ice cream with a ceremonial matcha pour-over<br className="-mb-4"/>Dessert - €7.00</div>
          </div>
        </div>
      </div>
      {/* Right: Images */}
      <div className="w-1/2 h-full flex flex-row items-start  pr-16  mr-50">
        <div className="mt-[100px]">
          <img
            ref={glassRef}
            src={glass}
            alt="glass"
            className="h-[full] w-auto z-10 scale-150"
          />
        </div>
        <div className="mt-[400px] -ml-[120px]">
          <img
            ref={coffeeRef}
            src={coffee}
            alt="coffee"
            className="h-[full] w-auto z-10 scale-150"
          />
        </div>
      </div>
    </div>
  );
} 