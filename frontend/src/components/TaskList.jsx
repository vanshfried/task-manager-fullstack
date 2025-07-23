import React from 'react';

export default function TaskList({ tasks, onToggle, onDelete }) {
  const groupByPriority = ['High', 'Medium', 'Low'];
  const priorityColors = {
    High: '#ff4d4f',
    Medium: '#faad14',
    Low: '#1890ff',
  };

  if (!tasks || tasks.length === 0) {
    return <p style={{ textAlign: 'center', fontStyle: 'italic' }}>No tasks yet. Add one above.</p>;
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      {groupByPriority.map((level) => {
        const levelTasks = tasks.filter((task) => task.priority === level);

        if (levelTasks.length === 0) return null;

        return (
          <div key={level} style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: priorityColors[level] }}>{level} Priority</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {levelTasks.map((task) => (
                <li
                  key={task._id}
                  style={{
                    background: '#f9f9f9',
                    padding: '0.75rem 1rem',
                    marginBottom: '0.5rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <span
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                      color: task.completed ? '#999' : '#333',
                      flexGrow: 1,
                      marginRight: '1rem',
                    }}
                  >
                    {task.title}
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => onToggle(task._id)}
                      style={{
                        background: task.completed ? '#fadb14' : '#52c41a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.3rem 0.7rem',
                        cursor: 'pointer',
                      }}
                    >
                      {task.completed ? 'Undo' : 'Done'}
                    </button>
                    <button
                      onClick={() => onDelete(task._id)}
                      style={{
                        background: '#ff4d4f',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.3rem 0.7rem',
                        cursor: 'pointer',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
