'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { fadeInUp } from '@/lib/animations';

const stats = [
  { value: 100, suffix: '+', label: 'Ativos listados' },
  { value: 170, suffix: '+', label: 'Clientes satisfeitos' },
  { value: 100, suffix: '%', label: 'Transparência nas operações' },
  { value: 24, suffix: '/7', label: 'Monitoramento ativo' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-brand-blue overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-gold/10" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-brand-blue-light md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
