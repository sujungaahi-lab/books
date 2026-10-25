// ===== 데이터 =====
// 내용은 여기서 고치면 사이트 전체에 반영됩니다.

const AGE_NAMES = { kid: "유아", low: "초등 저학년", high: "초등 고학년" };

const AREAS = [
  { id: 1, name: "생각을 넓히는 책 교육", power: "문해력, 상상력, 깊이 읽기",
    tips: ["책 읽고 \"너라면?\" 질문 3개 나누기", "잠들기 전 10분, 아이가 고른 책 한 권 같이 읽기"] },
  { id: 2, name: "다양한 체험", power: "경험의 폭, 관심사 발견",
    tips: ["한 달에 한 번, 가보지 않은 곳 가보기 (무료 체험부터)", "다녀와서 '제일 신기했던 것 1개' 그림으로 남기기"] },
  { id: 3, name: "질문력·비판적 사고", power: "좋은 질문 만들기, 정보 의심하기",
    tips: ["저녁 식탁 \"오늘의 왜?\" 질문 하나씩", "'사실일까, 생각일까?' 문장 나누기 놀이"] },
  { id: 4, name: "AI 리터러시", power: "AI를 도구로 쓰고 한계 알기",
    tips: ["엄마와 함께 AI에게 묻고, 답이 맞는지 책으로 확인하기", "가족 AI 규칙표 함께 만들어 붙이기"] },
  { id: 5, name: "창작·표현력", power: "만들고 말하고 글로 쓰기",
    tips: ["그림일기 한 줄 + 그림 하나", "좋아하는 책의 뒷이야기 지어 말하기"] },
  { id: 6, name: "감정·관계 능력", power: "공감, 협업, 감정 표현",
    tips: ["잠들기 전 '오늘의 감정 단어' 하나씩 말하기", "속상한 일이 있을 때 \"그래서 마음이 어땠어?\" 먼저 묻기"] },
  { id: 7, name: "몸·자연·자기주도 습관", power: "집중력, 회복력, 스스로 계획하기",
    tips: ["하루 30분 바깥 놀이", "아이가 스스로 정하는 '내일 할 일 3가지' 계획표"] },
];

const WEEKLY = [
  { area: 3, ages: ["kid", "low", "high"], title: "오늘의 왜?", time: "저녁 식탁 10분",
    desc: "아이가 오늘 궁금했던 것 하나를 꺼내게 하고, 엄마는 답 대신 \"넌 왜 그런 것 같아?\"로 되물어 주세요." },
  { area: 1, ages: ["kid", "low"], title: "\"너라면?\" 질문 3개", time: "책 읽은 뒤 10분",
    desc: "주인공이 고민한 장면에서 멈추고 \"너라면 어떻게 했을까?\"를 물어보세요. 정답은 없어요." },
  { area: 4, ages: ["high"], title: "AI 답 검증 놀이", time: "주말 15분",
    desc: "아이가 궁금한 것을 AI에게 함께 물어본 뒤, 그 답이 맞는지 책이나 백과사전으로 확인해 보세요." },
  { area: 6, ages: ["kid", "low", "high"], title: "감정 단어로 하루 말하기", time: "잠들기 전 5분",
    desc: "'좋았어/싫었어' 대신 '뿌듯했어, 서운했어, 설렜어'처럼 감정 단어 하나로 하루를 말해 보세요." },
  { area: 5, ages: ["low", "high"], title: "뒷이야기 만들기", time: "주말 20분",
    desc: "최근 읽은 책의 결말 이후를 상상해서 그림 4컷이나 다섯 줄 글로 만들어 보세요." },
  { area: 7, ages: ["kid"], title: "자연 보물찾기", time: "산책 20분",
    desc: "동네 산책길에서 동그란 것, 빨간 것, 부드러운 것을 하나씩 찾아보세요." },
];

