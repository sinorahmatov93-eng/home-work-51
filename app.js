const image = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const links = [
  ["home", "Главная"],
  ["places", "Направления"],
  ["routes", "Маршруты"],
  ["weekends", "На выходные"],
  ["guide", "Путеводитель"],
  ["journal", "Журнал"],
  ["packing", "Что взять"],
  ["budget", "Бюджет"],
  ["about", "О проекте"],
  ["contacts", "Контакты"]
];

const pages = {
  home: {
    eyebrow: "Журнал для тех, кому в дорогу",
    title: "Мир ближе,<br>чем кажется.",
    intro: "Идеи для больших путешествий и маленьких побегов. Выбирай направление, а маршрут сложится сам.",
    hero: image("photo-1476514525535-07fb3b4ae5f1", 1800),
    section: "Куда отправимся?",
    sectionIntro: "Места, в которых хочется задержаться.",
    cards: [
      { title: "Горы зовут", tag: "Алтай", text: "Бирюзовые реки, кедровые тропы и утро с видом на вершины.", image: image("photo-1464822759023-fed622ff2c3b") },
      { title: "Море без спешки", tag: "Карелия", text: "Острова, сосны и тот самый воздух, которым невозможно надышаться.", image: image("photo-1500375592092-40eb2168fd21") },
      { title: "Городские истории", tag: "Стамбул", text: "Переплетение улочек, аромат кофе и паромы на закате.", image: image("photo-1524231757912-21f4fe3a7200") }
    ]
  },
  places: {
    eyebrow: "Выбирай настроение",
    title: "Направления,<br>которые вдохновляют.",
    intro: "От северных озёр до тёплых городов — собрали места для следующей истории.",
    hero: image("photo-1469474968028-56623f02e42e", 1800),
    section: "Открой свою точку на карте",
    sectionIntro: "Сохраняй идеи и возвращайся к ним, когда придёт время.",
    cards: [
      { title: "Кавказ", tag: "Горы · 7–10 дней", text: "Большие виды, гостеприимные города и тропы на любой уровень.", image: image("photo-1464822759023-fed622ff2c3b") },
      { title: "Карелия", tag: "Север · 3–5 дней", text: "Ладожские шхеры, лесные домики и тишина, которую давно искал.", image: image("photo-1500375592092-40eb2168fd21") },
      { title: "Стамбул", tag: "Город · 4 дня", text: "Город двух континентов, где каждый поворот — новый сюжет.", image: image("photo-1524231757912-21f4fe3a7200") }
    ]
  },
  routes: {
    eyebrow: "Проверено дорогой",
    title: "Маршруты,<br>которые работают.",
    intro: "Продуманные планы поездок с остановками, темпом и местом для спонтанности.",
    hero: image("photo-1464219789935-c2d9d9aba644", 1800),
    section: "Выбери свой темп",
    sectionIntro: "Каждый маршрут можно подстроить под себя.",
    cards: [
      { title: "Большое алтайское кольцо", tag: "8 дней · на машине", text: "Чуйский тракт, Гейзерное озеро и ночёвки под звёздным небом.", image: image("photo-1464822759023-fed622ff2c3b") },
      { title: "Выходные у Ладоги", tag: "3 дня · пешком и на лодке", text: "Короткий побег к шхерам с уютной базой и прогулкой по воде.", image: image("photo-1500375592092-40eb2168fd21") },
      { title: "Стамбул за четыре дня", tag: "4 дня · городской", text: "Баланс между знаменитыми местами, рынками и неспешными паромами.", image: image("photo-1524231757912-21f4fe3a7200") }
    ]
  },
  weekends: {
    eyebrow: "Перезагрузка рядом",
    title: "Уехать на два дня.<br>Вернуться другим.",
    intro: "Небольшие поездки, после которых понедельник уже не кажется таким близким.",
    hero: image("photo-1470770841072-f978cf4d019e", 1800),
    section: "Короткие побеги",
    sectionIntro: "Идеи для свободных выходных — без сложной подготовки.",
    cards: [
      { title: "Домик у озера", tag: "Тишина · 2 ночи", text: "Книга, горячий чай и отражение сосен в воде.", image: image("photo-1470770841072-f978cf4d019e") },
      { title: "Тропа к водопаду", tag: "Прогулка · 1 день", text: "Лёгкий хайкинг с наградой в виде прохладных брызг.", image: image("photo-1472396961693-142e6e269027") },
      { title: "Маленький приморский город", tag: "Море · 2 дня", text: "Медленный завтрак, прогулка по набережной и закат у воды.", image: image("photo-1500375592092-40eb2168fd21") }
    ]
  },
  guide: {
    eyebrow: "Полезное перед дорогой",
    title: "Путеводитель<br>без лишнего.",
    intro: "Коротко и по делу: как планировать, ориентироваться и получать от поездки больше.",
    hero: image("photo-1488646953014-85cb44e25828", 1800),
    section: "Начни с главного",
    sectionIntro: "Практичные заметки, которые пригодятся в любой поездке.",
    cards: [
      { title: "Как спланировать поездку", tag: "Планирование · 6 минут", text: "Простой порядок действий от идеи до первого шага за порог.", image: image("photo-1454496522488-7a8e488e8606") },
      { title: "Путешествие налегке", tag: "Сборы · 4 минуты", text: "Как взять нужное и оставить дома половину шкафа.", image: image("photo-1551632811-561732d1e306") },
      { title: "Первые шаги в хайкинге", tag: "На природе · 8 минут", text: "Подбираем маршрут, обувь и комфортный темп для первой тропы.", image: image("photo-1551632811-561732d1e306") }
    ]
  },
  journal: {
    eyebrow: "Заметки с полей",
    title: "Журнал<br>маленьких открытий.",
    intro: "Истории о людях, местах и моментах, ради которых мы снова собираем рюкзак.",
    hero: image("photo-1470252649378-9c29740c9fa8", 1800),
    section: "Свежие истории",
    sectionIntro: "Читай медленно. Может быть, одна из них станет твоей.",
    cards: [
      { title: "Утро, которое началось в горах", tag: "История · 5 минут", text: "О том, как случайная тропа привела к лучшему завтраку лета.", image: image("photo-1464822759023-fed622ff2c3b") },
      { title: "Один день без навигатора", tag: "Город · 4 минуты", text: "Потеряться в незнакомом городе — иногда лучший план.", image: image("photo-1519608487953-e999c86e7455") },
      { title: "Разговоры у костра", tag: "Люди · 6 минут", text: "Незнакомцы, которые на один вечер стали попутчиками.", image: image("photo-1478131143081-80f7f84ca84d") }
    ]
  },
  packing: {
    eyebrow: "Собирайся с умом",
    title: "Всё нужное.<br>Ничего лишнего.",
    intro: "Списки вещей для разных поездок — чтобы в рюкзаке осталось место для впечатлений.",
    hero: image("photo-1551632811-561732d1e306", 1800),
    section: "Чек-листы в дорогу",
    sectionIntro: "Отметь нужное прямо здесь — список сохранится в браузере.",
    cards: [
      { title: "На выходные", tag: "Город или природа", text: "Документы, удобная одежда, зарядка и маленькая аптечка.", image: image("photo-1488646953014-85cb44e25828"), checklist: true },
      { title: "В поход", tag: "Тропа · 1–3 дня", text: "Вода, слои одежды, навигация, фонарь и проверенная обувь.", image: image("photo-1551632811-561732d1e306"), checklist: true },
      { title: "К морю", tag: "Солнце и вода", text: "Крем от солнца, лёгкая одежда и сумка для мокрых вещей.", image: image("photo-1500375592092-40eb2168fd21"), checklist: true }
    ]
  },
  budget: {
    eyebrow: "Деньги — не повод откладывать",
    title: "Путешествуй<br>в своём бюджете.",
    intro: "Считаем основные расходы заранее и оставляем место для приятных сюрпризов.",
    hero: image("photo-1464219789935-c2d9d9aba644", 1800),
    section: "Форматы поездок",
    sectionIntro: "Примерные ориентиры помогут спланировать поездку под себя.",
    cards: [
      { title: "День на природе", tag: "Бережно · от 2 500 ₽", text: "Транспорт, перекус и прогулка по красивому маршруту.", image: image("photo-1472396961693-142e6e269027") },
      { title: "Уикенд в городе", tag: "Комфортно · от 9 000 ₽", text: "Дорога, две ночи, местная еда и пара музеев.", image: image("photo-1524231757912-21f4fe3a7200") },
      { title: "Неделя в горах", tag: "Приключение · от 25 000 ₽", text: "Переезды, жильё, питание и несколько дней на тропах.", image: image("photo-1464822759023-fed622ff2c3b") }
    ]
  },
  about: {
    eyebrow: "Привет, мы — «Вольный маршрут»",
    title: "Больше дороги.<br>Меньше «когда-нибудь».",
    intro: "Мы верим, что путешествие начинается не с билета, а с любопытства. Помогаем превратить его в настоящий план.",
    hero: image("photo-1470252649378-9c29740c9fa8", 1800),
    section: "Во что мы верим",
    sectionIntro: "Наши простые правила хорошей поездки.",
    cards: [
      { title: "Идти своим темпом", tag: "01 · Свобода", text: "Не обязательно успеть всё. Важно заметить то, ради чего ты приехал.", image: image("photo-1472396961693-142e6e269027") },
      { title: "Оставлять место новому", tag: "02 · Любопытство", text: "Лучшие истории часто начинаются со слов «а давай свернём сюда».", image: image("photo-1469474968028-56623f02e42e") },
      { title: "Беречь места", tag: "03 · Забота", text: "Путешествовать с уважением к природе, людям и местной культуре.", image: image("photo-1500375592092-40eb2168fd21") }
    ]
  },
  contacts: {
    eyebrow: "Будем на связи",
    title: "Расскажи,<br>куда собираешься.",
    intro: "Есть идея для маршрута или вопрос к редакции? Напиши нам — мы любим разговоры о дороге.",
    hero: image("photo-1469474968028-56623f02e42e", 1800),
    section: "Напиши нам",
    sectionIntro: "Заполни форму — мы покажем подтверждение прямо здесь.",
    cards: [
      { title: "Редакция", tag: "Истории и идеи", text: "hello@volny-marshrut.ru" },
      { title: "Сотрудничество", tag: "Совместные проекты", text: "partners@volny-marshrut.ru" },
      { title: "Мы в соцсетях", tag: "Ещё больше вдохновения", text: "Telegram · VK · Pinterest" }
    ]
  }
};

