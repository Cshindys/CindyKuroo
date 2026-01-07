/* ==========================================================================
   GLOBAL CONFIGURATION & DATA
   ========================================================================== */

/**
 * 1. PHOTOBOOK DATA
 */
const albumData = [
    {
        image: "img/Memory1.JPG", 
        caption: "第一次見面的排球館",
        date: "2024.04.12",
        tapeColor: "rgba(232, 180, 217, 0.7)"
    },
    {
        image: "img/Memory2.JPG",
        caption: "在園藝社偷偷觀察學長",
        date: "2024.05.20",
        tapeColor: "rgba(180, 167, 214, 0.7)"
    },
    {
        image: "img/Memory3.JPG",
        caption: "一起回家的小路",
        date: "2024.09.15",
        tapeColor: "rgba(74, 144, 226, 0.5)"
    },
    {
        image: "img/Memory4.JPG",
        caption: "學長的生日驚喜",
        date: "2024.11.17",
        tapeColor: "rgba(232, 180, 217, 0.7)"
    }
];

/**
 * 2. STORYBOOK DATA
 */
const storyChapters = [
    {
        id: 1,
        title: "第一章：相遇的預感",
        date: "2024.04.12",
        preview: "那天陽光正好，音駒的體育館裡傳來球鞋摩擦地板的聲音...",
        content: `
            <p>那天陽光正好，音駒的體育館裡傳來球鞋摩擦地板的聲音。シンディ抱著一疊園藝社的傳單路過，卻被那個高大的身影吸引住了目光。</p>
            <p>黑尾鉄朗，那個總是帶著一絲壞笑、卻又無比可靠的排球部主將。他躍起扣球的瞬間，彷彿連空氣都凝固了。</p>
            <p>「小心！」一顆排球突然飛出場外。</p>
            <p>シンディ嚇得閉上了眼睛，但預想中的疼痛並沒有傳來。再次睜眼時，看到的是黑尾學長單手接住球的背影，以及他回過頭來那漫不經心的笑容。</p>
            <p>「小學妹，走路要看路喔，還是說...妳在看我？」</p>
        `
    },
    {
        id: 2,
        title: "第二章：圖書館的偶遇",
        date: "2024.05.15",
        preview: "圖書館的角落，除了書頁翻動的聲音，還有心跳的聲音...",
        content: `
            <p>期中考前的圖書館總是特別安靜。シンディ墊起腳尖想要拿架子最上層的植物圖鑑，手指剛碰到書脊，另一隻修長的手卻先一步拿下了它。</p>
            <p>是黑尾學長。</p>
            <p>「這本書很重喔，小個子。」他低頭看著她，眼裡帶著戲謔的笑意。</p>
            <p>シンディ的臉瞬間紅透了，支支吾吾地道謝。那天下午，他們並肩坐在窗邊的桌子旁。黑尾在複習化學，而シンディ在看她的植物圖鑑，雖然她其實一個字也沒看進去。</p>
        `
    },
    {
        id: 3,
        title: "第三章：夏日祭典",
        date: "2024.08.20",
        preview: "絢爛的煙火之下，有些話終於想要說出口...",
        content: `
            <p>夏日的祭典人聲鼎沸。シンディ穿著不習慣的浴衣，木屐磨得腳有些痛，稍微落後了隊伍。</p>
            <p>「真是的，走慢點啊。」一隻溫暖的大手突然牽住了她。</p>
            <p>黑尾並沒有回頭，但抓著她的手卻很緊。「迷路了我可不管喔。」</p>
            <p>煙火在夜空中綻放的那一刻，喧囂彷彿都遠去了。シンディ看著被牽住的手，希望能永遠停留在這一刻。</p>
        `
    }
];

/**
 * 3. GARDEN DATA
 */
