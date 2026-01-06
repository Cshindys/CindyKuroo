/* --- 1. TIMELINE DATA --- */
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
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '我...我不是故意的！我只是...怕它口渴。而且我看《園藝新手指南》中上說植物需要陽光 and 水，我就想給它多一點...再多一點的關心嘛！' },
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

/* --- 2. STORYBOOK CHAPTER DATA --- */
const chapterDatabase = [
    {
        title: 'Chapter 1: 體育館的初遇',
        date: '2023年4月15日',
        description: '那是一個春天的午後，在排球館的門口，我們的故事開始了...一顆滾落的排球，連結了兩個世界。',
        content: [
            { type: 'paragraph', text: '那是一個春天的午後，陽光透過體育館的高窗灑在木地板上。シンデイ正抱著一疊園藝社的文件經過體育館，突然一顆排球滾到了她的腳邊。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '不好意思！能幫忙把球撿過來嗎？' },
            { type: 'paragraph', text: 'シンデイ抬起頭，看到一個身材高大的男生正站在球網對面，臉上掛著漫不經心的笑容，那是音駒的主將——黑尾鐵朗。' },
            { type: 'dialogue', speaker: 'シン迪', side: 'right', text: '啊...好、好的！' },
            { type: 'paragraph', text: '她慌慌張張地撿起球，因為緊張，扔回去的姿勢顯得有些笨拙。黑尾輕鬆地單手接住了球。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '謝啦，園藝社的小貓咪。下次路過要小心流彈哦。' },
            { type: 'timestamp', text: '下午 4:30 PM' },
            { type: 'paragraph', text: '虽然只是简短的对话，但那個稱呼和那個笑容，讓她的心跳漏了一拍。從那天起，體育館成了她最在意的風景。' }
        ]
    },
    {
        title: 'Chapter 2: 櫻花樹下的便當',
        date: '2023年5月2日',
        description: '第一次鼓起勇氣送出的便當，在盛開的櫻花樹下，藏著少女羞澀的心意。',
        content: [
            { type: 'paragraph', text: '校園裡的櫻花盛開得正好。シンデイ早起了一個小時，做了一份特製的便當，裡面有黑尾學長喜歡的鹽烤秋刀魚。' },
            { type: 'dialogue', speaker: 'シン迪', side: 'right', text: '那個...黑尾學長！如果你不介意的話...' },
            { type: 'paragraph', text: '在午休的天台，她雙手遞出便當盒，指節因為用力而發白。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '哦？這是給我的？看起來很豐盛啊。' },
            { type: 'paragraph', text: '黑尾有些驚訝，但隨即露出了溫柔的笑容接過了便當。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '剛好肚子餓了。謝啦，我會懷著感激的心情全部吃光的. ' },
            { type: 'timestamp', text: '午休時間 12:45 PM' },
            { type: 'paragraph', text: '風吹過，花瓣落在兩人的肩膀上。看著他大口吃飯的樣子，シンデイ覺得早起的疲憊全都煙消雲散了。' }
        ]
    },
    {
        title: 'Chapter 3: 雨中的溫暖',
        date: '2023年6月15日',
        description: '突如其來的梅雨季，讓人措手不及。但在同撐一把傘的距離裡，心跳的聲音卻格外清晰。',
        content: [
            { type: 'paragraph', text: '放學時，天空突然下起了傾盆大雨。シンデイ站在昇降口，懊惱地發現自己忘了帶傘。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '喲，這位小姐是被雨困住了嗎？' },
            { type: 'paragraph', text: '熟悉的聲音在頭頂響起，一把黑色的雨傘遮住了漫天的雨幕。' },
            { type: 'dialogue', speaker: 'シン迪', side: 'right', text: '黑尾學長...可是這樣你會淋濕的。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '我是血液嘛，流動起來就不會冷了。走吧，送妳到車站。' },
            { type: 'paragraph', text: '雨聲嘩啦啦地響著，但傘下的世界卻很安靜。黑尾刻意將傘向她那邊傾斜，自己的半個肩膀卻濕透了。' },
            { type: 'timestamp', text: '下午 6:00 PM' },
            { type: 'paragraph', text: '這一刻，シンデイ希望這場雨永遠不要停。' }
        ]
    }
];

/* --- 3. GARDEN DIARY DATA (New) --- */
const gardenDatabase = [
    {
        id: 'garden1',
        title: 'Observation Log #001: 播種之日',
        date: 'Day 1',
        weather: '☀️ 晴朗',
        status: '播種',
        description: '今天在園藝社的角落種下了向日葵的種子。希望它們能像太陽一樣，給某人帶來溫暖。',
        content: [
            { type: 'paragraph', text: '今天在園藝社的角落種下了向日葵的種子。因為向日葵的花語是「眼中只有你」。' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '一定要快快長大哦，小種子們。' },
            { type: 'paragraph', text: '雖然不知道能不能順利開花，但我會每天都來看你們的。' }
        ]
    },
    {
        id: 'garden2',
        title: 'Observation Log #012: 意外的訪客',
        date: 'Day 12',
        weather: '☁️ 多雲',
        status: '發芽',
        description: '今天去澆水的時候，發現泥土已經濕潤了。難道是有好心的小精靈幫忙澆水了嗎？',
        content: [
            { type: 'paragraph', text: '放學後急忙趕去花圃，卻發現泥土是深色的，顯然剛被澆過水。' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '咦？有人幫忙澆水了嗎？' },
            { type: 'paragraph', text: '正疑惑時，看到體育館門口，黑尾學長正拿著空水瓶在擦汗，眼神似乎往這邊瞟了一下。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '（內心OS）只是路過順手而已...別想太多。' }
        ]
    },
    {
        id: 'garden3',
        title: 'Observation Log #045: 盛開的約定',
        date: 'Day 45',
        weather: '🌤️ 晴轉陰',
        status: '開花',
        description: '終於開花了！金黃色的花瓣在風中搖曳。黑尾學長說，這顏色很像音駒的隊服呢。',
        content: [
            { type: 'paragraph', text: '向日葵終於盛開了，金黃色的花盤追逐著太陽。' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '喲，開得很精神嘛。這顏色跟我們的隊服挺像的。' },
            { type: 'dialogue', speaker: 'シンディ', side: 'right', text: '是、是嗎！那以後比賽的時候，我可以帶一朵去加油嗎？' },
            { type: 'dialogue', speaker: '黒尾', side: 'left', text: '哈哈，只要別把花盆也帶去就行，那可是兇器啊。' },
            { type: 'paragraph', text: '兩人相視而笑，夏日的微風輕輕吹過。' }
        ]
    }
];

/* --- 4. FUNCTIONS --- */

/* TAB LOGIC */
function toggleTab(tabId) {
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        setTimeout(() => selectedSection.classList.add('active'), 10);
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        if(btn.parentElement.id === 'filter-bar-anchor') {
            btn.classList.remove('active');
        }
    });

    if (tabId === 'interview-zone') document.getElementById('btn-interview').classList.add('active');
    else if (tabId === 'storybook-zone') document.getElementById('btn-storybook').classList.add('active');
    else if (tabId === 'timeline-zone') document.getElementById('btn-timeline').classList.add('active');
    else if (tabId === 'photo-zone') document.getElementById('btn-photo').classList.add('active');
    else if (tabId === 'garden-zone') document.getElementById('btn-garden').classList.add('active');
}

function getScrollOffset() {
    return window.innerWidth < 768 ? 80 : 150;
}

function switchTabAndScroll(tabId) {
    toggleTab(tabId);
    const element = document.getElementById('filter-bar-anchor');
    if (element) {
        const offset = getScrollOffset(); 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

function switchTopTab(tabId) {
    document.querySelectorAll('.top-tab-content').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        setTimeout(() => selectedSection.classList.add('active'), 10);
    }

    document.getElementById('btn-top-video').classList.remove('active');
    document.getElementById('btn-top-relationship').classList.remove('active');

    if(tabId === 'top-tab-video') document.getElementById('btn-top-video').classList.add('active');
    if(tabId === 'top-tab-relationship') document.getElementById('btn-top-relationship').classList.add('active');
}

function switchTopTabAndScroll(tabId) {
    switchTopTab(tabId);
    const element = document.getElementById('top-filter-anchor');
    if (element) {
        const offset = getScrollOffset(); 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

/* TIMELINE & STORY MODAL LOGIC */
let currentTimelineIndex = 0;
// We need to know if we are opening a Timeline story or a Garden story to handle Next/Prev correctly
let activeDatabase = storyDatabase; 

function bindTimelineEvents() {
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timeline.addEventListener('click', function(e) {
            handleEventClick(e, 'timeline-event');
        });
    }
}

function handleEventClick(e, className) {
    let target = e.target;
    // Check if clicked button
    if (target.classList.contains('read-story-btn')) {
        let p = target;
        while (p && !p.classList.contains(className)) p = p.parentElement;
        if (p && p.dataset && p.dataset.event) {
            openStoryModal(p.dataset.event);
            e.preventDefault(); e.stopPropagation();
            return;
        }
    }
    // Check if clicked card
    let card = target.closest('.' + className);
    if (card && card.dataset && card.dataset.event) {
        openStoryModal(card.dataset.event);
        e.preventDefault(); e.stopPropagation();
        return;
    }
}

function openStoryModal(eventId) {
    // Try finding in storyDatabase first
    let index = storyDatabase.findIndex(story => story.id === eventId);
    if (index !== -1) {
        activeDatabase = storyDatabase;
        currentTimelineIndex = index;
    } else {
        // Try finding in gardenDatabase
        index = gardenDatabase.findIndex(story => story.id === eventId);
        if (index !== -1) {
            activeDatabase = gardenDatabase;
            currentTimelineIndex = index;
        } else {
            return; // Not found
        }
    }
    
    renderStoryModal(currentTimelineIndex);
    document.getElementById('eventModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderStoryModal(index) {
    const story = activeDatabase[index];
    const modalBody = document.getElementById('modalBody');
    let contentHTML = '';
    
    story.content.forEach(item => {
        if(item.type === 'paragraph') contentHTML += `<p class="story-paragraph">${item.text}</p>`;
        else if (item.type === 'timestamp') contentHTML += `<div class="story-timestamp">--- ${item.text} ---</div>`;
        else if (item.type === 'dialogue') {
            const avatar = item.speaker.includes('黒尾') ? 'img/KurooQQ(Transparent).png' : 'img/CindyQQ(Transparent).png';
            contentHTML += `
                <div class="story-bubble ${item.side === 'left' ? 'left' : 'right'}">
                    <div class="story-avatar"><img src="${avatar}" alt="${item.speaker}"></div>
                    <div class="story-bubble-content"><span class="sb-speaker">${item.speaker}</span>${item.text}</div>
                </div>`;
        }
    });

    modalBody.innerHTML = `
        <div class="story-header"><h2 class="story-chapter-title">${story.title}</h2><div class="story-date">${story.date}</div></div>
        <div class="story-content-container">${contentHTML}</div>
        <div class="story-navigation">
            <button class="story-nav-btn" onclick="navigateTimeline(-1)" ${index === 0 ? 'disabled' : ''}>← Previous</button>
            <button class="story-nav-btn" onclick="navigateTimeline(1)" ${index === activeDatabase.length - 1 ? 'disabled' : ''}>Next →</button>
        </div>`;
}

function navigateTimeline(direction) {
    const newIndex = currentTimelineIndex + direction;
    if(newIndex >= 0 && newIndex < activeDatabase.length) {
        currentTimelineIndex = newIndex;
        renderStoryModal(newIndex);
        document.getElementById('modalBody').scrollTop = 0;
    }
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* --- 5. STORYBOOK READER LOGIC --- */
let currentChapterIndex = 0;

function initStorybook() {
    const container = document.getElementById('chapters-container');
    if(!container) return;
    container.innerHTML = '';

    chapterDatabase.forEach((chapter, index) => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.onclick = () => openChapterReader(index);
        card.innerHTML = `
            <div class="chapter-number">Chapter ${index + 1}</div>
            <div class="chapter-title">${chapter.title}</div>
            <div class="chapter-desc">${chapter.description}</div>
            <div class="chapter-date">📅 ${chapter.date}</div>
        `;
        container.appendChild(card);
    });
}

function openChapterReader(index) {
    currentChapterIndex = index;
    renderChapterContent(index);
    document.getElementById('chapters-grid-view').style.display = 'none';
    document.getElementById('story-reader-view').style.display = 'block';
    document.getElementById('reader-prev-btn').disabled = (index === 0);
    document.getElementById('reader-next-btn').disabled = (index === chapterDatabase.length - 1);
}

function closeChapterReader() {
    document.getElementById('story-reader-view').style.display = 'none';
    document.getElementById('chapters-grid-view').style.display = 'block';
}

function renderChapterContent(index) {
    const chapter = chapterDatabase[index];
    document.getElementById('reader-title').textContent = chapter.title;
    document.getElementById('reader-date').textContent = chapter.date;
    document.getElementById('reader-progress').textContent = `${index + 1} / ${chapterDatabase.length}`;
    
    let contentHTML = '';
    chapter.content.forEach(item => {
        if(item.type === 'paragraph') contentHTML += `<p class="story-paragraph">${item.text}</p>`;
        else if (item.type === 'dialogue') {
            const avatar = item.speaker.includes('黒尾') ? 'img/KurooQQ(Transparent).png' : 'img/CindyQQ(Transparent).png';
            contentHTML += `
                <div class="story-bubble ${item.side}">
                    <div class="story-avatar"><img src="${avatar}" alt="${item.speaker}"></div>
                    <div class="story-bubble-content"><span class="sb-speaker">${item.speaker}</span>${item.text}</div>
                </div>`;
        } else if (item.type === 'timestamp') {
            contentHTML += `<div class="story-timestamp">--- ${item.text} ---</div>`;
        }
    });
    document.getElementById('reader-content').innerHTML = contentHTML;
}

function navigateChapter(offset) {
    let idx = currentChapterIndex + offset;
    if (idx < 0) idx = 0;
    if (idx >= chapterDatabase.length) idx = chapterDatabase.length - 1;
    openChapterReader(idx);
}

/* --- 6. GARDEN DIARY RENDER LOGIC --- */
function initGardenDiary() {
    const container = document.getElementById('garden-container');
    if(!container) return;
    container.innerHTML = '';

    gardenDatabase.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'garden-card';
        card.onclick = () => openStoryModal(item.id); // Re-use the modal system
        card.innerHTML = `
            <div class="garden-header">
                <span class="garden-date">${item.date}</span>
                <span class="garden-weather">${item.weather}</span>
            </div>
            <div class="garden-title">${item.title}</div>
            <div class="garden-preview">${item.description}</div>
            <div class="garden-status">
                <span class="status-dot"></span> 狀態：${item.status}
            </div>
        `;
        container.appendChild(card);
    });
}

/* --- 7. UTILITIES --- */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('darkModeIcon').textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function scrollToId(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offset = getScrollOffset(); 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initStorybook();
    initGardenDiary(); // Load garden cards
    bindTimelineEvents();

    let scrollBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) scrollBtn.classList.add('visible');
        else scrollBtn.classList.remove('visible');
    });

    document.addEventListener('keydown', function(e){
        if (e.key === "Escape" && document.getElementById('eventModal').classList.contains('active')) {
            closeModal();
        }
    });
});
