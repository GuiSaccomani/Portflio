// ========================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const contactCards = document.querySelectorAll('.contact-card');
const ctaButtons = document.querySelectorAll('.cta-button');
const logo = document.querySelector('.logo');
const filterBtns = document.querySelectorAll('.filter-btn');
const statNumbers = document.querySelectorAll('.stat-number');

// ========================================
// 2. CURSOR PERSONALIZADO
// ========================================

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const diffX = mouseX - cursorX;
    const diffY = mouseY - cursorY;
    
    cursorX += diffX * 0.1;
    cursorY += diffY * 0.1;
    
    if (document.body.style) {
        document.body.style.setProperty('--cursor-x', cursorX + 'px');
        document.body.style.setProperty('--cursor-y', cursorY + 'px');
    }
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// ========================================
// 3. MENU HAMBURGER E NAVEGAÇÃO
// ========================================

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    });
});

// ========================================
// 4. SCROLL SUAVE E NAVEGAÇÃO
// ========================================

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 5. BOTÕES CTA E INTERAÇÕES
// ========================================

ctaButtons.forEach(function(button) {
    if (button.textContent.includes('Ver Projetos')) {
        button.addEventListener('click', function() {
            const projectsSection = document.querySelector('#projects');
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = projectsSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
    
    if (button.textContent.includes('Baixar CV')) {
        button.addEventListener('click', function() {
            showNotification('CV será disponibilizado em breve!', 'info');
        });
    }
});

// ========================================
// 6. CONTADOR ANIMADO
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// ========================================
// 7. INTERSECTION OBSERVER AVANÇADO
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observer para elementos gerais
const generalObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Anima contadores quando visíveis
            if (entry.target.classList.contains('hero-stats')) {
                statNumbers.forEach(function(stat) {
                    const target = parseInt(stat.dataset.target);
                    animateCounter(stat, target);
                });
            }
        }
    });
}, observerOptions);

// Observer para habilidades
const skillsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            const textBlocks = entry.target.querySelectorAll('.text-block');
            
            // Anima texto blocks
            textBlocks.forEach(function(block, index) {
                setTimeout(function() {
                    block.classList.add('animate');
                }, index * 200);
            });
            
            // Anima skill cards
            skillCards.forEach(function(card, index) {
                setTimeout(function() {
                    card.classList.add('animate');
                }, index * 150 + 500);
            });
            
            // Anima barras de progresso
            setTimeout(function() {
                skillBars.forEach(function(bar) {
                    const width = bar.dataset.width;
                    bar.style.width = width + '%';
                });
            }, 1000);
            
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer para projetos
const projectsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            
            cards.forEach(function(card, index) {
                setTimeout(function() {
                    card.classList.add('animate');
                }, index * 200);
            });
            
            projectsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer para contatos
const contactObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.contact-card');
            
            cards.forEach(function(card, index) {
                setTimeout(function() {
                    card.classList.add('animate');
                }, index * 150);
            });
            
            contactObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// ========================================
// 8. FILTRO DE PROJETOS AVANÇADO
// ========================================

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const filter = this.dataset.filter;
        
        // Remove active de todos os botões
        filterBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        
        // Adiciona active ao botão clicado
        this.classList.add('active');
        
        // Filtra projetos com animação
        projectCards.forEach(function(card, index) {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                setTimeout(function() {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(function() {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========================================
// 9. PROJETOS - REDIRECIONAMENTO
// ========================================

projectCards.forEach(function(card) {
    const projectBtns = card.querySelectorAll('.project-btn');
    
    projectBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (btn.textContent.includes('GitHub')) {
                const githubUrl = card.dataset.github;
                if (githubUrl) {
                    window.open(githubUrl, '_blank');
                }
            }
        });
    });
    
    // Clique no card inteiro
    card.addEventListener('click', function() {
        const githubUrl = card.dataset.github;
        if (githubUrl) {
            window.open(githubUrl, '_blank');
        }
    });
});

// ========================================
// 10. SISTEMA DE NOTIFICAÇÕES AVANÇADO
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    
    const colors = {
        success: 'linear-gradient(135deg, #10b981, #059669)',
        error: 'linear-gradient(135deg, #ef4444, #dc2626)',
        info: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        warning: 'linear-gradient(135deg, #f59e0b, #d97706)'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">${icons[type]}</div>
        <div class="notification-content">
            <div class="notification-text">${message}</div>
            <div class="notification-progress"></div>
        </div>
        <button class="notification-close">×</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 1rem;
        box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        backdrop-filter: blur(10px);
        max-width: 350px;
        min-width: 300px;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    const progress = notification.querySelector('.notification-progress');
    
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    `;
    
    progress.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: rgba(255,255,255,0.3);
        width: 100%;
        transform-origin: left;
        animation: notificationProgress 3s linear;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    
    closeBtn.addEventListener('click', function() {
        removeNotification(notification);
    });
    
    setTimeout(function() {
        removeNotification(notification);
    }, 3000);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 300);
}

// ========================================
// 11. HEADER DINÂMICO AVANÇADO
// ========================================

let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = 'none';
    }
    
    // Auto-hide header
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

// ========================================
// 12. EFEITO DE DIGITAÇÃO AVANÇADO
// ========================================

function typeWriter(element, texts, speed = 100) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        const cursor = element.parentNode.querySelector('.cursor');
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? speed / 2 : speed;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ========================================
// 13. PARTÍCULAS INTERATIVAS
// ========================================

function createInteractiveParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = window.innerWidth > 768 ? 30 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'interactive-particle';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--highlight-color);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            opacity: 0.1;
            animation: particleFloat ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        hero.appendChild(particle);
    }
}

// ========================================
// 14. EASTER EGGS AVANÇADOS
// ========================================

let logoClicks = 0;
const konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

// Easter egg do logo
logo.addEventListener('click', function() {
    logoClicks++;
    
    // Efeito visual no clique
    this.style.transform = 'scale(0.95) rotate(5deg)';
    setTimeout(() => this.style.transform = '', 200);
    
    if (logoClicks === 5) {
        activateMatrixMode();
        logoClicks = 0;
    }
});

// Konami Code
document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateRainbowMode();
        konamiCode.length = 0;
    }
});

function activateMatrixMode() {
    showNotification('🎯 Modo Matrix ativado! Bem-vindo à realidade!', 'success');
    
    document.body.style.filter = 'hue-rotate(120deg) contrast(1.2)';
    document.body.style.animation = 'matrix 5s ease-in-out';
    
    createMatrixRain();
    
    setTimeout(function() {
        document.body.style.filter = '';
        document.body.style.animation = '';
        clearMatrixRain();
    }, 8000);
}

function activateRainbowMode() {
    showNotification('🌈 Konami Code! Modo Arco-íris ativado!', 'success');
    
    document.body.style.animation = 'rainbow 3s ease-in-out infinite';
    
    // Adiciona efeito de confetti
    createConfetti();
    
    setTimeout(function() {
        document.body.style.animation = '';
    }, 15000);
}

function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.id = 'matrix-rain';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.textContent = Math.random() > 0.5 ? '1' : '0';
        column.style.cssText = `
            position: absolute;
            top: -100%;
            left: ${i * 2}%;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 20 + 10}px;
            animation: matrixFall ${2 + Math.random() * 3}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        matrixContainer.appendChild(column);
    }
    
    document.body.appendChild(matrixContainer);
}