const gardenEntries = [
    {
        title: "新種下的繡球花",
        date: "2024.06.01",
        weather: "☀️",
        status: "Growing",
        content: "今天在社團花圃種下了藍色的繡球花。學長說他喜歡這種顏色，希望能順利開花！"
    },
    {
        title: "仙人掌換盆日",
        date: "2024.06.15",
        weather: "☁️",
        status: "Healthy",
        content: "把黑尾學長送的仙人掌換了大一點的盆。它長得好快，就像學長的身高一樣（笑）。"
    },
    {
        title: "暴風雨後的檢查",
        date: "2024.07.10",
        weather: "🌧️",
        status: "Recovering",
        content: "昨晚的風雨好大，好擔心花圃。早上趕去學校看，發現有人幫忙蓋了防雨布...一定是學長吧？"
    }
];

/**
 * 4. TIMELINE EVENT DETAILS
 */
const timelineDetails = {
    'event1': {
        title: "愛的暗殺事件",
        content: `
            <p>シンデイ領養了一盆據說「絕對不會死」的仙人掌。出於對新生命的過度關愛，她每天瘋狂澆水。</p>
            <p>結果不到一週，仙人掌就發黃軟爛了。黑尾路過園藝社時，看到她對著盆栽哭喪著臉，忍不住吐槽：「妳這是溺愛啊，小不點。植物也需要呼吸的。」</p>
            <p>後來，黑尾親自教她怎麼換土、怎麼判斷澆水時機。那盆仙人掌奇蹟般地救回來了，現在被命名為「黑尾二號」。</p>
        `
    },
    'event2': {
        title: "圖書館書本空襲事件",
        content: `
            <p>為了查閱園藝資料，シンデイ在圖書館試圖取下一本高處的厚重精裝書。因身高不足，她墊著腳尖晃晃悠悠。</p>
            <p>就在書本滑落、眼看要砸中她頭頂的瞬間，一隻手臂橫空出世，穩穩接住了那本書。</p>
            <p>「危險動作請勿模仿。」黑尾的聲音從頭頂傳來，帶著好聞的洗衣精味道，「下次這種體力活，叫我就好了。」</p>
            <p>那是シンデイ第一次覺得，這隻手臂不只是用來攔網的，也是用來保護她的。</p>
        `
    },
    'event3': {
        title: "左腳的愛過於沉重",
        content: `
            <p>黑尾生日那天，シンデイ送出了精心準備的禮物。黑尾滿懷期待地拆開，發現是...兩個左腳護膝。</p>
            <p>空氣凝固了三秒。</p>
            <p>シンデイ臉色慘白：「對、對不起！我買的時候太緊張，拿錯了盒子...」</p>
            <p>黑尾卻大笑起來，當場把兩個護膝都套在左腿上試了試：「挺好的，雙倍防禦，看來我的左腿今天要無敵了。」</p>
        `
    },
    'event4': {
        title: "幽靈數字事件",
        content: `
            <p>體檢時，シンデイ站上體重計，發現指針飆升了5公斤。她驚恐地發出尖叫，引來眾人側目。</p>
            <p>護士小姐無奈地指了指她身後。原來是黑尾正壞笑著，用一根手指悄悄壓在體重計的邊緣。</p>
            <p>「黑、尾、學、長！」這是シンデイ第一次氣得追著他跑遍了半個校園。</p>
        `
    }
};

/* ==========================================================================
   CORE UI LOGIC
   ========================================================================== */

// 1. Navigation & Scrolling
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 2. Main Tab Switching
function switchTabAndScroll(tabId) {
    toggleTab(tabId);
    setTimeout(() => {
        const element = document.getElementById(tabId);
        if (element) {
            const yOffset = -100; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }, 100);
}

function toggleTab(tabId) {
    // Hide all sections first
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.remove('active');
        // Hide display after fade out animation (approx 0.5s)
        setTimeout(() => {
            if(!section.classList.contains('active')) section.style.display = 'none';
        }, 500);
    });
    
    // Deactivate buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

    // Activate Button
    let btnId = '';
    if(tabId === 'interview-zone') btnId = 'btn-interview';
    if(tabId === 'storybook-zone') btnId = 'btn-storybook';
    if(tabId === 'timeline-zone') btnId = 'btn-timeline';
    if(tabId === 'photo-zone') btnId = 'btn-photo';
    if(tabId === 'garden-zone') btnId = 'btn-garden';
    const activeBtn = document.getElementById(btnId);
    if(activeBtn) activeBtn.classList.add('active');

    // Show selected section
    const activeSection = document.getElementById(tabId);
    if(activeSection) {
        activeSection.style.display = 'block';
        requestAnimationFrame(() => {
            activeSection.classList.add('active');
        });
        
        // RE-RENDER CONTENT: Key fix ensures content always loads
        if (tabId === 'photo-zone') initPhotobook();
        if (tabId === 'storybook-zone') renderChapterGrid();
        if (tabId === 'garden-zone') renderGarden();
    }
}

