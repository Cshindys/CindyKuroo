/* --- GLOBAL VARIABLES & DATA --- */

// Timeline Event Stories Data
const eventStories = {
    'event1': {
        title: "愛的暗殺事件🌱",
        date: "記錄時間：未知",
        content: `
            <div class="story-paragraph">
                Cindy 其實並不擅長園藝，但為了加入園藝社（以及偷看隔壁體育館的黑尾），她努力學習。
                她領養了一盆號稱「絕對不會死」的仙人掌。
            </div>
            <div class="story-paragraph">
                出於對這個小生命的過度關愛，她每天早晚都給它澆水，還對著它說話。
                結果兩個禮拜後，仙人掌... 從內部爛掉了。
            </div>
            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    嗚嗚嗚...為什麼連仙人掌都會被我養死...
                </div>
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    那是多肉植物啊...妳把它當水草在養嗎？這根本是充滿愛意的暗殺吧？
                </div>
            </div>
        `
    },
    'event2': {
        title: "圖書館書本空襲事件📕",
        date: "記錄時間：午休時間",
        content: `
            <div class="story-paragraph">
                午休時間，圖書館內一片寂靜。Cindy 踮著腳尖試圖拿取書架頂層的一本植物圖鑑。
                就在指尖碰到書脊的瞬間，重心不穩，整個人向後仰去。
            </div>
            <div class="story-paragraph">
                就在她閉上眼睛準備迎接疼痛時，並沒有摔倒在地，但頭頂卻傳來「咚」的一聲悶響。
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    好痛... 妳是在練習頭球攻擊嗎？
                </div>
            </div>
            <div class="story-paragraph">
                原來黑尾剛好經過，伸手扶住了她，卻被落下的精裝書精準砸中了自己的手臂，還反彈到了 Cindy 的頭上。
            </div>
            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    對、對不起學長！！我不是故意的！
                </div>
            </div>
        `
    },
    'event3': {
        title: "左腳的愛過於沉重🦶🏻",
        date: "記錄時間：黑尾生日",
        content: `
            <div class="story-paragraph">
                黑尾生日當天，Cindy 鼓起勇氣送出了準備已久的禮物。
                包裝非常精美，還綁著紫色的緞帶。
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    喔？謝啦。我可以現在拆開嗎？
                </div>
            </div>
            <div class="story-paragraph">
                黑尾打開盒子，表情凝固了三秒。裡面是兩個高品質的護膝... 但仔細一看，包裝上都貼著「左腳專用」的標籤。
            </div>
            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    那、那個！因為太緊張買錯了... 店員說只剩左腳的庫存... 我想說反正形狀差不多...
                </div>
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    噗... 哈哈哈哈！這什麼理由啊！好吧，我會好好守護我的左腳的，謝啦。
                </div>
            </div>
        `
    }
};

