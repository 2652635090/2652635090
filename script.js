 
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 导航栏动画控制器
    let navState = false;
    const nav = document.getElementById('nav');
    
    // 头像交互系统
    const avatar = document.getElementById('avatar');
    let rotateCount = 0;
    
    avatar.addEventListener('click', () => {
        rotateCount += 30;
        avatar.style.transform = `rotate(${rotateCount}deg)`;
        
        // 激活隐藏菜单
        if (rotateCount % 360 === 90) {
            nav.classList.add('active');
            setTimeout(() => nav.classList.remove('active'), 5000);
        }
    });

    // 动态星空生成器
    function createStars() {
        const container = document.querySelector('.star-field');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3}px;
                height: ${Math.random() * 3}px;
                background: white;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random()};
            `;
            container.appendChild(star);
        }
    }
    createStars();

    // 全息卡片悬浮系统
    document.querySelectorAll('.hologram-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 隐藏彩蛋触发器 (Konami Code)
    const egg = document.getElementById('egg');
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        e.key === konamiCode[konamiIndex] ? konamiIndex++ : konamiIndex = 0;
        
        if (konamiIndex === konamiCode.length) {
            egg.style.opacity = '1';
            egg.style.bottom = '20px';
            setTimeout(() => {
                egg.style.opacity = '0';
                egg.style.bottom = '-100px';
            }, 2000);
        }
    });
});
 