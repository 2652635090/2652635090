 
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 头像旋转功能
    const avatar = document.getElementById('rotatingAvatar');
    let rotated = false;
    
    avatar.addEventListener('click', () => {
        rotated = !rotated;
        avatar.style.transform = rotated ? 'rotate(30deg)' : 'rotate(0deg)';
    });

    // 侧边栏导航控制
    const sidebar = document.querySelector('.sidebar-nav');
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.nav-item')) {
            sidebar.classList.remove('active');
        }
    });

    // 移动端侧边栏手势控制
    let touchStartX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        
        if (deltaX > 60) {
            sidebar.classList.add('active');
        } else if (deltaX < -60) {
            sidebar.classList.remove('active');
        }
    });

    // 桌面端悬停显示侧边栏
    document.addEventListener('mousemove', e => {
        if (e.clientX < 20 && !sidebar.classList.contains('active')) {
            sidebar.classList.add('active');
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        sidebar.classList.remove('active');
    });
});
 