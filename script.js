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

// Gardening Diary Data (Updated with Time, Thoughts, and Actions)
const gardenEntries = [
    {
        id: 'g1',
        title: "繡球花盛開",
        date: "6月 15日",
        weather: "🌧️",
        status: "開花",
        preview: "今天下了一整天的雨，但是紫色的繡球花開得非常漂亮。就像學長的髮色一樣...不對，學長是黑髮啦！我是說氣質！",
        content: `
            <div style="font-weight:700; color:#888; margin-bottom:15px;">⏰ 時間：放學後的雷陣雨時分</div>
            
            <div class="narrative-action">
                *梅雨季節的雨聲淅瀝淅瀝地打在溫室玻璃上。Cindy 蹲在花圃前，正專注地檢查繡球花的葉片，並沒有發現身後多了一個人影。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy 內心獨白</span>
                （這紫藍色的漸層真好看...有點像黑尾學長偶爾露出的冷靜眼神。啊！我在胡思亂想什麼啊！）
            </div>

            <div class="story-paragraph">
                突然，一道影子籠罩下來。
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    喔？這顏色挺不錯的嘛。跟妳今天頭上夾的髮夾顏色很像。
                </div>
            </div>

            <div class="narrative-action">
                *黑尾身上還穿著排球部的練習服，似乎是為了躲雨才走進這條走廊。他單手插在口袋裡，微微彎腰看著花。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">黑尾 內心獨白</span>
                （其實早就看到這傢伙在這裡了。明明被雨聲吵得聽不見腳步聲，卻對花這麼專注...稍微有點不爽啊。）
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    學、學長？！...謝、謝謝誇獎。（臉瞬間紅透）
                </div>
            </div>
        `
    },
    {
        id: 'g2',
        title: "貓草種植計畫",
        date: "5月 20日",
        weather: "☀️",
        status: "發芽",
        preview: "Cindy 為了吸引附近的貓咪，開始在社團角落種植貓草。結果引來了...一隻大黑貓？",
        content: `
            <div style="font-weight:700; color:#888; margin-bottom:15px;">⏰ 時間：陽光普照的午休時間</div>

            <div class="story-paragraph">
                在園藝社最隱蔽的角落，Cindy 提著藍色小水壺悄悄靠近。那是她為了吸引流浪貓而特意開闢的「貓草秘密基地」。
            </div>

            <div class="narrative-action">
                *然而，當她繞過轉角時，卻發現那裡已經被佔據了。一個高大的身影正蹲在草叢邊，手裡拿著狗尾巴草。*
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    咪—咪—過來。這裡有好吃的喔。
                </div>
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy 內心獨白</span>
                （天啊...那是黑尾學長？他在跟貓說話的語氣也太溫柔了吧！！心臟受不了了...好想變成那隻貓...）
            </div>

            <div class="narrative-action">
                *黑尾其實早就察覺到背後的視線。他嘴角微微上揚，故意沒有回頭，只是稍微側過臉。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">黑尾 內心獨白</span>
                （這氣息...是那個園藝社的小不點吧。躲在柱子後面偷看的樣子，比這隻野貓還像小動物。）
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    這草種得不錯啊，很有吸引力。連我都想過來趴著睡午覺了。妳說是吧？經理小姐？
                </div>
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    學、學長想趴著也可以喔！不、不對！這裡有泥土會弄髒衣服的！（大驚慌）
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
            <div style="font-weight:700; color:#888; margin-bottom:15px;">⏰ 時間：蟬鳴不斷的盛夏午後</div>

            <div class="story-paragraph">
                向日葵長得好高，已經完全超過了 Cindy 的身高。她必須抬起手遮擋刺眼的陽光，才能看清花盤。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy 內心獨白</span>
                （向日葵真好啊，可以這樣光明正大地一直追逐著太陽。如果我也能這麼直率地看著學長就好了...不過學長也像太陽一樣耀眼，看太久會眼睛痛吧。）
            </div>

            <div class="narrative-action">
                *Cindy 踮起腳尖試圖測量花莖的高度，身體搖搖晃晃的。突然，一道陰影覆蓋了下來，替她擋住了刺眼的陽光。*
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    躲在這裡幹嘛？小心中暑喔，小不點。
                </div>
            </div>

            <div class="narrative-action">
                *黑尾從花田的另一端探出頭，因為身高的絕對優勢，他輕鬆地俯視著 Cindy。看著她被曬得紅撲撲的臉頰，他無奈地嘆了口氣，將手裡的運動飲料貼在她的臉頰上。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">黑尾 內心獨白</span>
                （這麼熱的天還在外面晃...真是讓人操心。這張臉都快比向日葵還紅了。）
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    冰、冰的好舒服... 學長才是，練習不累嗎？
                </div>
            </div>
             <div class="story-bubble left">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    只要看到妳這呆樣就不累了。走了，回陰涼處去。
                </div>
            </div>
        `
    }
];

