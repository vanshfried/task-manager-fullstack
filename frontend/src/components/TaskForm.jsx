import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, priority });
    setTitle('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="High">High 🔥</option>
        <option value="Medium">Medium ⚖️</option>
        <option value="Low">Low 🧊</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
