import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const FormEducation = () => {
  const { data, addItem, updateItem, removeItem } = useResume();

  const handleAdd = () => {
    addItem('education', {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <div>
      {data.education.map((edu, index) => (
        <div key={edu.id} className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--secondary)' }}>Education #{index + 1}</h4>
            <button onClick={() => removeItem('education', edu.id)} className="btn btn-ghost" style={{ padding: '4px 8px', color: 'var(--accent)' }}>
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="form-group">
            <label>Institution</label>
            <input 
              type="text" 
              value={edu.institution} 
              onChange={(e) => updateItem('education', edu.id, { institution: e.target.value })} 
              className="glass-input" 
              placeholder="e.g. Stanford University" 
            />
          </div>
          <div className="form-group">
            <label>Degree</label>
            <input 
              type="text" 
              value={edu.degree} 
              onChange={(e) => updateItem('education', edu.id, { degree: e.target.value })} 
              className="glass-input" 
              placeholder="e.g. B.S. Computer Science" 
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Start Date</label>
              <input 
                type="month" 
                value={edu.startDate} 
                onChange={(e) => updateItem('education', edu.id, { startDate: e.target.value })} 
                className="glass-input" 
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input 
                type="text" 
                value={edu.endDate} 
                onChange={(e) => updateItem('education', edu.id, { endDate: e.target.value })} 
                className="glass-input" 
                placeholder="e.g. 2024-05" 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description (Optional)</label>
            <textarea 
              value={edu.description} 
              onChange={(e) => updateItem('education', edu.id, { description: e.target.value })} 
              className="glass-input" 
              placeholder="Relevant coursework, honors, etc."
            ></textarea>
          </div>
        </div>
      ))}
      
      <button onClick={handleAdd} className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }}>
        <Plus size={18} /> Add Education
      </button>
    </div>
  );
};

export default FormEducation;