// 3. Top Section Tab Switching
function switchTopTab(tabId) {
    document.querySelectorAll('.top-tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById('btn-top-video').classList.remove('active');
    document.getElementById('btn-top-relationship').classList.remove('active');

    document.getElementById(tabId).classList.add('active');
    
    if(tabId === 'top-tab-video') document.getElementById('btn-top-video').classList.add('active');
    if(tabId === 'top-tab-relationship') document.getElementById('btn-top-relationship').classList.add('active');
}

// 4. Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    icon.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add("visible");
    } else {
        btn.classList.remove("visible");
    }
};

/* ==========================================================================
   FEATURE: SWEET PHOTOBOOK (3D FLIP)
   ========================================================================== */
let currentPhotoPage = 0;
const photobookEngine = document.getElementById('photobook-engine');

function initPhotobook() {
    if (!photobookEngine) return;
    photobookEngine.innerHTML = '';
    
    for (let i = 0; i < albumData.length; i += 2) {
        const pageIndex = i / 2;
        const pageElement = document.createElement('div');
        pageElement.className = 'book-page';
        pageElement.id = `page-${pageIndex}`;
        // Stack order: First page on top
        pageElement.style.zIndex = albumData.length - pageIndex;

        const frontData = albumData[i];
        // Handle odd number of photos
        const backData = albumData[i + 1] ? albumData[i + 1] : { image: null, caption: 'End of Album', date: '', tapeColor: 'transparent' };

        // Generate HTML with onerror placeholder
        const placeholder = 'https://placehold.co/300x250/pink/white?text=Memory';
        
        pageElement.innerHTML = `
            <div class="page-side page-front">
                <div class="polaroid-frame">
                    <div class="washi-tape" style="background: ${frontData.tapeColor}"></div>
                    <img src="${frontData.image}" alt="Memory" class="polaroid-img" onerror="this.src='${placeholder}'">
                    <div class="polaroid-caption">${frontData.caption}</div>
                </div>
                <div class="page-date-stamp">${frontData.date}</div>
            </div>
            <div class="page-side page-back">
                <div class="polaroid-frame">
                    <div class="washi-tape" style="background: ${backData.tapeColor}"></div>
                    ${backData.image ? 
                        `<img src="${backData.image}" alt="Memory" class="polaroid-img" onerror="this.src='${placeholder}'">` : 
                        `<div style="height:250px; display:flex; align-items:center; justify-content:center; color:#ccc;">The End</div>`
                    }
                    <div class="polaroid-caption">${backData.caption}</div>
                </div>
                <div class="page-date-stamp">${backData.date}</div>
            </div>
        `;
        
        // Flip logic on click
        pageElement.onclick = () => {
            if (pageIndex === currentPhotoPage) {
                nextPage();
            } else if (pageIndex === currentPhotoPage - 1) {
                prevPage();
            }
        };

        photobookEngine.appendChild(pageElement);
    }
}

function nextPage() {
    const totalPages = Math.ceil(albumData.length / 2);
    if (currentPhotoPage < totalPages) {
        const pageToFlip = document.getElementById(`page-${currentPhotoPage}`);
        if(pageToFlip) {
            pageToFlip.classList.add('flipped');
            // Z-index trick: after flip, move it down in stack
            setTimeout(() => {
                pageToFlip.style.zIndex = currentPhotoPage; 
            }, 400); 
            currentPhotoPage++;
        }
    }
}

