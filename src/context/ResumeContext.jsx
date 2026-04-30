import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [data, setData] = useState({
    personalInfo: {
      name: '',
      role: '',
      email: '',
      phone: '',
      website: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    achievements: [],
    selectedTemplate: 'modern' // options: 'modern', 'minimal', 'creative'
  });

  const updatePersonalInfo = (field, value) => {
    setData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const setTemplate = (templateId) => {
    setData(prev => ({ ...prev, selectedTemplate: templateId }));
  };

  const addItem = (section, item) => {
    setData(prev => ({
      ...prev,
      [section]: [...prev[section], { id: uuidv4(), ...item }]
    }));
  };

  const updateItem = (section, id, updatedItem) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].map(item => item.id === id ? { ...item, ...updatedItem } : item)
    }));
  };

  const removeItem = (section, id) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };
  
  const updateSkills = (skillsArray) => {
    setData(prev => ({ ...prev, skills: skillsArray }));
  };

  const loadDummyData = () => {
    setData({
      personalInfo: {
        name: 'Alex Developer',
        role: 'Full Stack Engineer',
        email: 'alex@example.com',
        phone: '+1 234 567 8900',
        website: 'alexdev.com',
        summary: 'Passionate and driven software engineer with over 5 years of experience building scalable web applications. Proficient in modern JavaScript frameworks and cloud technologies. Adept at turning complex requirements into simple, elegant solutions.'
      },
      experience: [
        {
          id: uuidv4(),
          company: 'TechCorp Solutions',
          position: 'Senior Frontend Developer',
          startDate: '2022-01',
          endDate: 'Present',
          description: 'Lead a team of 5 developers to rebuild the core customer portal using React and Vite, improving load times by 40%. Implemented a comprehensive design system.'
        },
        {
          id: uuidv4(),
          company: 'Innovate Web Agency',
          position: 'Web Developer',
          startDate: '2019-06',
          endDate: '2021-12',
          description: 'Developed responsive websites for various clients. Collaborated closely with designers to ensure pixel-perfect implementations.'
        }
      ],
      education: [
        {
          id: uuidv4(),
          institution: 'University of Technology',
          degree: 'B.S. Computer Science',
          startDate: '2015-09',
          endDate: '2019-05',
          description: 'Graduated with Honors. Specialized in Human-Computer Interaction.'
        }
      ],
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'CSS/SCSS', 'Python', 'AWS', 'Docker'],
      projects: [
        {
          id: uuidv4(),
          title: 'AI Portfolio Builder',
          link: 'github.com/alex/ai-portfolio',
          description: 'An AI-driven platform that automatically generates responsive portfolio websites from user-provided data. Built with React and Framer Motion.'
        }
      ],
      certifications: [
        { id: uuidv4(), title: 'AWS Certified Solutions Architect', date: '2023-05' }
      ],
      achievements: [
        { id: uuidv4(), title: 'Hackathon Winner - Global Tech Summit 2022' }
      ],
      selectedTemplate: 'modern'
    });
  };

  return (
    <ResumeContext.Provider value={{
      data,
      updatePersonalInfo,
      setTemplate,
      addItem,
      updateItem,
      removeItem,
      updateSkills,
      loadDummyData
    }}>
      {children}
    </ResumeContext.Provider>
  );
};
