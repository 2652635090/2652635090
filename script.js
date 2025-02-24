 
// 访问计数器
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
document.getElementById('visitCount').textContent = visitCount;
localStorage.setItem('visitCount', visitCount);

// 动态生成文章
const posts = [
    { title: "🌱 小屋落成日记", content: "记录数字小屋从构想到实现的完整过程..." },
    { title: "📚 近期书单推荐", content: "分享三本改变我世界观的好书" },
    { title: "🍵 茶道研习笔记", content: "探索日本茶道与中式茶艺的异同" },
    { title: "🌳 森林疗愈之旅", content: "在大自然中寻找内心的平静" }
];

const postsContainer = document.getElementById('postsContainer');
posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post-card';
    article.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    postsContainer.appendChild(article);
});

// 导航交互
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('nav-show');
});

// 滚动隐藏导航
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        mainNav.classList.remove('nav-show');
    }
});

// 彩蛋系统
// 1. 头像点击特效
document.getElementById('mainAvatar').addEventListener('click', function() {
    this.style.transform = 'rotate(720deg) scale(1.2)';
    setTimeout(() => this.style.transform = '', 1000);
    
    const egg = document.getElementById('easterEgg');
    egg.style.display = 'block';
    setTimeout(() => egg.style.display = 'none', 2000);
});

// 2. 键盘秘籍
let inputSequence = [];
document.addEventListener('keydown', (e) => {
    inputSequence.push(e.key);
    if (inputSequence.slice(-4).join('') === 'momo') {
        document.body.style.background = `hsl(${Math.random()*360}, 15%, 12%)`;
        inputSequence = [];
    }
});

// 3. 鼠标轨迹特效
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.textContent = ['✨', '🍃', '🌌'][Math.floor(Math.random()*3)];
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    }
});

// 添加轨迹动画
const style = document.createElement('style');
style.textContent = `
@keyframes trail {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(3); }
}

.mouse-trail {
    position: fixed;
    pointer-events: none;
    animation: trail 1s ease-out;
    color: #8a9a8a;
    font-size: 1.2rem;
}
`;
document.head.appendChild(style);
 