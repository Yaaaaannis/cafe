import glass from '/glass.svg';
import coffee from '/coffee.svg';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

// Images des boissons
const DRINK_IMAGES = {
  espresso: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215536/espresso_compressed_w2zdjn.jpg",
  americano: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215533/americano_compressed_ubi39k.jpg",
  cappuccino: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215533/cappuccino_compressed_kut9o0.jpg",
  flatWhite: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215536/flat_white_compressed_bjlt4d.jpg",
  latte: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215533/latte_compressed_bpeiie.jpg",
  pourOver: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215535/pour_over_compressed_exoxsl.jpg",
  coldBrew: "https://res.cloudinary.com/dscbel2qr/image/upload/v1749215534/cold_brew_compressed_emcsqo.jpg"
};

export default function SignatureMenu() {
  const glassRef = useRef(null);
  const coffeeRef = useRef(null);
  
  // États pour les images
  const [imageLoaded, setImageLoaded] = useState({
    espresso: false,
    americano: false,
    cappuccino: false,
    flatWhite: false,
    latte: false,
    pourOver: false,
    coldBrew: false
  });

  // États séparés pour chaque élément du menu
  const [showEspresso, setShowEspresso] = useState(false);
  const [showAmericano, setShowAmericano] = useState(false);
  const [showCappuccino, setShowCappuccino] = useState(false);
  const [showFlatWhite, setShowFlatWhite] = useState(false);
  const [showLatte, setShowLatte] = useState(false);
  const [showPourOver, setShowPourOver] = useState(false);
  const [showColdBrew, setShowColdBrew] = useState(false);

  useEffect(() => {
    // Animation du verre avec une rotation légère
    gsap.to(glassRef.current, {
      y: -15,
      rotation: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'ease-in-out'
    });

    // Animation de la tasse de café avec un délai et un mouvement différent
    gsap.to(coffeeRef.current, {
      y: -25,
      rotation: -1,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    });
  }, []);

  return (
    <div className="w-full h-full flex bg-[#FFFFEF] ">
      {/* Left: Glass image + Coffee image */}
      <div className="w-1/2 h-full flex flex-col items-start justify-start">
        <img
          ref={glassRef}
          src={glass}
          alt="glass"
          className="h-[1020x] w-[595.44px] z-10"
        />
        <img
          ref={coffeeRef}
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
          <div className="relative">
            {showEspresso && (
              <img
                src={DRINK_IMAGES.espresso}
                alt="Espresso preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.espresso ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, espresso: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowEspresso(true);
                setImageLoaded(prev => ({ ...prev, espresso: false }));
              }}
              onMouseLeave={() => setShowEspresso(false)}
            >
              Espresso
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Rich, bold, and balanced<br className="-mb-4"/>30ml – €3.50<br/>Double shot available – €4.50</div>
          </div>
          <div className="relative">
            {showAmericano && (
              <img
                src={DRINK_IMAGES.americano}
                alt="Americano preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.americano ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, americano: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowAmericano(true);
                setImageLoaded(prev => ({ ...prev, americano: false }));
              }}
              onMouseLeave={() => setShowAmericano(false)}
            >
              Americano
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Smooth and light, with subtle<br className="-mb-4"/>notes of cocoa<br/>180ml – €4.00</div>
          </div>
          <div className="relative">
            {showCappuccino && (
              <img
                src={DRINK_IMAGES.cappuccino}
                alt="Cappuccino preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.cappuccino ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, cappuccino: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowCappuccino(true);
                setImageLoaded(prev => ({ ...prev, cappuccino: false }));
              }}
              onMouseLeave={() => setShowCappuccino(false)}
            >
              Cappuccino
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Creamy and aromatic with a touch of sweetness<br className="-mb-4"/>150ml – €4.80<br/>Add oat or almond milk – €0.50</div>
          </div>
          <div className="relative">
            {showFlatWhite && (
              <img
                src={DRINK_IMAGES.flatWhite}
                alt="Flat White preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.flatWhite ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, flatWhite: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowFlatWhite(true);
                setImageLoaded(prev => ({ ...prev, flatWhite: false }));
              }}
              onMouseLeave={() => setShowFlatWhite(false)}
            >
              Flat White
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Silky texture with a perfect espresso-to-milk ratio<br className="-mb-4"/>160ml – €5.00</div>
          </div>
          <div className="relative">
            {showLatte && (
              <img
                src={DRINK_IMAGES.latte}
                alt="Latte preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.latte ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, latte: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowLatte(true);
                setImageLoaded(prev => ({ ...prev, latte: false }));
              }}
              onMouseLeave={() => setShowLatte(false)}
            >
              Latte
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Gentle and smooth, hints of caramel and hazelnut<br className="-mb-4"/>250ml – €5.20<br/>Add house-made vanilla or cinnamon syrup – €0.60</div>
          </div>
          <div className="relative">
            {showPourOver && (
              <img
                src={DRINK_IMAGES.pourOver}
                alt="Pour-Over preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.pourOver ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, pourOver: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowPourOver(true);
                setImageLoaded(prev => ({ ...prev, pourOver: false }));
              }}
              onMouseLeave={() => setShowPourOver(false)}
            >
              Pour-Over<br/>(V60 / Chemex)
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Single-origin beans, hand-brewed to highlight origin-specific flavor notes<br className="-mb-4"/>250ml – €6.00<br/>Origin of the day: Ethiopia – floral, citrus, light body</div>
          </div>
          <div className="relative">
            {showColdBrew && (
              <img
                src={DRINK_IMAGES.coldBrew}
                alt="Cold Brew preview"
                loading="lazy"
                className={`absolute -top-[100px] -left-[300px] w-[400px] h-[300px] object-cover z-50 transition-all duration-500 rounded-lg shadow-lg ${!imageLoaded.coldBrew ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, coldBrew: true }))}
              />
            )}
            <div 
              className="text-[40px] text-[#6C584D] -mb-4 cursor-pointer transition-colors duration-300 hover:text-[#8B7355]" 
              style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
              onMouseEnter={() => {
                setShowColdBrew(true);
                setImageLoaded(prev => ({ ...prev, coldBrew: false }));
              }}
              onMouseLeave={() => setShowColdBrew(false)}
            >
              Cold Brew
            </div>
            <div className="text-[#6C584D] text-[24px] -mb-4" style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}>Slow-steeped for 18 hours, low acidity, chocolatey finish<br className="-mb-4"/>300ml – €5.50</div>
          </div>
        </div>
      </div>
    </div>
  );
} 