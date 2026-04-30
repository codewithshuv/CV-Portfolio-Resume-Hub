import React from 'react';
import { useResume } from '../../context/ResumeContext';

const FormPersonal = () => {
  const { data, updatePersonalInfo } = useResume();
  const { personalInfo } = data;

  const handleChange = (e) => {
    updatePersonalInfo(e.target.name, e.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label>Full Name</label>
        <input 
          type="text" 
          name="name" 
          value={personalInfo.name} 
          onChange={handleChange} 
          className="glass-input" 
          placeholder="e.g. Jane Doe" 
        />
      </div>
      <div className="form-group">
        <label>Professional Role</label>
        <input 
          type="text" 
          name="role" 
          value={personalInfo.role} 
          onChange={handleChange} 
          className="glass-input" 
          placeholder="e.g. Full Stack Developer" 
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={personalInfo.email} 
            onChange={handleChange} 
            className="glass-input" 
            placeholder="e.g. jane@example.com" 
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input 
            type="tel" 
            name="phone" 
            value={personalInfo.phone} 
            onChange={handleChange} 
            className="glass-input" 
            placeholder="e.g. +1 234 567 890" 
          />
        </div>
      </div>
      <div className="form-group">
        <label>Website / Portfolio link</label>
        <input 
          type="text" 
          name="website" 
          value={personalInfo.website} 
          onChange={handleChange} 
          className="glass-input" 
          placeholder="e.g. github.com/janedoe" 
        />
      </div>
      <div className="form-group">
        <label>Professional Summary</label>
        <textarea 
          name="summary" 
          value={personalInfo.summary} 
          onChange={handleChange} 
          className="glass-input" 
          placeholder="A brief summary of your professional background and goals..."
        ></textarea>
      </div>
    </div>
  );
};

export default FormPersonal;