/* --- INTERVIEW DATA SERIES --- */
const interviewSeries = [
    {
        id: 'ep1',
        title: "第一回：初印象篇",
        content: `
            <div class="interview-scene">
                <div class="host-box" role="group"><span class="host-icon">🎤</span><span>主持人：請問，シンデイ，妳對黑尾學長的第一印象是什麼呢？</span></div>
                <div class="narrative-action">*聽到這個問題，Cindy的臉頰瞬間爆紅。她腦海立刻浮現：夕陽灑落的排球館裡，汗水淋漓的少年在球網前高高躍起……*</div>
                <div class="inner-monologue"><span class="inner-label">Cindy內心獨白</span>「糟糕……學長一定知道我那時候都在偷看他。要怎麼回答才自然一點...」</div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「我、我對學長的第一印象……是、是個非常帥氣，而且很有活力的學長！」</div>
                </div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「在排球場上的時候……學長簡直像變了一個人...」</div>
                </div>
                <div class="inner-monologue"><span class="inner-label">黑尾內心獨白</span>「噗嗤，看來我在她心裡的分數一直很高。」</div>
                
                <div class="host-box"><span class="host-icon">🎤</span><span>主持人 : 那麼黑尾君，你對シンデイ的第一印象呢？</span></div>
                <div class="dialogue-wrapper right">
                    <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png"></div>
                    <div class="dialogue-bubble kuroo-style">「嗯……我還以為我們音駒是不是來了一隻特別喜歡躲貓貓的小貓咪？」</div>
                </div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「喵？！」</div>
                </div>
                <div class="dialogue-wrapper right">
                    <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png"></div>
                    <div class="dialogue-bubble kuroo-style">「妳不是經常躲在排球館二樓嗎？傻瓜，妳那麼明顯...要看不見，那才是真有問題吧？」</div>
                </div>
                <div class="inner-monologue"><span class="inner-label">黑尾內心獨白</span>「只是那時候我不知道，這個小東西會變成現在這麼讓我上心的存在。」</div>
            </div>
        `
    },
    {
        id: 'ep2',
        title: "第二回：興趣與愛好",
        content: `
            <div class="interview-scene">
                <div class="host-box"><span class="host-icon">🎤</span><span>主持人：哇，學長原來早就知道了啊！那請問兩位，平時除了學習之外，有什麼特別的興趣嗎？</span></div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「我喜歡看書，還有照顧家裡的植物。嗯，還有……關注排球的比賽日程和消息。」</div>
                </div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「當然，現在我有很認真地學習怎麼照顧植物了！不會再把仙人掌澆死了！」</div>
                </div>
                <div class="dialogue-wrapper right">
                    <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png"></div>
                    <div class="dialogue-bubble kuroo-style">「我的興趣嘛……除了排球和讀書之外……」</div>
                </div>
                <div class="narrative-action">*他眼神意味深長地瞟了一眼シンデイ。*</div>
                <div class="dialogue-wrapper right">
                    <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png"></div>
                    <div class="dialogue-bubble kuroo-style">「研究生物的行為模式。」</div>
                </div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「？。」</div>
                </div>
            </div>
        `
    },
    {
        id: 'ep3',
        title: "第三回：未來的夢想",
        content: `
            <div class="interview-scene">
                <div class="host-box"><span class="host-icon">🎤</span><span>主持人：最後一個問題，兩位未來的夢想是什麼呢？</span></div>
                <div class="dialogue-wrapper right">
                    <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png"></div>
                    <div class="dialogue-bubble kuroo-style">「希望能繼續從事排球相關的工作，把這份熱情傳遞給更多人。」</div>
                </div>
                <div class="dialogue-wrapper">
                    <div class="char-avatar-small"><img src="img/CindyQQ(Transparent).png"></div>
                    <div class="dialogue-bubble cindy-style">「我希望能開一家溫馨的花店...如果可以的話，也想一直支持著學長的夢想。」</div>
                </div>
                 <div class="dialogue-wrapper right">
                    <div class="char-avatar-small"><img src="img/KurooQQ(Transparent).png"></div>
                    <div class="dialogue-bubble kuroo-style">「哈哈，那就拜託妳了，最強的贊助商。」</div>
                </div>
            </div>
        `
    }
];

