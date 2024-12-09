import React, { useState, useEffect } from "react";

function  Countdown () {
  const targetDate = new Date("2025-03-15T00:00:00").getTime();
  // const targetDate = new Date("2024-12-09T15:55:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const targetDate = '2024-12-31T23:59:59';
  
  // Función para calcular el tiempo restante
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpieza al desmontar el componente
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-4xl font-cinzelDecorative font-normal animate__animated animate__zoomIn animate__slower">
      {timeLeft.days !== 0 &&
        timeLeft.hours !== 0 &&
        timeLeft.minutes !== 0 &&
        timeLeft.seconds !== 0 && (
          <h2>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </h2>
        )}
      {/* <h2>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h2> */}
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && (
          <h3>¡Nos vemos pronto en la celebración!</h3>
        )}
    </div>
  );
};

export default Countdown;