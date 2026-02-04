export const personalInfo = {
  name: 'Wenderson Monteiro',
  title: {
    pt: 'Quality Assurance Engineer',
    en: 'Quality Assurance Engineer'
  },
  profileImage: 'https://media.licdn.com/dms/image/v2/D4E03AQEosUpdLA8ifw/profile-displayphoto-crop_800_800/B4EZuirPhdJEAI-/0/1767960804775?e=1772064000&v=beta&t=CvrmtuEV_65ObseT8SA8EFFwQdNbCCxyvAzT_MaVrLs',
  contact: {
    email: 'wendrson22@gmail.com',
    github: 'https://github.com/wenderson-me',
    location: 'Lisboa, Portugal'
  }
};

export const aboutContent = {
  pt: {
    subtitle: 'Perfil Técnico em QA',
    paragraphs: [
      'Profissional com mais de 6 anos de experiência em Quality Assurance, especializado em automação de testes E2E, API e performance. Forte atuação em ambientes ágeis, liderando estratégias de testes, análise de requisitos e integração de pipelines CI/CD.',
      'Expertise em ferramentas como Cypress, Playwright e Selenium, além de sólida vivência com Azure DevOps, GitLab e K6. Foco em resultados, melhoria contínua e entrega de produtos com alta qualidade e confiabilidade.',
      'Visão sistêmica de processos, forte orientação para automação e colaboração ativa com times de desenvolvimento para acelerar entregas e garantir excelência técnica.'
    ]
  },
  en: {
    subtitle: 'Technical QA Profile',
    paragraphs: [
      'Professional with over 6 years of experience in Quality Assurance, specialized in E2E, API, and performance test automation. Strong background in agile environments, leading test strategies, requirements analysis, and CI/CD pipeline integration.',
      'Expertise in tools such as Cypress, Playwright, and Selenium, with solid experience in Azure DevOps, GitLab, and K6. Results-driven, focused on continuous improvement and delivering high-quality, reliable products.',
      'Systemic process vision, strong focus on automation, and active collaboration with development teams to accelerate delivery and ensure technical excellence.'
    ]
  }
};