// Storybook Chapters Data
const storyChapters = [
    {
        id: 1,
        title: "第一章：午後的體育館",
        desc: "那是第一次，Cindy 鼓起勇氣踏入排球部經理的視線範圍...",
        date: "Spring, 2023",
        content: `
            <p>四月的風帶著櫻花的香氣，輕輕吹過音駒高校的校園。</p>
            <p>Cindy 手裡緊緊抓著澆水壺，躲在體育館側門的縫隙旁。這已經是她這個禮拜第五次「不小心」路過這裡了。</p>
            <p>球鞋摩擦地板的聲音，充滿力量的擊球聲，還有那個總是帶著玩世不恭笑容的黑髮少年。</p>
            <div class="dialogue-wrapper right">
                <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png" alt="Kuroo"></div>
                <div class="dialogue-bubble kuroo-style">
                    「喂！研磨！跑起來啊！我們可是血液！」
                </div>
            </div>
            <p>黑尾鉄朗的聲音宏亮而有力。</p>
            <p>Cindy 看得出神，手中的水壺稍微傾斜，一小股水流悄悄灑在了地板上。</p>
        `
    },
    {
        id: 2,
        title: "第二章：借物賽跑",
        desc: "運動會的借物賽跑，黑尾選手抽到的題目竟然是...",
        date: "Summer, 2023",
        content: `
            <p>夏日的陽光炙烤著操場，運動會的氣氛熱烈到了極點。</p>
            <p>「借物賽跑！三年級組，黑尾選手抽到了題目！」廣播裡傳來興奮的聲音。</p>
            <p>黑尾看了一眼手中的紙條，眉頭微微一挑，隨即目光掃向人群。他的視線穿過重重人海，最後定格在正拿著毛巾幫園藝社搬東西的 Cindy 身上。</p>
            <p>他大步流星地跑過去，在 Cindy 還沒反應過來時，一把抓住了她的手腕。</p>
            <div class="dialogue-wrapper">
                <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png" alt="Cindy"></div>
                <div class="dialogue-bubble cindy-style">
                    「學、學長？！」
                </div>
            </div>
            <div class="dialogue-wrapper right">
                <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png" alt="Kuroo"></div>
                <div class="dialogue-bubble kuroo-style">
                    「借我一下！」
                </div>
            </div>
            <p>黑尾笑著，拉著她向終點跑去。</p>
            <p>到了裁判面前，黑尾展示了手中的紙條，上面寫著三個字：『可愛的後輩』。</p>
        `
    },
    {
        id: 3,
        title: "第三章：畢業鈕扣",
        desc: "畢業典禮那天，第二顆鈕扣的去向。",
        date: "March, 2024",
        content: `
            <p>畢業典禮結束後，校園裡充滿了離別的感傷與祝福。</p>
            <p>Cindy 站在櫻花樹下，手裡捏著一封沒送出去的信。她聽說很多女生都去向黑尾學長要鈕扣了，自己大概...沒有機會了吧。</p>
            <div class="dialogue-wrapper right">
                <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png" alt="Kuroo"></div>
                <div class="dialogue-bubble kuroo-style">
                    「在這種地方發什麼呆？」
                </div>
            </div>
            <p>熟悉的聲音從頭頂傳來。Cindy 猛地抬頭，看見黑尾手裡拿著畢業證書，制服外套敞開著。</p>
            <div class="dialogue-wrapper">
                <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png" alt="Cindy"></div>
                <div class="dialogue-bubble cindy-style">
                    「學長...恭喜畢業。」
                </div>
            </div>
            <p>黑尾抓了抓頭髮，突然伸手扯下了自己制服上的第二顆鈕扣，隨手拋給了 Cindy。</p>
            <p>Cindy 手忙腳亂地接住：「誒？這是...？」</p>
            <div class="dialogue-wrapper right">
                <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png" alt="Kuroo"></div>
                <div class="dialogue-bubble kuroo-style">
                    「幫我保管一下。要是弄丟了，我可是會找妳算帳的喔。」
                </div>
            </div>
        `
    }
];

// Gardening Diary Data (Updated with Content for Popups)
const gardenEntries = [
    {
        id: 'g1',
        title: "繡球花盛開",
        date: "6月 15日",
        weather: "🌧️",
        status: "開花",
        preview: "今天下了一整天的雨，但是紫色的繡球花開得非常漂亮。就像學長的髮色一樣...不對，學長是黑髮啦！我是說氣質！",
        content: `
            <div class="story-paragraph">
                梅雨季節到了，園藝社角落的繡球花終於盛開了。我特地調整了土壤的酸鹼度，才種出了這種夢幻的紫色。
            </div>
            <div class="story-paragraph">
                今天整理花圃時，黑尾學長剛好為了躲雨跑進了溫室走廊。
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    喔？這顏色挺不錯的嘛。跟妳的髮夾顏色很像。
                </div>
            </div>
            <div class="story-paragraph">
                只是一句隨口的話，卻讓我開心了一整天。連這煩人的雨聲聽起來都變得悅耳了。
            </div>
        `
    },
    {
        id: 'g2',
        title: "貓草種植計畫",
        date: "5月 20日",
        weather: "☀️",
        status: "發芽",
        preview: "為了吸引附近的貓咪（絕對不是為了吸引像貓的學長），開始在社團角落種植貓草。希望能順利長大。",
        content: `
            <div class="story-paragraph">
                聽說音駒這附近有很多流浪貓，所以我決定在園藝社不起眼的角落種一點貓草。
            </div>
            <div class="story-paragraph">
                今天去澆水的時候，發現貓草旁邊蹲著一個巨大的身影...是黑尾學長。他正拿著一根狗尾巴草逗弄著聞訊而來的野貓。
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    這草種得不錯啊，很有吸引力。連我都想過來趴著了。
                </div>
            </div>
            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    學、學長想趴著也可以喔！（大驚慌）
                </div>
            </div>
        `
    },
    {
        id: 'g3',
        title: "向日葵",
        date: "8月 1日",
        weather: "☀️",
        status: "生長中",
        preview: "向日葵總是看著太陽。我也想成為能一直注視著學長的人。今天的陽光好刺眼啊。",
        content: `
            <div class="story-paragraph">
                向日葵長得好高啊，已經快要超過我的身高了。它們總是堅定地追逐著太陽，這種直率的特質真讓人羨慕。
            </div>
            <div class="story-paragraph">
                如果我也能像向日葵一樣，光明正大地一直看著學長就好了。
            </div>
            <div class="story-paragraph">
                正想著，黑尾學長突然從向日葵花田的另一端探出頭來，因為身高優勢，他輕輕鬆鬆就俯視著我。
            </div>
             <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    躲在這裡幹嘛？小心中暑喔，小不點。
                </div>
            </div>
            <div class="story-paragraph">
                ...果然，無論是太陽還是學長，都好耀眼。
            </div>
        `
    }
];

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    // Render Content
    renderChapters();
    renderGardenEntries();
    
    // Add Event Listeners for Timeline Buttons
    document.querySelectorAll('.read-story-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Find the closest parent .timeline-event and get its data attribute
            const eventElement = e.target.closest('.timeline-event');
            const eventId = eventElement.getAttribute('data-event');
            openModal(eventId);
        });
    });

    // Check System Dark Mode Preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
    
    // Scroll Event for "Scroll to Top" button
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTopBtn');
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // Initialize the Scrapbook Logic
    initScrapbook();
});

