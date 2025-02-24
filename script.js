 
// 访问计数器
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
document.getElementById('visitCount').textContent = visitCount;
localStorage.setItem('visitCount', visitCount);

// 动态生成文章
const posts = [
    { title: "🎀 欢迎来到我的小屋！", content: "这是我的第一个博客文章，快来和我做朋友吧～" },
    { title: "📸 今日自拍", content: "发现了一家超可爱的咖啡店！" },
    { title: "🍰 烘焙日记", content: "第一次尝试做草莓蛋糕大成功！" }
];

const postsContainer = document.getElementById('postsContainer');
posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post-card';
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
});

// 彩蛋1: 点击头像特效
document.getElementById('mainAvatar').addEventListener('click', function() {
    this.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'none';
    }, 1000);
    
    const egg = document.getElementById('easterEgg');
    egg.style.display = 'block';
    setTimeout(() => {
        egg.style.display = 'none';
    }, 2000);
});

// 彩蛋2: 键盘秘籍
let konamiCode = [];
document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.slice(-4).join('') === 'momo') {
        document.body.style.background = `hsl(${Math.random()*360}, 70%, 90%)`;
        konamiCode = [];
    }
});

// 彩蛋3: 鼠标跟随特效
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) { // 10%概率触发
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.left = e.pageX + 'px';
        star.style.top = e.pageY + 'px';
        star.style.color = '#FF69B4';
        star.textContent = '✨';
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 1000);
    }
});
 