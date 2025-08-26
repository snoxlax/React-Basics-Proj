const { useState, useEffect } = React;
import { AddWatcherModal } from './AddWatcherModal.jsx';
import { utilService } from '../services/util.service.js';

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    async function loadWatchers() {
      const data = await utilService.watcherService();
      setWatchers(data);
    }
    loadWatchers();
  }, []);

  const handleAddWatcher = (fullname) => {
    const newWatcher = {
      id: 'w' + Math.floor(Math.random() * 1000),
      fullname,
      movies: [],
    };
    setWatchers((prev) => [...prev, newWatcher]);
    setShowAddModal(false);
  };

  const removeWatcher = (id) => {
    setWatchers((prev) => prev.filter((w) => w.id !== id));
    if (selectedWatcher && selectedWatcher.id === id) setSelectedWatcher(null);
  };

  const avatarColors = ['purple', 'blue', 'green'];

  return (
    <div className="watcher-app">
      <div className="watcher-app-main">
        <h2>Watcher App</h2>
        <button
          className="add-watcher-btn"
          onClick={() => setShowAddModal(true)}
        >
          Add Watcher
        </button>

        <div className="watchers-grid">
          {watchers.map((watcher, index) => (
            <div
              key={watcher.id}
              className="watcher-card"
            >
              <div className={`watcher-avatar ${avatarColors[index % 3]}`}>
                😎
              </div>
              <div className="watcher-name">{watcher.fullname}</div>
              <div className="watcher-actions">
                <button
                  className="watcher-btn remove"
                  onClick={() => removeWatcher(watcher.id)}
                >
                  x
                </button>
                <button
                  className="watcher-btn"
                  onClick={() => setSelectedWatcher(watcher)}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWatcher && (
        <div className="watcher-modal">
          <h3>{selectedWatcher.fullname}</h3>
          <ul>
            {selectedWatcher.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
          <button
            className="close-btn"
            onClick={() => setSelectedWatcher(null)}
          >
            Close
          </button>
        </div>
      )}

      {showAddModal && (
        <AddWatcherModal
          onAdd={handleAddWatcher}
          onCancel={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}
