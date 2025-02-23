 
document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

    // 彩蛋系统
    let inputBuffer = '';
    const secretCode = 'opensesame';
    const easterEgg = document.createElement('div');
    easterEgg.className = 'easter-egg';
    document.body.appendChild(easterEgg);

    document.addEventListener('keyup', (e) => {
        inputBuffer += e.key.toLowerCase();
        if (inputBuffer.includes(secretCode)) {
            easterEgg.textContent = '🎉';
            easterEgg.style.opacity = '1';
            setTimeout(() => {
                easterEgg.style.opacity = '0';
            }, 2000);
            inputBuffer = '';
        }
    });

    // 恶魔角互动
    document.querySelectorAll('.post-corner').forEach(corner => {
        corner.addEventListener('click', (e) => {
            e.target.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 1000);
        });
    });
});
 