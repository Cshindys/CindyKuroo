/* script.js - FULL COMPLETE VERSION */

/* --- GLOBAL VARIABLES & DATA --- */

// Timeline Event Stories Data
const eventStories = {
    'event1': {
        title: "愛的暗殺事件🌱",
        date: "記錄時間：未知",
        content: `
            <div class="story-paragraph">
                シンディ其實並不擅長園藝，但為了加入園藝社（以及偷看隔壁體育館的黑尾），她努力學習。
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
        date: "記錄時間：考試前夕",
        content: `
            <div class="story-paragraph">
                期末考前夕，圖書館人滿為患。シンディ為了幫黑尾佔位子，抱著一疊參考書在書架間穿梭。
                因為太過專注於尋找黑尾的身影，沒注意到腳下的推車。
            </div>
            <div class="narrative-action">
                *哐噹！嘩啦啦——*
            </div>
            <div class="story-paragraph">
                一連串巨響，她整個人撲倒在地，手中的書本飛了出去，精準地砸中了剛好從轉角走出來的某人的... 重要的髮型。
            </div>
            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    ...雖然我知道我很帥，但也不用行這麼大的禮吧？還有，我的髮型是無辜的。
                </div>
            </div>
        `
    }
};

// Gardening Diary Data
const gardeningData = [
    {
        id: 'g2',
        title: "貓草種植計畫",
        date: "5月 20日午休時間",
        weather: "☀️",
        status: "發芽",
        preview: "聽說音駒這附近有很多流浪貓，シンディ為了吸引附近的貓咪，開始在社團角落種植貓草。結果引來了...一隻大黑貓？",
        content: `
            <div class="story-scene-info">
                <span class="scene-tag"><i class="fas fa-map-marker-alt"></i> 園藝社角落</span>
                <span class="scene-tag"><i class="far fa-clock"></i> 1:35 PM (午休)</span>
            </div>

            <div class="story-paragraph">
                大約一個月前，從園藝社的前輩那裡聽說，學校附近常常有流浪貓出沒。牠們有時會悄悄溜進校園，在體育館的屋簷下躲雨，或是在舊校舍的窗台上曬太陽。
            </div>
            
            <div class="story-paragraph">
                從那天起，我在園藝社最隱蔽的角落，撒下了貓草的種子。每天午休都會像現在這樣，提著水壺，滿懷期待地來為它們澆水。看著那些翠綠的嫩芽一天天破土而出，心中便會湧起一股難以言喻的成就感。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （不知道今天有沒有貓咪客人來過呢...它們會喜歡我種的貓草嗎？<br>如果能親眼看到它們在這裡打滾的樣子，那就太好了...）
            </div>

            <div class="narrative-action">
                她臉上漾開一抹溫柔的微笑，腳步也輕快了幾分。<br>然而，當她繞過一叢半人高的繡球花時，腳步卻猛地頓住了。
            </div>

            <div class="narrative-action strong-impact">
                —— 她 看 到 了 。
            </div>

            <div class="story-paragraph">
                在那個灑滿陽光、長滿了青翠貓草的祕密角落裡，一個高大、熟悉到不能再熟悉的身影正蹲在那裡。黑色的制服褲包裹著修長的腿，那頭標誌性的雞冠頭，在陽光下顯得格外清晰。
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    咪～咪～過來。這裡有好吃的喔。<br>
                    <span style="font-size: 0.85em; color: #bbb;">(語氣異常溫柔)</span>
                </div>
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （天啊...那是黑尾學長？！<br>他在跟貓說話的語氣也太溫柔了吧！！心臟受不了了...好想變成那隻貓...）
            </div>

            <div class="narrative-action">
                心臟瞬間漏跳了一拍。<br>她下意識地往繡球花叢後縮了縮，只探出半顆腦袋，屏住呼吸，偷偷地觀察著。
            </div>

            <div class="story-paragraph">
                陽光灑在黑尾的側臉上，為他深刻的輪廓鍍上了一層柔和的金邊。
                沒有了平時那種狡黠的壞笑，也沒有了球場上的凌厲。他的嘴角微微上揚，眼神中流露出的，是純粹的、不帶任何雜質的寵溺。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （...學長...原來私底下是這個樣子的啊...<br>等等！為、為什麼黑尾學長會在這裡？！他發現我的祕密基地了嗎？）
            </div>

            <div class="narrative-action">
                黑尾其實早就察覺到背後的視線。<br>他嘴角微微上揚，故意沒有回頭，只是稍微側過臉。
            </div>

            <div class="inner-monologue kuroo-mind">
                <span class="inner-label">Kuroo's Mind</span>
                （這氣息...是那個園藝社的小不點吧。<br>躲在柱子後面偷看的樣子，比這隻野貓還像小動物。）
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    這草種得不錯啊，很有吸引力。連我都想過來趴著睡午覺了。<br>
                    妳說是吧？經理小姐？
                </div>
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    學、學長想趴著也可以喔！<br>
                    不、不對！這裡有泥土會弄髒衣服的！💦
                </div>
            </div>
        `
    }
];

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Init
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeIcon').textContent = '☀️';
    }

    // Scroll Observer
    const scrollObserver = new IntersectionObserver((entries) => {
        const btn = document.getElementById('scrollTopBtn');
        if (entries[0].isIntersecting) {
            btn.classList.remove('visible');
        } else {
            btn.classList.add('visible');
        }
    });
    
    // Watch top of page
    const topMarker = document.createElement('div');
    document.body.prepend(topMarker);
    scrollObserver.observe(topMarker);
    
    // Load Animations if existing
    if(typeof initScrollAnimations === 'function') initScrollAnimations();
    
    // Bind Event Clicks (Timeline)
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', function() {
            const eventId = this.getAttribute('data-id');
            openStoryModal(eventId);
        });
    });

    // Bind Gardening Clicks
    // Note: Assuming you generate gardening cards dynamically or have them in HTML
    // If static in HTML, add data-id="g2" to the garden card
    document.querySelectorAll('.garden-card').forEach(card => {
        card.addEventListener('click', function() {
            // Find data-id if exists, or assume g2 for demo
            const gardenId = this.getAttribute('data-id') || 'g2';
            openGardenModal(gardenId);
        });
    });
});

/* --- FUNCTIONALITY --- */

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('darkModeIcon').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Logic
let currentModal = null;

function openStoryModal(eventId) {
    const data = eventStories[eventId];
    if (!data) return;
    
    const modalHtml = `
        <div class="modal active" id="storyModal" onclick="closeModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-close" onclick="closeModal(event)">×</div>
                <div class="story-header">
                    <h2 class="story-chapter-title">${data.title}</h2>
                    <div class="story-date">${data.date}</div>
                </div>
                <div id="modalBody">
                    ${data.content}
                </div>
            </div>
        </div>
    `;
    
    closeModal(); // Close existing
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.style.overflow = 'hidden';
    currentModal = document.getElementById('storyModal');
}

function openGardenModal(gardenId) {
    const data = gardeningData.find(g => g.id === gardenId);
    if (!data) return;

    const modalHtml = `
        <div class="modal active" id="gardenModal" onclick="closeModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-close" onclick="closeModal(event)">×</div>
                <div class="story-header">
                    <h2 class="story-chapter-title">🌿 ${data.title}</h2>
                    <div class="story-date">${data.date} | 天氣: ${data.weather} | 狀態: ${data.status}</div>
                </div>
                <div id="modalBody">
                    ${data.content}
                </div>
            </div>
        </div>
    `;
    
    closeModal(); 
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.style.overflow = 'hidden';
    currentModal = document.getElementById('gardenModal');
}

function closeModal(e) {
    if (currentModal) {
        currentModal.remove();
        currentModal = null;
        document.body.style.overflow = '';
    }
}

/* --- SCROLL ANIMATION FUNCTIONS --- */
function initScrollAnimations() {
    const interviewElements = document.querySelectorAll(
        '.interview-scene .host-box, ' +
        '.interview-scene .narrative-action, ' +
        '.interview-scene .inner-monologue, ' +
        '.interview-scene .dialogue-wrapper'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-in-active');
            } else {
                // Optional: remove to replay animation
                // entry.target.classList.remove('pop-in-active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    interviewElements.forEach(el => observer.observe(el));
}
