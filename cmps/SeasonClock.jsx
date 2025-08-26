import { utilService } from '../services/util.service.js';
const { useState, useEffect } = React;

const getSeason = (month) => {
  switch (month) {
    case 'January':
    case 'February':
    case 'December':
      return 'winter';
    case 'March':
    case 'April':
    case 'May':
      return 'spring';
    case 'June':
    case 'July':
    case 'August':
      return 'summer';
    case 'September':
    case 'October':
    case 'November':
      return 'fall';
    default:
      return 'unknown';
  }
};

export function SeasonClock() {
  const [clock, setClock] = useState('00:00 AM');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours === 0 ? 12 : hours;

      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      setClock(`${formattedHours}:${formattedMinutes} ${ampm}`);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  const date = new Date();
  const season = getSeason(utilService.getMonthName(date));
  const month = utilService.getMonthName(date);
  const day = utilService.getDayName(date);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <section
      className={`clock ${season} ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleDarkMode}
    >
      <p>{month}</p>
      <img
        src={`/assets/img/${season}.png`}
        alt={season}
      />
      <p>{day}</p>
      <p>{clock}</p>
    </section>
  );
}
