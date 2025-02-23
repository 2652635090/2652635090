 
document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger && hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

    // 三重彩蛋系统
    const easterEgg = document.querySelector('.easter-egg');
    let secretCount = 0;

    // 彩蛋1：三击标题触发
    document.querySelector('h1').addEventListener('dblclick', () => {
        secretCount++;
        if(secretCount >= 3) {
            document.body.classList.add('secret-mode');
            setTimeout(() => {
                document.body.classList.remove('secret-mode');
            }, 5000);
            secretCount = 0;
        }
    });

    // 彩蛋2：输入密码
    let keyBuffer = [];
    const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // 上下上下左右左右BA
    document.addEventListener('keydown', (e) => {
        keyBuffer.push(e.keyCode);
        if(keyBuffer.slice(-secretCode.length).join() === secretCode.join()) {
            easterEgg.style.opacity = '1';
            easterEgg.style.bottom = '20px';
            setTimeout(() => {
                easterEgg.style.opacity = '0';
                easterEgg.style.bottom = '-50px';
            }, 2000);
        }
    });

    // 彩蛋3：长按页脚
    const footer = document.querySelector('footer');
    let pressTimer;
    footer.addEventListener('mousedown', () => {
        pressTimer = window.setTimeout(() => {
            document.documentElement.style.transform = 'rotate(180deg)';
        }, 3000);
    });
    
    footer.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
        document.documentElement.style.transform = '';
    });
});
 