/* --- TAB FUNCTIONS --- */

// Top Filter (Video vs Relationship)
function switchTopTab(tabId) {
    // 1. Hide all top tab contents
    document.querySelectorAll('.top-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // 2. Remove active class from buttons
    document.getElementById('btn-top-video').classList.remove('active');
    document.getElementById('btn-top-relationship').classList.remove('active');

    // 3. Activate selected content
    document.getElementById(tabId).classList.add('active');

    // 4. Activate selected button
    if (tabId === 'top-tab-video') {
        document.getElementById('btn-top-video').classList.add('active');
    } else {
        document.getElementById('btn-top-relationship').classList.add('active');
    }
}

// Main Filter (Interview, Storybook, etc)
function toggleTab(tabId) {
    // 1. Hide all tab sections
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.remove('active');
    });

    // 2. Deactivate all buttons
    document.querySelectorAll('#filter-bar-anchor .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Activate target section
    document.getElementById(tabId).classList.add('active');

    // 4. Activate target button (Mapping IDs)
    const btnMap = {
        'interview-zone': 'btn-interview',
        'storybook-zone': 'btn-storybook',
        'timeline-zone': 'btn-timeline',
        'photo-zone': 'btn-photo',
        'garden-zone': 'btn-garden'
    };
    
    if (btnMap[tabId]) {
        document.getElementById(btnMap[tabId]).classList.add('active');
    }
}

// Helper to switch top tab and scroll
function switchTopTabAndScroll(tabId) {
    switchTopTab(tabId);
    scrollToId('top-filter-anchor');
}

// Helper to switch main tab and scroll
function switchTabAndScroll(tabId) {
    toggleTab(tabId);
    scrollToId('filter-bar-anchor');
}

