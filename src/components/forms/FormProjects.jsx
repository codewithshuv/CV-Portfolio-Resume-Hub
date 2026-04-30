import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const FormProjects = () => {
  const { data, addItem, updateItem, removeItem } = useResume();

  const handleAdd = () => {
    addItem('projects', {
      title: '',
      link: '',
      description: ''
    });
  };

  return (
    <div>
      {data.projects.map((proj, index) => (
        <div key={proj.id} className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--accent)' }}>Project #{index + 1}</h4>
            <button onClick={() => removeItem('projects', proj.id)} className="btn btn-ghost" style={{ padding: '4px 8px', color: 'var(--accent)' }}>
              <Trash2 size={18} />
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Project Title</label>
              <input 
                type="text" 
                value={proj.title} 
                onChange={(e) => updateItem('projects', proj.id, { title: e.target.value })} 
                className="glass-input" 
                placeholder="e.g. E-Commerce Platform" 
              />
            </div>
            <div className="form-group">
              <label>Link / URL</label>
              <input 
                type="text" 
                value={proj.link} 
                onChange={(e) => updateItem('projects', proj.id, { link: e.target.value })} 
                className="glass-input" 
                placeholder="e.g. github.com/user/repo" 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={proj.description} 
              onChange={(e) => updateItem('projects', proj.id, { description: e.target.value })} 
              className="glass-input" 
              placeholder="What did you build and which technologies did you use?"
            ></textarea>
          </div>
        </div>
      ))}
      
      <button onClick={handleAdd} className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }}>
        <Plus size={18} /> Add Project
      </button>
    </div>
  );
};

export default FormProjects;