const BOOKS = [
  { ages: ["kid"], title: "강아지똥", author: "권정생 글 · 정승각 그림",
    qs: ["강아지똥은 왜 슬펐을까?", "너는 언제 '나도 쓸모 있구나' 하고 느껴?", "강아지똥에게 해주고 싶은 말은?"] },
  { ages: ["kid"], title: "알사탕", author: "백희나",
    qs: ["알사탕을 먹으면 누구의 마음이 들리면 좋겠어?", "아빠의 잔소리 속에는 어떤 마음이 있었을까?", "동동이처럼 먼저 말 걸어본 적 있어?"] },
  { ages: ["kid", "low"], title: "괴물들이 사는 나라", author: "모리스 샌닥",
    qs: ["맥스는 왜 괴물 나라에 가고 싶었을까?", "너라면 괴물들과 무엇을 하고 놀래?", "맥스는 왜 다시 집에 돌아왔을까?"] },
  { ages: ["kid", "low"], title: "프레드릭", author: "레오 리오니",
    qs: ["프레드릭은 정말 일을 안 한 걸까?", "겨울에 너는 어떤 '햇살'을 모아 두고 싶어?", "친구들과 다른 일을 해도 괜찮을까?"] },
  { ages: ["low"], title: "만복이네 떡집", author: "김리리",
    qs: ["만복이는 왜 친구들에게 못된 말을 했을까?", "너라면 어떤 떡을 먹어보고 싶어?", "말이 바뀌면 친구 사이도 바뀔까?"] },
  { ages: ["low"], title: "책 먹는 여우", author: "프란치스카 비어만",
    qs: ["책을 '먹는다'는 건 무슨 뜻일까?", "여우가 직접 이야기를 쓰게 된 건 왜일까?", "네가 작가라면 어떤 이야기를 쓸래?"] },
  { ages: ["high"], title: "마틸다", author: "로알드 달",
    qs: ["마틸다에게 책은 어떤 의미였을까?", "어른이 틀렸다고 생각될 때 어떻게 하면 좋을까?", "너에게 하니 선생님 같은 사람은 누구야?"] },
  { ages: ["high"], title: "샬롯의 거미줄", author: "E. B. 화이트",
    qs: ["샬롯은 왜 윌버를 도왔을까?", "진짜 친구란 어떤 친구일까?", "샬롯이 거미줄에 쓴 단어처럼, 너를 표현하는 단어는?"] },
  { ages: ["high"], title: "어린 왕자", author: "앙투안 드 생텍쥐페리",
    qs: ["'길들인다'는 건 무슨 뜻일까?", "어른들은 왜 숫자를 좋아할까?", "너에게 장미꽃 같은 존재는?"] },
];

const PLACES = [
  { name: "국립중앙박물관 어린이박물관", region: "서울", fee: "free", ages: ["kid", "low", "high"],
    desc: "만지고 놀면서 유물을 만나는 공간. 회차별 사전 예약제로 운영돼요.", url: "https://www.museum.go.kr" },
  { name: "서울숲", region: "서울", fee: "free", ages: ["kid", "low", "high"],
    desc: "곤충식물원과 넓은 잔디밭. 자연 보물찾기 하기 좋은 곳이에요.", url: "https://seoulforest.or.kr" },
  { name: "서울상상나라", region: "서울", fee: "paid", ages: ["kid", "low"],
    desc: "어린이대공원 안 어린이 박물관. 몸으로 놀며 배우는 전시가 많아요.", url: "https://www.seoulchildrensmuseum.org" },
  { name: "국립과천과학관", region: "경기", fee: "paid", ages: ["kid", "low", "high"],
    desc: "천체관과 체험 전시가 풍부해 하루 종일 있어도 부족한 곳이에요.", url: "https://www.sciencecenter.go.kr" },
  { name: "국립대구박물관", region: "대구", fee: "free", ages: ["kid", "low", "high"],
    desc: "어린이 체험 프로그램과 교육 행사가 꾸준히 열려요.", url: "https://daegu.museum.go.kr" },
  { name: "국립대구과학관", region: "대구", fee: "paid", ages: ["kid", "low", "high"],
    desc: "어린이관과 과학 체험 전시. 주말 체험 프로그램을 미리 확인하세요.", url: "https://www.dnsm.or.kr" },
  { name: "대구수목원", region: "대구", fee: "free", ages: ["kid", "low", "high"],
    desc: "계절마다 바뀌는 숲길 산책. 식물 관찰 노트 들고 가기 좋아요.", url: "https://www.daegu.go.kr/forest" },
];

const RULES = {
  all: ["AI는 가족이 함께 있는 공간에서 사용해요.", "AI의 답은 꼭 다른 자료로 한 번 더 확인해요.", "숙제는 내 생각으로 먼저 하고, AI는 도우미로만 써요.", "이름, 학교, 사진 같은 개인 정보는 AI에게 알려주지 않아요.", "사용 시간은 가족이 함께 정하고 지켜요."],
  kid: ["AI와 스마트 기기는 엄마·아빠와 함께일 때만 써요.", "궁금한 건 먼저 엄마·아빠에게 물어봐요.", "화면은 정해진 시간만 보고, 끝나면 스스로 꺼요.", "기기는 식탁과 침대에 가져가지 않아요."],
  low: ["AI는 엄마·아빠와 함께 사용해요.", "AI가 말한 것이 맞는지 책에서 한 번 찾아봐요.", "숙제는 내가 먼저 해보고, 모를 때만 함께 물어봐요.", "내 이름, 학교, 사진은 절대 알려주지 않아요.", "하루 사용 시간: ___분 (가족이 함께 정해요)"],
  high: ["AI는 거실처럼 열린 공간에서 사용해요.", "AI의 답은 다른 자료 2곳 이상에서 확인해요.", "글쓰기 숙제는 초안을 내가 먼저 쓰고, AI는 피드백에만 써요.", "AI가 만든 내용을 쓸 땐 'AI 도움을 받았어요'라고 밝혀요.", "개인 정보와 친구 사진은 올리지 않아요.", "이번 달 사용 시간 약속: ________"],
};