function prevPage() {
    if (currentPhotoPage > 0) {
        currentPhotoPage--;
        const pageToFlip = document.getElementById(`page-${currentPhotoPage}`);
        if(pageToFlip) {
            pageToFlip.classList.remove('flipped');
            // Restore z-index
            pageToFlip.style.zIndex = albumData.length - currentPhotoPage;
        }
    }
}

/* ==========================================================================
   FEATURE: STORYBOOK READER (FIXED)
   ========================================================================== */
let currentChapterIndex = 0;

function renderChapterGrid() {
    const container = document.getElementById('chapters-container');
    if (!container) return;

    // FIX: Always clear and redraw to prevent "empty" state issues
    container.innerHTML = ""; 

    container.innerHTML = storyChapters.map((chapter, index) => `
        <div class="chapter-card" onclick="openChapterReader(${index})">
            <div class="chapter-number">Chapter 0${chapter.id}</div>
            <h3 class="chapter-title">${chapter.title}</h3>
            <p class="chapter-desc">${chapter.preview}</p>
            <div class="chapter-date">${chapter.date}</div>
        </div>
    `).join('');
}

function openChapterReader(index) {
    currentChapterIndex = index;
    document.getElementById('chapters-grid-view').style.display = 'none';
    document.getElementById('story-reader-view').style.display = 'block';
    loadChapterContent(index);
    document.getElementById('storybook-zone').scrollIntoView({ behavior: 'smooth' });
}

function closeChapterReader() {
    document.getElementById('story-reader-view').style.display = 'none';
    document.getElementById('chapters-grid-view').style.display = 'block';
}

function loadChapterContent(index) {
    const chapter = storyChapters[index];
    document.getElementById('reader-title').innerText = chapter.title;
    document.getElementById('reader-date').innerText = chapter.date;
    document.getElementById('reader-content').innerHTML = chapter.content;
    
    document.getElementById('reader-progress').innerText = `${index + 1} / ${storyChapters.length}`;
    document.getElementById('reader-prev-btn').disabled = index === 0;
    document.getElementById('reader-next-btn').disabled = index === storyChapters.length - 1;
}

function navigateChapter(direction) {
    const newIndex = currentChapterIndex + direction;
    if (newIndex >= 0 && newIndex < storyChapters.length) {
        currentChapterIndex = newIndex;
        loadChapterContent(newIndex);
    }
}

/* ==========================================================================
   FEATURE: TIMELINE MODAL
   ========================================================================== */
function setupTimelineEvents() {
    document.querySelectorAll('.timeline-event .read-story-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const eventItem = this.closest('.timeline-event');
            const eventId = eventItem.getAttribute('data-event');
            openModal(eventId);
        });
    });
}

function openModal(eventId) {
    const data = timelineDetails[eventId];
    if (!data) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="story-header">
            <h2 class="story-chapter-title">${data.title}</h2>
        </div>
        <div class="serif-text">
            ${data.content}
        </div>
    `;
    
    const modal = document.getElementById('eventModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('eventModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

/* ==========================================================================
   FEATURE: GARDEN DIARY
   ========================================================================== */
function renderGarden() {
    const container = document.getElementById('garden-container');
    if (!container) return;

    // Fix: Always clear and redraw
    container.innerHTML = "";

    container.innerHTML = gardenEntries.map(entry => `
        <div class="garden-card">
            <div class="garden-header">
                <span class="garden-date">${entry.date}</span>
                <span class="garden-weather">${entry.weather}</span>
            </div>
            <div class="garden-title">${entry.title}</div>
            <div class="garden-preview">${entry.content}</div>
            <div class="garden-status">
                <span class="status-dot"></span> Status: ${entry.status}
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Timeline
    setupTimelineEvents();
    
    // 2. Pre-load Content
    initPhotobook();
    renderGarden();
    renderChapterGrid();

    // 3. Start at Interview
    toggleTab('interview-zone');
});
