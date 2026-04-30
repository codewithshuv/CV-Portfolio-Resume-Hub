import React from 'react';
import { motion } from 'framer-motion';
import { useResume } from '../context/ResumeContext';
import { Mail, Phone, Globe, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const { data } = useResume();
  const { personalInfo, experience, education, skills, projects } = data;

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-main)', paddingBottom: '4rem', fontFamily: 'var(--font-main)' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(253, 251, 247, 0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--secondary)' }}>
          {personalInfo.name ? `${personalInfo.name.split(' ')[0]}'s Portfolio` : 'Portfolio'}
        </h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem', display: window.innerWidth > 768 ? 'flex' : 'none' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem' }}>About</a>
            <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem' }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem' }}>Projects</a>
          </div>
          <Link to="/builder" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem', background: 'white' }}>
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </nav>

      <div className="page-container" style={{ maxWidth: '900px' }}>
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '6rem', paddingTop: '4rem' }}
        >
          <motion.h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--secondary)' }}>
            Hi, I'm <span style={{ color: 'var(--primary)' }}>{personalInfo.name || 'Anonymous'}</span>.
          </motion.h1>
          <motion.h2 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: '500' }}>
            {personalInfo.role || 'Professional'}
          </motion.h2>
          <motion.p style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '3.5rem' }}>
            {personalInfo.summary || 'Welcome to my portfolio! Fill out the form in the builder to populate this section with your professional summary.'}
          </motion.p>
          
          <motion.div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1.05rem' }}>
                <Mail size={18} /> Contact Me
              </a>
            )}
            {personalInfo.website && (
              <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '14px 28px', fontSize: '1.05rem', background: 'white' }}>
                <Globe size={18} /> View Website
              </a>
            )}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        {skills.length > 0 && (
          <motion.section 
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            style={{ marginBottom: '6rem' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--secondary)', fontWeight: '700', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', fontWeight: '500', color: 'var(--secondary)' }}
                  whileHover={{ y: -2, borderColor: 'var(--primary)', color: 'var(--primary)' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <motion.section 
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            style={{ marginBottom: '6rem' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--secondary)', fontWeight: '700', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {experience.map((exp, idx) => (
                <div key={exp.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.4rem', color: 'var(--secondary)', fontWeight: '600' }}>{exp.position}</h4>
                    <span style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '0.95rem' }}>
                      {exp.startDate} {exp.startDate && exp.endDate && '—'} {exp.endDate}
                    </span>
                  </div>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '0.5rem' }}>{exp.company}</h5>
                  <p style={{ color: 'var(--text-main)', lineHeight: '1.7' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <motion.section 
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            style={{ marginBottom: '6rem' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--secondary)', fontWeight: '700', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Projects</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {projects.map(proj => (
                <motion.div 
                  key={proj.id} 
                  style={{ padding: '2rem', background: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'box-shadow 0.3s ease' }}
                  whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.05)', translateY: -5 }}
                >
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--secondary)', fontWeight: '600' }}>{proj.title}</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{proj.description}</p>
                  </div>
                  {proj.link && (
                    <a href={`https://${proj.link.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
        
        {/* Education Section */}
        {education.length > 0 && (
          <motion.section 
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            style={{ marginBottom: '4rem' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--secondary)', fontWeight: '700', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {education.map(edu => (
                <div key={edu.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: '600' }}>{edu.institution}</h4>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{edu.startDate} {edu.startDate && edu.endDate && '—'} {edu.endDate}</span>
                  </div>
                  <h5 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '500', marginBottom: '0.25rem' }}>{edu.degree}</h5>
                  {edu.description && <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{edu.description}</p>}
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
};

export default PortfolioPage;
