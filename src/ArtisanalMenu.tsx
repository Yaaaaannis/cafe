import brownie from '/brownie.svg';
import cookie from '/cookie.svg';

export default function ArtisanalMenu() {
  return (
    <div className="w-full h-full flex bg-[#FFFFEF]">
      {/* Left: Brownie image */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center ">
        <img
          src={brownie}
          alt="brownie"
          className="h-[full] w-auto object-contain ml-[50vh]"
        />
        <img
          src={cookie}
          alt="cookie"
          className="h-[full] w-auto object-contain mt-8"
        />
      </div>
      {/* Right: Menu content */}
      <div className="w-1/2 h-full flex flex-col items-end justify-center pr-16">
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
          <div>artisanal</div>
          <div>pastries &</div>
          <div>baked Goods</div>
        </div>
        {/* Menu List */}
        <div className="flex flex-col gap-2 w-[440px] text-right">
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Butter Croissant</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Flaky, golden, made with cultured French butter<br/>€3.20</div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Pain au Chocolat</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Rich dark chocolate wrapped in delicate layers of pastry<br/>€3.50</div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Almond Croissant</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Filled with almond cream, topped with toasted flakes<br/>€3.80</div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Homemade Brownie</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Dense and fudgy, made with 70% dark chocolate and a touch of sea salt<br/>€4.20<br/><span className="pl-4">• Pecan or caramel swirl – €0.50</span></div>
          </div>
          <div>
            <div className="text-[40px] text-[#6C584D] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}>Signature Cookie</div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Soft-baked with a crisp edge, made fresh daily<br/>  <span className="block">• Classic Chocolate Chunk – €3.00</span>  <span className="block">• Tahini & Dark Chocolate – €3.20</span>  <span className="block">• White Chocolate & Matcha – €3.40</span></div>
          </div>
        </div>
        <div className="w-full flex flex-col items-end mt-4">
          <div
            className="text-[24px] font-bold max-w-[440px] pb-4"
            style={{
              color: '#6C584D',
              fontFamily: 'DinaChaumont Text',
              textAlign: 'right',
              lineHeight: '1.1',
            }}
          >
            Gluten-Free Option<br />
            Ask about today's gluten-free pastry selection<br />
            From €3.80
          </div>
        </div>
      </div>
    </div>
  );
} 