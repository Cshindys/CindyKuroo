/* --- GLOBAL VARIABLES & DATA --- */

// Timeline Event Stories Data (Cindy = Left, Kuroo = Right)
const eventStories = {
    'event1': {
        title: "愛的暗殺事件🌱",
        date: "記錄時間：未知",
        content: `
            <div class="narrative-action">
                シンディ其實並不擅長園藝，但為了加入園藝社（以及偷看隔壁體育館的黑尾），她努力學習。她領養了一盆號稱「絕對不會死」的仙人掌。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （只要給它滿滿的愛，它一定會長得很高大吧！就像學長一樣！）
            </div>

            <div class="narrative-action">
                出於對這個小生命的過度關愛，她每天早晚都給它澆水，還對著它說話。結果兩個禮拜後，仙人掌... 從內部爛掉了。
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    嗚嗚嗚...為什麼...店員明明說它很堅強的...
                </div>
            </div>

            <div class="story-bubble right">
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
            <div class="narrative-action">
                午休時間，圖書館內一片寂靜。Cindy 踮著腳尖試圖拿取書架頂層的一本植物圖鑑。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （差一點點...再高一點點就拿到了...！）
            </div>

            <div class="narrative-action">
                就在指尖碰到書脊的瞬間，重心不穩，整個人向後仰去。她閉上眼睛準備迎接疼痛，卻沒有摔倒在地，反而是頭頂傳來「咚」的一聲悶響。
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    好痛... 妳是在練習頭球攻擊嗎？小不點？
                </div>
            </div>

            <div class="narrative-action">
                原來黑尾剛好經過，伸手扶住了她，卻被落下的精裝書精準砸中了自己的手臂，還反彈到了 Cindy 的頭上。
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    對、對不起學長！！我不是故意的！你的手沒事吧？！
                </div>
            </div>
        `
    },
    'event3': {
        title: "左腳的愛過於沉重🦶🏻",
        date: "記錄時間：黑尾生日",
        content: `
            <div class="narrative-action">
                黑尾生日當天，Cindy 鼓起勇氣送出了準備已久的禮物。包裝非常精美，還綁著紫色的緞帶。
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    喔？謝啦。我可以現在拆開嗎？
                </div>
            </div>

            <div class="narrative-action">
                黑尾打開盒子，表情凝固了三秒。裡面是兩個高品質的護膝... 但仔細一看，包裝上都貼著「左腳專用」的標籤。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （糟了...學長的表情怪怪的...難道是不喜歡這個顏色嗎？）
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    那、那個！因為太緊張買錯了... 店員說只剩左腳的庫存... 我想說反正形狀差不多...
                </div>
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    噗... 哈哈哈哈！這什麼理由啊！好吧，我會好好守護我的左腳的，這份沉重的愛我就收下了。
                </div>
            </div>
        `
    },
    'event9': {
        title: "「貓咪畸變」手工吊飾騷動🧶",
        date: "記錄時間：大賽預選前夕",
        content: `
            <div class="narrative-action">
                在一次重要的全國大賽預選賽前夕，シンデイ懷著滿腔熱情，決定親手為每一位隊員製作「音駒貓」毛氈御守。她閉關整整一個週末，對著教學影片一針一線地創作，想像著大家收到禮物時的笑容。
            </div>

            <div class="narrative-action">
                然而，由於她對針線活有著「天賦異稟般的笨拙」，成品產生了巨大的、甚至是物種上的差異。
                <br><br>
                有的眼睛一大一小，有的嘴巴像詭異波浪線，最經典的一個耳朵還縫反了，與其說是貓，不如說是一隻憂鬱的變形蝙蝠。
            </div>

            <div class="narrative-action">
                當她鼓起勇氣送出這一籃「畸變貓咪軍團」時，整個排球館陷入了微妙而漫長的沉默。
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    哈哈，那個東西啊... 我到現在還留著呢。（從鐵盒裡拿出一個難以形容的物體）
                </div>
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    你看，耳朵一前一後，眼睛像被揍了一拳，這嘴角簡直是在嘲諷全世界。我當時不是問妳：『學妹，妳確定這是貓？不是什麼新品種的外星生物嗎？』
                </div>
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    嗚...（臉紅得像晚霞）我、我真的不是故意的！教學影片明明很可愛啊！
                </div>
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    可是針線到我手上就有自己的想法！完全不聽指揮！我的手指都被扎了好幾個洞... 我以為你們會偷偷丟掉的...
                </div>
            </div>

            <div class="narrative-action">
                黑尾看著眼前快要哭出來的女孩，眼神忽然變得溫柔了許多。他輕輕晃了晃手中的「畸變貓」。
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    雖然長得很有創意，但所有人都收下了。研磨還把它掛在遊戲機包上，說卡關的時候看一眼就覺得沒什麼過不去的坎了。
                </div>
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    至於我這個嘛... 我一直收得很好。因為我知道，這是某個笨手笨腳的傢伙，熬了好幾個晚上，忍著手指痛才做出來的東西。
                </div>
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    這份心意，比任何做得漂亮的東西，都貴重多了。
                </div>
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy's Mind</span>
                （原來...那份笨拙的心意，真的有被好好地珍視著啊...）
            </div>
        `
    }
};

