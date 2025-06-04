import glass from '/glass.svg';
import coffee from '/coffee.svg';

export default function SignatureMenu() {
  return (
    <div className="w-full h-full flex bg-[#FFFFEF] ">
      {/* Left: Glass image + Coffee image */}
      <div className="w-1/2 h-full flex flex-col items-start justify-start">
        <img
          src={glass}
          alt="glass"
          className="h-[1020x] w-[595.44px] z-10 "
        />
        <img
          src={coffee}
          alt="coffee"
          className="h-[auto] w-auto z-10 ml-[400px] -mt-[100px]"
        />
      </div>
      {/* Right: Menu content */}
      <div className="w-1/2 h-full flex flex-col items-end justify-start pr-16 pt-12">
        {/* Title */}
        <div
          style={{
            fontFamily: 'DinaChaumont',
            fontWeight: 800,
            fontSize: '64px',
            lineHeight: '60px',
            color: '#6C584D',
            textAlign: 'right',
          }}
          className="mb-8"
        >
          <div>Signature</div>
          <div>Coffee</div>
          <div>Selection</div>
        </div>
        {/* Menu List */}
        <div className="flex flex-col gap-2 w-[440px] text-right">
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4 " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Espresso</div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Rich, bold, and balanced<br className="-mb-4"/>30ml – €3.50<br/>Double shot available – €4.50</div>
          </div>
          <div>
            <div className=" text-[40px] text-[#6C584D] -mb-4 " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Americano</div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Smooth and light, with subtle<br className="-mb-4"/>notes of cocoa<br/>180ml – €4.00</div>
          </div>
          <div>
            <div className=" text-[40px] text-[#6C584D] -mb-4 " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Cappuccino</div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Creamy and aromatic with a touch of sweetness<br className="-mb-4"/>150ml – €4.80<br/>Add oat or almond milk – €0.50</div>
          </div>
          <div>
            <div className=" text-[40px] text-[#6C584D] -mb-4 " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Flat White</div>
            <div className="text-[#6C584D] text-[24px] -mb-4    " style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Silky texture with a perfect espresso-to-milk ratio<br className="-mb-4"/>160ml – €5.00</div>
          </div>
          <div>
            <div className=" text-[40px] text-[#6C584D] -mb-4 " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Latte</div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Gentle and smooth, hints of caramel and hazelnut<br className="-mb-4"/>250ml – €5.20<br/>Add house-made vanilla or cinnamon syrup – €0.60</div>
          </div>
          <div>
            <div className=" text-[40px] text-[#6C584D] -mb-4 leading-tight " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Pour-Over<br/>(V60 / Chemex)</div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Single-origin beans, hand-brewed to highlight origin-specific flavor notes<br className="-mb-4"/>250ml – €6.00<br/>Origin of the day: Ethiopia – floral, citrus, light body</div>
          </div>
          <div>
            <div className=" text-[40px] text-[#6C584D] -mb-4 " style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Cold Brew</div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Slow-steeped for 18 hours, low acidity, chocolatey finish<br className="-mb-4"/>300ml – €5.50 <br/>Let me know if you'd like a similar section for teas, matcha, or pastries</div>
          </div>
        </div>
      </div>
    </div>
  );
} 