
(() => {
  "use strict";

  const STORAGE_KEY = "scaryNightUpgradeV1";
  const HEROES = [
    ["springtrap","Спрингтрап","Красный заяц"],
    ["freddy","Фредди","Медведь"],
    ["bonnie","Бонни","Кролик"],
    ["chica","Чика","Птица"],
    ["foxy","Фокси","Лис"],
    ["puppet","Марионетка","Кукла"],
    ["mangle","Мангл","Разобранный аниматроник"],
    ["shadow","Теневой","Тёмная сущность"]
  ];
  const THEMES = [
    ["Алый Классический","ОБЫЧНЫЙ",0,"linear-gradient(135deg,#292929,#730000)"],
    ["Алый Пиксельный","РЕДКИЙ",40,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Алый Неоновый","ЭПИЧЕСКИЙ",70,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Алый Золотой","ЛЕГЕНДАРНЫЙ",110,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Алый Призрачный","МИФИЧЕСКИЙ",150,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Алый Ржавый","РЕДКИЙ",55,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Алый Кровавая луна","ДРЕВНИЙ",200,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Алый Ледяной","ЭПИЧЕСКИЙ",90,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Алый Глитч","МИФИЧЕСКИЙ",170,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Алый Радиоактивный","ЛЕГЕНДАРНЫЙ",130,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Алый Тыквенный","РЕДКИЙ",60,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Алый Кошмарный","БОЖЕСТВЕННЫЙ",260,"linear-gradient(135deg,#000,#5a0000)"],
    ["Алый Кибер","ЭПИЧЕСКИЙ",95,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Алый Пепельный","РЕДКИЙ",50,"linear-gradient(135deg,#111,#666)"],
    ["Алый Королевский","ЛЕГЕНДАРНЫЙ",140,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Алый Пустотный","АБСОЛЮТНЫЙ",320,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Синий Классический","ОБЫЧНЫЙ",8,"linear-gradient(135deg,#292929,#730000)"],
    ["Синий Пиксельный","РЕДКИЙ",48,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Синий Неоновый","ЭПИЧЕСКИЙ",78,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Синий Золотой","ЛЕГЕНДАРНЫЙ",118,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Синий Призрачный","МИФИЧЕСКИЙ",158,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Синий Ржавый","РЕДКИЙ",63,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Синий Кровавая луна","ДРЕВНИЙ",208,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Синий Ледяной","ЭПИЧЕСКИЙ",98,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Синий Глитч","МИФИЧЕСКИЙ",178,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Синий Радиоактивный","ЛЕГЕНДАРНЫЙ",138,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Синий Тыквенный","РЕДКИЙ",68,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Синий Кошмарный","БОЖЕСТВЕННЫЙ",268,"linear-gradient(135deg,#000,#5a0000)"],
    ["Синий Кибер","ЭПИЧЕСКИЙ",103,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Синий Пепельный","РЕДКИЙ",58,"linear-gradient(135deg,#111,#666)"],
    ["Синий Королевский","ЛЕГЕНДАРНЫЙ",148,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Синий Пустотный","АБСОЛЮТНЫЙ",328,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Зелёный Классический","ОБЫЧНЫЙ",16,"linear-gradient(135deg,#292929,#730000)"],
    ["Зелёный Пиксельный","РЕДКИЙ",56,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Зелёный Неоновый","ЭПИЧЕСКИЙ",86,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Зелёный Золотой","ЛЕГЕНДАРНЫЙ",126,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Зелёный Призрачный","МИФИЧЕСКИЙ",166,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Зелёный Ржавый","РЕДКИЙ",71,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Зелёный Кровавая луна","ДРЕВНИЙ",216,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Зелёный Ледяной","ЭПИЧЕСКИЙ",106,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Зелёный Глитч","МИФИЧЕСКИЙ",186,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Зелёный Радиоактивный","ЛЕГЕНДАРНЫЙ",146,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Зелёный Тыквенный","РЕДКИЙ",76,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Зелёный Кошмарный","БОЖЕСТВЕННЫЙ",276,"linear-gradient(135deg,#000,#5a0000)"],
    ["Зелёный Кибер","ЭПИЧЕСКИЙ",111,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Зелёный Пепельный","РЕДКИЙ",66,"linear-gradient(135deg,#111,#666)"],
    ["Зелёный Королевский","ЛЕГЕНДАРНЫЙ",156,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Зелёный Пустотный","АБСОЛЮТНЫЙ",336,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Фиолетовый Классический","ОБЫЧНЫЙ",24,"linear-gradient(135deg,#292929,#730000)"],
    ["Фиолетовый Пиксельный","РЕДКИЙ",64,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Фиолетовый Неоновый","ЭПИЧЕСКИЙ",94,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Фиолетовый Золотой","ЛЕГЕНДАРНЫЙ",134,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Фиолетовый Призрачный","МИФИЧЕСКИЙ",174,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Фиолетовый Ржавый","РЕДКИЙ",79,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Фиолетовый Кровавая луна","ДРЕВНИЙ",224,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Фиолетовый Ледяной","ЭПИЧЕСКИЙ",114,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Фиолетовый Глитч","МИФИЧЕСКИЙ",194,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Фиолетовый Радиоактивный","ЛЕГЕНДАРНЫЙ",154,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Фиолетовый Тыквенный","РЕДКИЙ",84,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Фиолетовый Кошмарный","БОЖЕСТВЕННЫЙ",284,"linear-gradient(135deg,#000,#5a0000)"],
    ["Фиолетовый Кибер","ЭПИЧЕСКИЙ",119,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Фиолетовый Пепельный","РЕДКИЙ",74,"linear-gradient(135deg,#111,#666)"],
    ["Фиолетовый Королевский","ЛЕГЕНДАРНЫЙ",164,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Фиолетовый Пустотный","АБСОЛЮТНЫЙ",344,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Белый Классический","ОБЫЧНЫЙ",32,"linear-gradient(135deg,#292929,#730000)"],
    ["Белый Пиксельный","РЕДКИЙ",72,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Белый Неоновый","ЭПИЧЕСКИЙ",102,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Белый Золотой","ЛЕГЕНДАРНЫЙ",142,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Белый Призрачный","МИФИЧЕСКИЙ",182,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Белый Ржавый","РЕДКИЙ",87,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Белый Кровавая луна","ДРЕВНИЙ",232,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Белый Ледяной","ЭПИЧЕСКИЙ",122,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Белый Глитч","МИФИЧЕСКИЙ",202,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Белый Радиоактивный","ЛЕГЕНДАРНЫЙ",162,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Белый Тыквенный","РЕДКИЙ",92,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Белый Кошмарный","БОЖЕСТВЕННЫЙ",292,"linear-gradient(135deg,#000,#5a0000)"],
    ["Белый Кибер","ЭПИЧЕСКИЙ",127,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Белый Пепельный","РЕДКИЙ",82,"linear-gradient(135deg,#111,#666)"],
    ["Белый Королевский","ЛЕГЕНДАРНЫЙ",172,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Белый Пустотный","АБСОЛЮТНЫЙ",352,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Чёрный Классический","ОБЫЧНЫЙ",40,"linear-gradient(135deg,#292929,#730000)"],
    ["Чёрный Пиксельный","РЕДКИЙ",80,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Чёрный Неоновый","ЭПИЧЕСКИЙ",110,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Чёрный Золотой","ЛЕГЕНДАРНЫЙ",150,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Чёрный Призрачный","МИФИЧЕСКИЙ",190,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Чёрный Ржавый","РЕДКИЙ",95,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Чёрный Кровавая луна","ДРЕВНИЙ",240,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Чёрный Ледяной","ЭПИЧЕСКИЙ",130,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Чёрный Глитч","МИФИЧЕСКИЙ",210,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Чёрный Радиоактивный","ЛЕГЕНДАРНЫЙ",170,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Чёрный Тыквенный","РЕДКИЙ",100,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Чёрный Кошмарный","БОЖЕСТВЕННЫЙ",300,"linear-gradient(135deg,#000,#5a0000)"],
    ["Чёрный Кибер","ЭПИЧЕСКИЙ",135,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Чёрный Пепельный","РЕДКИЙ",90,"linear-gradient(135deg,#111,#666)"],
    ["Чёрный Королевский","ЛЕГЕНДАРНЫЙ",180,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Чёрный Пустотный","АБСОЛЮТНЫЙ",360,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Огненный Классический","ОБЫЧНЫЙ",48,"linear-gradient(135deg,#292929,#730000)"],
    ["Огненный Пиксельный","РЕДКИЙ",88,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Огненный Неоновый","ЭПИЧЕСКИЙ",118,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Огненный Золотой","ЛЕГЕНДАРНЫЙ",158,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Огненный Призрачный","МИФИЧЕСКИЙ",198,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Огненный Ржавый","РЕДКИЙ",103,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Огненный Кровавая луна","ДРЕВНИЙ",248,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Огненный Ледяной","ЭПИЧЕСКИЙ",138,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Огненный Глитч","МИФИЧЕСКИЙ",218,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Огненный Радиоактивный","ЛЕГЕНДАРНЫЙ",178,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Огненный Тыквенный","РЕДКИЙ",108,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Огненный Кошмарный","БОЖЕСТВЕННЫЙ",308,"linear-gradient(135deg,#000,#5a0000)"],
    ["Огненный Кибер","ЭПИЧЕСКИЙ",143,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Огненный Пепельный","РЕДКИЙ",98,"linear-gradient(135deg,#111,#666)"],
    ["Огненный Королевский","ЛЕГЕНДАРНЫЙ",188,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Огненный Пустотный","АБСОЛЮТНЫЙ",368,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Лунный Классический","ОБЫЧНЫЙ",56,"linear-gradient(135deg,#292929,#730000)"],
    ["Лунный Пиксельный","РЕДКИЙ",96,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Лунный Неоновый","ЭПИЧЕСКИЙ",126,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Лунный Золотой","ЛЕГЕНДАРНЫЙ",166,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Лунный Призрачный","МИФИЧЕСКИЙ",206,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Лунный Ржавый","РЕДКИЙ",111,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Лунный Кровавая луна","ДРЕВНИЙ",256,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Лунный Ледяной","ЭПИЧЕСКИЙ",146,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Лунный Глитч","МИФИЧЕСКИЙ",226,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Лунный Радиоактивный","ЛЕГЕНДАРНЫЙ",186,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Лунный Тыквенный","РЕДКИЙ",116,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Лунный Кошмарный","БОЖЕСТВЕННЫЙ",316,"linear-gradient(135deg,#000,#5a0000)"],
    ["Лунный Кибер","ЭПИЧЕСКИЙ",151,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Лунный Пепельный","РЕДКИЙ",106,"linear-gradient(135deg,#111,#666)"],
    ["Лунный Королевский","ЛЕГЕНДАРНЫЙ",196,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Лунный Пустотный","АБСОЛЮТНЫЙ",376,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Теневой Классический","ОБЫЧНЫЙ",64,"linear-gradient(135deg,#292929,#730000)"],
    ["Теневой Пиксельный","РЕДКИЙ",104,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Теневой Неоновый","ЭПИЧЕСКИЙ",134,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Теневой Золотой","ЛЕГЕНДАРНЫЙ",174,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Теневой Призрачный","МИФИЧЕСКИЙ",214,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Теневой Ржавый","РЕДКИЙ",119,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Теневой Кровавая луна","ДРЕВНИЙ",264,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Теневой Ледяной","ЭПИЧЕСКИЙ",154,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Теневой Глитч","МИФИЧЕСКИЙ",234,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Теневой Радиоактивный","ЛЕГЕНДАРНЫЙ",194,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Теневой Тыквенный","РЕДКИЙ",124,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Теневой Кошмарный","БОЖЕСТВЕННЫЙ",324,"linear-gradient(135deg,#000,#5a0000)"],
    ["Теневой Кибер","ЭПИЧЕСКИЙ",159,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Теневой Пепельный","РЕДКИЙ",114,"linear-gradient(135deg,#111,#666)"],
    ["Теневой Королевский","ЛЕГЕНДАРНЫЙ",204,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Теневой Пустотный","АБСОЛЮТНЫЙ",384,"linear-gradient(135deg,#000,#3a0ca3)"],
    ["Кристальный Классический","ОБЫЧНЫЙ",72,"linear-gradient(135deg,#292929,#730000)"],
    ["Кристальный Пиксельный","РЕДКИЙ",112,"linear-gradient(135deg,#14213d,#00b4d8)"],
    ["Кристальный Неоновый","ЭПИЧЕСКИЙ",142,"linear-gradient(135deg,#240046,#ff00aa)"],
    ["Кристальный Золотой","ЛЕГЕНДАРНЫЙ",182,"linear-gradient(135deg,#3d2b00,#ffd166)"],
    ["Кристальный Призрачный","МИФИЧЕСКИЙ",222,"linear-gradient(135deg,#001219,#94d2bd)"],
    ["Кристальный Ржавый","РЕДКИЙ",127,"linear-gradient(135deg,#3c2f2f,#b5651d)"],
    ["Кристальный Кровавая луна","ДРЕВНИЙ",272,"linear-gradient(135deg,#090909,#ff0000)"],
    ["Кристальный Ледяной","ЭПИЧЕСКИЙ",162,"linear-gradient(135deg,#001d3d,#90e0ef)"],
    ["Кристальный Глитч","МИФИЧЕСКИЙ",242,"linear-gradient(135deg,#000,#7b2cbf)"],
    ["Кристальный Радиоактивный","ЛЕГЕНДАРНЫЙ",202,"linear-gradient(135deg,#0b3d00,#a7c957)"],
    ["Кристальный Тыквенный","РЕДКИЙ",132,"linear-gradient(135deg,#291000,#ff7b00)"],
    ["Кристальный Кошмарный","БОЖЕСТВЕННЫЙ",332,"linear-gradient(135deg,#000,#5a0000)"],
    ["Кристальный Кибер","ЭПИЧЕСКИЙ",167,"linear-gradient(135deg,#001219,#00f5d4)"],
    ["Кристальный Пепельный","РЕДКИЙ",122,"linear-gradient(135deg,#111,#666)"],
    ["Кристальный Королевский","ЛЕГЕНДАРНЫЙ",212,"linear-gradient(135deg,#240046,#ffba08)"],
    ["Кристальный Пустотный","АБСОЛЮТНЫЙ",392,"linear-gradient(135deg,#000,#3a0ca3)"]
  ];
  const VARIANTS = [
    "I","II","III","IV","V","VI","VII","VIII"
  ];

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        shards: Number.isFinite(data.shards) ? data.shards : 250,
        unlocked: Array.isArray(data.unlocked) ? data.unlocked : [],
        equipped: data.equipped || {},
        selectedHero: data.selectedHero || HEROES[0][0],
        settings: {
          volume: data.settings?.volume ?? 70,
          sound: data.settings?.sound ?? true,
          shake: data.settings?.shake ?? true,
          quality: data.settings?.quality || "high",
          fullscreen: false
        }
      };
    } catch {
      return { shards:250, unlocked:[], equipped:{}, selectedHero:HEROES[0][0], settings:{volume:70,sound:true,shake:true,quality:"high",fullscreen:false} };
    }
  }

  const state = load();

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function skinId(hero, theme, variant) {
    return `${hero}_${theme}_${variant}`;
  }

  function allSkins() {
    const list = [];
    HEROES.forEach(([hero,name]) => {
      THEMES.forEach((theme, ti) => {
        VARIANTS.forEach((variant, vi) => {
          const id = skinId(hero, ti, vi);
          const ad = (ti === 1 || ti === 8 || ti === 12) && vi % 2 === 1;
          list.push({
            id, hero,
            name: `${theme[0]} ${name} ${variant}`,
            rarity: theme[1],
            cost: ad ? 0 : theme[2] + vi * 10,
            ad,
            bg: theme[3],
            pixel: ti === 1
          });
        });
      });
    });
    return list;
  }
  const SKINS = allSkins(); // 8 × 160 × 8 = 10240

  function ensureStyle() {
    if (document.getElementById("snUpgradeStyle")) return;
    const style = document.createElement("style");
    style.id = "snUpgradeStyle";
    style.textContent = `
      #snUpgradeShop,#snUpgradeSettings{position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.94);color:#fff;font-family:Arial,sans-serif;display:none;overflow:auto}
      #snUpgradeShop.active,#snUpgradeSettings.active{display:block}
      .snuWrap{max-width:1200px;margin:0 auto;padding:18px}
      .snuTop{display:flex;justify-content:space-between;align-items:center;gap:12px;position:sticky;top:0;background:#080808;padding:12px;border-bottom:2px solid #9d0208;z-index:2}
      .snuTitle{font-size:28px;font-weight:900;color:#ff2a2a}
      .snuClose{font-size:28px;background:#300;color:#fff;border:1px solid #f33;padding:4px 14px;cursor:pointer}
      .snuBalance{font-weight:800;color:#ffd166}
      .snuHeroes,.snuFilters{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}
      .snuBtn{background:#171717;color:#fff;border:1px solid #555;padding:10px 14px;cursor:pointer}
      .snuBtn.active{border-color:#ff2a2a;background:#3b0000}
      .snuGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px}
      .snuCard{border:1px solid #444;background:#111;padding:10px;border-radius:8px}
      .snuPortrait{height:110px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:42px;text-shadow:0 2px 6px #000;image-rendering:pixelated}
      .snuPixel{filter:contrast(1.5) saturate(1.3);font-family:monospace}
      .snuName{font-weight:900;margin:9px 0 4px}
      .snuRare{font-size:12px;color:#ccc}
      .snuAction{width:100%;margin-top:8px;padding:10px;background:#5a0000;border:1px solid #ff3333;color:#fff;cursor:pointer}
      .snuAction[disabled]{opacity:.6;cursor:default}
      .snuSetting{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;padding:16px;border-bottom:1px solid #333}
      .snuSetting input[type=range]{width:min(420px,65vw)}
      .snuSelect{background:#111;color:#fff;border:1px solid #666;padding:9px}
      .snuToast{position:fixed;left:50%;bottom:25px;transform:translateX(-50%);z-index:1000000;background:#111;border:1px solid #f33;padding:12px 18px;color:#fff;display:none}
      @media(max-width:600px){.snuTitle{font-size:20px}.snuGrid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    `;
    document.head.appendChild(style);
  }

  function toast(msg) {
    let t = document.getElementById("snuToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "snuToast";
      t.className = "snuToast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = "block";
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.style.display = "none", 2200);
  }

  function rewardAd(skin) {
    if (typeof window.showYandexRewarded === "function" && window.ysdk?.adv?.showRewardedVideo) {
      let rewarded = false;
      window.showYandexRewarded(
        () => { rewarded = true; unlock(skin); },
        ok => { if (!ok && !rewarded) toast("Нужно досмотреть рекламу"); }
      );
    } else if (window.YaGames) {
      toast("Реклама загружается. Попробуй ещё раз.");
    } else {
      // Тестовый режим вне Яндекс Игр.
      unlock(skin);
      toast("Тестовый режим: скин открыт");
    }
  }

  function unlock(skin) {
    if (!state.unlocked.includes(skin.id)) state.unlocked.push(skin.id);
    state.equipped[skin.hero] = skin.id;
    save();
    renderShop();
  }

  function renderShop() {
    const root = document.getElementById("snUpgradeShop");
    if (!root) return;
    const selected = state.selectedHero;
    const hero = HEROES.find(h => h[0] === selected) || HEROES[0];
    const skins = SKINS.filter(s => s.hero === selected);

    root.innerHTML = `
      <div class="snuWrap">
        <div class="snuTop">
          <div>
            <div class="snuTitle">АРСЕНАЛ КОШМАРА</div>
            <div>10240 уникальных скинов для всех аниматроников</div>
          </div>
          <div class="snuBalance">Осколки: <span id="snuBalance">${state.shards}</span></div>
          <button class="snuClose" id="snuCloseShop">×</button>
        </div>
        <div class="snuHeroes">
          ${HEROES.map(h => `<button class="snuBtn ${h[0]===selected?"active":""}" data-hero="${h[0]}">${h[1]}</button>`).join("")}
        </div>
        <div class="snuFilters">
          <input id="snuSearch" class="snuSelect" placeholder="Поиск скина">
          <select id="snuRarity" class="snuSelect">
            <option value="">Все редкости</option>
            ${[...new Set(THEMES.map(t=>t[1]))].map(r=>`<option>${r}</option>`).join("")}
          </select>
        </div>
        <div class="snuGrid" id="snuGrid"></div>
      </div>`;

    const grid = root.querySelector("#snuGrid");
    const draw = () => {
      const q = root.querySelector("#snuSearch").value.toLowerCase();
      const rarity = root.querySelector("#snuRarity").value;
      const list = skins.filter(s => (!q || s.name.toLowerCase().includes(q)) && (!rarity || s.rarity === rarity));
      grid.innerHTML = list.map(s => {
        const owned = state.unlocked.includes(s.id);
        const equipped = state.equipped[s.hero] === s.id;
        return `<div class="snuCard">
          <div class="snuPortrait ${s.pixel?"snuPixel":""}" style="background:${s.bg}">${s.pixel?"▣":"☠"}</div>
          <div class="snuName">${s.name}</div>
          <div class="snuRare">${s.rarity}</div>
          <button class="snuAction" data-skin="${s.id}" ${equipped?"disabled":""}>
            ${equipped?"ВЫБРАН":owned?"ВЫБРАТЬ":s.ad?"📺 ОТКРЫТЬ ЗА РЕКЛАМУ":`КУПИТЬ — ${window.getScaryDiscountedCost ? window.getScaryDiscountedCost(s.cost) : s.cost}`}
          </button>
        </div>`;
      }).join("");
      grid.querySelectorAll("[data-skin]").forEach(btn => {
        btn.onclick = () => {
          const skin = SKINS.find(s=>s.id===btn.dataset.skin);
          if (!skin) return;
          if (state.unlocked.includes(skin.id)) {
            state.equipped[skin.hero] = skin.id; save(); renderShop(); toast("Скин выбран");
          } else if (skin.ad) {
            rewardAd(skin);
          } else {
            const finalCost = window.getScaryDiscountedCost ? window.getScaryDiscountedCost(skin.cost) : skin.cost;
            if (state.shards >= finalCost) {
              state.shards -= finalCost;
              window.consumeScaryDiscount?.();
              unlock(skin);
              toast("Скин куплен");
            } else {
              toast("Не хватает осколков");
            }
          }
        };
      });
    };

    root.querySelectorAll("[data-hero]").forEach(b => b.onclick = () => {
      state.selectedHero = b.dataset.hero; save(); renderShop();
    });
    root.querySelector("#snuSearch").oninput = draw;
    root.querySelector("#snuRarity").onchange = draw;
    root.querySelector("#snuCloseShop").onclick = () => root.classList.remove("active");
    draw();
  }

  function applyAudioSettings() {
    const volume = Math.max(0, Math.min(100, Number(state.settings.volume))) / 100;
    document.querySelectorAll("audio,video").forEach(media => {
      media.volume = state.settings.sound ? volume : 0;
      media.muted = !state.settings.sound;
    });
    document.documentElement.style.setProperty("--sn-volume", volume);
  }

  function renderSettings() {
    const root = document.getElementById("snUpgradeSettings");
    root.innerHTML = `
      <div class="snuWrap">
        <div class="snuTop">
          <div class="snuTitle">НАСТРОЙКИ</div>
          <button class="snuClose" id="snuCloseSettings">×</button>
        </div>
        <div class="snuSetting"><div><b>ГРОМКОСТЬ</b><br>Общая громкость игры</div><div><input id="snuVolume" type="range" min="0" max="100" value="${state.settings.volume}"> <span id="snuVolText">${state.settings.volume}%</span></div></div>
        <div class="snuSetting"><div><b>ЗВУК</b><br>Музыка, шаги и эффекты</div><button class="snuBtn" id="snuSound">${state.settings.sound?"ВКЛ":"ВЫКЛ"}</button></div>
        <div class="snuSetting"><div><b>ТРЯСКА ЭКРАНА</b><br>Эффект во время атак</div><button class="snuBtn" id="snuShake">${state.settings.shake?"ВКЛ":"ВЫКЛ"}</button></div>
        <div class="snuSetting"><div><b>КАЧЕСТВО</b><br>Производительность и эффекты</div><select id="snuQuality" class="snuSelect"><option value="low">Низкое</option><option value="medium">Среднее</option><option value="high">Высокое</option></select></div>
        <div class="snuSetting"><div><b>ПОЛНЫЙ ЭКРАН</b><br>Развернуть игру</div><button class="snuBtn" id="snuFullscreen">ВКЛЮЧИТЬ</button></div>
        <div class="snuSetting"><div><b>УПРАВЛЕНИЕ</b><br>F — фонарь, C — камеры, X — маска, Esc — пауза</div><button class="snuBtn" id="snuHelp">ПОКАЗАТЬ</button></div>
      </div>`;

    root.querySelector("#snuQuality").value = state.settings.quality;
    root.querySelector("#snuCloseSettings").onclick = () => root.classList.remove("active");
    root.querySelector("#snuVolume").oninput = e => {
      state.settings.volume = Number(e.target.value);
      root.querySelector("#snuVolText").textContent = `${state.settings.volume}%`;
      save(); applyAudioSettings();
    };
    root.querySelector("#snuSound").onclick = e => {
      state.settings.sound = !state.settings.sound;
      e.target.textContent = state.settings.sound ? "ВКЛ" : "ВЫКЛ";
      save(); applyAudioSettings();
    };
    root.querySelector("#snuShake").onclick = e => {
      state.settings.shake = !state.settings.shake;
      e.target.textContent = state.settings.shake ? "ВКЛ" : "ВЫКЛ";
      document.body.dataset.screenShake = state.settings.shake ? "on" : "off";
      save();
    };
    root.querySelector("#snuQuality").onchange = e => {
      state.settings.quality = e.target.value;
      document.body.dataset.quality = state.settings.quality;
      save();
      toast("Качество изменено");
    };
    root.querySelector("#snuFullscreen").onclick = async () => {
      try {
        if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
        else await document.exitFullscreen();
      } catch { toast("Полный экран недоступен"); }
    };
    root.querySelector("#snuHelp").onclick = () => alert("F — фонарь\nC — камеры\nX — маска\nQ / E — переключение камер\nEsc — пауза");
  }

  function buildUI() {
    ensureStyle();
    let shop = document.getElementById("snUpgradeShop");
    if (!shop) {
      shop = document.createElement("section");
      shop.id = "snUpgradeShop";
      document.body.appendChild(shop);
    }
    let settings = document.getElementById("snUpgradeSettings");
    if (!settings) {
      settings = document.createElement("section");
      settings.id = "snUpgradeSettings";
      document.body.appendChild(settings);
    }
    renderShop();
    renderSettings();

    const nav = document.querySelector(".mainMenuNav") || document.querySelector("nav") || document.body;
    let shopBtn = document.getElementById("snShopButton");
    if (!shopBtn) {
      shopBtn = document.createElement("button");
      shopBtn.id = "snShopButton";
      shopBtn.className = "menuButton";
      shopBtn.innerHTML = "СКИНЫ <small>10240 уникальных обликов</small>";
      const settingsBtn = document.getElementById("settingsButton");
      if (settingsBtn?.parentNode) settingsBtn.parentNode.insertBefore(shopBtn, settingsBtn);
      else nav.appendChild(shopBtn);
    } else {
      shopBtn.innerHTML = "СКИНЫ <small>10240 уникальных обликов</small>";
    }
    shopBtn.onclick = () => { renderShop(); shop.classList.add("active"); };

    const settingsBtn = document.getElementById("settingsButton") ||
      [...document.querySelectorAll("button")].find(b => /НАСТРОЙКИ/i.test(b.textContent));
    if (settingsBtn) {
      settingsBtn.onclick = e => {
        e.preventDefault();
        e.stopPropagation();
        renderSettings();
        settings.classList.add("active");
      };
    }

    applyAudioSettings();
    document.body.dataset.screenShake = state.settings.shake ? "on" : "off";
    document.body.dataset.quality = state.settings.quality;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildUI);
  else buildUI();

  window.ScaryNightUpgrade = {
    state,
    skins: SKINS,
    openShop: () => document.getElementById("snUpgradeShop")?.classList.add("active"),
    openSettings: () => document.getElementById("snUpgradeSettings")?.classList.add("active"),
    addShards: n => { state.shards += Number(n)||0; save(); renderShop(); }
  };
})();


/* ===== YANDEX GAMES BRIDGE ===== */
(() => {
  "use strict";

  const SDK_URL = "/sdk.js";
  const CLOUD_KEY = "scaryNightCloudV1";
  let ysdk = null;
  let player = null;
  let saveTimer = null;

  function loadSdkScript() {
    return new Promise((resolve, reject) => {
      if (window.YaGames) return resolve();
      const existing = document.querySelector('script[data-yandex-games-sdk]');
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = SDK_URL;
      script.async = true;
      script.dataset.yandexGamesSdk = "1";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function pauseForAd() {
    try { window.ysdk?.features?.GameplayAPI?.stop?.(); } catch {}
    document.querySelectorAll("audio,video").forEach(m => {
      m.dataset.snWasPlaying = m.paused ? "0" : "1";
      try { m.pause(); } catch {}
    });
    try {
      if (typeof window.pauseGame === "function") window.pauseGame();
      if ("paused" in window) window.paused = true;
    } catch {}
  }

  function resumeAfterAd() {
    document.querySelectorAll("audio,video").forEach(m => {
      if (m.dataset.snWasPlaying === "1") {
        const p = m.play?.();
        if (p?.catch) p.catch(() => {});
      }
      delete m.dataset.snWasPlaying;
    });
    try { window.ysdk?.features?.GameplayAPI?.start?.(); } catch {}
  }

  function getLocalSnapshot() {
    const snapshot = {};
    const keys = [
      "scaryNightUpgradeV1",
      "sn_night_quests_v3",
      "scaryNightSave",
      "scaryNightSettings",
      "scaryNightProgress"
    ];
    keys.forEach(k => {
      const v = localStorage.getItem(k);
      if (v !== null) snapshot[k] = v;
    });
    return snapshot;
  }

  function applySnapshot(snapshot) {
    if (!snapshot || typeof snapshot !== "object") return;
    Object.entries(snapshot).forEach(([k, v]) => {
      if (typeof v === "string") localStorage.setItem(k, v);
    });
  }

  async function initPlayer() {
    if (!ysdk?.getPlayer) return;
    try {
      player = await ysdk.getPlayer({ scopes: false });
      const data = await player.getData([CLOUD_KEY]);
      if (data?.[CLOUD_KEY]) {
        const localEmpty = !localStorage.getItem("scaryNightUpgradeV1");
        if (localEmpty) {
          applySnapshot(data[CLOUD_KEY]);
          location.reload();
          return;
        }
      }
      queueCloudSave();
    } catch (e) {
      console.warn("Yandex player unavailable:", e);
    }
  }

  async function saveCloudNow() {
    if (!player?.setData) return;
    try {
      await player.setData({ [CLOUD_KEY]: getLocalSnapshot() }, true);
    } catch (e) {
      console.warn("Cloud save failed:", e);
    }
  }

  function queueCloudSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveCloudNow, 800);
  }

  async function initYandexGames() {
    try {
      await loadSdkScript();
      ysdk = await window.YaGames.init();
      window.ysdk = ysdk;

      try { ysdk.features?.LoadingAPI?.ready?.(); } catch {}
      try { ysdk.features?.GameplayAPI?.start?.(); } catch {}

      await initPlayer();

      window.addEventListener("storage", queueCloudSave);
      const nativeSetItem = localStorage.setItem.bind(localStorage);
      localStorage.setItem = function(key, value) {
        nativeSetItem(key, value);
        queueCloudSave();
      };

      document.dispatchEvent(new CustomEvent("yandex-games-ready", { detail: ysdk }));
      console.log("Yandex Games SDK ready");
    } catch (e) {
      console.warn("Running outside Yandex Games or SDK unavailable:", e);
    }
  }

  window.showYandexInterstitial = function(callback) {
    if (!ysdk?.adv?.showFullscreenAdv) {
      callback?.();
      return;
    }
    pauseForAd();
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onClose: () => { resumeAfterAd(); callback?.(); },
        onError: () => { resumeAfterAd(); callback?.(); }
      }
    });
  };

  window.showYandexRewarded = function(onRewarded, onClose) {
    if (!ysdk?.adv?.showRewardedVideo) {
      onClose?.(false);
      return;
    }
    let rewarded = false;
    pauseForAd();
    ysdk.adv.showRewardedVideo({
      callbacks: {
        onOpen: () => {},
        onRewarded: () => {
          rewarded = true;
          onRewarded?.();
          queueCloudSave();
        },
        onClose: () => {
          resumeAfterAd();
          onClose?.(rewarded);
        },
        onError: () => {
          resumeAfterAd();
          onClose?.(false);
        }
      }
    });
  };

  window.saveScaryNightToYandex = queueCloudSave;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initYandexGames, { once: true });
  } else {
    initYandexGames();
  }
})();


/* ===== EASY SHARDS REWARDS ===== */
(() => {
  "use strict";

  const REWARD_KEY = "scaryNightShardRewardsV2";
  const DAY = 24 * 60 * 60 * 1000;

  function getState() {
    try {
      return JSON.parse(localStorage.getItem(REWARD_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveState(s) {
    localStorage.setItem(REWARD_KEY, JSON.stringify(s));
    window.saveScaryNightToYandex?.();
  }

  function addShards(amount, message) {
    const api = window.ScaryNightUpgrade;
    if (!api?.state) return false;
    api.state.shards += amount;
    localStorage.setItem("scaryNightUpgradeV1", JSON.stringify(api.state));
    api.addShards?.(0);
    window.saveScaryNightToYandex?.();
    alert(`${message}\n+${amount} осколков кошмара`);
    return true;
  }

  function dailyReward() {
    const s = getState();
    const now = Date.now();
    if (s.lastDaily && now - s.lastDaily < DAY) {
      const hours = Math.ceil((DAY - (now - s.lastDaily)) / 3600000);
      alert(`Ежедневный подарок уже получен.\nСледующий через ${hours} ч.`);
      return;
    }
    s.lastDaily = now;
    s.dailyStreak = Math.min((s.dailyStreak || 0) + 1, 7);
    saveState(s);
    addShards(100 + s.dailyStreak * 25, `Ежедневная награда, день ${s.dailyStreak}`);
  }

  function adReward() {
    const grant = () => addShards(150, "Награда за рекламу");
    if (typeof window.showYandexRewarded === "function" && window.ysdk?.adv?.showRewardedVideo) {
      window.showYandexRewarded(grant, ok => {
        if (!ok) alert("Нужно досмотреть рекламу полностью.");
      });
    } else {
      grant(); // тестовый режим на GitHub Pages
    }
  }

  function promoReward() {
    const code = prompt("Введи промокод:");
    if (!code) return;
    const normalized = code.trim().toLowerCase();
    const s = getState();
    s.usedPromos = s.usedPromos || [];
    const promos = {
      "зак1989рытие": 500,
      "scary2026": 300,
      "night": 150
    };
    if (!(normalized in promos)) {
      alert("Такого промокода нет.");
      return;
    }
    if (s.usedPromos.includes(normalized)) {
      alert("Этот промокод уже использован.");
      return;
    }
    s.usedPromos.push(normalized);
    saveState(s);
    addShards(promos[normalized], "Промокод активирован");
  }

  function nightReward() {
    const s = getState();
    const today = new Date().toISOString().slice(0, 10);
    if (s.lastNightReward === today) {
      alert("Сегодня бонус за ночь уже получен.");
      return;
    }
    s.lastNightReward = today;
    saveState(s);
    addShards(75, "Бонус за прохождение ночи");
  }

  function buildRewardsButton() {
    if (document.getElementById("snRewardsButton")) return;

    const btn = document.createElement("button");
    btn.id = "snRewardsButton";
    btn.className = "menuButton";
    btn.innerHTML = 'ОСКОЛКИ <small>получить бесплатно</small>';

    const shopBtn = document.getElementById("snShopButton");
    if (shopBtn?.parentNode) shopBtn.parentNode.insertBefore(btn, shopBtn.nextSibling);
    else document.body.appendChild(btn);

    const panel = document.createElement("div");
    panel.id = "snRewardsPanel";
    panel.style.cssText = "display:none;position:fixed;inset:0;z-index:1000001;background:rgba(0,0,0,.95);color:#fff;font-family:Arial;overflow:auto";
    panel.innerHTML = `
      <div style="max-width:650px;margin:40px auto;padding:20px;background:#111;border:2px solid #a00;border-radius:12px">
        <button id="snRewardsClose" style="float:right;font-size:26px;background:#300;color:#fff;border:1px solid #f33">×</button>
        <h1 style="color:#ff3333">ПОЛУЧИТЬ ОСКОЛКИ</h1>
        <p>Выбирай награду:</p>
        <button id="snDailyReward" class="snuAction">🎁 ЕЖЕДНЕВНЫЙ ПОДАРОК</button>
        <button id="snAdReward" class="snuAction">📺 150 ОСКОЛКОВ ЗА РЕКЛАМУ</button>
        <button id="snNightReward" class="snuAction">🌙 75 ОСКОЛКОВ ЗА ПРОХОЖДЕНИЕ НОЧИ</button>
        <button id="snPromoReward" class="snuAction">🔑 ВВЕСТИ ПРОМОКОД</button>
        <p style="color:#aaa">Ежедневная серия увеличивает подарок до 275 осколков.</p>
      </div>`;
    document.body.appendChild(panel);

    btn.onclick = () => panel.style.display = "block";
    panel.querySelector("#snRewardsClose").onclick = () => panel.style.display = "none";
    panel.querySelector("#snDailyReward").onclick = dailyReward;
    panel.querySelector("#snAdReward").onclick = adReward;
    panel.querySelector("#snNightReward").onclick = nightReward;
    panel.querySelector("#snPromoReward").onclick = promoReward;
  }

  function init() {
    const timer = setInterval(() => {
      if (window.ScaryNightUpgrade && document.body) {
        clearInterval(timer);
        buildRewardsButton();
        window.rewardForCompletedNight = nightReward;
      }
    }, 300);
  }

  init();
})();


/* ===== NIGHT MISSIONS + ADVANCED PROMOCODES ===== */
(() => {
  "use strict";

  const MISSIONS_KEY = "scaryNightMissionsV3";
  const PROMO_KEY = "scaryNightPromosV3";

  function api() {
    return window.ScaryNightUpgrade;
  }

  function getJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
  }

  function setJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    window.saveScaryNightToYandex?.();
  }

  function notify(text) {
    alert(text);
  }

  function addShards(amount) {
    const game = api();
    if (!game?.state) return false;
    game.state.shards += amount;
    localStorage.setItem("scaryNightUpgradeV1", JSON.stringify(game.state));
    game.addShards?.(0);
    window.saveScaryNightToYandex?.();
    return true;
  }

  function unlockRandomSkin(rarity) {
    const game = api();
    if (!game?.skins?.length || !game.state) return null;
    let pool = game.skins.filter(s => !game.state.unlocked.includes(s.id));
    if (rarity) pool = pool.filter(s => s.rarity === rarity);
    if (!pool.length) pool = game.skins.filter(s => !game.state.unlocked.includes(s.id));
    if (!pool.length) return null;
    const skin = pool[Math.floor(Math.random() * pool.length)];
    game.state.unlocked.push(skin.id);
    game.state.equipped[skin.hero] = skin.id;
    localStorage.setItem("scaryNightUpgradeV1", JSON.stringify(game.state));
    game.addShards?.(0);
    window.saveScaryNightToYandex?.();
    return skin;
  }

  const MISSION_TEMPLATES = [
    { id:"flashlight", title:"Используй фонарь 20 раз", target:20, event:"flashlight" },
    { id:"cameras", title:"Открой камеры 12 раз", target:12, event:"camera" },
    { id:"mask", title:"Надень маску 8 раз", target:8, event:"mask" },
    { id:"survive", title:"Продержись 4 минуты", target:240, event:"second" },
    { id:"switchcam", title:"Переключи камеры 25 раз", target:25, event:"cameraSwitch" },
    { id:"power", title:"Не опускай энергию ниже 20%", target:1, event:"powerSafe" }
  ];

  function createNightMissions() {
    const shuffled = [...MISSION_TEMPLATES].sort(() => Math.random() - .5);
    const chosen = shuffled.slice(0, 3).map(m => ({...m, progress:0, done:false}));
    const state = { active:true, completed:false, startedAt:Date.now(), missions:chosen };
    setJson(MISSIONS_KEY, state);
    renderMissionHud();
    return state;
  }

  function getMissionState() {
    return getJson(MISSIONS_KEY, { active:false, completed:false, missions:[] });
  }

  function missionEvent(type, amount=1) {
    const state = getMissionState();
    if (!state.active || state.completed) return;
    let changed = false;
    state.missions.forEach(m => {
      if (m.event !== type || m.done) return;
      m.progress = Math.min(m.target, m.progress + amount);
      m.done = m.progress >= m.target;
      changed = true;
    });
    if (changed) {
      setJson(MISSIONS_KEY, state);
      renderMissionHud();
    }
  }

  function finishNight(success=true) {
    const state = getMissionState();
    if (!state.active || state.completed) {
      notify("Награда за эту ночь уже получена.");
      return;
    }
    state.active = false;
    state.completed = true;
    state.success = !!success;

    if (!success) {
      setJson(MISSIONS_KEY, state);
      renderMissionHud();
      notify("Ночь проиграна. Выполни задания в следующей попытке.");
      return;
    }

    const done = state.missions.filter(m => m.done).length;
    const base = 100;
    const missionBonus = done * 100;
    const randomBonus = Math.floor(Math.random() * 101); // 0–100
    const reward = Math.min(500, base + missionBonus + randomBonus);

    state.reward = reward;
    state.doneCount = done;
    setJson(MISSIONS_KEY, state);
    addShards(reward);
    renderMissionHud();

    let text = `НОЧЬ ПРОЙДЕНА!\nЗаданий выполнено: ${done}/3\nПолучено: ${reward} осколков`;
    if (done === 3) {
      const skin = unlockRandomSkin();
      if (skin) text += `\nБонус за все задания: скин «${skin.name}»`;
    }
    notify(text);
  }

  function renderMissionHud() {
    let hud = document.getElementById("snMissionHud");
    if (!hud) {
      hud = document.createElement("div");
      hud.id = "snMissionHud";
      hud.style.cssText = "position:fixed;top:12px;right:12px;z-index:999998;width:260px;background:rgba(0,0,0,.78);border:1px solid #a00;color:#fff;padding:10px;font-family:Arial;border-radius:8px;pointer-events:none";
      document.body.appendChild(hud);
    }
    const s = getMissionState();
    if (!s.active && !s.completed) {
      hud.style.display = "none";
      return;
    }
    hud.style.display = "block";
    hud.innerHTML = `<b style="color:#ff4444">ЗАДАНИЯ НОЧИ</b>` +
      s.missions.map(m => `<div style="font-size:13px;margin-top:6px;color:${m.done?"#6f6":"#fff"}">${m.done?"✓":"•"} ${m.title}<br><span style="color:#aaa">${m.progress}/${m.target}</span></div>`).join("");
  }

  // Detect common controls without requiring edits in index.html.
  document.addEventListener("keydown", e => {
    const key = e.key.toLowerCase();
    if (key === "f") missionEvent("flashlight");
    if (key === "c") missionEvent("camera");
    if (key === "x") missionEvent("mask");
    if (key === "q" || key === "e") missionEvent("cameraSwitch");
  });

  setInterval(() => {
    const s = getMissionState();
    if (s.active && !s.completed) missionEvent("second", 1);
  }, 1000);

  // Public hooks for the real game.
  window.startNightMissions = createNightMissions;
  window.nightMissionEvent = missionEvent;
  window.completeScaryNight = () => finishNight(true);
  window.failScaryNight = () => finishNight(false);

  const PROMOS = {
    "NIGHT100": { type:"shards", amount:100, text:"100 осколков" },
    "NIGHT250": { type:"shards", amount:250, text:"250 осколков" },
    "HORROR500": { type:"shards", amount:500, text:"500 осколков" },
    "SCARY2026": { type:"shards", amount:300, text:"300 осколков" },
    "DARKGIFT": { type:"shards", amount:200, text:"200 осколков" },

    "SALE10": { type:"discount", amount:10, uses:5, text:"Скидка 10% на 5 покупок" },
    "SALE25": { type:"discount", amount:25, uses:3, text:"Скидка 25% на 3 покупки" },
    "BIGSALE": { type:"discount", amount:50, uses:1, text:"Скидка 50% на 1 покупку" },
    "NIGHTDEAL": { type:"discount", amount:15, uses:10, text:"Скидка 15% на 10 покупок" },

    "FREESKIN": { type:"skin", rarity:null, text:"Случайный бесплатный скин" },
    "RARESKIN": { type:"skin", rarity:"РЕДКИЙ", text:"Редкий скин" },
    "EPICSKIN": { type:"skin", rarity:"ЭПИЧЕСКИЙ", text:"Эпический скин" },
    "LEGENDARY": { type:"skin", rarity:"ЛЕГЕНДАРНЫЙ", text:"Легендарный скин" },
    "MYTHIC": { type:"skin", rarity:"МИФИЧЕСКИЙ", text:"Мифический скин" },
    "VOIDGIFT": { type:"skin", rarity:"АБСОЛЮТНЫЙ", text:"Абсолютный скин" },

    "STARTPACK": { type:"bundle", shards:350, skin:true, text:"350 осколков и случайный скин" },
    "NIGHTPACK": { type:"bundle", shards:200, discount:20, uses:5, text:"200 осколков и скидка 20%" },
    "MONSTERPACK": { type:"bundle", shards:500, skin:true, discount:15, uses:3, text:"500 осколков, скин и скидка 15%" }
  };

  function promoState() {
    return getJson(PROMO_KEY, { used:[], discount:0, discountUses:0 });
  }

  function savePromoState(s) {
    setJson(PROMO_KEY, s);
  }

  function activatePromo(raw) {
    const code = String(raw || "").trim().toUpperCase();
    const promo = PROMOS[code];
    const state = promoState();

    if (!promo) return notify("Такого промокода нет.");
    if (state.used.includes(code)) return notify("Этот промокод уже использован.");

    let message = `Промокод ${code} активирован!\n`;

    if (promo.type === "shards") {
      addShards(promo.amount);
      message += `Получено ${promo.amount} осколков.`;
    }

    if (promo.type === "discount") {
      state.discount = Math.max(state.discount || 0, promo.amount);
      state.discountUses += promo.uses;
      message += promo.text;
    }

    if (promo.type === "skin") {
      const skin = unlockRandomSkin(promo.rarity);
      message += skin ? `Получен скин «${skin.name}».` : "Все подходящие скины уже открыты.";
    }

    if (promo.type === "bundle") {
      if (promo.shards) addShards(promo.shards);
      if (promo.skin) {
        const skin = unlockRandomSkin();
        if (skin) message += `Скин: «${skin.name}».\n`;
      }
      if (promo.discount) {
        state.discount = Math.max(state.discount || 0, promo.discount);
        state.discountUses += promo.uses || 1;
      }
      message += promo.text;
    }

    state.used.push(code);
    savePromoState(state);
    notify(message);
  }

  function applyDiscountToCost(cost) {
    const state = promoState();
    if (!state.discount || state.discountUses <= 0) return cost;
    return Math.max(0, Math.floor(cost * (1 - state.discount / 100)));
  }

  function consumeDiscount() {
    const state = promoState();
    if (state.discountUses > 0) {
      state.discountUses -= 1;
      if (state.discountUses <= 0) state.discount = 0;
      savePromoState(state);
    }
  }

  window.activateScaryPromo = activatePromo;
  window.getScaryDiscountedCost = applyDiscountToCost;
  window.consumeScaryDiscount = consumeDiscount;
  window.getScaryPromoStatus = promoState;

  function buildMissionMenu() {
    const wait = setInterval(() => {
      const shopBtn = document.getElementById("snShopButton");
      if (!shopBtn) return;
      clearInterval(wait);

      let btn = document.getElementById("snMissionsButton");
      if (!btn) {
        btn = document.createElement("button");
        btn.id = "snMissionsButton";
        btn.className = "menuButton";
        btn.innerHTML = 'ЗАДАНИЯ НОЧИ <small>награда 100–500 осколков</small>';
        shopBtn.parentNode.insertBefore(btn, shopBtn);
      }

      btn.onclick = () => {
        const current = getMissionState();
        if (!current.active) createNightMissions();
        const s = getMissionState();
        const lines = s.missions.map(m => `${m.done?"✓":"•"} ${m.title}: ${m.progress}/${m.target}`).join("\n");
        notify(`ЗАДАНИЯ НОЧИ\n${lines}\n\nПосле победы: 100–500 осколков.`);
      };

      let promoBtn = document.getElementById("snPromoButton");
      if (!promoBtn) {
        promoBtn = document.createElement("button");
        promoBtn.id = "snPromoButton";
        promoBtn.className = "menuButton";
        promoBtn.innerHTML = 'ПРОМОКОДЫ <small>скины, скидки и осколки</small>';
        shopBtn.parentNode.insertBefore(promoBtn, shopBtn.nextSibling);
      }
      promoBtn.onclick = () => {
        const code = prompt("Введи промокод:");
        if (code) activatePromo(code);
      };

      renderMissionHud();
    }, 300);
  }

  buildMissionMenu();
})();
