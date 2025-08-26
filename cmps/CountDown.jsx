import { utilService } from '../services/util.service.js';
const { useState, useEffect } = React;

export function CountDown({ toTime, startFrom, onDone }) {
  const [countDown, setCountDown] = useState(
    toTime ? Math.ceil((toTime - Date.now()) / 1000) : startFrom
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toTime) {
        const remaining = Math.ceil((toTime - Date.now()) / 1000);
        if (remaining <= 0) {
          setCountDown(0);
          clearInterval(interval);
        } else {
          setCountDown(remaining);
        }
      } else {
        setCountDown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [toTime]);

  if (countDown === 0) onDone();

  const isUrgent = countDown <= 6 && countDown > 0;

  return (
    <div className={`countdown ${isUrgent ? 'urgent' : ''}`}>
      <span className="countdown-number">
        {utilService.formatTime(countDown)}
      </span>
    </div>
  );
}
