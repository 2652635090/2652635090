 
// 访问计数器
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
document.getElementById('visitCount').textContent = visitCount;
localStorage.setItem('visitCount', visitCount);

// 动态生成文章
const posts = [
    { title: "🌱 小屋正式落成", content: "经过精心准备，我的数字小屋终于建成啦！" },
    { title: "📖 读书笔记", content: "《森林如何思考》的阅读心得分享" },
    { title: "🍵 茶道体验", content: "今日尝试了抹茶制作的全过程" }
];

const postsContainer = document.getElementById('postsContainer');
posts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.className = 'post-card';
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
});

// 导航功能
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('nav-show');
});

// 滚动隐藏导航
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        mainNav.classList.remove('nav-show');
    }
    lastScroll = currentScroll;
});

// 彩蛋系统
// 1. 头像点击特效
document.getElementById('mainAvatar').addEventListener('click', function() {
    this.style.transform = 'rotate(720deg) scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'none';
    }, 1000);
    
    const egg = document.getElementById('easterEgg');
    egg.style.display = 'block';
    setTimeout(() => {
        egg.style.display = 'none';
    }, 2000);
});

// 2. 键盘秘籍
let konamiCode = [];
document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.slice(-4).join('') === 'momo') {
        document.body.style.background = `hsl(${Math.random()*360}, 15%, 20%)`;
        konamiCode = [];
    }
});

// 3. 鼠标落叶特效
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.08) {
        const leaf = document.createElement('div');
        leaf.style.position = 'fixed';
        leaf.style.left = e.pageX + 'px';
        leaf.style.top = e.pageY + 'px';
        leaf.style.color = '#8a9a8a';
        leaf.textContent = ['🍃', '🍂', '🌿'][Math.floor(Math.random()*3)];
        leaf.style.animation = 'float 3s linear';
        document.body.appendChild(leaf);
        
        setTimeout(() => {
            leaf.remove();
        }, 3000);
    }
});

// 落叶动画
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}
`;
document.head.appendChild(style);
 