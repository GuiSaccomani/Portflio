// Traduções do site
const translations = {
    pt: {
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        'hero-greeting': 'Olá, eu sou',
        'hero-name': 'Guilherme Saccomani',
        'hero-role': 'Desenvolvedor Full Stack',
        'hero-description': 'Transformando ideias em soluções digitais inovadoras. Vamos conversar sobre seu projeto!',
        'hero-projects': 'Ver Projetos',
        'hero-contact': 'Entre em Contato',
        'stat-projects': 'Projetos',
        'stat-experience': 'Anos Exp.',
        'stat-technologies': 'Tecnologias',
        'about-title': 'Sobre Mim',
        'about-subtitle': 'Conheça minha trajetória e habilidades',
        'about-text1': 'Sou Guilherme Enrico Silva Saccomani, desenvolvedor Full Stack e estudante de Engenharia de Software na FIAP. Atualmente atuo como Estagiário de Desenvolvimento na Tracker, onde tenho a oportunidade de aplicar na prática meus conhecimentos em tecnologias de ponta, colaborando em projetos que integram inovação, qualidade e escalabilidade.',
        'about-text2': 'Tenho experiência em Java, SQL, HTML, CSS e JavaScript, além de interesse constante em áreas como UX/UI Design, Front-End Design, Edge Computing e DevOps. Também possuo conhecimento intermediário em Git e GitHub, o que me ajuda a estruturar e versionar projetos de forma organizada e colaborativa.',
        'about-text3': 'Minha jornada acadêmica e profissional é guiada pela curiosidade, aprendizado contínuo e pela vontade de desenvolver soluções que realmente façam a diferença. Busco sempre unir técnica, criatividade e boas práticas para entregar resultados de valor.',
        'skills-title': 'Habilidades Técnicas',
        'projects-title': 'Meus Projetos',
        'projects-subtitle': 'Alguns trabalhos que desenvolvi',
        'filter-all': 'Todos',
        'filter-ai': 'IA',
        'filter-blockchain': 'Blockchain',
        'filter-infrastructure': 'Infraestrutura',
        'project1-title': 'Em Busca do Shape',
        'project1-desc': 'Chatbot com inteligência artificial desenvolvido utilizando Gemini, criado para auxiliar no atendimento ao cliente (SAC). O projeto trouxe experiência prática com IA aplicada a interações humanas, além de desenvolvimento e integração de sistemas.',
        'project1-category': 'Inteligência Artificial',
        'project1-stat': 'IA Conversacional',
        'project2-title': 'Guven',
        'project2-desc': 'Plataforma acadêmica de criptoativos, desenvolvida como parte de um projeto PBL. Envolveu normalização de dados (1FN, 2FN, 3FN), criação de modelo relacional (MER), dicionário de dados, além de implementação em Java com uso de ArrayList, HashMap e persistência de dados em arquivos de texto.',
        'project2-category': 'Blockchain & Fintech',
        'project2-stat': 'Sistema Financeiro',
        'project3-title': 'INTEGRA – Plataforma de Infraestrutura Social',
        'project3-desc': 'Projeto desenvolvido para otimizar a gestão de Parcerias Público-Privadas (PPPs). Atuei no front-end, garantindo usabilidade e experiência do usuário, além de colaborar com o back-end e banco de dados (PL/SQL) para integração e eficiência da plataforma.',
        'project3-category': 'Infraestrutura Social',
        'project3-stat': 'Gestão Pública',
        'btn-github': 'Ver no GitHub',
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Precisa de um site profissional? Crio sites modernos e responsivos. Vamos conversar sobre seu próximo projeto',
        'contact-email': 'Email',
        'contact-email-desc': 'Envie uma mensagem',
        'contact-whatsapp': 'WhatsApp',
        'contact-whatsapp-desc': 'Conversa rápida',
        'contact-linkedin': 'LinkedIn',
        'contact-linkedin-desc': 'Rede profissional',
        'contact-github': 'GitHub',
        'contact-github-desc': 'Repositórios e projetos',
        'btn-send': 'Enviar mensagem',
        'btn-view': 'Ver repositórios',
        'footer-text': '© 2025 Guilherme Saccomani'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello, I am',
        'hero-name': 'Guilherme Saccomani',
        'hero-role': 'Full Stack Developer',
        'hero-description': 'Transforming ideas into innovative digital solutions. Let\'s talk about your project!',
        'hero-projects': 'View Projects',
        'hero-contact': 'Get in Touch',
        'stat-projects': 'Projects',
        'stat-experience': 'Years Exp.',
        'stat-technologies': 'Technologies',
        'about-title': 'About Me',
        'about-subtitle': 'Get to know my journey and skills',
        'about-text1': 'I am Guilherme Enrico Silva Saccomani, a Full Stack developer and Software Engineering student at FIAP. I currently work as a Development Intern at Tracker, where I have the opportunity to apply my knowledge in cutting-edge technologies, collaborating on projects that integrate innovation, quality and scalability.',
        'about-text2': 'I have experience in Java, SQL, HTML, CSS and JavaScript, as well as constant interest in areas such as UX/UI Design, Front-End Design, Edge Computing and DevOps. I also have intermediate knowledge in Git and GitHub, which helps me structure and version projects in an organized and collaborative way.',
        'about-text3': 'My academic and professional journey is guided by curiosity, continuous learning and the desire to develop solutions that really make a difference. I always seek to unite technique, creativity and good practices to deliver valuable results.',
        'skills-title': 'Technical Skills',
        'projects-title': 'My Projects',
        'projects-subtitle': 'Some work I\'ve developed',
        'filter-all': 'All',
        'filter-ai': 'AI',
        'filter-blockchain': 'Blockchain',
        'filter-infrastructure': 'Infrastructure',
        'project1-title': 'In Search of Shape',
        'project1-desc': 'AI chatbot developed using Gemini, created to assist in customer service (SAC). The project brought practical experience with AI applied to human interactions, as well as system development and integration.',
        'project1-category': 'Artificial Intelligence',
        'project1-stat': 'Conversational AI',
        'project2-title': 'Guven',
        'project2-desc': 'Academic cryptocurrency platform, developed as part of a PBL project. It involved data normalization (1NF, 2NF, 3NF), creation of relational model (ERM), data dictionary, as well as implementation in Java using ArrayList, HashMap and data persistence in text files.',
        'project2-category': 'Blockchain & Fintech',
        'project2-stat': 'Financial System',
        'project3-title': 'INTEGRA – Social Infrastructure Platform',
        'project3-desc': 'Project developed to optimize the management of Public-Private Partnerships (PPPs). I worked on the front-end, ensuring usability and user experience, as well as collaborating with the back-end and database (PL/SQL) for platform integration and efficiency.',
        'project3-category': 'Social Infrastructure',
        'project3-stat': 'Public Management',
        'btn-github': 'View on GitHub',
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'Need a professional website? I create modern and responsive sites. Let\'s talk about your next project',
        'contact-email': 'Email',
        'contact-email-desc': 'Send a message',
        'contact-whatsapp': 'WhatsApp',
        'contact-whatsapp-desc': 'Quick chat',
        'contact-linkedin': 'LinkedIn',
        'contact-linkedin-desc': 'Professional network',
        'contact-github': 'GitHub',
        'contact-github-desc': 'Repositories and projects',
        'btn-send': 'Send message',
        'btn-view': 'View repositories',
        'footer-text': '© 2025 Guilherme Saccomani'
    },
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Acerca',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        'hero-greeting': 'Hola, soy',
        'hero-name': 'Guilherme Saccomani',
        'hero-role': 'Desarrollador Full Stack',
        'hero-description': 'Transformando ideas en soluciones digitales innovadoras. ¡Hablemos sobre tu proyecto!',
        'hero-projects': 'Ver Proyectos',
        'hero-contact': 'Contactar',
        'stat-projects': 'Proyectos',
        'stat-experience': 'Años Exp.',
        'stat-technologies': 'Tecnologías',
        'about-title': 'Acerca de Mí',
        'about-subtitle': 'Conoce mi trayectoria y habilidades',
        'about-text1': 'Soy Guilherme Enrico Silva Saccomani, desarrollador Full Stack y estudiante de Ingeniería de Software en FIAP. Actualmente trabajo como Pasante de Desarrollo en Tracker, donde tengo la oportunidad de aplicar mis conocimientos en tecnologías de vanguardia, colaborando en proyectos que integran innovación, calidad y escalabilidad.',
        'about-text2': 'Tengo experiencia en Java, SQL, HTML, CSS y JavaScript, además de interés constante en áreas como Diseño UX/UI, Diseño Front-End, Edge Computing y DevOps. También poseo conocimiento intermedio en Git y GitHub, lo que me ayuda a estructurar y versionar proyectos de forma organizada y colaborativa.',
        'about-text3': 'Mi trayectoria académica y profesional está guiada por la curiosidad, el aprendizaje continuo y el deseo de desarrollar soluciones que realmente marquen la diferencia. Siempre busco unir técnica, creatividad y buenas prácticas para entregar resultados de valor.',
        'skills-title': 'Habilidades Técnicas',
        'projects-title': 'Mis Proyectos',
        'projects-subtitle': 'Algunos trabajos que he desarrollado',
        'filter-all': 'Todos',
        'filter-ai': 'IA',
        'filter-blockchain': 'Blockchain',
        'filter-infrastructure': 'Infraestructura',
        'project1-title': 'En Busca de la Forma',
        'project1-desc': 'Chatbot con inteligencia artificial desarrollado usando Gemini, creado para asistir en atención al cliente (SAC). El proyecto aportó experiencia práctica con IA aplicada a interacciones humanas, además de desarrollo e integración de sistemas.',
        'project1-category': 'Inteligencia Artificial',
        'project1-stat': 'IA Conversacional',
        'project2-title': 'Guven',
        'project2-desc': 'Plataforma académica de criptomonedas, desarrollada como parte de un proyecto PBL. Involucró normalización de datos (1FN, 2FN, 3FN), creación de modelo relacional (MER), diccionario de datos, además de implementación en Java usando ArrayList, HashMap y persistencia de datos en archivos de texto.',
        'project2-category': 'Blockchain y Fintech',
        'project2-stat': 'Sistema Financiero',
        'project3-title': 'INTEGRA – Plataforma de Infraestructura Social',
        'project3-desc': 'Proyecto desarrollado para optimizar la gestión de Asociaciones Público-Privadas (APPs). Trabajé en el front-end, garantizando usabilidad y experiencia del usuario, además de colaborar con el back-end y base de datos (PL/SQL) para integración y eficiencia de la plataforma.',
        'project3-category': 'Infraestructura Social',
        'project3-stat': 'Gestión Pública',
        'btn-github': 'Ver en GitHub',
        'contact-title': 'Contactar',
        'contact-subtitle': '¿Necesitas un sitio web profesional? Creo sitios modernos y responsivos. Hablemos sobre tu próximo proyecto',
        'contact-email': 'Email',
        'contact-email-desc': 'Enviar mensaje',
        'contact-whatsapp': 'WhatsApp',
        'contact-whatsapp-desc': 'Chat rápido',
        'contact-linkedin': 'LinkedIn',
        'contact-linkedin-desc': 'Red profesional',
        'contact-github': 'GitHub',
        'contact-github-desc': 'Repositorios y proyectos',
        'btn-send': 'Enviar mensaje',
        'btn-view': 'Ver repositorios',
        'footer-text': '© 2025 Guilherme Saccomani'
    }
};

// Função para trocar idioma
function changeLanguage(lang) {
    // Atualizar elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Atualizar botões ativos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Salvar preferência
    localStorage.setItem('preferred-language', lang);

    // Atualizar título da página
    const titles = {
        pt: 'Guilherme Saccomani - Desenvolvedor Full Stack | Portfólio',
        en: 'Guilherme Saccomani - Full Stack Developer | Portfolio',
        es: 'Guilherme Saccomani - Desarrollador Full Stack | Portafolio'
    };
    document.title = titles[lang] || titles.pt;
}

// Inicializar idioma
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-language') || 'pt';
    changeLanguage(savedLang);

    // Adicionar event listeners aos botões
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});