import React from 'react';
import {useRef, useState } from 'react';
import { personalInfo, aboutContent, experiences, education, certification, skills } from '../data/portfolio';
import html2pdf from 'html2pdf.js';


interface ResumeProps {
  language: 'pt' | 'en';
}

const Resume: React.FC<ResumeProps> = ({ language }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (modalRef.current) {
      html2pdf()
        .set({
          margin: 0,
          filename: `${personalInfo.name}_${language === 'pt' ? 'Curriculo' : 'Resume'}.pdf`,
          html2canvas: { scale: 1 },
          jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        })
        .from(modalRef.current)
        .save();
    }
  };


  return (
    <div className="flex flex-col items-center">
      <div
        ref={modalRef}
        className="w-[210mm] h-[297mm] bg-white text-black p-8 shadow-lg my-8 mx-auto"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h1>
            <h2 className="text-lg text-purple-600">{personalInfo.title[language]}</h2>
            <div className="mt-2 text-sm text-gray-600">
              <p className="flex items-center mb-1">
                <span className="mr-2">📧</span> {personalInfo.contact.email}
              </p>
              <p className="flex items-center mb-1">
                <span className="mr-2">🔗</span> github.com/wenderson-me
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> {personalInfo.contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* About - Shortened */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
            {language === 'pt' ? 'Sobre' : 'About'}
          </h3>
          <p className="text-sm text-gray-700">
            {language === 'pt' ? aboutContent.pt.paragraphs[0] : aboutContent.en.paragraphs[0]}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
            {language === 'pt' ? 'Experiência' : 'Experience'}
          </h3>
          <div className="space-y-4">
            {experiences.slice(0, 3).map((exp) => (
              <div key={exp.id} className="text-sm">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">{exp.title} - {exp.company}</h4>
                  <span className="text-gray-600 text-xs">{exp.period[language]}</span>
                </div>
                <ul className="mt-1 list-disc list-inside text-gray-700 text-xs">
                  {exp.description[language].slice(0, 3).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-1 text-xs text-gray-600">
                  <strong>{language === 'pt' ? 'Ferramentas' : 'Tools'}:</strong> {exp.tools}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
            {language === 'pt' ? 'Habilidades' : 'Skills'}
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="text-sm">
              <h4 className="font-medium text-gray-900">{language === 'pt' ? 'Hard Skills' : 'Hard Skills'}</h4>
              <p className="text-gray-700 text-xs">{language === 'pt' ? skills.hardSkills.pt : skills.hardSkills.en}</p>
            </div>
            <div className="text-sm">
              <h4 className="font-medium text-gray-900">{language === 'pt' ? 'Ferramentas' : 'Tools'}</h4>
              <p className="text-gray-700 text-xs">{skills.tools.slice(0, 12).join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
            {language === 'pt' ? 'Educação' : 'Education'}
          </h3>
          <div className="space-y-3">
            <div className="text-sm">
              <div className="flex justify-between">
                <h4 className="font-medium text-gray-900">{language === 'pt' ? education.degree.pt : education.degree.en}</h4>
                <span className="text-gray-600 text-xs">{education.period}</span>
              </div>
              <p className="text-gray-700 text-xs">{education.institution}</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
            {language === 'pt' ? 'Certificações' : 'Certifications'}
          </h3>
          <div className="text-sm">
            <h4 className="font-medium text-gray-900">{certification.name}</h4>
            <p className="text-gray-700 text-xs">{certification.issuer} - {certification.year}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md flex items-center mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {language === 'pt' ? 'Baixar Currículo' : 'Download Resume'}
      </button>
    </div>
  );
};

export default Resume;
