import { useEffect, useRef, useState } from "react";

interface IProps {
  targetNumber: number;
  duration: number;
}

export const AnimatedNumber = ({ targetNumber, duration = 1000 }: IProps) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    const animate = (timestamp: any) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current!;

      const increment = Math.floor((progress / duration) * targetNumber);
      setCurrentNumber(Math.min(increment, targetNumber));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber, duration]);

  return <span>{currentNumber}</span>;
};
