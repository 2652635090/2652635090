 
// 主题切换魔法
const themeSwitch = document.getElementById('themeSwitch');
let isMatrixMode = false;

themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(isMatrixMode) {
        document.body.classList.remove('matrix-theme');
        isMatrixMode = false;
    }
    // 10% 概率触发隐藏主题
    if(Math.random() < 0.1) {
        document.body.classList.add('matrix-theme');
        isMatrixMode = true;
        alert('🔮 你发现了数字矩阵空间！');
    }
});

// 头像彩蛋
let clickCount = 0;
const secretAvatar = document.getElementById('secretAvatar');

secretAvatar.addEventListener('click', () => {
    clickCount++;
    if(clickCount === 5) {
        document.body.classList.add('secret-activated');
        alert('🎉 恭喜发现开发者模式！试试在控制台输入 secretCode()');
    }
});

// 键盘秘籍
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let inputSequence = [];

document.addEventListener('keydown', (e) => {
    inputSequence.push(e.key);
    if(inputSequence.slice(-10).join('') === konamiCode.join('')) {
        document.body.style.transform = 'rotate(180deg)';
        setTimeout(() => document.body.style.transform = '', 2000);
    }
});

// 控制台彩蛋
window.secretCode = () => {
    console.log('%c✨ 你找到了终极彩蛋！', 'font-size: 24px; color: #ff69b4;');
    console.log('试试在文章列表用鼠标画个爱心 💖');
};

// 动态生成博客内容
const posts = [
    { title: '如何驯服一只代码兽', tags: ['🤖', '冒险'] },
    { title: 'CSS魔法烹饪指南', tags: ['✨', '秘术'] },
    // 更多文章...
];

const postContainer = document.getElementById('postContainer');
posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post-card';
    article.innerHTML = `
        <h3>${post.title}</h3>
        <div class="post-tags">${post.tags.join(' ')}</div>
    `;
    postContainer.appendChild(article);
});
 