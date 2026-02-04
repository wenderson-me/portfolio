import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { personalInfo, aboutContent, experiences, education, certification, skills } from '../data/portfolio';

interface ResumePDFProps {
  language: 'pt' | 'en';
}

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#fff',
    color: '#232323',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#7c3aed',
    paddingBottom: 8,
  },
  leftHeader: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    color: '#7c3aed',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 8.5,
    color: '#4b5563',
    marginBottom: 2,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#7c3aed',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  summary: {
    fontSize: 9.5,
    color: '#232323',
    marginBottom: 8,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  experienceTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  experiencePeriod: {
    fontSize: 8,
    color: '#6b7280',
    fontWeight: 'bold',
  },
  bulletPoint: {
    fontSize: 8.5,
    marginLeft: 8,
    marginBottom: 1.5,
    color: '#374151',
    lineHeight: 1.4,
  },
  tools: {
    fontSize: 8,
    marginTop: 2,
    color: '#6b7280',
  },
  skillsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  skillColumn: {
    width: '48%',
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#1a1a1a',
  },
  skillText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: '#374151',
  },
  educationItem: {
    marginBottom: 6,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  educationTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  educationInstitution: {
    fontSize: 9,
    color: '#374151',
  },
});

const ResumePDF: React.FC<ResumePDFProps> = ({ language }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text style={styles.name}>{personalInfo.name}</Text>
            <Text style={styles.title}>{personalInfo.title[language]}</Text>
            <Text style={styles.contactInfo}>Email: {personalInfo.contact.email}</Text>
            <Text style={styles.contactInfo}>Site: wenderson-me.vercel.app/</Text>
            <Text style={styles.contactInfo}>Local: {personalInfo.contact.location}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
          </Text>
          {aboutContent[language].paragraphs.map((p, i) => (
            <Text key={i} style={styles.summary}>{p}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Experiência' : 'Experience'}
          </Text>
          {experiences.map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>{exp.title} - {exp.company}</Text>
                <Text style={styles.experiencePeriod}>{exp.period[language]}</Text>
              </View>
              {exp.description[language].map((item, index) => (
                <Text key={index} style={styles.bulletPoint}>• {item}</Text>
              ))}
              <Text style={styles.tools}>
                <Text style={{ fontWeight: 'bold' }}>{language === 'pt' ? 'Ferramentas: ' : 'Tools: '}</Text>
                {exp.tools}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Habilidades' : 'Skills'}
          </Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillColumn}>
              <Text style={styles.skillTitle}>Hard Skills</Text>
              <Text style={styles.skillText}>{language === 'pt' ? skills.hardSkills.pt : skills.hardSkills.en}</Text>
            </View>
            <View style={styles.skillColumn}>
              <Text style={styles.skillTitle}>{language === 'pt' ? 'Ferramentas' : 'Tools'}</Text>
              <Text style={styles.skillText}>{skills.tools.join(', ')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{language === 'pt' ? 'Educação' : 'Education'}</Text>
          <View style={styles.educationItem}>
            <View style={styles.educationHeader}>
              <Text style={styles.educationTitle}>{language === 'pt' ? education.degree.pt : education.degree.en}</Text>
              <Text style={styles.experiencePeriod}>{education.period}</Text>
            </View>
            <Text style={styles.educationInstitution}>{education.institution}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{language === 'pt' ? 'Certificações' : 'Certifications'}</Text>
          <View style={styles.educationItem}>
            <Text style={styles.educationTitle}>{certification.name}</Text>
            <Text style={styles.educationInstitution}>{certification.issuer} - {certification.year}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
