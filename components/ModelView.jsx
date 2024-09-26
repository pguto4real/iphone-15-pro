"use client";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useEffect } from "react";
import Lights from "./Lights";
import Loader from "./Loader";
import IPhone from "./IPhone";

const ModelView = ({ index, groupRef, controlRef, setRotationState, item, size }) => {
  useEffect(() => {
    if (controlRef.current) {
      controlRef.current.target = new THREE.Vector3(0, 0, 0);
    }
  }, [controlRef]);

  return (
    <View
      index={index}
      id={`view${index}`}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      {/* OrbitControls */}
      <OrbitControls
        ref={controlRef}
        enableZoom={true}
        enablePan={true}
        rotateSpeed={0.4}
        zoomSpeed={0.8}
        panSpeed={0.5}
        onEnd={() => {
          if (controlRef.current) {
            setRotationState(controlRef.current.getAzimuthalAngle());
          }
        }}
      />

      <group ref={groupRef} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
