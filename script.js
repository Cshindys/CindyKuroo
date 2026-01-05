const storyDatabase = [
    {
        id: 'event1',
        title: '🖤「愛的暗殺事件🌱」',
        date: '記錄時間：未知',
        description: 'シンデイ領養了一盆據說「絕對不會死」的多肉植物——仙人掌，一種理論上放置不管也能存活的植物。出於對新生命的過度關愛，她認為生長在沙漠的仙人掌一定很缺水，因此堅持每日早、午、晚三次為其澆水。一週後，該仙人掌因根部腐爛而宣告枯萎。此事件成為園藝學會傳說中的「愛的暗殺事件」。',
        content: [
            { type: 'paragraph', text: '那天是個陽光明媚的午後，シンデイ抱著一盆小小的仙人掌走進了園藝社。她的眼神充滿了母愛，彷彿懷裡抱著的是全世界最珍貴的寶物。' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '你看！這是新成員「刺刺君」！店員說它生命力超強，絕對養不死！' },
            { type: 'paragraph', text: '然而，僅僅過了一週...' },
            { type: 'timestamp', text: '一週後的某個黃昏' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: 'あれあれ...身為園藝學會的成員，居然能親手將生命力最頑強的仙人掌給『處決』掉，這可不是一般人能辦到的才能啊～' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '我...我不是故意的！我只是...怕它口渴。而且我看《園藝新手指南》中上說植物需要陽光和水，我就想給它多一點...再多一點的關心嘛！' },
            { type: 'paragraph', text: '黑尾看著那盆已經軟趴趴的仙人掌，無奈地嘆了口氣，嘴角卻掛著掩飾不住的笑意。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '這大概就是傳說中「沉重的愛」吧？連仙人掌都承受不住了呢。' }
        ]
    },
    {
        id: 'event2',
        title: '🖤「圖書館書本空襲事件📕」',
        date: '記錄時間：午休時間',
        description: 'シンデイ在圖書館尋找資料。當她試圖從高層書架上取下一本厚重的精裝圖鑑時，因身高不足導致滑落，其中一本精準地砸中了她自己的頭頂。',
        content: [
            { type: 'paragraph', text: '圖書館裡靜悄悄的，只有翻書的聲音。シンデイ踮起腳尖，試圖夠到書架最上層那本厚重的植物圖鑑。' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '再一點點...就差一點點...' },
            { type: 'paragraph', text: '就在指尖碰到書脊的一瞬間，重心不穩，整排書像骨牌一樣滑落下來。' },
            { type: 'timestamp', text: '砰！' },
            { type: 'paragraph', text: '一聲悶響，一本精裝書精準地砸在了她的頭頂。她痛得立刻蹲了下去，抱著頭眼淚汪汪。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '啊，那次啊。我在看書看得正入神，就聽到『咚』的一聲悶響。一看就發現某個小貓正抱著頭，蹲在地上。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '妳說妳，明明知道自己搆不著，為什麼不叫人幫忙？我不是就坐在妳對面嗎？' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '嗚...我看到黒尾さん在很專心地看書，不想打擾你嘛...' },
            { type: 'paragraph', text: '黑尾嘆了口氣，走過來輕輕揉了揉她被砸中的地方，眼神裡滿是無奈與寵溺。' }
        ]
    },
    {
        id: 'event3',
        title: '🖤「左腳的愛過於沉重」',
        date: '記錄時間：黑尾生日(11月17日)',
        description: '在生日當天，シンデイ送給黑尾兩個護膝。然而，當黑尾打開禮盒後，卻發現裡面靜靜地躺著兩個——包裝、設計、型號完全一致的「左腳專用護膝」。',
        content: [
            { type: 'paragraph', text: '這是黑尾的生日。為了這一天，シンデイ準備了很久，特意挑選了據說能有效緩解肌肉疲勞的專業運動護膝。' },
            { type: 'timestamp', text: '部活結束後' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '黑尾學長！生日快樂！這是我挑選的禮物，希望你能喜歡！' },
            { type: 'paragraph', text: '黑尾接過包裝精美的盒子，滿懷期待地打開。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '哦？是護膝啊，正好舊的快壞了...嗯？' },
            { type: 'paragraph', text: '他拿起其中一個，上面標著「L (Left)」。他笑著點點頭。然後他拿起了另一個...' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '...上面還是個『L』。我是要進化成有兩條左腿的生物嗎？' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '誒？！怎、怎麼會！我明明是從貨架上拿的一對啊！' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '我、我真的不是故意的！包裝盒幾乎一模一樣！對不起！！' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '我當時腦子裡只有一個想法：『妳是覺得我的右腳不配得到愛嗎？』' },
            { type: 'paragraph', text: '雖然嘴上這麼說，但黑尾還是把兩個左腳護膝都收好了。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '放心，另一個...就當作備用吧。這份「沉重」的愛，我收下了。' }
        ]
    }
];

/* --- TAB LOGIC START --- */
function toggleTab(tabId) {
    // 1. Hide all tab sections
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.remove('active');
        // Small timeout to allow css transition if needed, or simply toggle display via class
        setTimeout(() => {
            if(!section.classList.contains('active')) {
                section.style.display = 'none';
            }
        }, 300); // Matches CSS transition time roughly
        section.style.display = 'none'; // Force hide immediately for snappy feel, let CSS class handle opacity
    });

    // 2. Show the selected tab
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        // Allow a slight delay for display:block to apply before adding opacity class
        setTimeout(() => {
            selectedSection.classList.add('active');
        }, 10);
    }

    // 3. Update Button States
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Determine which button to make active
    if (tabId === 'interview-zone') {
        document.getElementById('btn-interview').classList.add('active');
    } else if (tabId === 'timeline-zone') {
        document.getElementById('btn-timeline').classList.add('active');
    }
}

