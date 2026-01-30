import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  MeshTransmissionMaterial, 
  PerspectiveCamera,
  ContactShadows,
} from '@react-three/drei';

const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const Group = 'group' as any;
const PointLight = 'pointLight' as any;
const AmbientLight = 'ambientLight' as any;
const SpotLight = 'spotLight' as any;
const Fog = 'fog' as any;

const FloatingElements = () => {
  // Reduced count for better performance
  const count = 10; 
  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: 0.5 + Math.random() * 1.0,
      speed: 0.1 + Math.random() * 0.2,
      isWireframe: Math.random() > 0.6
    }));
  }, []);

  return (
    <Group>
      {elements.map((props, i) => (
        <Float key={i} speed={props.speed} rotationIntensity={1} floatIntensity={0.5}>
          <Mesh position={props.position} rotation={props.rotation} scale={props.scale}>
            <BoxGeometry args={[1, 1, 1]} />
            {props.isWireframe ? (
              <MeshBasicMaterial wireframe color="#3b82f6" transparent opacity={0.1} />
            ) : (
              <MeshTransmissionMaterial 
                backside 
                samples={2} // Reduced samples from 4 to 2
                thickness={0.5} 
                chromaticAberration={0.02} 
                anisotropy={0.1} 
                distortion={0} // Disabled distortion for perf
                color="#3b82f6" 
                transparent
                opacity={0.2}
              />
            )}
          </Mesh>
        </Float>
      ))}
    </Group>
  );
};

const Lights = () => {
  return (
    <>
      <AmbientLight intensity={0.1} />
      <PointLight position={[0, 0, 2]} intensity={5} color="#3b82f6" />
      <SpotLight 
        position={[5, 5, 5]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        color="#ffffff" 
      />
    </>
  );
};

const ThreeScene: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas 
        shadows={false} // Disable shadows for significant performance gain
        dpr={[1, 1.5]} // Limit pixel ratio to 1.5
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        
        <Lights />
        <FloatingElements />
        
        <Environment preset="night" />
        <Fog attach="fog" args={['#000000', 8, 20]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;