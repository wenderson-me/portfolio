export const personalInfo = {
  name: 'Wenderson Monteiro',
  title: {
    pt: 'Quality Assurance Engineer',
    en: 'Quality Assurance Engineer'
  },
  profileImage: 'https://media.licdn.com/dms/image/v2/C4E03AQG6kluH8Pe-Gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629807000416?e=1756944000&v=beta&t=Ro8v3O1_f5bYt3KiZhYfCTwnalmo37060KgWsaKzYF4',
  contact: {
    email: 'wendrson22@gmail.com',
    github: 'https://github.com/wenderson-me',
    location: 'Lisboa, Portugal'
  }
};

export const aboutContent = {
  pt: {
    subtitle: 'De QA a Criativo',
    paragraphs: [
      'A minha jornada é alimentada pela curiosidade. Seja a testar a solidez de um software ou a explorar uma nova composição fotográfica, a minha paixão está em encontrar a qualidade e a beleza nos detalhes.',
      'Com mais de 5 anos em Quality Assurance, aprendi que um produto de sucesso vai além do código: trata-se da experiência. Essa perceção levou-me a explorar o design e a fotografia, onde aplico a mesma atenção ao detalhe e o mesmo rigor para criar algo significativo.',
      'Acredito que a minha experiência técnica em QA, combinada com um olhar criativo, me oferece uma perspetiva única. Consigo não só identificar o que está errado, mas também visualizar o que poderia ser melhor, mais intuitivo e mais belo.',
      'Estou à procura de projetos onde possa unir estes dois mundos, contribuindo para criar produtos que não só funcionam na perfeição, mas que também encantam e inspiram.'
    ]
  },
  en: {
    subtitle: 'From QA to Creative',
    paragraphs: [
      'My journey is fueled by curiosity. Whether testing software robustness or exploring a new photographic composition, my passion lies in finding quality and beauty in the details.',
      'With more than 5 years in Quality Assurance, I learned that a successful product goes beyond code: it\'s about experience. This insight led me to explore design and photography, where I apply the same attention to detail and rigor to create something meaningful.',
      'I believe my technical QA experience, combined with a creative eye, offers me a unique perspective. I can not only identify what\'s wrong but also visualize what could be better, more intuitive, and more beautiful.',
      'I\'m looking for projects where I can unite these two worlds, contributing to creating products that not only work perfectly but also delight and inspire.'
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
        'Executo testes manuais funcionais e exploratórios detalhados para validar funcionalidades.',
        'Realizo testes de integração entre múltiplos módulos, garantindo fluxo de dados consistente.',
        'Desenvolvo e executo testes automatizados E2E com Cypress, cobrindo fluxos críticos de usuário e reduzindo tempo de validação.',
        'Conduzo testes abrangentes de API REST e SOAP, validando contratos, payloads, autenticação e tratamento de erros.',
        'Gerencio o ciclo de vida completo de bugs, desde identificação, documentação com evidências, priorização, resolução e reteste.',
        'Implemento testes de API automatizados para validar endpoints, integrações e regras de negócio de forma contínua.',
        'Executo testes de regressão manuais e automatizados após cada release, garantindo estabilidade e prevenindo reintrodução de defeitos.',
        'Crio e mantenho casos de teste detalhados no TestLink, garantindo rastreabilidade completa e cobertura dos requisitos.',
        'Colaboro ativamente com desenvolvedores e analistas em cerimônias ágeis, oferecendo feedback técnico para melhorar a qualidade.'
      ],
      en: [
        'Execute detailed functional and exploratory manual testing to validate critical functionalities and identify undocumented scenarios.',
        'Perform integration testing between multiple modules and external systems, ensuring consistent data.',
        'Develop and execute E2E automated tests with Cypress, covering critical user flows and reducing validation time.',
        'Conduct comprehensive REST and SOAP API testing, validating contracts, payloads, authentication, and error handling.',
        'Manage complete bug lifecycle, from identification, documentation with evidence, prioritization, resolution and retest.',
        'Implement automated API tests to continuously validate endpoints, integrations, and business rules.',
        'Execute manual and automated regression testing after each release, ensuring stability and preventing defect reintroduction.',
        'Create and maintain detailed test cases in TestLink, ensuring complete traceability and requirements coverage.',
        'Actively collaborate with developers and analysts in agile ceremonies, providing technical feedback to improve quality.'
      ]
    },
    tools: 'TestLink, Gitlab, Postman, Cypress, SQL Server, API'
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
        'Analisei requisitos no Jira para criar casos de teste e aumentar a cobertura.',
        'Executei e documentei testes de aceitação para garantir conformidade com os requisitos.',
        'Realizei testes exploratórios, identificando falhas críticas não cobertas.',
        'Conduzi testes de regressão em cada sprint, reduzindo bugs recorrentes.',
        'Participei de reuniões ágeis, oferecendo insights que aprimoraram o desenvolvimento.'
      ],
      en: [
        'Analyzed requirements in Jira to create test cases and increase coverage.',
        'Executed and documented acceptance tests to ensure compliance with requirements.',
        'Performed exploratory testing, identifying critical uncovered failures.',
        'Conducted regression testing in each sprint, reducing recurring bugs.',
        'Participated in agile meetings, offering insights that improved development.'
      ]
    },
    tools: 'Jira, Postman, SQL, Git, GitLab, Azure DevOps, Robot Framework, BDD'
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
        'Desenvolvi e mantive mais de 200 testes automatizados em Cypress e Capybara, reduzindo o tempo de testes.',
        'Aprimorei o framework de automação, aumentando a reutilização de código.',
        'Identifiquei e documentei bugs críticos com evidências detalhadas.',
        'Configurei e otimizei CI/CD no GitLab, reduzindo o tempo de integração.',
        'Criei documentação técnica e guias de melhores práticas.',
        'Acompanhei implantações em produção, oferecendo suporte técnico imediato.',
        'Implementei testes de performance com K6, melhorando o tempo de resposta.',
        'Compartilhei conhecimento em sessões de pair programming e workshops.'
      ],
      en: [
        'Developed and maintained over 200 automated tests in Cypress and Capybara, reducing testing time.',
        'Enhanced the automation framework, increasing code reusability.',
        'Identified and documented critical bugs with detailed evidence.',
        'Configured and optimized CI/CD in GitLab, reducing integration time.',
        'Created technical documentation and best practice guides.',
        'Monitored production deployments, providing immediate technical support.',
        'Implemented performance testing with K6, improving response time.',
        'Shared knowledge in pair programming sessions and workshops.'
      ]
    },
    tools: 'Git, GitLab, JavaScript, Cypress, Docker, K6, Jest, Ymal, Vue, Ruby'
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
        'Elaborei mais de 500 casos de teste para aplicações web, assegurando cobertura total dos requisitos.',
        'Implementei um sistema de reporte de bugs no Azure DevOps, melhorando a eficiência na correção.',
        'Realizei testes manuais rigorosos de UI/UX, funcionalidade, integração e compatibilidade.',
        'Analisei requisitos técnicos e de negócio, identificando ambiguidades e riscos antes do desenvolvimento.',
        'Utilizei o Postman para testar APIs REST, garantindo a integridade dos endpoints.',
        'Colaborei com desenvolvedores e product owners para esclarecer requisitos e expectativas.',
        'Contribuí para processos de qualidade que reduziram bugs em produção.'
      ],
      en: [
        'Developed over 500 test cases for web applications, ensuring total requirements coverage.',
        'Implemented a bug reporting system in Azure DevOps, improving correction efficiency.',
        'Performed rigorous manual testing of UI/UX, functionality, integration, and compatibility.',
        'Analyzed technical and business requirements, identifying ambiguities and risks before development.',
        'Used Postman to test REST APIs, ensuring endpoint integrity.',
        'Collaborated with developers and product owners to clarify requirements and expectations.',
        'Contributed to quality processes that reduced production bugs.'
      ]
    },
    tools: 'Cypress, Git, Azure, Postman, Ymal, Javascript, Angular, C#'
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
     id: '4',
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
