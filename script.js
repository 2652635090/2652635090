 
// 侧边栏控制
const menuButton = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const menuLines = document.querySelectorAll('.menu-line');

// 菜单按钮动画
function toggleMenu() {
    sidebar.classList.toggle('active');
    menuLines.forEach(line => {
        line.classList.toggle('active');
    });
}

// 点击外部关闭侧边栏
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
        sidebar.classList.remove('active');
        menuLines.forEach(line => line.classList.remove('active'));
    }
});

// 卡片交互效果
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.98)';
    });
    
    card.addEventListener('mouseup', () => {
        card.style.transform = '';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.title').style.textShadow = '0 0 10px #7dff7d';
    }, 500);
});

// 移动端触摸事件处理
let touchStartX = 0;

sidebar.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

sidebar.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        sidebar.classList.remove('active');
    }
});
 