export const experiences = [
  {
    id: '1',
    period: {
      pt: 'Jun 2024 - Presente',
      en: 'Jun 2024 - Present'
    },
    title: 'Quality Assurance',
    company: 'Instituto Informática - Segurança Social',
    description: {
      pt: [
        'Implementei automação de testes E2E com Selenium e Cypress, ampliando a cobertura e reduzindo o tempo de validação.',
        'Realizei testes de APIs REST e SOAP, validando integrações e contratos de serviços.',
        'Gerenciei o ciclo de vida de bugs, desde a identificação até a resolução, promovendo entregas mais estáveis.',
        'Conduzi testes de regressão e exploratórios, antecipando riscos e prevenindo falhas em produção.',
        'Criei, mantive e otimizei casos de teste no TestLink, assegurando rastreabilidade e cobertura dos requisitos.',
        'Colaborei com equipes ágeis, promovendo a cultura de qualidade e integração contínua.'
      ],
      en: [
        'Implemented E2E test automation with Selenium and Cypress, increasing coverage and reducing validation time.',
        'Performed REST and SOAP API testing, validating integrations and service contracts.',
        'Managed the bug lifecycle, from identification to resolution, promoting more stable releases.',
        'Conducted regression and exploratory testing, anticipating risks and preventing production failures.',
        'Created, maintained, and optimized test cases in TestLink, ensuring traceability and requirements coverage.',
        'Collaborated with agile teams, promoting a quality-driven culture and continuous integration.'
      ]
    },
    tools: 'Cypress, Selenium, Git, GitLab, SQL Server, TestLink, Bugzilla'
  },
  {
    id: '2',
    period: {
      pt: 'Fev 2023 - Fev 2024',
      en: 'Feb 2023 - Feb 2024'
    },
    title: 'Quality Assurance',
    company: 'SPMS - Ministério da Saúde',
    description: {
      pt: [
        'Analisei requisitos e criei casos de teste detalhados para aumentar a cobertura e rastreabilidade dos testes.',
        'Implementei e mantive automação de testes E2E com Robot Framework e Cucumber, acelerando validações e reduzindo erros manuais.',
        'Realizei testes exploratórios, de regressão e automação de APIs com Postman, garantindo a qualidade em múltiplos níveis.',
        'Participei de reuniões ágeis, colaborando com times multidisciplinares para aprimorar processos e entregas.',
        'Utilizei Azure DevOps, Jira e GitLab para gestão de projetos, versionamento e integração contínua.'
      ],
      en: [
        'Analyzed requirements and created detailed test cases to increase coverage and traceability.',
        'Implemented and maintained E2E test automation with Robot Framework and Cucumber, accelerating validations and reducing manual errors.',
        'Performed exploratory, regression, and API automation testing with Postman, ensuring quality at multiple levels.',
        'Participated in agile meetings, collaborating with multidisciplinary teams to improve processes and deliveries.',
        'Used Azure DevOps, Jira, and GitLab for project management, versioning, and continuous integration.'
      ]
    },
    tools: 'Robot Framework, Git, Jira, GitLab, Cucumber, Postman, Azure DevOps, SQL Server'
  },
  {
    id: '3',
    period: {
      pt: 'Jan 2022 - Fev 2023',
      en: 'Jan 2022 - Feb 2023'
    },
    title: 'Quality Assurance Engineer',
    company: 'Tray - E-commerce',
    description: {
      pt: [
        'Criei, mantive e evoluí frameworks de automação E2E, API e performance utilizando Cypress e K6, otimizando o tempo de validação e a confiabilidade das entregas.',
        'Realizei testes exploratórios e unitários, identificando falhas críticas e garantindo a robustez das aplicações.',
        'Documentei processos e melhores práticas em wiki, promovendo a disseminação de conhecimento e padronização do time.',
        'Atuei em pipelines CI/CD com Docker e GitLab, integrando automação de testes e acompanhando deploys em produção.',
        'Compartilhei conhecimento em sessões de pair programming e workshops internos.',
        'Monitorei métricas de performance com Grafana e otimizei integrações com Redis e PHP.'
      ],
      en: [
        'Created, maintained, and improved E2E, API, and performance automation frameworks using Cypress and K6, optimizing validation time and delivery reliability.',
        'Performed exploratory and unit testing, identifying critical failures and ensuring application robustness.',
        'Documented processes and best practices in the wiki, promoting knowledge sharing and team standardization.',
        'Worked on CI/CD pipelines with Docker and GitLab, integrating test automation and monitoring production deployments.',
        'Shared knowledge in pair programming sessions and internal workshops.',
        'Monitored performance metrics with Grafana and optimized integrations with Redis and PHP.'
      ]
    },
    tools: 'Cypress, Git, GitLab, Docker, K6, JavaScript, Jest, Vue, PHP, Grafana, Redis'
  },
  {
    id: '4',
    period: {
      pt: 'Jul 2019 - Dez 2021',
      en: 'Jul 2019 - Dec 2021'
    },
    title: 'Quality Assurance',
    company: 'Auto Bem - Seguro de veículos',
    description: {
      pt: [
        'Atuei em equipe ágil, realizando testes manuais e automatizados para aplicações web, garantindo a qualidade em todas as etapas do ciclo de vida do produto.',
        'Utilizei Azure DevOps para gerenciar repositórios, issues e o ciclo de vida de bugs, promovendo rastreabilidade e agilidade na resolução de problemas.',
        'Implementei e executei testes de aceitação, exploratórios e de regressão, validando requisitos de negócio e experiência do usuário.',
        'Desenvolvi e mantive automação de testes E2E com Cypress, aumentando a eficiência e cobertura dos testes.',
        'Realizei testes de APIs REST com Postman, assegurando a integridade e segurança dos endpoints.',
        'Colaborei com desenvolvedores e product owners para esclarecer requisitos e promover entregas alinhadas.',
        'Participei de pipelines CI/CD, contribuindo para entregas contínuas e seguras.'
      ],
      en: [
        'Worked in an agile team, performing manual and automated testing for web applications, ensuring quality at all stages of the product lifecycle.',
        'Used Azure DevOps to manage repositories, issues, and the bug lifecycle, promoting traceability and agility in problem resolution.',
        'Implemented and executed acceptance, exploratory, and regression tests, validating business requirements and user experience.',
        'Developed and maintained E2E test automation with Cypress, increasing efficiency and test coverage.',
        'Performed REST API testing with Postman, ensuring endpoint integrity and security.',
        'Collaborated with developers and product owners to clarify requirements and promote aligned deliveries.',
        'Participated in CI/CD pipelines, contributing to continuous and secure releases.'
      ]
    },
    tools: 'Cypress, Git, Azure DevOps, Postman, JavaScript, Angular, C#, SQL Server'
  }
];