/* --- SCROLL FUNCTIONS --- */
function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* --- DARK MODE --- */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const icon = document.getElementById('darkModeIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

/* --- MODAL FUNCTIONS --- */

// Original function for Events
function openModal(eventId) {
    const data = eventStories[eventId];
    if (!data) return;

    fillModalContent(data.title, data.date, data.content, "~ End of Memory ~");
}

// New function for Garden Entries
function openGardenModal(entryData) {
    fillModalContent(entryData.title, entryData.date, entryData.content, "~ Garden Log End ~");
}

// Helper to fill modal DOM
function fillModalContent(title, date, content, footerText) {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="story-header">
            <h2 class="story-chapter-title">${title}</h2>
            <div class="story-date">${date}</div>
        </div>
        ${content}
        <div class="story-timestamp">${footerText}</div>
    `;

    document.getElementById('eventModal').classList.add('active');
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        closeModal();
    }
}

/* --- STORYBOOK READER LOGIC --- */
let currentChapterIndex = 0;

function renderChapters() {
    const container = document.getElementById('chapters-container');
    container.innerHTML = '';

    storyChapters.forEach((chapter, index) => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.onclick = () => openChapter(index);
        
        card.innerHTML = `
            <div class="chapter-number">Chapter ${chapter.id}</div>
            <div class="chapter-title">${chapter.title}</div>
            <div class="chapter-desc">${chapter.desc}</div>
            <div class="chapter-date">📅 ${chapter.date}</div>
        `;
        container.appendChild(card);
    });
}

function openChapter(index) {
    currentChapterIndex = index;
    updateReaderContent();
    
    document.getElementById('chapters-grid-view').style.display = 'none';
    document.getElementById('story-reader-view').style.display = 'block';
    // Scroll to top of reader zone
    scrollToId('storybook-zone');
}

function closeChapterReader() {
    document.getElementById('story-reader-view').style.display = 'none';
    document.getElementById('chapters-grid-view').style.display = 'block';
    scrollToId('storybook-zone');
}

function navigateChapter(direction) {
    const newIndex = currentChapterIndex + direction;
    if (newIndex >= 0 && newIndex < storyChapters.length) {
        currentChapterIndex = newIndex;
        updateReaderContent();
        scrollToId('storybook-zone');
    }
}

function updateReaderContent() {
    const chapter = storyChapters[currentChapterIndex];
    document.getElementById('reader-title').textContent = chapter.title;
    document.getElementById('reader-date').textContent = chapter.date;
    document.getElementById('reader-content').innerHTML = chapter.content;
    document.getElementById('reader-progress').textContent = `${currentChapterIndex + 1} / ${storyChapters.length}`;
    
    // Disable buttons if at edges
    document.getElementById('reader-prev-btn').disabled = (currentChapterIndex === 0);
    document.getElementById('reader-next-btn').disabled = (currentChapterIndex === storyChapters.length - 1);
}

/* --- GARDEN DIARY RENDER --- */
function renderGardenEntries() {
    const container = document.getElementById('garden-container');
    container.innerHTML = '';

    gardenEntries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'garden-card';
        
        // Add Click listener to open modal with garden data
        card.onclick = () => openGardenModal(entry);

        card.innerHTML = `
            <div class="garden-header">
                <span class="garden-date">${entry.date}</span>
                <span class="garden-weather">${entry.weather}</span>
            </div>
            <div class="garden-title">${entry.title}</div>
            <div class="garden-preview">${entry.preview}</div>
            <div class="garden-status">
                <span class="status-dot"></span> 狀態：${entry.status}
            </div>
        `;
        container.appendChild(card);
    });
}

/* --- BOOK & LIGHTBOX LOGIC --- */
let currentPage = 0;
let pages;

function initScrapbook() {
    pages = document.querySelectorAll('.book-page');
    // Initialize Z-Indexes so first page is on top
    if (pages.length > 0) {
        pages.forEach((page, index) => {
            page.style.zIndex = pages.length - index;
            
            // Allow clicking the actual book page to flip it (for intuition)
            page.addEventListener('click', (e) => {
                // Only flip if we didn't click a photo (because clicking a photo opens lightbox)
                if (!e.target.closest('.scrap-photo')) {
                    if (index === currentPage) {
                        turnPage(1); // Click right page to flip forward
                    } else if (index === currentPage - 1) {
                        turnPage(-1); // Click left page to flip back
                    }
                }
            });
        });
    }
}

function turnPage(direction) {
    if (!pages) pages = document.querySelectorAll('.book-page');
    
    if (direction === 1) {
        // Go forward
        if (currentPage < pages.length) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
        }
    } else {
        // Go backward
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].classList.remove('flipped');
        }
    }
}

// Lightbox Functions
function openLightbox(element) {
    const modal = document.getElementById("photoLightbox");
    const modalImg = document.getElementById("lightboxImg");
    const captionText = document.getElementById("lightboxCaption");
    const sourceImg = element.querySelector('img');
    const sourceCaption = element.querySelector('.caption');

    modal.style.display = "flex";
    modalImg.src = sourceImg.src;
    
    if (sourceCaption) {
        captionText.textContent = sourceCaption.textContent;
    } else {
        captionText.textContent = "";
    }
}

function closeLightbox() {
    document.getElementById("photoLightbox").style.display = "none";
}