const QUESTIONS = [
  { area: 1, q: "책을 읽은 뒤 내용이나 느낌을 스스로 이야기해요." },
  { area: 2, q: "최근 한 달 안에 새로운 장소나 활동을 경험했어요." },
  { area: 3, q: "\"왜?\", \"어떻게?\" 같은 질문을 자주 해요." },
  { area: 3, q: "들은 이야기가 사실인지 \"진짜야?\" 하고 확인하려 해요." },
  { area: 4, q: "AI나 인터넷 정보가 틀릴 수도 있다는 걸 알아요.", sub: "유아라면 '화면 속 말이 다 맞는 건 아니다'를 아는지로 답해 주세요." },
  { area: 4, q: "스마트 기기나 AI를 어른과 정한 약속 안에서 사용해요." },
  { area: 5, q: "그림, 만들기, 이야기 짓기를 스스로 즐겨요." },
  { area: 6, q: "자기 감정을 말로 표현하고, 친구 마음도 헤아려요." },
  { area: 7, q: "하루 30분 이상 몸을 움직이거나 바깥에서 놀아요." },
  { area: 7, q: "해야 할 일을 스스로 계획하거나 순서를 정해요." },
];
const OPTIONS = [{ v: 2, t: "자주 그래요" }, { v: 1, t: "가끔 그래요" }, { v: 0, t: "거의 안 그래요" }];

// ===== 공통 =====
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const areaOf = id => AREAS.find(a => a.id === id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let age = "all";
try { age = localStorage.getItem("age") || "all"; } catch (e) {}
const fitsAge = item => age === "all" || item.ages.includes(age);
const ageChips = ages => ages.map(a => `<span class="chip">${AGE_NAMES[a]}</span>`).join("");

// ===== 페이지 전환 =====
const PAGES = ["home", "test", "books", "places", "guide"];
function route() {
  const id = PAGES.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
  PAGES.forEach(p => { $("#" + p).hidden = p !== id; });
  $$(".nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + id));
  $(".nav").classList.remove("open");
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);

$(".menu-btn").addEventListener("click", e => {
  const open = $(".nav").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});

// ===== 연령 선택 =====
$$(".age-pills button").forEach(b => {
  b.classList.toggle("on", b.dataset.age === age);
  b.addEventListener("click", () => {
    age = b.dataset.age;
    try { localStorage.setItem("age", age); } catch (e) {}
    $$(".age-pills button").forEach(x => x.classList.toggle("on", x === b));
    renderAll();
  });
});

// ===== 렌더링 =====
function renderWeekly() {
  const list = WEEKLY.filter(fitsAge).slice(0, 3);
  $("#weekly").innerHTML = list.map(w => {
    const a = areaOf(w.area);
    return `<article class="card">
      <span class="tag t${a.id}">${esc(a.name)}</span>
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.desc)}</p>
      <div class="meta"><span class="chip">⏱ ${esc(w.time)}</span>${ageChips(w.ages)}</div>
    </article>`;
  }).join("") || `<p class="empty">이 연령의 활동을 준비 중이에요.</p>`;
}

function renderAreas() {
  $("#areas").innerHTML = AREAS.map(a =>
    `<div class="area" style="--c: var(--a${a.id})"><b>${a.id}. ${esc(a.name)}</b><span>${esc(a.power)}</span></div>`
  ).join("");
}

function renderBooks() {
  const list = BOOKS.filter(fitsAge);
  $("#book-list").innerHTML = list.map(b => `<article class="card">
      <div class="meta">${ageChips(b.ages)}</div>
      <h3>${esc(b.title)}</h3>
      <p>${esc(b.author)}</p>
      <ol>${b.qs.map(q => `<li>${esc(q)}</li>`).join("")}</ol>
    </article>`).join("") || `<p class="empty">이 연령의 추천 도서를 준비 중이에요.</p>`;
}

const placeFilter = { fee: "all", region: "all" };
$$(".seg").forEach(seg => {
  seg.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    placeFilter[seg.dataset.filter] = b.dataset.v;
    $$("button", seg).forEach(x => x.classList.toggle("on", x === b));
    renderPlaces();
  });
});
function renderPlaces() {
  const list = PLACES.filter(p => fitsAge(p)
    && (placeFilter.fee === "all" || p.fee === placeFilter.fee)
    && (placeFilter.region === "all" || p.region === placeFilter.region));
  $("#place-list").innerHTML = list.map(p => `<article class="card">
      <div class="meta"><span class="chip ${p.fee}">${p.fee === "free" ? "무료" : "유료"}</span><span class="chip">📍 ${esc(p.region)}</span></div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      <a href="${esc(p.url)}" target="_blank" rel="noopener" class="muted">공식 홈페이지 →</a>
    </article>`).join("") || `<p class="empty">조건에 맞는 체험이 아직 없어요. 곧 더 채워 둘게요.</p>`;
}