// Special function for the Top Circle Navigation
function switchTabAndScroll(tabId) {
    // First, switch the tab
    toggleTab(tabId);
    
    // Then scroll to the filter bar (so the user sees the content)
    // We scroll to filter-bar-anchor instead of the section itself for better positioning
    const element = document.getElementById('filter-bar-anchor');
    if (element) {
        const offset = 150; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}
/* --- TAB LOGIC END --- */

/* --- STORY VIEWER LOGIC --- */
let currentStoryIndex = 0;

function openStoryModal(eventId) {
    // Find index of the clicked event
    currentStoryIndex = storyDatabase.findIndex(story => story.id === eventId);
    if(currentStoryIndex === -1) return;

    renderStory(currentStoryIndex);
    
    document.getElementById('eventModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function renderStory(index) {
    const story = storyDatabase[index];
    const modalBody = document.getElementById('modalBody');
    
    // Build Content HTML
    let contentHTML = '';
    
    story.content.forEach(item => {
        if(item.type === 'paragraph') {
            contentHTML += `<p class="story-paragraph">${item.text}</p>`;
        } else if (item.type === 'timestamp') {
            contentHTML += `<div class="story-timestamp">--- ${item.text} ---</div>`;
        } else if (item.type === 'dialogue') {
            // Determine avatar based on speaker name
            // Use local paths provided in index.html
            const avatar = item.speaker.includes('黒尾') 
                ? '/Users/cindy/Desktop/Design✨/KurooCin Web/KurooQQ(Transparent).png' 
                : '/Users/cindy/Desktop/Design✨/KurooCin Web/CindyQQ(Transparent).png';
            
            contentHTML += `
                <div class="story-bubble ${item.side}">
                    <div class="story-avatar">
                        <img src="${avatar}" alt="${item.speaker}">
                    </div>
                    <div class="story-bubble-content">
                        <span class="sb-speaker">${item.speaker}</span>
                        ${item.text}
                    </div>
                </div>
            `;
        }
    });

    // Final Modal HTML Structure
    modalBody.innerHTML = `
        <div class="story-header">
            <h2 class="story-chapter-title">${story.title}</h2>
            <div class="story-date">${story.date}</div>
        </div>
        
        <div class="story-content-container">
            ${contentHTML}
        </div>

        <div class="story-navigation">
            <button class="story-nav-btn" id="prevStoryBtn" onclick="navigateStory(-1)">← Previous Story</button>
            <button class="story-nav-btn" id="nextStoryBtn" onclick="navigateStory(1)">Next Story →</button>
        </div>
    `;

    // Update Navigation Buttons State
    document.getElementById('prevStoryBtn').disabled = index === 0;
    document.getElementById('nextStoryBtn').disabled = index === storyDatabase.length - 1;
}

function navigateStory(direction) {
    const newIndex = currentStoryIndex + direction;
    if(newIndex >= 0 && newIndex < storyDatabase.length) {
        currentStoryIndex = newIndex;
        renderStory(currentStoryIndex);
        // Scroll modal to top
        document.querySelector('.story-modal-content').querySelector('#modalBody').scrollTop = 0; 
    }
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        closeModal();
    }
};

/* --- UTILITIES --- */
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
        const offset = 140; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
    const interview = document.getElementById('interview-zone');
    const timeline = document.getElementById('timeline-zone');
    
    if(interview) {
        interview.style.display = 'block';
        interview.classList.add('active');
    }
    if(timeline) {
        timeline.style.display = 'none';
        timeline.classList.remove('active');
    }

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
