import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export const StatCard = ({ value, label, suffix = "", prefix = "" }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};