let currentInterviewIndex = 0; 

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- IMAGE PROTECTION ---
    // Prevent right-clicking on any <img> element
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Prevent dragging on any <img> element
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
    // ------------------------------------

    renderChapters();
    renderGardenEntries();
    // initPhotobook(); // REMOVED
    initInterviews();       
    initScrollAnimations(); 
    
    document.querySelectorAll('.read-story-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventElement = e.target.closest('.timeline-event');
            const eventId = eventElement.getAttribute('data-event');
            openModal(eventId);
        });
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
    
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTopBtn');
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
});

/* --- TAB & SCROLL FUNCTIONS --- */
function switchTopTab(tabId) {
    document.querySelectorAll('.top-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('btn-top-video').classList.remove('active');
    document.getElementById('btn-top-relationship').classList.remove('active');
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'top-tab-video') {
        document.getElementById('btn-top-video').classList.add('active');
    } else {
        document.getElementById('btn-top-relationship').classList.add('active');
    }
}

function toggleTab(tabId) {
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('#filter-bar-anchor .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const target = document.getElementById(tabId);
    if(target) {
        target.classList.add('active');
    }
    
    const btnMap = {
        'interview-zone': 'btn-interview',
        'storybook-zone': 'btn-storybook',
        'timeline-zone': 'btn-timeline',
        'garden-zone': 'btn-garden',
        'profile-zone': 'btn-profile' 
    };
    if (btnMap[tabId]) {
        const btn = document.getElementById(btnMap[tabId]);
        if(btn) btn.classList.add('active');
    }
}

function switchTopTabAndScroll(tabId) {
    switchTopTab(tabId);
    scrollToId('top-filter-anchor');
}

function switchTabAndScroll(tabId) {
    toggleTab(tabId);
    scrollToId('filter-bar-anchor');
}

function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
function openModal(eventId) {
    const data = eventStories[eventId];
    if (!data) return;
    fillModalContent(data.title, data.date, data.content, "~ End of Memory ~");
}

function openGardenModal(entryData) {
    fillModalContent(entryData.title, entryData.date, entryData.content, "~ Garden Log End ~");
}

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

window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        closeModal();
    }
}

/* --- TEXT STORIES --- */
let currentChapterIndex = 0;

function renderChapters() {
    const container = document.getElementById('chapters-container');
    if(!container) return; 
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
    document.getElementById('reader-prev-btn').disabled = (currentChapterIndex === 0);
    document.getElementById('reader-next-btn').disabled = (currentChapterIndex === storyChapters.length - 1);
}

function renderGardenEntries() {
    const container = document.getElementById('garden-container');
    if(!container) return;
    container.innerHTML = '';
    gardenEntries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'garden-card';
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

/* --- INTERVIEW LOGIC FUNCTIONS --- */
function initInterviews() {
    const filterContainer = document.getElementById('interview-filters');
    if (!filterContainer) return;

    // 1. Generate Filter Buttons
    filterContainer.innerHTML = '';
    interviewSeries.forEach((series, index) => {
        const btn = document.createElement('button');
        btn.className = `sub-filter-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = series.title;
        btn.onclick = () => loadInterview(index);
        filterContainer.appendChild(btn);
    });

    // 2. Load the first interview
    loadInterview(0);
}

function loadInterview(index) {
    if (index < 0 || index >= interviewSeries.length) return;
    
    currentInterviewIndex = index;
    const data = interviewSeries[index];
    
    // 1. Update Content with Fade Effect
    const container = document.getElementById('interview-dynamic-content');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = data.content;
        container.style.opacity = '1';
        
        // **IMPORTANT: Re-trigger scroll animations for new content**
        observeInterviewElements(); 
    }, 200);

    // 2. Update Filter Buttons
    document.querySelectorAll('.sub-filter-btn').forEach((btn, idx) => {
        if (idx === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // 3. Update Pagination Buttons
    const prevBtn = document.getElementById('prev-interview-btn');
    const nextBtn = document.getElementById('next-interview-btn');
    
    if(prevBtn && nextBtn) {
        prevBtn.disabled = (index === 0);
        nextBtn.disabled = (index === interviewSeries.length - 1);
        
        if(index < interviewSeries.length - 1) {
            nextBtn.innerHTML = `下一篇 <i class="fas fa-arrow-right"></i>`;
        } else {
            nextBtn.innerHTML = `End <i class="fas fa-check"></i>`;
        }
    }
}

function changeInterview(direction) {
    loadInterview(currentInterviewIndex + direction);
    document.getElementById('interview-zone').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                entry.target.classList.remove('pop-in-active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    interviewElements.forEach(el => observer.observe(el));
}

function observeInterviewElements() {
    const elements = document.querySelectorAll(
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
                entry.target.classList.remove('pop-in-active');
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
}
