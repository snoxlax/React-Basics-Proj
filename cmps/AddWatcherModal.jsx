const { useState } = React;

export function AddWatcherModal({ onAdd, onCancel }) {
  const [fullname, setFullname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname.trim()) {
      onAdd(fullname.trim());
      setFullname('');
    }
  };

  const handleCancel = () => {
    setFullname('');
    onCancel();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add New Watcher</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullname">Full Name:</label>
            <input
              id="fullname"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter watcher name"
              autoFocus
            />
          </div>
          <div className="modal-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!fullname.trim()}
            >
              Add Watcher
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
