import brownie from '/brownie.svg';
import cookie from '/cookie.svg';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

// Images des pâtisseries
const PASTRY_IMAGES = {
  butterCroissant: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215533/butter_croissant_compressed_qr76ok.jpg",
  painAuChocolat: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215534/pain_au_choco_compressed_t3yryf.jpg",
  almondCroissant: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215536/Croissant_compressed_vc6qyp.jpg",
  brownie: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215535/brownie_compressed_izhrue.jpg",
  cookie: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215534/cookie_compressed_ctlbbe.jpg"
};

export default function ArtisanalMenu() {
  const brownieRef = useRef(null);
  const cookieRef = useRef(null);

  // États pour les images
  const [imageLoaded, setImageLoaded] = useState({
    butterCroissant: false,
    painAuChocolat: false,
    almondCroissant: false,
    brownie: false,
    cookie: false
  });

  // États pour l'affichage des images
  const [showButterCroissant, setShowButterCroissant] = useState(false);
  const [showPainAuChocolat, setShowPainAuChocolat] = useState(false);
  const [showAlmondCroissant, setShowAlmondCroissant] = useState(false);
  const [showBrownie, setShowBrownie] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    // Animation du brownie avec un léger effet de flottement et rotation
    gsap.to(brownieRef.current, {
      y: -20,
      rotation: -3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Animation du cookie avec un mouvement plus lent et une rotation inverse
    gsap.to(cookieRef.current, {
      y: -15,
      rotation: 2,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.8 // Décalage pour créer un effet asynchrone
    });
  }, []);

  return (
    <div className="w-full h-full flex bg-[#FFFFEF]">
      {/* Left: Brownie image */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center ">
        <img
          ref={brownieRef}
          src={brownie}
          alt="brownie"
          className="h-[full] w-auto object-contain ml-[50vh]"
        />
        <img
          ref={cookieRef}
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
          <div className="relative">
            {showButterCroissant && (
              <img
                src={PASTRY_IMAGES.butterCroissant}
                alt="Butter Croissant preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.butterCroissant ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, butterCroissant: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowButterCroissant(true);
                setImageLoaded(prev => ({ ...prev, butterCroissant: false }));
              }}
              onMouseLeave={() => setShowButterCroissant(false)}
            >
              Butter Croissant
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Flaky, golden, made with cultured French butter<br/>€3.20</div>
          </div>

          <div className="relative">
            {showPainAuChocolat && (
              <img
                src={PASTRY_IMAGES.painAuChocolat}
                alt="Pain au Chocolat preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.painAuChocolat ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, painAuChocolat: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowPainAuChocolat(true);
                setImageLoaded(prev => ({ ...prev, painAuChocolat: false }));
              }}
              onMouseLeave={() => setShowPainAuChocolat(false)}
            >
              Pain au Chocolat
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Rich dark chocolate wrapped in delicate layers of pastry<br/>€3.50</div>
          </div>

          <div className="relative">
            {showAlmondCroissant && (
              <img
                src={PASTRY_IMAGES.almondCroissant}
                alt="Almond Croissant preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.almondCroissant ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, almondCroissant: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowAlmondCroissant(true);
                setImageLoaded(prev => ({ ...prev, almondCroissant: false }));
              }}
              onMouseLeave={() => setShowAlmondCroissant(false)}
            >
              Almond Croissant
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Filled with almond cream, topped with toasted flakes<br/>€3.80</div>
          </div>

          <div className="relative">
            {showBrownie && (
              <img
                src={PASTRY_IMAGES.brownie}
                alt="Brownie preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.brownie ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, brownie: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowBrownie(true);
                setImageLoaded(prev => ({ ...prev, brownie: false }));
              }}
              onMouseLeave={() => setShowBrownie(false)}
            >
              Homemade Brownie
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Dense and fudgy, made with 70% dark chocolate and a touch of sea salt<br/>€4.20<br/><span className="pl-4">• Pecan or caramel swirl – €0.50</span></div>
          </div>

          <div className="relative">
            {showCookie && (
              <img
                src={PASTRY_IMAGES.cookie}
                alt="Cookie preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.cookie ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, cookie: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowCookie(true);
                setImageLoaded(prev => ({ ...prev, cookie: false }));
              }}
              onMouseLeave={() => setShowCookie(false)}
            >
              Signature Cookie
            </div>
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