import glass from '/glass2.svg';
import coffee from '/glass3.svg';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

// Images des boissons matcha
const MATCHA_IMAGES = {
  ceremonial: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215534/ceremonial_matcha_compressed_lhae6m.jpg",
  icedLatte: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215535/iced_matcha_compressed_yxenuo.jpg",
  hotLatte: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215534/hot_matcha_latte_compressed_emcsqo.jpg",
  tonic: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215534/matcha_tonic_compressed_dah24z.jpg",
  affogato: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215533/matcha_affogato_compressed_vxqzdl.jpg"
};

export default function MatchaMenu() {
  const glassRef = useRef(null);
  const coffeeRef = useRef(null);

  // États pour les images
  const [imageLoaded, setImageLoaded] = useState({
    ceremonial: false,
    icedLatte: false,
    hotLatte: false,
    tonic: false,
    affogato: false
  });

  // États pour l'affichage des images
  const [showCeremonial, setShowCeremonial] = useState(false);
  const [showIcedLatte, setShowIcedLatte] = useState(false);
  const [showHotLatte, setShowHotLatte] = useState(false);
  const [showTonic, setShowTonic] = useState(false);
  const [showAffogato, setShowAffogato] = useState(false);

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
          <div className="relative">
            {showCeremonial && (
              <img
                src={MATCHA_IMAGES.ceremonial}
                alt="Ceremonial Matcha preview"
                loading="lazy"
                className={`absolute -top-[100px] right-[-420px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.ceremonial ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, ceremonial: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowCeremonial(true);
                setImageLoaded(prev => ({ ...prev, ceremonial: false }));
              }}
              onMouseLeave={() => setShowCeremonial(false)}
            >
              Ceremonial Matcha (Hot)
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Premium-grade Uji matcha, smooth and umami-rich with a delicate vegetal finish<br className="-mb-4"/>180ml – €5.80</div>
          </div>

          <div className="relative">
            {showIcedLatte && (
              <img
                src={MATCHA_IMAGES.icedLatte}
                alt="Iced Matcha Latte preview"
                loading="lazy"
                className={`absolute -top-[100px] right-[-420px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.icedLatte ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, icedLatte: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowIcedLatte(true);
                setImageLoaded(prev => ({ ...prev, icedLatte: false }));
              }}
              onMouseLeave={() => setShowIcedLatte(false)}
            >
              Iced Matcha Latte
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Refreshing, slightly sweet, made with your choice of milk<br className="-mb-4"/>300ml – €6.20<br className="-mb-4"/><span className="pl-4">• Oat, almond, or coconut milk – €0.50</span></div>
          </div>

          <div className="relative">
            {showHotLatte && (
              <img
                src={MATCHA_IMAGES.hotLatte}
                alt="Hot Matcha Latte preview"
                loading="lazy"
                className={`absolute -top-[100px] right-[-420px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.hotLatte ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, hotLatte: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowHotLatte(true);
                setImageLoaded(prev => ({ ...prev, hotLatte: false }));
              }}
              onMouseLeave={() => setShowHotLatte(false)}
            >
              Matcha Latte (Hot)
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Creamy and vibrant with subtle notes of sweetness<br className="-mb-4"/>250ml – €6.00<br className="-mb-4"/><span className="pl-4">• House-made vanilla, honey, or lavender syrup – €0.60</span></div>
          </div>

          <div className="relative">
            {showTonic && (
              <img
                src={MATCHA_IMAGES.tonic}
                alt="Matcha Tonic preview"
                loading="lazy"
                className={`absolute -top-[100px] right-[-420px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.tonic ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, tonic: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowTonic(true);
                setImageLoaded(prev => ({ ...prev, tonic: false }));
              }}
              onMouseLeave={() => setShowTonic(false)}
            >
              Matcha Tonic
            </div>
            <div className="text-[#6C584D] text-[24px] leading-tight" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Sparkling water over matcha, bright and energizing<br className="-mb-4"/>300ml – €6.50</div>
          </div>

          <div className="relative">
            {showAffogato && (
              <img
                src={MATCHA_IMAGES.affogato}
                alt="Matcha Affogato preview"
                loading="lazy"
                className={`absolute -top-[100px] right-[-420px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.affogato ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, affogato: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowAffogato(true);
                setImageLoaded(prev => ({ ...prev, affogato: false }));
              }}
              onMouseLeave={() => setShowAffogato(false)}
            >
              Matcha Affogato
            </div>
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