const themes = {
  home: { background: "#f7f5ef", accent: "#d4ef78", deep: "#18332d" },
  places: { background: "#eff7f4", accent: "#91d6c6", deep: "#174a43" },
  routes: { background: "#f4f1fb", accent: "#c5b2f3", deep: "#352c59" },
  weekends: { background: "#fff4e8", accent: "#ffbf78", deep: "#6b3b20" },
  guide: { background: "#eff5fb", accent: "#9bc7f0", deep: "#233e64" },
  journal: { background: "#f8eff2", accent: "#e8a9c1", deep: "#632f48" },
  packing: { background: "#eff6e9", accent: "#afd879", deep: "#35562a" },
  budget: { background: "#fff8df", accent: "#f1cf68", deep: "#59451a" },
  about: { background: "#edf2f0", accent: "#b3c9be", deep: "#30453b" },
  contacts: { background: "#eef3fb", accent: "#a7bced", deep: "#303c68" }
};

const currentPage = pages[location.hash.slice(1)] ? location.hash.slice(1) : "home";
const page = pages[currentPage];
const theme = themes[currentPage];
document.body.style.backgroundColor = theme.background;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

function cardMarkup(card, index) {
  const saved = getSaved().includes(`${currentPage}-${index}`);
  const imageMarkup = card.image
    ? `<div class="relative h-56 overflow-hidden"><img src="${card.image}" alt="${escapeHtml(card.title)}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"><button class="save-button absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-xl shadow-sm transition hover:scale-105" data-save="${currentPage}-${index}" aria-label="Сохранить ${escapeHtml(card.title)}" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button></div>`
    : "";
  const checklist = card.checklist
    ? `<label class="mt-5 flex cursor-pointer items-center gap-3 border-t border-clay pt-4 text-sm text-moss"><input type="checkbox" class="check-item h-4 w-4 accent-moss" data-check="${currentPage}-${index}"> Добавить в мой список</label>`
    : "";
  return `<article class="travel-card group overflow-hidden rounded-3xl border border-clay/80 bg-white transition hover:-translate-y-1 hover:shadow-xl">${imageMarkup}<div class="p-6"><p class="text-xs font-bold uppercase tracking-[.16em] text-moss">${escapeHtml(card.tag)}</p><h3 class="mt-3 font-display text-2xl">${escapeHtml(card.title)}</h3><p class="mt-3 leading-7 text-ink/70">${escapeHtml(card.text)}</p>${checklist}</div></article>`;
}

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem("volny-saved") || "[]");
  } catch (error) {
    console.error("Не удалось прочитать сохранённые карточки:", error);
    return [];
  }
}

