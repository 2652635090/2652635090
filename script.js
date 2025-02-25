 
document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // 彩蛋系统
    const easterEgg = document.querySelector('.easter-egg');
    let secretCount = 0;
    const minecraftCode = [77, 73, 78, 69, 67, 82, 65, 70, 84]; // MINECRAFT

    // 彩蛋1：MINECRAFT输入
    document.addEventListener('keydown', (e) => {
        keyBuffer.push(e.keyCode);
        if(keyBuffer.slice(-minecraftCode.length).join() === minecraftCode.join()) {
            document.body.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`;
            setTimeout(() => {
                document.body.style.background = '';
            }, 2000);
        }
    });

    // 彩蛋2：点击生成方块
    document.querySelectorAll('.post-content').forEach(post => {
        post.addEventListener('click', function(e) {
            const block = document.createElement('div');
            block.style.cssText = `
                position: absolute;
                width: 16px;
                height: 16px;
                background: ${getRandomColor()};
                left: ${e.pageX - 8}px;
                top: ${e.pageY - 8}px;
                pointer-events: none;
            `;
            document.body.appendChild(block);
            setTimeout(() => block.remove(), 1000);
        });
    });

    // 工具函数
    function getRandomColor() {
        return `hsl(${Math.random() * 360}, 70%, 60%)`;
    }
});
 