import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { Suspense, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Object3D } from 'three';

interface ProductProps {
  modelPath: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  isHovered: boolean;
}

interface ProductVignetteProps {
  title: string;
  description: string;
  price: string;
  modelPath: string;
}

// Préchargement du modèle
useGLTF.preload('/models/tablier.glb');

// Composant pour la scène 3D
function Scene({ modelPath, isHovered }: { modelPath: string; isHovered: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Product
        modelPath={modelPath}
        position={[0, -2, 0]}
        rotation={[0, Math.PI / 12, 0]}
        scale={2}
        isHovered={isHovered}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Composant pour un produit 3D
function Product({ modelPath, position, rotation = [0, 0, 0], scale = 1, isHovered }: ProductProps) {
  const gltf = useGLTF(modelPath);
  const modelRef = useRef<Object3D>(null!);

  useEffect(() => {
    if (!modelRef.current) return;

    if (isHovered) {
      gsap.to(modelRef.current.rotation, {
        y: rotation[1] + Math.PI * 2,
        duration: 8,
        ease: "none",
        repeat: -1
      });
      gsap.to(modelRef.current.scale, {
        x: scale * 1.1,
        y: scale * 1.1,
        z: scale * 1.1,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.killTweensOf(modelRef.current.rotation);
      gsap.to(modelRef.current.rotation, {
        y: rotation[1],
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(modelRef.current.scale, {
        x: scale,
        y: scale,
        z: scale,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [isHovered, rotation, scale]);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

// Composant pour une vignette de produit
function ProductVignette({ title, description, price, modelPath }: ProductVignetteProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-[400px] h-[500px] bg-[#FFFFEF] rounded-lg shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[350px] relative bg-[#F4EBE2]">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <Scene modelPath={modelPath} isHovered={isHovered} />
          </Suspense>
        </Canvas>
      </div>
      <div className="p-6">
        <h3 
          className="text-[32px] text-[#6C584D] mb-2"
          style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
        >
          {title}
        </h3>
        <p 
          className="text-[#6C584D] text-[18px] mb-2"
          style={{fontFamily: 'DinaChaumont Text', fontWeight: 400}}
        >
          {description}
        </p>
        <p 
          className="text-[#6C584D] text-[24px]"
          style={{fontFamily: 'DinaChaumont Text', fontWeight: 800}}
        >
          €{price}
        </p>
      </div>
    </div>
  );
}

const PRODUCTS = [
  {
    title: "Pure Coffee Apron",
    description: "Premium cotton apron with adjustable straps",
    price: "34.90",
    modelPath: "/models/tablier.glb",
  },
  {
    title: "Pure Coffee Apron",
    description: "Premium cotton apron with adjustable straps",
    price: "34.90",
    modelPath: "/models/tablier.glb",
  },
  {
    title: "Pure Coffee Apron",
    description: "Premium cotton apron with adjustable straps",
    price: "34.90",
    modelPath: "/models/tablier.glb",
  },
];

export default function MerchShowcase() {
  return (
    <div className="w-full h-screen bg-[#FFFFEF] flex flex-col items-center justify-center">
      {/* Titre */}
      <div 
        className="text-center mb-16"
        style={{
          fontFamily: 'DinaChaumont',
          fontWeight: 800,
          fontSize: '64px',
          lineHeight: '60px',
          color: '#6C584D',
        }}
      >
        <div>Exclusive</div>
        <div>Merchandise</div>
      </div>

      {/* Conteneur des vignettes */}
      <div className="flex gap-8 justify-center items-center">
        {PRODUCTS.map((product, index) => (
          <ProductVignette
            key={index}
            {...product}
          />
        ))}
      </div>
    </div>
  );
} 