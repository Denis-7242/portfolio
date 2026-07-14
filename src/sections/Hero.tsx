"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DesignBadge } from "@/components/ui/DesignBadge";

/* -----------------------------------------------------------------------------
 * CANVAS PIXEL PHYSICS ENGINE
 * -------------------------------------------------------------------------- */

type Pixel = {
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInt: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;
  draw: () => void;
  appear: () => void;
  disappear: () => void;
  shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  color: string,
  baseSpeed: number,
  delay: number
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  return {
    x, y, color, ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0,
    sizeStep: rand(0.12, 0.28),
    minSize: 0.5,
    maxSizeInt: 2,
    maxSize: rand(0.5, 2),
    delay,
    counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false,
    isReverse: false,
    isShimmer: false,
    draw() {
      const offset = this.maxSizeInt * 0.5 - this.size * 0.5;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x + offset, this.y + offset, this.size, this.size);
    },
    appear() {
      this.isIdle = false;
      if (this.counter <= this.delay) {
        this.counter += this.counterStep;
        return;
      }
      if (this.size >= this.maxSize) this.isShimmer = true;
      if (this.isShimmer) this.shimmer();
      else this.size += this.sizeStep;
      this.draw();
    },
    disappear() {
      this.isShimmer = false;
      this.counter = 0;
      if (this.size <= 0) {
        this.isIdle = true;
        return;
      }
      this.size -= 0.1;
      this.draw();
    },
    shimmer() {
      if (this.size >= this.maxSize) this.isReverse = true;
      else if (this.size <= this.minSize) this.isReverse = false;
      if (this.isReverse) this.size -= this.speed;
      else this.size += this.speed;
    },
  };
}

function PixelCanvas({ colors, gap = 6, speed = 30 }: { colors: string[], gap?: number, speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const lastFrameRef = useRef(performance.now());

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width);
    const h = Math.floor(height);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const effectiveSpeed = Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];
    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2;
        const dy = y - h / 2;
        const delay = Math.sqrt(dx * dx + dy * dy) * 0.65;
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animationRef.current);
    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);
      const now = performance.now();
      if (now - lastFrameRef.current < 1000 / 60) return;
      lastFrameRef.current = now;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const pixel of pixelsRef.current) pixel[mode]();
      if (pixelsRef.current.every((p) => p.isIdle)) cancelAnimationFrame(animationRef.current);
    };
    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    init();
    const resizeObserver = new ResizeObserver(() => init());
    if (wrapRef.current) resizeObserver.observe(wrapRef.current);
    animate("appear");
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * HERO SECTION
 * -------------------------------------------------------------------------- */

const TECH_STACK = [
  "Next.js", "React", "Node.js", "Flutter", "Kotlin", "MySQL", "Cybersecurity"
];

const Hero = () => {
  const [themeColors, setThemeColors] = useState<string[]>([]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.className = "text-slate-500";
    const muted = getComputedStyle(div).color;
    div.className = "text-blue-500";
    const primary = getComputedStyle(div).color;
    document.body.removeChild(div);
    setThemeColors([muted, muted, muted, muted, primary]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep text-white">
      {/* Pixel Physics Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        {themeColors.length > 0 && <PixelCanvas colors={themeColors} gap={8} speed={30} />}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg-deep)_100%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Profile Image with Precision Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative mb-8 group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-electric to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src="/assets/pic1.jpeg"
                alt="Denis Murithi"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Technical Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <DesignBadge variant="accent" className="px-4 py-1.5 text-[10px]">
              Available for New Opportunities
            </DesignBadge>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight mt-6">
            Denis <span className="bg-gradient-to-r from-accent-electric via-blue-500 to-blue-700 bg-clip-text text-transparent">Murithi</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Full Stack Developer <span className="text-accent-electric mx-1">|</span> Android Developer <span className="text-accent-electric mx-1">|</span> Cybersecurity Engineer
            <span className="block mt-4 text-slate-500 text-base md:text-lg italic font-normal">
              Building secure, scalable systems and intelligent applications.
            </span>
          </motion.p>

          {/* Tech Stack - Refined DesignBadges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {TECH_STACK.map((tech) => (
              <DesignBadge key={tech} variant="primary">
                {tech}
              </DesignBadge>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="group px-8 py-4 bg-accent-electric hover:bg-blue-400 text-bg-deep rounded-xl shadow-lg shadow-accent-electric/20 transition-all duration-300"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
