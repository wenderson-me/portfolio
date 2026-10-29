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
      pt: 'Ago 2024 - Presente',
      en: 'Ago 2024 - Present'
    },
    title: 'Quality Assurance',
    company: 'Instituto dos Registos e do Notariado',
    description: {
      pt: [
        'Defino a estrutura e os padrões da automação de testes E2E e de APIs com Cypress, promovendo soluções escaláveis e fáceis de manter.',
        'Realizo code reviews dos testes automatizados, identificando riscos e propondo melhorias de qualidade, cobertura e manutenção.',
        'Elaboro planos e cenários de teste com base nos riscos e requisitos, assegurando cobertura e rastreabilidade.',
        'Planeio e acompanho testes funcionais, de regressão, segurança e performance ao longo do ciclo de entrega.',
        'Integro a execução dos testes nos processos de CI/CD com Jenkins e GitLab e acompanho o ciclo de vida dos bugs até à validação da correção.',
        'Analiso métricas de performance com K6 e Grafana e recomendo melhorias técnicas e de processo às equipas.'
      ],
      en: [
        'Define the structure and standards for E2E and API test automation with Cypress, promoting scalable and maintainable solutions.',
        'Review automated test code, identifying risks and recommending improvements to quality, coverage, and maintainability.',
        'Create risk- and requirements-based test plans and scenarios, ensuring coverage and traceability.',
        'Plan and oversee functional, regression, security, and performance testing throughout the delivery lifecycle.',
        'Integrate test execution into CI/CD processes with Jenkins and GitLab, and manage bugs through fix validation.',
        'Analyze performance metrics with K6 and Grafana and recommend technical and process improvements to teams.'
      ]
    },
    tools: 'Cypress, Git, GitLab, TestLink, Jenkins, K6, Grafana'
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

  {
    id: '3',
    title: {
      pt: 'Projeto Pessoal Playwright',
      en: 'Personal Project Personal Project'
  },
    description: {
      pt: 'Testes de api com Playwright.',
      en: 'API testing with Playwright.'
    },
      image: 'https://placehold.co/600x400/1e293b/fcd34d?text=Playwright+Personal',
      github: 'https://github.com/wenderson-me/weid-tests'
    },

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