const navMarkup = links.map(([id, label]) =>
  `<a href="#${id}" class="whitespace-nowrap rounded-full px-3 py-2 text-sm transition hover:bg-clay ${id === currentPage ? "text-white" : "text-ink/75"}" ${id === currentPage ? `style="background-color:${theme.deep}" aria-current="page"` : ""}>${label}</a>`
).join("");

document.getElementById("app").innerHTML = `
  <header class="relative z-20 border-b border-clay/70" style="background-color:${theme.background}">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 lg:px-8">
      <a href="#home" class="flex shrink-0 items-center gap-3" aria-label="Вольный маршрут — главная">
        <span class="grid h-11 w-11 place-items-center rounded-2xl text-xl" style="background-color:${theme.deep};color:${theme.accent}">↗</span>
        <span><span class="block font-display text-xl font-bold leading-none">вольный</span><span class="mt-1 block text-[10px] font-bold uppercase tracking-[.25em] text-moss">маршрут</span></span>
      </a>
      <nav class="hidden flex-wrap justify-end gap-1 xl:flex" aria-label="Основная навигация">${navMarkup}</nav>
      <button id="menu-button" class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-clay text-xl xl:hidden" aria-label="Открыть меню" aria-expanded="false">☰</button>
    </div>
    <nav id="mobile-menu" class="hidden border-t border-clay px-5 py-4 xl:hidden" aria-label="Мобильная навигация"><div class="mx-auto flex max-w-7xl flex-wrap gap-2">${navMarkup}</div></nav>
  </header>
  <main>
    <section class="mx-auto max-w-7xl px-5 pb-14 pt-8 lg:px-8 lg:pt-12">
      <div class="relative min-h-[530px] overflow-hidden rounded-[2rem] bg-ink lg:min-h-[590px]">
        <img src="${page.hero}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-65">
        <div class="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent"></div>
        <div class="relative flex min-h-[530px] max-w-3xl flex-col justify-center px-7 py-14 text-white sm:px-12 lg:min-h-[590px] lg:px-16">
          <p class="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] backdrop-blur">${escapeHtml(page.eyebrow)}</p>
          <h1 class="font-display text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">${page.title}</h1>
          <p class="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">${escapeHtml(page.intro)}</p>
          <a href="#discover" class="mt-9 flex w-fit items-center gap-3 rounded-full px-6 py-3.5 font-bold transition hover:bg-white" style="background-color:${theme.accent};color:${theme.deep}">Найти вдохновение <span aria-hidden="true">↓</span></a>
        </div>
        <div class="absolute bottom-6 right-7 hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur sm:block">Твоя следующая история начинается здесь</div>
      </div>
    </section>
    <section id="discover" class="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div class="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p class="text-xs font-bold uppercase tracking-[.2em] text-moss">Вдохновение для дороги</p><h2 class="mt-3 font-display text-4xl sm:text-5xl">${escapeHtml(page.section)}</h2><p class="mt-3 max-w-2xl text-ink/65">${escapeHtml(page.sectionIntro)}</p></div>
        <label class="flex items-center gap-3 rounded-full border border-clay bg-white px-5 py-3 text-sm text-ink/55"><span aria-hidden="true">⌕</span><input id="card-search" class="w-40 bg-transparent text-ink outline-none placeholder:text-ink/45 sm:w-48" type="search" placeholder="Найти идею..." aria-label="Поиск по карточкам"></label>
      </div>
      ${currentPage === "contacts" ? `<form id="contact-form" class="mb-8 grid gap-4 rounded-3xl bg-clay/50 p-6 sm:grid-cols-2 sm:p-8"><label class="text-sm font-semibold">Твоё имя<input required name="name" class="mt-2 w-full rounded-xl border border-clay bg-white px-4 py-3 font-normal outline-none focus:border-moss" placeholder="Как к тебе обращаться?"></label><label class="text-sm font-semibold">Почта<input required type="email" name="email" class="mt-2 w-full rounded-xl border border-clay bg-white px-4 py-3 font-normal outline-none focus:border-moss" placeholder="you@example.com"></label><label class="text-sm font-semibold sm:col-span-2">Сообщение<textarea required name="message" rows="4" class="mt-2 w-full rounded-xl border border-clay bg-white px-4 py-3 font-normal outline-none focus:border-moss" placeholder="Расскажи немного подробнее..."></textarea></label><div class="flex flex-wrap items-center gap-4 sm:col-span-2"><button class="rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-moss" type="submit">Отправить сообщение</button><p id="form-message" class="text-sm text-moss" role="status"></p></div></form>` : ""}
      <div id="card-grid" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${page.cards.map(cardMarkup).join("")}</div>
      <p id="empty-search" class="hidden py-12 text-center text-ink/60">Ничего не найдено. Попробуй другой запрос.</p>
    </section>
    <section class="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div class="grid overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-2">
        <div class="relative min-h-80 lg:min-h-[470px]">
          <img src="${image("photo-1470252649378-9c29740c9fa8", 1200)}" alt="Рассвет над долиной" class="absolute inset-0 h-full w-full object-cover" loading="lazy">
        </div>
        <div class="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p class="text-xs font-bold uppercase tracking-[.2em] text-moss">Заметка путешественнику</p>
          <h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Не гонись за километрами</h2>
          <p class="mt-6 leading-8 text-ink/70">Хорошая поездка не измеряется количеством отметок на карте. Иногда самый запоминающийся момент — это длинный завтрак в маленьком кафе, разговор с местным жителем или лишний час у воды.</p>
          <p class="mt-4 leading-8 text-ink/70">Оставь в расписании свободное место. Тогда у путешествия появится шанс удивить тебя.</p>
          <a href="#guide" class="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-moss hover:underline">Ещё советы в путеводителе <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div class="rounded-[2rem] p-8 sm:p-12 lg:p-14" style="background-color:${theme.accent};color:${theme.deep}">
        <div class="max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[.2em] opacity-75">Три шага до дороги</p>
          <h2 class="mt-4 font-display text-4xl sm:text-5xl">Начни с простого</h2>
          <p class="mt-4 leading-7 opacity-80">Чтобы отправиться в путь, не нужен идеальный план. Достаточно выбрать то, что сейчас по-настоящему интересно.</p>
        </div>
        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <article class="border-t border-current/20 pt-5">
            <span class="font-display text-3xl">01</span>
            <h3 class="mt-4 text-xl font-bold">Выбери настроение</h3>
            <p class="mt-3 leading-7 opacity-80">Тебе хочется тишины, новых вкусов, горной тропы или прогулки по городу? Начни с ощущения, а не со списка дел.</p>
          </article>
          <article class="border-t border-current/20 pt-5">
            <span class="font-display text-3xl">02</span>
            <h3 class="mt-4 text-xl font-bold">Оставь время на отдых</h3>
            <p class="mt-3 leading-7 opacity-80">Не заполняй каждый час. Удобный темп помогает замечать детали и получать удовольствие от самой дороги.</p>
          </article>
          <article class="border-t border-current/20 pt-5">
            <span class="font-display text-3xl">03</span>
            <h3 class="mt-4 text-xl font-bold">Собери самое нужное</h3>
            <p class="mt-3 leading-7 opacity-80">Проверь документы, погоду и транспорт. Остальное можно решить на месте — иногда так даже интереснее.</p>
          </article>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p class="text-xs font-bold uppercase tracking-[.2em] text-moss">Перед поездкой</p>
          <h2 class="mt-4 font-display text-4xl sm:text-5xl">Частые вопросы</h2>
          <p class="mt-5 max-w-md leading-7 text-ink/65">Несколько простых ответов, которые помогут подготовиться к путешествию и чувствовать себя увереннее.</p>
        </div>
        <div class="divide-y divide-clay border-y border-clay">
          <details class="group py-5">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">Когда лучше начинать планировать поездку?<span class="text-xl text-moss transition group-open:rotate-45">+</span></summary>
            <p class="max-w-2xl pt-4 leading-7 text-ink/65">Для поездки в популярный сезон лучше оставить несколько недель или месяцев на билеты и жильё. Для короткого выезда на выходные часто достаточно выбрать направление и проверить прогноз за пару дней.</p>
          </details>
          <details class="group py-5">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">Как не потратить лишнего?<span class="text-xl text-moss transition group-open:rotate-45">+</span></summary>
            <p class="max-w-2xl pt-4 leading-7 text-ink/65">Сначала зафиксируй основные расходы: дорогу, ночлег и питание. Добавь небольшой запас на непредвиденные ситуации, а развлечения выбирай по приоритету, а не по количеству.</p>
          </details>
          <details class="group py-5">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">Что делать, если планы изменились?<span class="text-xl text-moss transition group-open:rotate-45">+</span></summary>
            <p class="max-w-2xl pt-4 leading-7 text-ink/65">Держи под рукой контакты жилья и перевозчиков, проверь условия отмены бронирований и сохрани важные документы офлайн. Гибкий план всегда легче адаптировать.</p>
          </details>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <div class="flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center sm:p-12" style="background-color:${theme.accent};color:${theme.deep}">
        <div><p class="text-xs font-bold uppercase tracking-[.2em] text-moss">Письмо из дороги</p><h2 class="mt-3 font-display text-3xl sm:text-4xl">Немного вдохновения<br>раз в две недели.</h2><p class="mt-3 text-ink/70">Новые маршруты, заметки и идеи — без суеты.</p></div>
        <form id="newsletter-form" class="flex w-full max-w-md flex-col gap-3 sm:flex-row"><label class="sr-only" for="newsletter-email">Электронная почта</label><input id="newsletter-email" required type="email" placeholder="Твоя почта" class="min-w-0 flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 outline-none placeholder:text-ink/45 focus:border-ink"><button class="rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-moss" type="submit">Подписаться</button></form>
      </div><p id="newsletter-message" class="mt-3 text-center text-sm text-moss" role="status"></p>
    </section>
  </main>
  <footer class="border-t border-clay"><div class="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between lg:px-8"><a href="#home" class="font-display text-lg font-bold text-ink">вольный маршрут</a><p>Путешествуй бережно. Возвращайся с историями.</p><p>© <span id="year"></span></p></div></footer>
  <div id="toast" class="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 translate-y-4 rounded-full bg-ink px-5 py-3 text-sm text-white opacity-0 shadow-xl transition" role="status" aria-live="polite"></div>
`;

