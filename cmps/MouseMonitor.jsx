const { useState, useEffect } = React;

export function MouseMonitor() {
  const [monitor, setMonitor] = useState({
    isOn: true,
    pos: { x: 0, y: 0 },
  });

  useEffect(() => {
    if (!monitor.isOn) return;

    const updatePos = (e) => {
      setMonitor((prev) => ({
        ...prev,
        pos: { x: e.clientX, y: e.clientY },
      }));
    };

    window.addEventListener('mousemove', updatePos);

    return () => window.removeEventListener('mousemove', updatePos);
  }, [monitor.isOn]);

  const toggleMonitor = () => {
    setMonitor((prev) => ({ ...prev, isOn: !prev.isOn }));
  };

  return (
    <div className="mouse-monitor">
      <h2>Mouse Monitor</h2>
      <p>X: {monitor.pos.x}</p>
      <p>Y: {monitor.pos.y}</p>
      <button onClick={toggleMonitor}>
        {monitor.isOn ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}
