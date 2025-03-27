document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '15px 5%';
            header.style.background = 'rgba(18, 18, 18, 0.95)';
        } else {
            header.style.padding = '20px 5%';
            header.style.background = 'rgba(18, 18, 18, 0.8)';
        }
    });

    // 音频可视化动画
    const bars = document.querySelectorAll('.bar');
    function randomizeHeights() {
        bars.forEach(bar => {
            const height = Math.floor(Math.random() * 30) + 5;
            bar.style.height = `${height}px`;
        });
    }
    
    // 初始随机高度
    randomizeHeights();
    
    // 定期更新高度以模拟音频响应
    setInterval(randomizeHeights, 100);

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 更新活动链接
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // 工具卡片悬停效果
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 简单的轮播效果
    const testimonials = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonials.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonials.classList.add('active');
        startX = e.pageX - testimonials.offsetLeft;
        scrollLeft = testimonials.scrollLeft;
    });

    testimonials.addEventListener('mouseleave', () => {
        isDown = false;
        testimonials.classList.remove('active');
    });

    testimonials.addEventListener('mouseup', () => {
        isDown = false;
        testimonials.classList.remove('active');
    });

    testimonials.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonials.offsetLeft;
        const walk = (x - startX) * 2;
        testimonials.scrollLeft = scrollLeft - walk;
    });

    // 语言切换功能
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // 为当前点击的按钮添加active类
            this.classList.add('active');
            
            // 获取选择的语言
            const selectedLang = this.getAttribute('data-lang');
            
            // 调用翻译函数
            translatePage(selectedLang);
        });
    });

    // 翻译函数
    function translatePage(lang) {
        // 导航菜单
        document.querySelector('nav ul li:nth-child(1) a').textContent = translations[lang].nav.home;
        document.querySelector('nav ul li:nth-child(2) a').textContent = translations[lang].nav.tools;
        document.querySelector('nav ul li:nth-child(3) a').textContent = translations[lang].nav.about;
        document.querySelector('nav ul li:nth-child(4) a').textContent = translations[lang].nav.contact;
        
        // 英雄区域
        document.querySelector('.hero-content h1').textContent = translations[lang].hero.title;
        document.querySelector('.hero-content p').textContent = translations[lang].hero.subtitle;
        document.querySelector('.hero-content .cta-button').textContent = translations[lang].hero.cta;
        
        // 工具区域标题
        document.querySelector('.tools-section h2').textContent = translations[lang].tools.title;
        
        // 特色工具区域
        if (lang === 'en') {
            // 英文版特色工具
            document.querySelector('.featured-content h2').textContent = "Featured Tool: Udio AI";
            document.querySelector('.featured-content p').textContent = "Udio AI is a revolutionary AI music creation platform combining cutting-edge generative AI technology. Simply describe your desired music style, mood, and structure, and Udio AI will create complete musical compositions in seconds. From film scores to pop songs, from classical to electronic, Udio AI can do it all.";
            document.querySelector('.featured-content .cta-button').textContent = "Try for Free";
            
            // 工具卡片内容 - 英文版
            const toolCards = document.querySelectorAll('.tool-card');
            
            // Suno AI
            toolCards[0].querySelector('h3').textContent = "Suno AI";
            toolCards[0].querySelector('p').textContent = "Revolutionary AI music generation tool that creates complete songs with lyrics and vocals from simple prompts";
            toolCards[0].querySelector('.tool-link').textContent = "Visit Website";
            
            // LALAL.AI
            toolCards[1].querySelector('h3').textContent = "LALAL.AI";
            toolCards[1].querySelector('p').textContent = "Professional AI voice isolation tool that extracts or removes vocals, instruments, and other stems from music";
            toolCards[1].querySelector('.tool-link').textContent = "Visit Website";
            
            // LANDR
            toolCards[2].querySelector('h3').textContent = "LANDR";
            toolCards[2].querySelector('p').textContent = "AI-powered professional mixing and mastering platform to make your music sound more professional";
            toolCards[2].querySelector('.tool-link').textContent = "Visit Website";
            
            // Drumloop AI
            toolCards[3].querySelector('h3').textContent = "Drumloop AI";
            toolCards[3].querySelector('p').textContent = "AI drum pattern generator for creating unique rhythm patterns and drum samples";
            toolCards[3].querySelector('.tool-link').textContent = "Visit Website";
            
            // Chord AI
            toolCards[4].querySelector('h3').textContent = "Chord AI";
            toolCards[4].querySelector('p').textContent = "Intelligent chord progression generator to help music creators find the perfect harmony";
            toolCards[4].querySelector('.tool-link').textContent = "Visit Website";
            
            // iZotope RX
            toolCards[5].querySelector('h3').textContent = "iZotope RX";
            toolCards[5].querySelector('p').textContent = "Industry-leading AI audio repair tool for removing noise and imperfections";
            toolCards[5].querySelector('.tool-link').textContent = "Visit Website";
            
            // 用户反馈区域
            document.querySelector('.testimonials h2').textContent = "User Feedback";
            
            // 用户反馈内容
            const testimonials = document.querySelectorAll('.testimonial');
            
            // 第一个用户反馈
            testimonials[0].querySelector('.quote').textContent = '"This platform has completely changed how I create music, allowing me to complete in minutes what used to take days."';
            testimonials[0].querySelector('.author').textContent = '— Zhang Ming, Independent Musician';
            
            // 第二个用户反馈
            testimonials[1].querySelector('.quote').textContent = '"As a film composer, AI tools help me quickly generate ideas and explore new musical directions."';
            testimonials[1].querySelector('.author').textContent = '— Li Hua, Film Composer';
            
            // 第三个用户反馈
            testimonials[2].querySelector('.quote').textContent = '"Even without a professional music background, I can create amazing musical pieces."';
            testimonials[2].querySelector('.author').textContent = '— Wang Fang, Amateur Creator';
            
            // 订阅区域
            document.querySelector('.newsletter h2').textContent = "Subscribe to Our Newsletter";
            document.querySelector('.newsletter p').textContent = "Get the latest AI music tool updates and exclusive tutorials";
            document.querySelector('.newsletter-form input').placeholder = "Enter your email address";
            document.querySelector('.newsletter-form button').textContent = "Subscribe";
            
            // 页脚链接文本
            document.querySelector('.link-group:nth-child(1) h3').textContent = "Navigation";
            document.querySelector('.link-group:nth-child(2) h3').textContent = "Resources";
            document.querySelector('.link-group:nth-child(3) h3').textContent = "Legal";
            
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(1) a').textContent = "Home";
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(2) a').textContent = "Tools";
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(3) a').textContent = "About";
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(4) a').textContent = "Contact";
            
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(1) a').textContent = "Blog";
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(2) a').textContent = "Tutorials";
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(3) a').textContent = "FAQ";
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(4) a').textContent = "Support";
            
            document.querySelector('.link-group:nth-child(3) ul li:nth-child(1) a').textContent = "Privacy Policy";
            document.querySelector('.link-group:nth-child(3) ul li:nth-child(2) a').textContent = "Terms of Use";
            document.querySelector('.link-group:nth-child(3) ul li:nth-child(3) a').textContent = "Copyright Info";
            
            document.querySelector('.copyright p').textContent = "© 2023 SonicAI. All rights reserved.";
            
            // 关于我们部分 - 英文
            document.querySelector('.about-header h2').textContent = translations.en.about.title;
            document.querySelector('.about-header .subtitle').textContent = translations.en.about.subtitle;
            
            document.querySelector('.about-story h3').textContent = translations.en.about.story.title;
            document.querySelector('.about-story p:nth-child(2)').textContent = translations.en.about.story.p1;
            document.querySelector('.about-story p:nth-child(3)').textContent = translations.en.about.story.p2;
            
            document.querySelector('.about-mission h3').textContent = translations.en.about.mission.title;
            document.querySelector('.about-mission > p').textContent = translations.en.about.mission.description;
            
            document.querySelector('.mission-point:nth-child(1) h4').textContent = translations.en.about.mission.points.discover.title;
            document.querySelector('.mission-point:nth-child(1) p').textContent = translations.en.about.mission.points.discover.description;
            
            document.querySelector('.mission-point:nth-child(2) h4').textContent = translations.en.about.mission.points.innovate.title;
            document.querySelector('.mission-point:nth-child(2) p').textContent = translations.en.about.mission.points.innovate.description;
            
            document.querySelector('.mission-point:nth-child(3) h4').textContent = translations.en.about.mission.points.empower.title;
            document.querySelector('.mission-point:nth-child(3) p').textContent = translations.en.about.mission.points.empower.description;
            
            document.querySelector('.team-section h3').textContent = translations.en.about.team.title;
            
            document.querySelector('.team-member:nth-child(1) h4').textContent = translations.en.about.team.members.ceo.name;
            document.querySelector('.team-member:nth-child(1) .member-title').textContent = translations.en.about.team.members.ceo.title;
            document.querySelector('.team-member:nth-child(1) .member-bio').textContent = translations.en.about.team.members.ceo.bio;
            
            document.querySelector('.team-member:nth-child(2) h4').textContent = translations.en.about.team.members.product.name;
            document.querySelector('.team-member:nth-child(2) .member-title').textContent = translations.en.about.team.members.product.title;
            document.querySelector('.team-member:nth-child(2) .member-bio').textContent = translations.en.about.team.members.product.bio;
            
            document.querySelector('.team-member:nth-child(3) h4').textContent = translations.en.about.team.members.tech.name;
            document.querySelector('.team-member:nth-child(3) .member-title').textContent = translations.en.about.team.members.tech.title;
            document.querySelector('.team-member:nth-child(3) .member-bio').textContent = translations.en.about.team.members.tech.bio;
            
            // 分享部分 - 英文
            document.querySelector('.share-section h2').textContent = translations.en.share.title;
            document.querySelector('.share-section > .share-container > p').textContent = translations.en.share.subtitle;
            
            document.querySelector('.share-button:nth-child(1) span').textContent = translations.en.share.buttons.twitter;
            document.querySelector('.share-button:nth-child(2) span').textContent = translations.en.share.buttons.facebook;
            document.querySelector('.share-button:nth-child(3) span').textContent = translations.en.share.buttons.linkedin;
            document.querySelector('.share-button:nth-child(4) span').textContent = translations.en.share.buttons.whatsapp;
            document.querySelector('.share-button.copy-link span').textContent = translations.en.share.buttons.copyLink;
            
            // 更新分享链接中的文本
            const twitterLink = document.querySelector('.share-button:nth-child(1)');
            twitterLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(translations.en.share.twitterText)}&url=https://sonicai.com`;
            
            const whatsappLink = document.querySelector('.share-button:nth-child(4)');
            whatsappLink.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(translations.en.share.whatsappText)}`;
            
        } else {
            // 中文版特色工具
            document.querySelector('.featured-content h2').textContent = "本月推荐: Udio AI";
            document.querySelector('.featured-content p').textContent = "Udio AI是一款革命性的AI音乐创作平台，结合了最先进的生成式AI技术。只需描述你想要的音乐风格、情绪和结构，Udio AI就能在几秒钟内为你创作出完整的音乐作品。从电影配乐到流行歌曲，从古典到电子，Udio AI都能胜任。";
            document.querySelector('.featured-content .cta-button').textContent = "免费试用";
            
            // 工具卡片内容 - 中文版
            const toolCards = document.querySelectorAll('.tool-card');
            
            // Suno AI
            toolCards[0].querySelector('h3').textContent = "Suno AI";
            toolCards[0].querySelector('p').textContent = "革命性的AI音乐生成工具，只需简单描述即可创作完整歌曲，包含歌词和人声";
            toolCards[0].querySelector('.tool-link').textContent = "访问官网";
            
            // LALAL.AI
            toolCards[1].querySelector('h3').textContent = "LALAL.AI";
            toolCards[1].querySelector('p').textContent = "专业的AI人声分离工具，可提取或移除音乐中的人声、乐器和其他音轨";
            toolCards[1].querySelector('.tool-link').textContent = "访问官网";
            
            // LANDR
            toolCards[2].querySelector('h3').textContent = "LANDR";
            toolCards[2].querySelector('p').textContent = "AI驱动的专业混音和母带处理平台，让你的音乐听起来更专业";
            toolCards[2].querySelector('.tool-link').textContent = "访问官网";
            
            // Drumloop AI
            toolCards[3].querySelector('h3').textContent = "Drumloop AI";
            toolCards[3].querySelector('p').textContent = "AI鼓点生成器，创建独特的节奏模式和鼓组样本";
            toolCards[3].querySelector('.tool-link').textContent = "访问官网";
            
            // Chord AI
            toolCards[4].querySelector('h3').textContent = "Chord AI";
            toolCards[4].querySelector('p').textContent = "智能和弦进行生成工具，帮助音乐创作者找到完美的和声";
            toolCards[4].querySelector('.tool-link').textContent = "访问官网";
            
            // iZotope RX
            toolCards[5].querySelector('h3').textContent = "iZotope RX";
            toolCards[5].querySelector('p').textContent = "行业领先的AI音频修复工具，消除噪音和瑕疵";
            toolCards[5].querySelector('.tool-link').textContent = "访问官网";
            
            // 用户反馈区域
            document.querySelector('.testimonials h2').textContent = "用户反馈";
            
            // 用户反馈内容
            const testimonials = document.querySelectorAll('.testimonial');
            
            // 第一个用户反馈
            testimonials[0].querySelector('.quote').textContent = '"这个平台彻底改变了我的音乐创作方式，让我能够在几分钟内完成以前需要几天的工作。"';
            testimonials[0].querySelector('.author').textContent = '— 张明，独立音乐人';
            
            // 第二个用户反馈
            testimonials[1].querySelector('.quote').textContent = '"作为一名电影配乐师，AI工具帮助我快速生成创意并探索新的音乐方向。"';
            testimonials[1].querySelector('.author').textContent = '— 李华，电影配乐师';
            
            // 第三个用户反馈
            testimonials[2].querySelector('.quote').textContent = '"即使没有专业的音乐背景，我也能创作出令人惊叹的音乐作品。"';
            testimonials[2].querySelector('.author').textContent = '— 王芳，业余创作者';
            
            // 订阅区域
            document.querySelector('.newsletter h2').textContent = "订阅我们的通讯";
            document.querySelector('.newsletter p').textContent = "获取最新AI音乐工具更新和独家教程";
            document.querySelector('.newsletter-form input').placeholder = "输入您的邮箱地址";
            document.querySelector('.newsletter-form button').textContent = "订阅";
            
            // 页脚链接文本
            document.querySelector('.link-group:nth-child(1) h3').textContent = "导航";
            document.querySelector('.link-group:nth-child(2) h3').textContent = "资源";
            document.querySelector('.link-group:nth-child(3) h3').textContent = "法律";
            
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(1) a').textContent = "首页";
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(2) a').textContent = "工具库";
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(3) a').textContent = "关于我们";
            document.querySelector('.link-group:nth-child(1) ul li:nth-child(4) a').textContent = "联系方式";
            
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(1) a').textContent = "博客";
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(2) a').textContent = "教程";
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(3) a').textContent = "常见问题";
            document.querySelector('.link-group:nth-child(2) ul li:nth-child(4) a').textContent = "支持";
            
            document.querySelector('.link-group:nth-child(3) ul li:nth-child(1) a').textContent = "隐私政策";
            document.querySelector('.link-group:nth-child(3) ul li:nth-child(2) a').textContent = "使用条款";
            document.querySelector('.link-group:nth-child(3) ul li:nth-child(3) a').textContent = "版权信息";
            
            document.querySelector('.copyright p').textContent = "© 2023 SonicAI. 保留所有权利。";
            
            // 关于我们部分 - 中文
            document.querySelector('.about-header h2').textContent = translations.zh.about.title;
            document.querySelector('.about-header .subtitle').textContent = translations.zh.about.subtitle;
            
            document.querySelector('.about-story h3').textContent = translations.zh.about.story.title;
            document.querySelector('.about-story p:nth-child(2)').textContent = translations.zh.about.story.p1;
            document.querySelector('.about-story p:nth-child(3)').textContent = translations.zh.about.story.p2;
            
            document.querySelector('.about-mission h3').textContent = translations.zh.about.mission.title;
            document.querySelector('.about-mission > p').textContent = translations.zh.about.mission.description;
            
            document.querySelector('.mission-point:nth-child(1) h4').textContent = translations.zh.about.mission.points.discover.title;
            document.querySelector('.mission-point:nth-child(1) p').textContent = translations.zh.about.mission.points.discover.description;
            
            document.querySelector('.mission-point:nth-child(2) h4').textContent = translations.zh.about.mission.points.innovate.title;
            document.querySelector('.mission-point:nth-child(2) p').textContent = translations.zh.about.mission.points.innovate.description;
            
            document.querySelector('.mission-point:nth-child(3) h4').textContent = translations.zh.about.mission.points.empower.title;
            document.querySelector('.mission-point:nth-child(3) p').textContent = translations.zh.about.mission.points.empower.description;
            
            document.querySelector('.team-section h3').textContent = translations.zh.about.team.title;
            
            document.querySelector('.team-member:nth-child(1) h4').textContent = translations.zh.about.team.members.ceo.name;
            document.querySelector('.team-member:nth-child(1) .member-title').textContent = translations.zh.about.team.members.ceo.title;
            document.querySelector('.team-member:nth-child(1) .member-bio').textContent = translations.zh.about.team.members.ceo.bio;
            
            document.querySelector('.team-member:nth-child(2) h4').textContent = translations.zh.about.team.members.product.name;
            document.querySelector('.team-member:nth-child(2) .member-title').textContent = translations.zh.about.team.members.product.title;
            document.querySelector('.team-member:nth-child(2) .member-bio').textContent = translations.zh.about.team.members.product.bio;
            
            document.querySelector('.team-member:nth-child(3) h4').textContent = translations.zh.about.team.members.tech.name;
            document.querySelector('.team-member:nth-child(3) .member-title').textContent = translations.zh.about.team.members.tech.title;
            document.querySelector('.team-member:nth-child(3) .member-bio').textContent = translations.zh.about.team.members.tech.bio;
            
            // 分享部分 - 中文
            document.querySelector('.share-section h2').textContent = translations.zh.share.title;
            document.querySelector('.share-section > .share-container > p').textContent = translations.zh.share.subtitle;
            
            document.querySelector('.share-button:nth-child(1) span').textContent = translations.zh.share.buttons.twitter;
            document.querySelector('.share-button:nth-child(2) span').textContent = translations.zh.share.buttons.facebook;
            document.querySelector('.share-button:nth-child(3) span').textContent = translations.zh.share.buttons.linkedin;
            document.querySelector('.share-button:nth-child(4) span').textContent = translations.zh.share.buttons.whatsapp;
            document.querySelector('.share-button.copy-link span').textContent = translations.zh.share.buttons.copyLink;
            
            // 更新分享链接中的文本
            const twitterLink = document.querySelector('.share-button:nth-child(1)');
            twitterLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(translations.zh.share.twitterText)}&url=https://sonicai.com`;
            
            const whatsappLink = document.querySelector('.share-button:nth-child(4)');
            whatsappLink.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(translations.zh.share.whatsappText)}`;
        }
    }

    // 在DOMContentLoaded事件处理函数中添加
    const exploreButton = document.querySelector('.hero-content .cta-button');
    exploreButton.addEventListener('click', function() {
        const toolsSection = document.querySelector('#tools');
        window.scrollTo({
            top: toolsSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });

    // 复制链接功能
    const copyLinkButton = document.querySelector('.copy-link');
    copyLinkButton.addEventListener('click', function() {
        // 创建一个临时输入框
        const tempInput = document.createElement('input');
        // 设置要复制的文本
        tempInput.value = 'https://sonicai.com';
        // 将输入框添加到文档
        document.body.appendChild(tempInput);
        // 选择输入框的内容
        tempInput.select();
        // 复制选中的文本
        document.execCommand('copy');
        // 移除临时输入框
        document.body.removeChild(tempInput);
        
        // 显示复制成功提示
        const originalText = copyLinkButton.querySelector('span').textContent;
        copyLinkButton.querySelector('span').textContent = '链接已复制！';
        
        // 2秒后恢复原始文本
        setTimeout(() => {
            copyLinkButton.querySelector('span').textContent = originalText;
        }, 2000);
    });
}); 