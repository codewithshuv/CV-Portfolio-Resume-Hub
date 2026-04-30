import React from 'react';
import { useResume } from '../../context/ResumeContext';

const FormSkills = () => {
  const { data, updateSkills } = useResume();

  const handleSkillsChange = (e) => {
    // Split by comma and trim
    const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s !== '');
    updateSkills(skillsArray);
  };

  return (
    <div>
      <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
        <div className="form-group">
          <label>Skills (Comma separated)</label>
          <textarea 
            value={data.skills.join(', ')} 
            onChange={handleSkillsChange} 
            className="glass-input" 
            placeholder="e.g. JavaScript, React, Node.js, Project Management, UI/UX Design"
            style={{ minHeight: '150px' }}
          ></textarea>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Enter your skills separated by commas. We will automatically format them for your resume and portfolio.
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Current Skills</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {data.skills.map((skill, idx) => (
            <span key={idx} style={{ 
              background: 'rgba(139, 92, 246, 0.2)', 
              color: 'var(--text-main)', 
              padding: '4px 12px', 
              borderRadius: '20px',
              fontSize: '0.9rem',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              {skill}
            </span>
          ))}
          {data.skills.length === 0 && <span style={{ color: 'var(--text-muted)' }}>No skills added yet.</span>}
        </div>
      </div>
    </div>
  );
};

export default FormSkills;