// Storybook Chapters Data (Rest of the file remains largely the same)
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

// Gardening Diary Data
const gardenEntries = [
    {
        id: 'g1',
        title: "繡球花盛開",
        date: "6月 15日",
        weather: "🌧️",
        status: "開花",
        preview: "今天下了一整天的雨，但是紫色的繡球花開得非常漂亮。就像學長的髮色一樣...不對，學長是黑髮啦！我是說氣質！",
        content: `
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="background: #f0f2f5; padding: 6px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; color: #666; display: inline-block;">
                    ⏰ 時間：放學後的雷陣雨時分
                </span>
            </div>
            
            <div class="narrative-action" style="text-indent: 0;">
                *梅雨季節的雨聲淅瀝淅瀝地打在溫室玻璃上。Cindy 蹲在花圃前，正專注地檢查繡球花的葉片，並沒有發現身後多了一個人影。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy 內心獨白</span>
                （這紫藍色的漸層真好看...有點像黑尾學長偶爾露出的冷靜眼神。啊！我在胡思亂想什麼啊！）
            </div>

            <div class="story-paragraph" style="text-indent: 0;">
                突然，一道影子籠罩下來。
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    喔？這顏色挺不錯的嘛。跟妳今天頭上夾的髮夾顏色很像。
                </div>
            </div>

            <div class="narrative-action" style="text-indent: 0;">
                *黑尾身上還穿著排球部的練習服，似乎是為了躲雨才走進這條走廊。他單手插在口袋裡，微微彎腰看著花。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">黑尾 內心獨白</span>
                （其實早就看到這傢伙在這裡了。明明被雨聲吵得聽不見腳步聲，卻對花這麼專注...稍微有點不爽啊。）
            </div>

            <div class="story-bubble left">
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
        date: "5月 20日午休時間",
        weather: "☀️",
        status: "發芽",
        preview: "聽說音駒這附近有很多流浪貓，シンディ為了吸引附近的貓咪，開始在社團角落種植貓草。結果引來了...一隻大黑貓？",
        content: `
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="background: #f0f2f5; padding: 6px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; color: #666; display: inline-block;">
                    ⏰ 時間：1:35 PM 
                </span>
            </div>

            <div class="story-paragraph" style="text-indent: 0;">
                大約一個月前，シンデイ從園藝社的前輩那裡聽說，學校附近常常有流浪貓出沒，牠們有時會悄悄溜進校園，在體育館的屋簷下躲雨，或是在舊校舍的窗台上曬太陽。
            </div>
           <div class="story-paragraph" style="text-indent: 0;">
                從那天起，シンデイ在園藝社最隱蔽的角落，撒下了貓草的種子。她每天午休都會像現在這樣，提著水壺，滿懷期待地來為它們澆水。
            </div>
           <div class="story-paragraph" style="text-indent: 0;">
                看著那些翠綠的嫩芽一天天破土而出，茁壯成長，她心中便會湧起一股難以言喻的成就感與溫柔。
            </div>
             <div class="inner-monologue">
                <span class="inner-label">シンデイ內心獨白</span>
                （不知道今天有沒有貓咪客人來過呢...它們會喜歡我種的貓草嗎？如果能親眼看到它們在這裡打滾的樣子，那就太好了...）
            </div>
            <div class="narrative-action" style="text-indent: 0;">
                *她臉上漾開一抹溫柔的微笑，腳步也輕快了幾分。然而，當她繞過一叢半人高的繡球花時，腳步卻猛地頓住了。*
            </div>
            <div class="narrative-action" style="text-indent: 0;">
                *她看到了。*
            </div>
            <div class="story-paragraph" style="text-indent: 0;">
                *在那個灑滿陽光、長滿了青翠貓草的祕密角落裡，一個高大、熟悉到不能再熟悉的身影正蹲在那裡。*
            </div>
            <div class="story-paragraph" style="text-indent: 0;">
                *黑色的制服褲包裹著修長的腿，那頭標誌性的雞冠頭，在陽光下顯得格外清晰。*
            </div>
            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    咪～咪～過來。這裡有好吃的喔。
                </div>
            </div>
            <div class="inner-monologue">
                <span class="inner-label">シンデイ內心獨白</span>
                （天啊...那是黑尾學長？他在跟貓說話的語氣也太溫柔了吧！！心臟受不了了...好想變成那隻貓...）
            </div>
            <div class="narrative-action" style="text-indent: 0;">
                *シンデイ的心臟瞬間漏跳了一拍，她下意識地往繡球花叢後縮了縮，只探出半顆腦袋，屏住呼吸，偷偷地觀察著。*
            </div>
            <div class="story-paragraph" style="text-indent: 0;">
                *陽光灑在黑尾的側臉上，為他深刻的輪廓鍍上了一層柔和的金邊。他此刻的表情，是シンデイ從未見過的。沒有了平時那種狡黠的、彷彿能看透一切的壞笑，也沒有了球場上那份身為主將的凌厲與霸氣。他的嘴角微微上揚，形成一個極其溫柔的弧度，那雙狹長的眼眸微微瞇起，專注地凝視著眼前的小生命，眼神中流露出的，是純粹的、不帶任何雜質的溫柔與寵溺。*
            </div>
            <div class="story-paragraph" style="text-indent: 0;">
                *那一瞬間，シンデイ感覺自己的心臟像是被一隻溫暖的手輕輕地攥住了，一種難以名狀的悸動，伴隨著微酸的暖流，迅速蔓延至四肢百骸。*
            </div>
             <div class="inner-monologue">
                <span class="inner-label">シンデイ內心獨白</span>
                （...學長...原來是這個樣子的啊...等等！為、為什麼黑尾學長會在這裡？！他發現我的祕密基地了嗎？不、不會吧...還是說...他也是來看貓的？）
            </div>


            <div class="narrative-action" style="text-indent: 0;">
                *黑尾其實早就察覺到背後的視線。他嘴角微微上揚，故意沒有回頭，只是稍微側過臉。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">黑尾 內心獨白</span>
                （這氣息...是那個園藝社的小不點吧。躲在柱子後面偷看的樣子，比這隻野貓還像小動物。）
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    這草種得不錯啊，很有吸引力。連我都想過來趴著睡午覺了。妳說是吧？經理小姐？
                </div>
            </div>

            <div class="story-bubble left">
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
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="background: #f0f2f5; padding: 6px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; color: #666; display: inline-block;">
                    ⏰ 時間：蟬鳴不斷的盛夏午後
                </span>
            </div>

            <div class="story-paragraph" style="text-indent: 0;">
                向日葵長得好高，已經完全超過了 Cindy 的身高。她必須抬起手遮擋刺眼的陽光，才能看清花盤。
            </div>

            <div class="inner-monologue">
                <span class="inner-label">Cindy 內心獨白</span>
                （向日葵真好啊，可以這樣光明正大地一直追逐著太陽。如果我也能這麼直率地看著學長就好了...不過學長也像太陽一樣耀眼，看太久會眼睛痛吧。）
            </div>

            <div class="narrative-action" style="text-indent: 0;">
                *Cindy 踮起腳尖試圖測量花莖的高度，身體搖搖晃晃的。突然，一道陰影覆蓋了下來，替她擋住了刺眼的陽光。*
            </div>

            <div class="story-bubble right">
                <div class="story-avatar"><img src="img/KurooQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">黑尾</span>
                    躲在這裡幹嘛？小心中暑喔，小不點。
                </div>
            </div>

            <div class="narrative-action" style="text-indent: 0;">
                *黑尾從花田的另一端探出頭，因為身高的絕對優勢，他輕鬆地俯視著 Cindy。看著她被曬得紅撲撲的臉頰，他無奈地嘆了口氣，將手裡的運動飲料貼在她的臉頰上。*
            </div>

            <div class="inner-monologue">
                <span class="inner-label">黑尾 內心獨白</span>
                （這麼熱的天還在外面晃...真是讓人操心。這張臉都快比向日葵還紅了。）
            </div>

            <div class="story-bubble left">
                <div class="story-avatar"><img src="img/CindyQQ(Transparent).png"></div>
                <div class="story-bubble-content">
                    <span class="sb-speaker">Cindy</span>
                    冰、冰的好舒服... 學長才是，練習不累嗎？
                </div>
            </div>
             <div class="story-bubble right">
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
}
