/* --- TABS FUNCTIONALITY --- */
function toggleTab(tabId) {
    // 1. Hide all tab content
    const tabs = document.querySelectorAll('.tab-section');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 2. Remove active class from buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Show target tab
    document.getElementById(tabId).classList.add('active');

    // 4. Activate button (if exists in the main filter bar)
    const activeBtn = document.querySelector(`button[onclick="toggleTab('${tabId}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function switchTabAndScroll(tabId) {
    toggleTab(tabId);
    scrollToId('filter-bar-anchor');
}

/* --- TOP TABS (VIDEO / RELATIONSHIP) --- */
function switchTopTab(tabId) {
    const contents = document.querySelectorAll('.top-tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('#top-filter-anchor .filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    
    // Find the button that triggers this tab
    const activeBtn = document.querySelector(`button[onclick="switchTopTab('${tabId}')"]`);
    if(activeBtn) activeBtn.classList.add('active');
}

function switchTopTabAndScroll(tabId) {
    switchTopTab(tabId);
    scrollToId('top-filter-anchor');
}

/* --- SCROLL FUNCTIONALITY --- */
function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add("visible");
    } else {
        btn.classList.remove("visible");
    }
};

/* --- DARK MODE --- */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkModeIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

/* --- MODAL LOGIC (TIMELINE) --- */
const timelineEvents = {
    event1: {
        title: "愛的暗殺事件",
        date: "記錄時間：未知",
        content: `
            <div class="story-paragraph">
                這是一個關於「過度關愛」的故事。シンデイ在園藝社發現了一株可愛的小仙人掌，店長說它「絕對不會死」。
            </div>
            <div class="story-bubble right">
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    「你要乖乖長大喔，每天都要喝飽飽的水～」
                </div>
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
            </div>
            <div class="story-paragraph">
                於是，她每天早中晚各澆一次水，還外加睡前噴霧。一週後，仙人掌軟爛地倒下了。
            </div>
             <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Kuroo</span>
                    「...這是淹死的吧？絕對是淹死的。」
                </div>
            </div>
        `
    },
    event2: {
        title: "圖書館書本空襲事件",
        date: "記錄時間：午休時間",
        content: `
            <div class="story-paragraph">
                為了幫黑尾前輩找排球戰術書，シンデイ努力墊起腳尖搆向書架最上層。
            </div>
            <div class="story-paragraph">
                手指剛碰到書脊，重心一個不穩，那本厚重的精裝書直直落下——「咚」！
            </div>
             <div class="story-bubble right">
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    「嗚......好痛......星星......」
                </div>
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
            </div>
            <div class="story-paragraph">
                黑尾剛好轉角走過來，看到抱著頭蹲在地上的小學妹，忍不住笑出聲，隨即伸手幫她揉了揉頭頂。
            </div>
             <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Kuroo</span>
                    「下次叫我一聲不就好了？矮冬瓜。」
                </div>
            </div>
        `
    },
    event3: {
        title: "左腳的愛過於沉重",
        date: "記錄時間：黑尾生日",
        content: `
            <div class="story-paragraph">
                黑尾生日這天，收到了一個包裝精美的禮物盒。打開一看，裡面是兩個護膝。
            </div>
             <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Kuroo</span>
                    「哦？謝啦。正好舊的磨損了。」
                </div>
            </div>
            <div class="story-paragraph">
                然而，當他仔細一看標籤，發現兩個護膝標註的都是「Left (左腳專用)」。
            </div>
             <div class="story-bubble right">
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    「啊！那個...店員說買一送一...我太緊張就拿錯了...」
                </div>
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
            </div>
             <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                 <div class="story-bubble-content">
                    <span class="sb-speaker">Kuroo</span>
                    「沒事，這說明妳對我的左腳情有獨鍾？」
                </div>
            </div>
        `
    }
};

document.querySelectorAll('.read-story-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Find the parent .timeline-event to identify which event it is
        const eventEl = this.closest('.timeline-event');
        const eventKey = eventEl.getAttribute('data-event');
        
        if (timelineEvents[eventKey]) {
            const data = timelineEvents[eventKey];
            const modalBody = document.getElementById('modalBody');
            
            modalBody.innerHTML = `
                <div class="story-header">
                    <h2 class="story-chapter-title">${data.title}</h2>
                    <div class="story-date">${data.date}</div>
                </div>
                ${data.content}
            `;
            
            document.getElementById('eventModal').classList.add('active');
        }
    });
});

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target == modal) {
        closeModal();
    }
}
