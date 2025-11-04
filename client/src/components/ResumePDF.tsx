import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { personalInfo, aboutContent, experiences, education, certification, skills } from '../data/portfolio';

interface ResumePDFProps {
  language: 'pt' | 'en';
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 14,
    color: '#7c3aed',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 3,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    color: '#1a1a1a',
  },
  text: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#374151',
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  experiencePeriod: {
    fontSize: 8,
    color: '#6b7280',
  },
  bulletPoint: {
    fontSize: 8,
    marginLeft: 10,
    marginBottom: 2,
    color: '#374151',
    lineHeight: 1.4,
  },
  tools: {
    fontSize: 8,
    marginTop: 4,
    color: '#6b7280',
  },
  skillsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillColumn: {
    width: '48%',
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1a1a1a',
  },
  skillText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: '#374151',
  },
  educationItem: {
    marginBottom: 8,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
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
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title[language]}</Text>
          <Text style={styles.contactInfo}>Email: {personalInfo.contact.email}</Text>
          <Text style={styles.contactInfo}>Site: wenderson-me.vercel.app/</Text>
          <Text style={styles.contactInfo}>Local: {personalInfo.contact.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Sobre' : 'About'}
          </Text>
          <Text style={styles.text}>
            {language === 'pt' ? aboutContent.pt.paragraphs[0] : aboutContent.en.paragraphs[0]}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Experiência' : 'Experience'}
          </Text>
          {experiences.slice(0, 4).map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>
                  {exp.title} - {exp.company}
                </Text>
                <Text style={styles.experiencePeriod}>{exp.period[language]}</Text>
              </View>
              {exp.description[language].slice(0, 3).map((item, index) => (
                <Text key={index} style={styles.bulletPoint}>
                  • {item}
                </Text>
              ))}
              <Text style={styles.tools}>
                <Text style={{ fontWeight: 'bold' }}>
                  {language === 'pt' ? 'Ferramentas: ' : 'Tools: '}
                </Text>
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
              <Text style={styles.skillText}>
                {language === 'pt' ? skills.hardSkills.pt : skills.hardSkills.en}
              </Text>
            </View>
            <View style={styles.skillColumn}>
              <Text style={styles.skillTitle}>
                {language === 'pt' ? 'Ferramentas' : 'Tools'}
              </Text>
              <Text style={styles.skillText}>{skills.tools.slice(0, 12).join(', ')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Educação' : 'Education'}
          </Text>
          <View style={styles.educationItem}>
            <View style={styles.educationHeader}>
              <Text style={styles.educationTitle}>
                {language === 'pt' ? education.degree.pt : education.degree.en}
              </Text>
              <Text style={styles.experiencePeriod}>{education.period}</Text>
            </View>
            <Text style={styles.educationInstitution}>{education.institution}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'pt' ? 'Certificações' : 'Certifications'}
          </Text>
          <View style={styles.educationItem}>
            <Text style={styles.educationTitle}>{certification.name}</Text>
            <Text style={styles.educationInstitution}>
              {certification.issuer} - {certification.year}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