function renderRules() {
  const title = age === "all" ? "우리 가족 AI 규칙" : `우리 가족 AI 규칙 (${AGE_NAMES[age]})`;
  $("#rules").innerHTML = `<h3>${title}</h3>
    <ol>${RULES[age].map(r => `<li>${esc(r)}</li>`).join("")}</ol>
    <p class="sign">우리 가족이 함께 정했어요. 서명: ____________ &nbsp; 날짜: ____________</p>`;
}

function renderAll() { renderWeekly(); renderBooks(); renderPlaces(); renderRules(); }

// ===== 진단 테스트 =====
function renderQuiz() {
  $("#quiz").innerHTML = QUESTIONS.map((q, i) => `<div class="q"><fieldset>
      <legend>${i + 1}. ${esc(q.q)}${q.sub ? `<small>${esc(q.sub)}</small>` : ""}</legend>
      <div class="opts">${OPTIONS.map(o =>
        `<label><input type="radio" name="q${i}" value="${o.v}" required><span>${o.t}</span></label>`).join("")}</div>
    </fieldset></div>`).join("") +
    `<div class="quiz-foot"><span class="progress" id="progress">0 / ${QUESTIONS.length}</span>
     <button class="btn primary" type="submit">결과 보기</button></div>`;
}

$("#quiz").addEventListener("change", () => {
  const done = QUESTIONS.filter((_, i) => $(`input[name=q${i}]:checked`)).length;
  $("#progress").textContent = `${done} / ${QUESTIONS.length}`;
});

$("#quiz").addEventListener("submit", e => {
  e.preventDefault();
  const sum = {}, cnt = {};
  QUESTIONS.forEach((q, i) => {
    const v = +$(`input[name=q${i}]:checked`).value;
    sum[q.area] = (sum[q.area] || 0) + v;
    cnt[q.area] = (cnt[q.area] || 0) + 1;
  });
  const scores = AREAS.map(a => ({ ...a, score: Math.round(sum[a.id] / (cnt[a.id] * 2) * 100) }));
  const focus = [...scores].sort((a, b) => a.score - b.score).slice(0, 2);
  const allGood = focus[0].score === 100;

  $("#result").innerHTML = `<div class="result-box">
    <h2>${allGood ? "모든 영역이 고르게 잘 자라고 있어요 👏" : "지금 채워주면 좋은 영역"}</h2>
    ${scores.map(s => `<div class="bar-row"><span>${esc(s.name)}</span>
      <div class="bar"><i style="width:${Math.max(s.score, 4)}%; background: var(--a${s.id})"></i></div><b>${s.score}</b></div>`).join("")}
    ${allGood ? "" : focus.map(f => `<div class="focus-card" style="--c: var(--a${f.id})">
      <b>${esc(f.name)} · ${esc(f.power)}</b>
      <ul>${f.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>`).join("")}
    <p class="muted">이 결과는 아이를 평가하는 점수가 아니라, 이번 달 어떤 활동부터 해볼지 고르는 출발점이에요.</p>
    <p><b>결과 PDF와 맞춤 활동을 메일로 받고 싶다면</b> 아래에서 구독해 주세요.</p>
    <a href="#newsletter" class="btn primary" onclick="event.preventDefault(); document.getElementById('newsletter').scrollIntoView()">결과 메일로 받기</a>
    <button class="btn ghost" type="button" id="retry">다시 하기</button>
  </div>`;
  $("#quiz").hidden = true;
  $("#result").hidden = false;
  $("#result").scrollIntoView();
  $("#retry").addEventListener("click", () => {
    $("#quiz").reset();
    $("#progress").textContent = `0 / ${QUESTIONS.length}`;
    $("#quiz").hidden = false;
    $("#result").hidden = true;
    window.scrollTo(0, 0);
  });
});

// ===== 뉴스레터 (아직 연결 전: 이메일을 저장하지 않음) =====
$("#nl-form").addEventListener("submit", e => {
  e.preventDefault();
  e.target.reset();
  $("#nl-msg").hidden = false;
});

renderAreas();
renderQuiz();
renderAll();
route();