function clearMatrixRain() {
    const matrixRain = document.getElementById('matrix-rain');
    if (matrixRain) {
        matrixRain.remove();
    }
}

function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            z-index: 10000;
            pointer-events: none;
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// ========================================
// 15. PERFORMANCE E OTIMIZAÇÕES
// ========================================

// Debounce para eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading para imagens
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Preload de recursos críticos
function preloadResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ];
    
    criticalResources.forEach(function(resource) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// ========================================
// 16. INICIALIZAÇÃO
// ========================================

function initObservers() {
    const aboutSection = document.querySelector('.about');
    const projectsSection = document.querySelector('.projects');
    const contactSection = document.querySelector('.contact');
    const heroStats = document.querySelector('.hero-stats');
    
    if (aboutSection) skillsObserver.observe(aboutSection);
    if (projectsSection) projectsObserver.observe(projectsSection);
    if (contactSection) contactObserver.observe(contactSection);
    if (heroStats) generalObserver.observe(heroStats);
    
    // Observer geral para outros elementos
    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
        generalObserver.observe(el);
    });
}

// ========================================
// 18. FORMULÁRIO DE CONTATO
// ========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.form-submit-btn');
        const originalText = submitBtn.innerHTML;
        const formData = new FormData(this);
        
        // Loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-text">Enviando...</span><span class="btn-icon">⏳</span>';
        
        // Envio real via Formspree (substitua YOUR_FORM_ID pelo seu ID)
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showNotification('Mensagem enviada com sucesso! Retornarei em breve.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Erro no envio');
            }
        })
        .catch(error => {
            showNotification('Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.', 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });
    
    // Animação do formulário
    const formObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                formObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const form = document.querySelector('.contact-form');
    if (form) formObserver.observe(form);
}

document.addEventListener('DOMContentLoaded', function() {
    initObservers();
    lazyLoadImages();
    preloadResources();
    initContactForm();
    
    // Efeito de digitação no subtítulo
    setTimeout(function() {
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const texts = [
                'Desenvolvedor Full Stack',
                'Estudante de Eng. Software',
                'Entusiasta de Tecnologia',
                'Criador de Soluções'
            ];
            typeWriter(typingText, texts, 80);
        }
    }, 2000);
    
    console.log('🚀 Portfólio carregado com sucesso!');
    console.log('💡 Easter Eggs disponíveis:');
    console.log('   • Clique 5x no logo para ativar o modo Matrix');
    console.log('   • Use o Konami Code (↑↑↓↓←→←→BA) para confetti');
});

window.addEventListener('load', function() {
    // Cria partículas após carregamento completo
    if (window.innerWidth > 768) {
        createInteractiveParticles();
    }
    
    // Remove loader se existir
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Animação de entrada da página
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => document.body.style.opacity = '1', 100);
});

// ========================================
// 17. CSS ADICIONAL PARA ANIMAÇÕES
// ========================================

const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes matrix {
        0%, 100% { filter: hue-rotate(0deg) contrast(1); }
        50% { filter: hue-rotate(120deg) contrast(1.5); }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes matrixFall {
        0% { transform: translateY(-100vh); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
    }
    
    @keyframes confettiFall {
        0% { transform: translateY(-100vh) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(720deg); }
    }
    
    @keyframes particleFloat {
        0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.1;
        }
        50% { 
            transform: translateY(-100px) translateX(50px) rotate(180deg);
            opacity: 0.3;
        }
    }
    
    @keyframes notificationProgress {
        0% { transform: scaleX(1); }
        100% { transform: scaleX(0); }
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
    }
    
    .notification-content {
        flex: 1;
        position: relative;
    }
    
    .notification-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    
    .notification-close:hover {
        background: rgba(255,255,255,0.2) !important;
    }
    
    .interactive-particle {
        transition: all 0.3s ease;
    }
    
    .interactive-particle:hover {
        transform: scale(3);
        opacity: 0.5 !important;
    }
`;

document.head.appendChild(additionalStyles);