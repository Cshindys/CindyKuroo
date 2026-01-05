const eventDetails = {
    event1: {
        title: '🖤「愛的暗殺事件🌱」',
        time: '記錄時間：未知',
        description: 'シンデイ領養了一盆據說「絕對不會死」的多肉植物——仙人掌，一種理論上放置不管也能存活的植物，在其照料下宣告生命終結。然而，出於對新生命的過度關愛，她認為生長在沙漠的仙人掌一定很缺水，因此堅持每日早、午、晚三次為其澆水。一週後，該仙人掌因根部腐爛而宣告枯萎。此事件成為園藝學會傳說中的「愛的暗殺事件」。',
        conversations: [
            { speaker: '黒尾', text: 'あれあれ...身為園藝學會的成員，居然能親手將生命力最頑強的仙人掌給『處決』掉，這可不是一般人能辦到的才能啊～', type: 'kuroo' },
            { speaker: 'シンディ', text: '我...我不是故意的！我只是...怕它口渴。而且我看《園藝新手指南》中上說植物需要陽光和水，我就想給它多一點...再多一點的關心嘛！', type: 'cindy' }
        ]
    },
    event2: {
        title: '🖤「圖書館書本空襲事件📕」',
        time: '記錄時間：午休時間',
        description: 'シンデイ在圖書館尋找資料。當她試圖從高層書架上取下一本厚重的精裝圖鑑時，因身高不足導致滑落，其中一本精準地砸中了她自己的頭頂。',
        conversations: [
            { speaker: '黒尾', text: '啊，那次啊。我在看書看得正入神，就聽到『咚』的一聲悶響。一看就發現某個小貓正抱著頭，蹲在地上。', type: 'kuroo' },
            { speaker: 'シンディ', text: '我看到黒尾さん在很專心地看書，不想打擾你嘛...', type: 'cindy' }
        ]
    },
    event3: {
        title: '🖤「左腳的愛過於沉重」',
        time: '記錄時間：黑尾生日(11月17日)',
        description: '在生日當天，シンデイ送給黑尾兩個護膝。然而，當黑尾打開禮盒後，卻發現裡面靜靜地躺著兩個——包裝、設計、型號完全一致的「左腳專用護膝」。',
        conversations: [
            { speaker: '黒尾', text: '我拿起另一個...上面還是個『L』。我是要進化成有兩條左腿的生物嗎？', type: 'kuroo' },
            { speaker: 'シンディ', text: '我、我真的不是故意的！貨架上左腳和右腳的護膝是放在一起的...', type: 'cindy' },
            { speaker: '黒尾', text: '放心，另一個...就當作備用吧。', type: 'kuroo' }
        ]
    }
};

function openModal(eventId) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    const event = eventDetails[eventId];
    
    if(!event) return;

    let conversationsHTML = '';
    event.conversations.forEach(conv => {
        const avatarSrc = conv.type === 'kuroo' 
            ? '/Users/cindy/Desktop/Design✨/KurooCin Web/KurooQQ.png' 
            : '/Users/cindy/Desktop/Design✨/KurooCin Web/CindyAQQ(Transparent).png';
            
        conversationsHTML += `
            <div class="conversation ${conv.type}">
                <div class="conversation-avatar">
                        <img src="${avatarSrc}" alt="${conv.type}">
                </div>
                <div class="conversation-content">
                    <div class="conversation-name">${conv.speaker}</div>
                    <div class="conversation-text">${conv.text}</div>
                </div>
            </div>
        `;
    });

    modalBody.innerHTML = `
        <h2 style="font-size: 2.2rem; font-weight: 700; margin-bottom: 20px; color: #E8B4D9;">${event.title}</h2>
        <p style="font-size: 1.1rem; color: #999; margin-bottom: 25px;">${event.time}</p>
        <div style="background: linear-gradient(135deg, rgba(232, 180, 217, 0.1) 0%, rgba(180, 167, 214, 0.1) 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; line-height: 1.8; font-size: 1.2rem;">
            ${event.description}
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 25px;">對話記錄</h3>
        <div class="event-conversations" style="display: flex; flex-direction: column; gap: 20px;">
            ${conversationsHTML}
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        closeModal();
    }
};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToId(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offset = 160; /* Adjusted for larger header */
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach(event => {
        observer.observe(event);
    });
});

document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});
