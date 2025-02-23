 
// 增加响应式检测
function checkResponsive() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    document.body.classList.toggle('mobile-view', isMobile);
}

// 在窗口变化时检测
window.addEventListener('resize', checkResponsive);
checkResponsive();

// 优化后的主题切换
const themeSwitch = document.getElementById('themeSwitch');
let isMatrixMode = false;

themeSwitch.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    themeSwitch.textContent = isDark ? '🌞' : '🌙';
    
    if(isMatrixMode) {
        document.body.classList.remove('matrix-theme');
        isMatrixMode = false;
    }
    
    if(Math.random() < 0.1) {
        document.body.classList.add('matrix-theme');
        isMatrixMode = true;
        setTimeout(() => alert('🔮 你发现了数字矩阵空间！'), 300);
    }
});

// 优化移动端点击事件
let lastTap = 0;
secretAvatar.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTap < 500) clickCount++;
    else clickCount = 1;
    lastTap = currentTime;
    
    if(clickCount >= 5) {
        handleSecretActivation();
    }
});

// 其他保持原有交互逻辑...
 