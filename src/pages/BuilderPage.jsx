import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useResume } from '../context/ResumeContext';
import { User, Briefcase, GraduationCap, Code, Layout, Award, Zap, Download, Eye, Wand2, Palette } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
import ResumePreview from '../components/ResumePreview';
import FormPersonal from '../components/forms/FormPersonal';
import FormExperience from '../components/forms/FormExperience';
import FormEducation from '../components/forms/FormEducation';
import FormSkills from '../components/forms/FormSkills';
import FormProjects from '../components/forms/FormProjects';

const steps = [
  { id: 'personal', title: 'Personal Info', icon: User, component: FormPersonal },
  { id: 'experience', title: 'Experience', icon: Briefcase, component: FormExperience },
  { id: 'education', title: 'Education', icon: GraduationCap, component: FormEducation },
  { id: 'skills', title: 'Skills', icon: Zap, component: FormSkills },
  { id: 'projects', title: 'Projects', icon: Code, component: FormProjects }
];

const BuilderPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const { data, loadDummyData, setTemplate } = useResume();
  const navigate = useNavigate();

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    const element = document.getElementById('resume-preview-content');
    if (element) {
      try {
        const canvas = await html2canvas(element, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
      } catch (err) {
        console.error('Failed to generate PDF', err);
      }
    }
    setIsGenerating(false);
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  const ActiveComponent = steps[activeStep].component;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-main)' }}>
      {/* Left Column: Form Builder */}
      <div style={{ width: '45%', display: 'flex', flexDirection: 'column', background: 'var(--bg-card)', borderRight: '1px solid var(--border-color)', zIndex: 10 }}>
        
        {/* Logo and Header Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 1.5rem 0 1.5rem', borderBottom: '1px solid var(--border-color)', gap: '2rem' }}>
          
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '1rem' }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="4" stroke="var(--primary)" strokeWidth="2.5" />
              <rect x="11" y="11" width="18" height="18" rx="4" fill="var(--primary)" />
              <path d="M16 16L20 24L24 16Z" fill="white" />
            </svg>
          </Link>

          <div style={{ display: 'flex', overflowX: 'auto', gap: '0.5rem' }} className="hide-scrollbar">
            {steps.map((step, index) => (
              <button
                key={step.id}
              onClick={() => setActiveStep(index)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: `2px solid ${activeStep === index ? 'var(--primary)' : 'transparent'}`,
                color: activeStep === index ? 'var(--primary)' : 'var(--text-muted)',
                padding: '0.5rem 0.5rem 1rem 0.5rem',
                marginRight: '1rem',
                fontWeight: activeStep === index ? '600' : '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                fontSize: '0.95rem'
              }}
            >
              <step.icon size={16} />
              {step.title}
            </button>
          ))}
        </div>
        </div>

        {/* Form Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary)', fontWeight: '600' }}>{steps[activeStep].title}</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={loadDummyData} className="btn btn-outline" style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
                <Wand2 size={14} /> AI Suggest
              </button>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <button 
            className="btn btn-outline"
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            style={{ opacity: activeStep === 0 ? 0.5 : 1 }}
          >
            Previous
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            style={{ opacity: activeStep === steps.length - 1 ? 0.5 : 1 }}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next Step'}
          </button>
        </div>
      </div>

      {/* Right Column: Preview */}
      <div style={{ width: '55%', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)', fontWeight: '600' }}>Preview</h3>
            {/* Template Selector */}
            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.04)', borderRadius: '20px', padding: '4px' }}>
              {['modern', 'minimal', 'creative'].map(tpl => (
                <button
                  key={tpl}
                  onClick={() => setTemplate(tpl)}
                  style={{
                    background: data.selectedTemplate === tpl ? '#FFFFFF' : 'transparent',
                    color: data.selectedTemplate === tpl ? 'var(--secondary)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '6px 16px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    fontSize: '0.85rem',
                    fontWeight: data.selectedTemplate === tpl ? '600' : '500',
                    boxShadow: data.selectedTemplate === tpl ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  {tpl}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleViewPortfolio} className="btn btn-outline" style={{ background: 'white' }}>
              <Layout size={18} /> Portfolio
            </button>
            <button onClick={handleDownloadPdf} className="btn btn-primary" disabled={isGenerating}>
              <Download size={18} /> {isGenerating ? 'Generating...' : 'Download PDF'}
            </button>
          </div>
        </div>

        {/* Scrollable Preview Area */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <div id="resume-preview-content" style={{ width: '210mm', minHeight: '297mm', background: 'white', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <ResumePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
