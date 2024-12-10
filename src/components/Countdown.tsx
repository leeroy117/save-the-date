import React, { useState, useEffect } from "react";
import Digit from "./Digit";

function Countdown() {
  const targetDate = new Date("2025-03-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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

  // Función para añadir ceros al inicio de los números (si son menores de 10)
  function formatWithTwoDigits(number:number) {
    return String(number).padStart(2, "0");
  }

  return (
    <div className="text-4xl font-cinzelDecorative font-normal animate__animated animate__zoomIn animate__slower">
      {timeLeft.days !== 0 ||
      timeLeft.hours !== 0 ||
      timeLeft.minutes !== 0 ||
      timeLeft.seconds !== 0 ? (
        <div className="w-full flex flex-row justify-center items-center gap-4">

          <div className="flex flex-col justify-center items-center">
            {/* <div className="w-fit bg-slate-400 p-1 rounded-lg shadow-lg">
              {formatWithTwoDigits(timeLeft.days)}
            </div> */}
            <div className="flex flex-row gap-1">
              {formatWithTwoDigits(timeLeft.days)
                .split('').map(x => (<Digit digit={x} />))}

            </div>
            <h4 className="text-xl font-semibold">Días</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* <div className="w-fit bg-slate-400 p-1 rounded-lg shadow-lg"> */}
            <div className="flex flex-row gap-1">
              {formatWithTwoDigits(timeLeft.hours)
                .split('').map(x => (<Digit digit={x} />))}

            </div>
            {/* </div> */}
            <h4 className="text-xl font-semibold">Horas</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* <div className="w-fit bg-slate-400 p-1 rounded-lg shadow-lg">
              {formatWithTwoDigits(timeLeft.minutes)}
            </div> */}
            <div className="flex flex-row gap-2">
              {formatWithTwoDigits(timeLeft.minutes)
                .split('').map(x => (<Digit digit={x} />))}

            </div>
            <h4 className="text-xl font-semibold">Min</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* <div className="w-fit bg-slate-400 p-1 rounded-lg shadow-lg">
              {formatWithTwoDigits(timeLeft.minutes)}
            </div> */}
            <div className="flex flex-row gap-2">
              {formatWithTwoDigits(timeLeft.seconds)
                .split('').map(x => (<Digit digit={x} />))}

            </div>
            <h4 className="text-xl font-semibold">Seg</h4>
          </div>

          {/* <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-2">
              {formatWithTwoDigits(timeLeft.seconds)
                .split('').map(x => (<div className="w-fit bg-slate-400 p-1 rounded-lg shadow-lg">{x} </div>))}

            </div>
            <h4 className="text-xl font-semibold">Segundos</h4>
          </div> */}
        </div>
      ) : (
        <h3>¡Nos vemos pronto en la celebración!</h3>
      )}
    </div>
  );
}

export default Countdown;
