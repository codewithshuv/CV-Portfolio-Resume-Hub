import React from 'react';
import { useResume } from '../context/ResumeContext';

const ResumePreview = () => {
  const { data } = useResume();
  const { personalInfo, experience, education, skills, projects, selectedTemplate } = data;

  // Template Styles
  const styles = {
    modern: {
      fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      headerAlign: 'left',
      primaryColor: '#3b82f6', // blue
      secondaryColor: '#111827', // dark gray
      headerBorder: 'none',
      headerBg: '#f3f4f6',
      sectionTitleBorder: '2px solid #3b82f6',
      headerPadding: '30px'
    },
    minimal: {
      fontFamily: "'Georgia', serif",
      headerAlign: 'center',
      primaryColor: '#000000',
      secondaryColor: '#4b5563',
      headerBorder: '1px solid #e5e7eb',
      headerBg: '#ffffff',
      sectionTitleBorder: '1px solid #000000',
      headerPadding: '20px'
    },
    creative: {
      fontFamily: "'Outfit', sans-serif",
      headerAlign: 'center',
      primaryColor: '#8b5cf6', // violet
      secondaryColor: '#0f172a',
      headerBorder: 'none',
      headerBg: 'linear-gradient(135deg, #f3e8ff, #e0e7ff)',
      sectionTitleBorder: '3px solid #8b5cf6',
      headerPadding: '30px'
    }
  };

  const currentStyle = styles[selectedTemplate] || styles.modern;

  return (
    <div style={{
      fontFamily: currentStyle.fontFamily,
      color: '#1a1a1a',
      padding: '40px',
      lineHeight: '1.5',
      fontSize: '11pt'
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: currentStyle.headerAlign, 
        marginBottom: '25px', 
        borderBottom: currentStyle.headerBorder, 
        background: currentStyle.headerBg,
        padding: currentStyle.headerPadding,
        borderRadius: '8px'
      }}>
        <h1 style={{ fontSize: '26pt', margin: '0 0 5px 0', color: currentStyle.secondaryColor, fontWeight: '700', letterSpacing: '-0.5px' }}>
          {personalInfo.name || 'Your Name'}
        </h1>
        <h2 style={{ fontSize: '15pt', margin: '0 0 10px 0', color: currentStyle.primaryColor, fontWeight: '500' }}>
          {personalInfo.role || 'Your Role'}
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: currentStyle.headerAlign === 'center' ? 'center' : 'flex-start', 
          gap: '15px', 
          flexWrap: 'wrap', 
          fontSize: '9.5pt', 
          color: '#4b5563' 
        }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.website && <span>|</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: 0, textAlign: 'justify' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '13pt', 
            color: currentStyle.secondaryColor, 
            borderBottom: currentStyle.sectionTitleBorder, 
            paddingBottom: '4px', 
            marginBottom: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            Experience
          </h3>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '11pt', color: currentStyle.secondaryColor }}>{exp.position}</span>
                <span style={{ fontSize: '9.5pt', color: currentStyle.primaryColor, fontWeight: '500' }}>
                  {exp.startDate} {exp.startDate && exp.endDate && ' - '} {exp.endDate}
                </span>
              </div>
              <div style={{ fontSize: '10.5pt', color: '#374151', fontStyle: 'italic', marginBottom: '6px' }}>
                {exp.company}
              </div>
              <div style={{ fontSize: '10pt', textAlign: 'justify' }}>
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '13pt', 
            color: currentStyle.secondaryColor, 
            borderBottom: currentStyle.sectionTitleBorder, 
            paddingBottom: '4px', 
            marginBottom: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            Projects
          </h3>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '11pt' }}>{proj.title}</span>
                <span style={{ fontSize: '9.5pt', color: currentStyle.primaryColor }}>{proj.link}</span>
              </div>
              <div style={{ fontSize: '10pt', textAlign: 'justify' }}>
                {proj.description}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '13pt', 
            color: currentStyle.secondaryColor, 
            borderBottom: currentStyle.sectionTitleBorder, 
            paddingBottom: '4px', 
            marginBottom: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            Education
          </h3>
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '11pt' }}>{edu.institution}</span>
                <span style={{ fontSize: '9.5pt', color: currentStyle.primaryColor }}>
                  {edu.startDate} {edu.startDate && edu.endDate && ' - '} {edu.endDate}
                </span>
              </div>
              <div style={{ fontSize: '10.5pt', color: '#374151', marginBottom: '4px' }}>
                {edu.degree}
              </div>
              {edu.description && (
                <div style={{ fontSize: '10pt', color: '#4b5563' }}>
                  {edu.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '13pt', 
            color: currentStyle.secondaryColor, 
            borderBottom: currentStyle.sectionTitleBorder, 
            paddingBottom: '4px', 
            marginBottom: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            Skills
          </h3>
          <div style={{ fontSize: '10pt', lineHeight: '1.6' }}>
            {skills.join(' • ')}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
