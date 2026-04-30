import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Monitor, Sparkles, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="page-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Top Navbar / Logo area for professional look */}
      <nav style={{ position: 'absolute', top: '2rem', left: '2rem', right: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: '700', fontSize: '1.25rem', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="var(--primary)" strokeWidth="2.5" />
            <rect x="11" y="11" width="18" height="18" rx="4" fill="var(--primary)" />
            <path d="M16 16L20 24L24 16Z" fill="white" />
          </svg>
          CV & Resume Portfolio Hub
        </div>
        <div>
          <Link to="/builder" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            Open Builder
          </Link>
        </div>
      </nav>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ textAlign: 'center', maxWidth: '850px', margin: '4rem auto 0' }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <span style={{ background: '#FFF7ED', color: 'var(--primary)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #FFEDD5' }}>
            Build your professional identity
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--secondary)', letterSpacing: '-0.02em', fontWeight: '700' }}>
          Build your CV & Resume <br/>
          <span style={{ color: 'var(--primary)' }}>and instant Portfolio.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          A minimal, professional builder that transforms your data into elegant CVs, Resumes, and personal portfolio websites instantly.
        </motion.p>
        
        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/builder" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 36px', borderRadius: '50px' }}>
            Start Building <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        id="features"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
      >
        <FeatureCard 
          icon={<FileText size={28} color="var(--primary)" />}
          title="Elegant Templates"
          desc="Choose from meticulously crafted templates designed for readability and professional appeal."
        />
        <FeatureCard 
          icon={<Monitor size={28} color="var(--primary)" />}
          title="Instant Portfolio"
          desc="Automatically generate a clean, responsive website to showcase your work online."
        />
        <FeatureCard 
          icon={<Sparkles size={28} color="var(--primary)" />}
          title="AI-Assisted Writing"
          desc="Enhance your phrasing and bullet points with intelligent suggestions tailored to your industry."
        />
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', background: 'white', border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
    whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.05)' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '12px', background: '#FFF7ED', borderRadius: '12px' }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '600' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>{desc}</p>
  </motion.div>
);

export default LandingPage;
