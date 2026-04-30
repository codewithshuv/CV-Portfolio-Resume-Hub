import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const FormExperience = () => {
  const { data, addItem, updateItem, removeItem } = useResume();

  const handleAdd = () => {
    addItem('experience', {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <div>
      {data.experience.map((exp, index) => (
        <div key={exp.id} className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--primary)' }}>Experience #{index + 1}</h4>
            <button onClick={() => removeItem('experience', exp.id)} className="btn btn-ghost" style={{ padding: '4px 8px', color: 'var(--accent)' }}>
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="form-group">
            <label>Company</label>
            <input 
              type="text" 
              value={exp.company} 
              onChange={(e) => updateItem('experience', exp.id, { company: e.target.value })} 
              className="glass-input" 
              placeholder="e.g. Google" 
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input 
              type="text" 
              value={exp.position} 
              onChange={(e) => updateItem('experience', exp.id, { position: e.target.value })} 
              className="glass-input" 
              placeholder="e.g. Software Engineer" 
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Start Date</label>
              <input 
                type="month" 
                value={exp.startDate} 
                onChange={(e) => updateItem('experience', exp.id, { startDate: e.target.value })} 
                className="glass-input" 
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input 
                type="text" 
                value={exp.endDate} 
                onChange={(e) => updateItem('experience', exp.id, { endDate: e.target.value })} 
                className="glass-input" 
                placeholder="e.g. Present or 2023-12" 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description (Responsibilities / Achievements)</label>
            <textarea 
              value={exp.description} 
              onChange={(e) => updateItem('experience', exp.id, { description: e.target.value })} 
              className="glass-input" 
              placeholder="Describe your role..."
            ></textarea>
          </div>
        </div>
      ))}
      
      <button onClick={handleAdd} className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }}>
        <Plus size={18} /> Add Experience
      </button>
    </div>
  );
};

export default FormExperience;
