'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from '@/data/backgroundParticles.json'


export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => particlesConfig,
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // @ts-expect-error god knows why
        options={options}
      />
    );
  }

  return <></>;
};