export const education = {
  degree: {
    pt: 'Graduação, Análise e Desenvolvimento de Sistemas',
    en: 'Bachelor\'s Degree, Systems Analysis and Development'
  },
  institution: 'Estácio de Sá Goiás',
  period: '2018 - 2021'
};

export const certification = {
  name: 'Certified Tester, Foundation Level (CTFL)',
  issuer: 'ISTQB®',
  year: '2021'
};

export const skills = {
  hardSkills: {
    pt: 'Testes Automatizados, Manuais, Planeamento, Regressão, Unitários, Aceitação, Desempenho, Integração, Banco de Dados.',
    en: 'Automated Testing, Manual Testing, Planning, Regression, Unit, Acceptance, Performance, Integration, Database Testing.'
  },
  tools: [
    'Playwright', 'Cypress', 'Selenium', 'Postman',
    'Jira', 'Git', 'Azure DevOps', 'SQL Server',
    'BugZilla', 'TestLink', 'Java', 'BDD', 'Cucumber',
    'Robot Framework', 'GitLab', 'Docker', 'K6',
    'Jest', 'Vue', 'Ruby', 'JavaScript', 'Angular', 'C#'
  ]
};

export const portfolioProjects = [
  {
    id: '1',
    title: {
      pt: 'Teste API com SuperTest',
      en: 'API Testing with SuperTest'
    },
    description: {
      pt: 'Testes de integração para APIs REST.',
      en: 'Integration testing for REST APIs.'
    },
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=SuperTest+API',
    github: 'https://github.com/wenderson-me/study-supertest-api'
  },
  {
    id: '2',
    title: {
      pt: 'Testes E2E com Cypress',
      en: 'E2E Testing with Cypress'
    },
    description: {
      pt: 'Automação de testes End-to-End.',
      en: 'End-to-End test automation.'
    },
    image: 'https://placehold.co/600x400/1e293b/a7f3d0?text=Cypress+Advanced',
    github: 'https://github.com/wenderson-me/advanced-cypress'
  },

  // {
  //   id: '3',
  //   title: {
  //     pt: 'Testes de Performance',
  //     en: 'Performance Testing'
  //   },
  //   description: {
  //     pt: 'Testes de carga e stress com K6.',
  //     en: 'Load and stress testing with K6.'
  //   },
  //   image: 'https://placehold.co/600x400/1e293b/fde68a?text=K6+Performance',
  //   github: 'https://github.com/wenderson-me/study-k6'
  // },

   {
     id: '3',
     title: {
       pt: 'Testes com Playwright',
       en: 'Testing with Playwright'
     },
     description: {
       pt: 'Automação de testes com Playwright.',
       en: 'Test automation with Playwright.'
     },
    image: 'https://placehold.co/600x400/1e293b/fcd34d?text=Playwright+Testing',
    github: 'https://github.com/wenderson-me/playwright-javascript-automation/'
   }

];

export const contactContent = {
  pt: {
    subtitle: 'Vamos Conversar?',
    title: 'Inicie um Projeto Comigo',
    description: 'Seja para discutir uma oportunidade de trabalho, um projeto criativo ou apenas para trocar ideias, a minha caixa de entrada está sempre aberta.',
    button: 'Enviar Mensagem'
  },
  en: {
    subtitle: 'Let\'s Talk?',
    title: 'Start a Project with Me',
    description: 'Whether to discuss a job opportunity, a creative project, or just to exchange ideas, my inbox is always open.',
    button: 'Send Message'
  }
};
