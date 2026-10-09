// 내 프로젝트 목록 — 새 프로젝트가 생기면 여기에 한 줄 추가하면 돼요.
// url: 배포된 사이트 주소 — https://<서브도메인>.hotgarlic.dedyn.io (비워두면 "주소 미등록"으로 표시)
// repo: GitHub 저장소 주소
const PROJECTS = [
  {
    icon: "🎙️",
    name: "AI Voice Cover",
    desc: "음원과 보이스 모델로 AI 커버곡을 자동으로 만들어줘요",
    url: "https://ai-voice-cover.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/AI-Voice-Cover",
  },
  {
    icon: "🎧",
    name: "Music Tools (Studio)",
    desc: "보컬/MR 분리, 키 변경, 내보내기까지 하는 오디오 워크스테이션",
    url: "https://music.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Music-Tools",
  },
  {
    icon: "🖼️",
    name: "이미지 스튜디오",
    desc: "AI 업스케일, 크기 조절, 용량 줄이기",
    url: "https://image-tools.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/image-tools",
  },
  {
    icon: "👕",
    name: "OOTD",
    desc: "오늘의 코디 추천 서비스",
    url: "https://ootd.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Ootd",
  },
  {
    icon: "🎹",
    name: "Piano Learning",
    desc: "피아노 교육 소프트웨어",
    url: "https://piano-learning.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Piano-learning",
  },
  {
    icon: "🎮",
    name: "Play WebSocket",
    desc: "방 코드 하나로 함께하는 실시간 놀이터",
    url: "https://play-websocket.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/play-websocket",
  },
  {
    icon: "💬",
    name: "KakaoTalk Web",
    desc: "브라우저에서 카카오톡 메시지를 주고받는 웹 클라이언트",
    url: "https://kakao-web.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Kakaotalk-web",
  },
  {
    icon: "📨",
    name: "Send-Message",
    desc: "문자 발송 플랫폼",
    url: "https://send-message.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Send-Message",
  },
  {
    icon: "📸",
    name: "Instagram Insight",
    desc: "인스타그램 데이터 내보내기 파일 분석기",
    url: "https://insta.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Instagram-insight",
  },
  {
    icon: "📧",
    name: "메일 스팸 정리기",
    desc: "Gmail·네이버·네이트 메일의 광고/스팸 자동 정리",
    url: "https://mail.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/Email-spam-cleaner",
  },
  {
    icon: "🧪",
    name: "RVC Learning",
    desc: "RVC 보이스 변환 학습용 저장소",
    url: "https://rvc.hotgarlic.dedyn.io",
    repo: "https://github.com/ehdqkd616/RVC-Learning",
  },
];

function renderProjects() {
  const list = document.getElementById("project-list");
  // 주소가 등록된 프로젝트를 위로
  const sorted = [...PROJECTS].sort((a, b) => Boolean(b.url) - Boolean(a.url));

  for (const p of sorted) {
    const li = document.createElement("li");
    li.className = "project-item";

    const main = document.createElement(p.url ? "a" : "div");
    main.className = "tool-link" + (p.url ? "" : " disabled");
    if (p.url) {
      main.href = p.url;
      main.target = "_blank";
      main.rel = "noopener";
    }

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = `${p.icon} ${p.name}`;

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = p.url ? p.desc : `${p.desc} · 주소 미등록`;

    main.append(name, desc);
    li.append(main);

    if (p.repo) {
      const repo = document.createElement("a");
      repo.className = "repo-link";
      repo.href = p.repo;
      repo.target = "_blank";
      repo.rel = "noopener";
      repo.title = "GitHub 저장소";
      repo.textContent = "GitHub";
      li.append(repo);
    }

    list.append(li);
  }
}

renderProjects();