document.title = `${links.find(([id]) => id === currentPage)?.[1] || "Главная"} — Вольный маршрут`;
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", () => window.location.reload());

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Открыть меню" : "Закрыть меню");
  menuButton.textContent = isExpanded ? "☰" : "×";
  menu.classList.toggle("hidden", isExpanded);
});

document.querySelectorAll(".save-button").forEach((button) => {
  button.addEventListener("click", () => {
    const saved = getSaved();
    const key = button.dataset.save;
    const shouldSave = !saved.includes(key);
    const updated = shouldSave ? [...saved, key] : saved.filter((item) => item !== key);
    try {
      localStorage.setItem("volny-saved", JSON.stringify(updated));
    } catch (error) {
      console.error("Не удалось сохранить карточку:", error);
      showToast("Не получилось сохранить — проверь настройки браузера.");
      return;
    }
    button.textContent = shouldSave ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(shouldSave));
    showToast(shouldSave ? "Сохранено в избранное" : "Убрано из избранного");
  });
});

document.querySelectorAll(".check-item").forEach((checkbox) => {
  const key = `volny-check-${checkbox.dataset.check}`;
  checkbox.checked = localStorage.getItem(key) === "true";
  checkbox.addEventListener("change", () => {
    localStorage.setItem(key, String(checkbox.checked));
    showToast(checkbox.checked ? "Добавлено в список сборов" : "Убрано из списка");
  });
});

document.getElementById("card-search").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLocaleLowerCase("ru");
  let visibleCards = 0;
  document.querySelectorAll(".travel-card").forEach((card) => {
    const matches = card.textContent.toLocaleLowerCase("ru").includes(query);
    card.classList.toggle("hidden", !matches);
    if (matches) visibleCards += 1;
  });
  document.getElementById("empty-search").classList.toggle("hidden", visibleCards !== 0);
});

document.getElementById("newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.getElementById("newsletter-message").textContent = "Спасибо! Подписка оформлена — до встречи в почте.";
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    document.getElementById("form-message").textContent = "Спасибо! Форма заполнена. Для отправки подключите почтовый сервис.";
  });
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("translate-y-4", "opacity-0");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add("translate-y-4", "opacity-0"), 2200);
}
