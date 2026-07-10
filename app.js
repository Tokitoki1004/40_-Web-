const STORAGE_KEY = "itpassport-review-webapp:v3";

const FALSE_QUIZ_BY_NAME = {
  "2進数": "2進数は、0、1、2の三つの数字で数を表す方法。",
  "2進数の足し算": "2進数の足し算では、1+1をそのまま2と書く。",
  BPR: "BPRは、既存の製品やソフトウェアを分解・解析して構造を明らかにする手法。",
  CMMI: "CMMIは、組織の情報セキュリティを管理・改善するための仕組み。",
  DevOps: "DevOpsは、開発工程を要件定義からテストまで順番に進める開発モデル。",
  ITIL: "ITILは、ITサービスの運用管理を効率的に行うためのソフトウェアパッケージ。",
  ITサービス: "ITサービスは、ITサービスを運用管理するための方法を体系的にまとめたベストプラクティス集。",
  ITサービスマネジメント: "ITサービスマネジメントは、組織内の過去の経験から得られた知識を整理・共有する活動。",
  ISMS: "ISMSは、システム開発組織のプロセス成熟度を5段階で評価するモデル。",
  "ISO 14001": "ISO 14001は、個人情報保護マネジメントシステムに関する日本産業規格。",
  "JIS Q 15001": "JIS Q 15001は、環境マネジメントシステムに関する国際規格。",
  RAD: "RADは、要件定義、設計、プログラミング、テストをこの順番で進める開発モデル。",
  SLA: "SLAは、ITサービスを運用管理するための方法を体系的にまとめたベストプラクティス集。",
  SLM: "SLMは、サービス内容に関して、サービスの提供者と顧客間で合意した事項。",
  SLCP: "SLCPは、サービス提供者と利用者の間で決めるサービス品質の約束。",
  UML: "UMLは、利用者とシステムのやり取りだけを文章で記述するシナリオ。",
  アジャイル: "アジャイルは、最初に全工程を固め、工程ごとに完了確認して次へ進む開発モデル。",
  ウォーターフォールモデル: "ウォーターフォールモデルは、短い期間で開発と確認を繰り返し、変更に柔軟に対応する手法。",
  オブジェクト指向設計: "オブジェクト指向設計は、業務で扱うデータ同士の関係だけに着目して設計する考え方。",
  クラス: "クラスは、実際に動作している個々のオブジェクトそのもの。",
  コンカレントエンジニアリング: "コンカレントエンジニアリングは、業務内容は変えず仕事の流れを根本的に見直す手法。",
  ステークホルダ: "ステークホルダは、プロジェクトの結果として作られる成果物のこと。",
  スパイラルモデル: "スパイラルモデルは、試作品を利用者に見せながら要求を明確にする開発モデル。",
  ソフトウェア開発管理技術: "ソフトウェア開発管理技術は、情報セキュリティだけを管理するための仕組み。",
  データ中心アプローチ: "データ中心アプローチは、業務の処理手順や作業の流れに着目して分析する考え方。",
  ハルシネーション: "ハルシネーションは、生成AIが常に正しい根拠付きの回答だけを返す性質。",
  プロジェクト: "プロジェクトは、期限を決めずに定常的に繰り返す日常業務。",
  プロジェクトの制約条件: "プロジェクトの制約条件は、どのプロジェクトでも必ず品質だけを最優先する決まり。",
  プロジェクトマネージャ: "プロジェクトマネージャは、発注者に提案を依頼する文書。",
  プロジェクトマネジメント: "プロジェクトマネジメントは、システムに必要な機能や条件を書き出す作業だけを指す。",
  プロジェクトマネジメント計画書: "プロジェクトマネジメント計画書は、発注者がベンダに提案を依頼する文書。",
  プロジェクト憲章: "プロジェクト憲章は、プロジェクトの日々の詳細な作業実績を記録する日報。",
  プロセス中心アプローチ: "プロセス中心アプローチは、業務で扱うデータ同士の関係に着目して分析する考え方。",
  プロトタイピングモデル: "プロトタイピングモデルは、完成まで利用者に確認せず、工程を順番に進める開発モデル。",
  ホワイトボックステスト: "ホワイトボックステストは、利用者の操作だけを見て内部構造を考慮しないテスト。",
  メソッド: "メソッドは、オブジェクトが持つ名前や年齢などのデータ項目そのもの。",
  ユースケース: "ユースケースは、プログラムの内部構造や処理の流れを確認するテスト。",
  リバースエンジニアリング: "リバースエンジニアリングは、仕事の流れや方法を根本的に見直して業務を改革すること。",
  リリース及び展開管理: "リリース及び展開管理は、ITサービスに関する変更要求に基づいて発生する一連の作業を管理する活動。",
  共通フレーム: "共通フレームは、開発組織のプロセス成熟度を5段階で定義したモデル。",
  継承: "継承は、データの重複や矛盾を減らすために表を整理すること。",
  公開鍵暗号方式: "公開鍵暗号方式は、暗号化にも復号にも必ず同じ1つの鍵だけを使う方式。",
  成果物: "成果物は、プロジェクトに関係する、または影響を受ける個人や組織。",
  正規化: "正規化は、利益がちょうど0になる売上高を求めること。",
  損益分岐点: "損益分岐点は、データの重複や矛盾を減らすために表を整理すること。",
  提案依頼書: "提案依頼書は、プロジェクトをどう運営・管理するかをまとめた計画書。",
  要件定義書: "要件定義書は、プロジェクトの目的や責任者を明確にして開始を正式に認める文書。",
  PMBOK: "PMBOKは、システム開発組織のプロセス成熟度を5段階で評価するモデル。",
  プロジェクトマネジメントオフィス: "プロジェクトマネジメントオフィスは、個々のプロジェクトの成果物そのものを指す。",
  知識エリア: "知識エリアは、プロジェクトメンバー同士の1対1の情報伝達経路数。",
  プロジェクトスコープマネジメント: "プロジェクトスコープマネジメントは、プロジェクトの費用だけを見積もり管理すること。",
  プロジェクトコストマネジメント: "プロジェクトコストマネジメントは、プロジェクトで作るものと作業範囲を明確にすること。",
  プロジェクトタイムマネジメント: "プロジェクトタイムマネジメントは、プロジェクトの不確実な事象への対応策を管理すること。",
  プロジェクトリスクマネジメント: "プロジェクトリスクマネジメントは、プロジェクトを期限内に完了させるための日程管理だけを指す。",
  立上げプロセス群: "立上げプロセス群は、プロジェクト計画に含まれる作業を実際に実行する段階。",
  計画プロセス群: "計画プロセス群は、プロジェクトの進捗やコスト差異を監視して是正する段階。",
  実行プロセス群: "実行プロセス群は、プロジェクトで実行する作業を洗い出して詳細化する段階。",
  "監視・コントロールプロセス群": "監視・コントロールプロセス群は、プロジェクトの開始と資源投入を正式に承認する段階。",
  終結プロセス群: "終結プロセス群は、プロジェクトの開始を正式に認める段階。",
  スコープ: "スコープは、プロジェクトの進捗遅延時の対応策だけを決めるもの。",
  サービスレベル: "サービスレベルは、サービスやIT資産の構成品目を管理するためのデータベース。",
  サービスサポート: "サービスサポートは、サービス提供者と顧客の間で合意したサービス内容や品質の約束。",
  サービスデスク: "サービスデスクは、すべて自動応答する仕組みでなければならない。",
  ヘルプデスク: "ヘルプデスクは、ITサービスの構成品目や資産情報を管理するデータベース。",
  チャットボット: "チャットボットは、よくある質問と回答を一覧にして掲載した静的な文書。",
  FAQ: "FAQは、自動応答技術で利用者とリアルタイムに会話するツール。",
  エスカレーション: "エスカレーションは、人がPCで行う定型作業をソフトウェアロボットで自動化する仕組み。",
  RPA: "RPAは、サービスデスクでリアルタイムに会話形式の問い合わせ対応を行うツール。",
  ファシリティマネジメント: "ファシリティマネジメントは、顧客データベースを使って顧客情報を管理する活動。",
  セキュリティワイヤー: "セキュリティワイヤーは、停電時に一時的に電力を供給する装置。",
  入退館管理: "入退館管理は、情報システムに対するIDとパスワードだけを管理する論理的対策。",
  "無停電電源装置（UPS）": "無停電電源装置（UPS）は、導入後の保守費用が不要で半永久的に使用できる装置。",
  自家発電装置: "自家発電装置は、落雷などの異常電圧から機器を守る対策。",
  サージ防護: "サージ防護は、停電時に長時間電力を供給する自家発電設備。",
  会計監査: "会計監査は、取締役が法律及び定款に従って職務を行っていることを監査する活動。",
  業務監査: "業務監査は、財務状態や経営成績が財務諸表に適正に記載されているかを監査する活動。",
  情報セキュリティ監査: "情報セキュリティ監査は、情報システムを総合的に点検し、ITが有効活用されているかを監査する活動。",
  システム監査: "システム監査は、ITサービスマネジメントを実現するためのベストプラクティス集。",
  システム監査人: "システム監査人は、監査対象システムの運用担当者が担当するのが最も適切。",
  システム監査人の独立性: "システム監査人の独立性は、監査対象システムの担当者が自ら監査すること。",
  システム監査基準: "システム監査基準は、個別の監査結果と改善提案をまとめた報告書。",
  システム監査計画: "システム監査計画は、監査結果の証拠や判断根拠を記録した文書。",
  予備調査: "予備調査は、監査報告書を作成した後に実施する確認作業。",
  本調査: "本調査は、監査対象を確認せずに改善指導だけを行う作業。",
  監査証拠: "監査証拠は、監査人の感覚や印象だけで作る監査結果。",
  監査調書: "監査調書は、監査対象部門が監査人に提出する改善報告書。",
  システム監査報告書: "システム監査報告書は、監査計画を立てる前に作成する文書。",
  被監査部門: "被監査部門は、監査に必要な資料や情報を提供してはならない。",
  内部統制: "内部統制は、業務プロセスをあいまいにして担当者の自由度を高める仕組み。",
  職務分掌: "職務分掌は、申請から承認までを同じ担当者に集約して効率化すること。",
  IT統制: "IT統制は、ITサービス運用のベストプラクティスをまとめたフレームワーク。",
  全般統制: "全般統制は、個別業務システムの承認済み業務だけを正確に処理する統制。",
  業務処理統制: "業務処理統制は、外部委託先のモニタリングや全社的な開発保守規程だけを指す。",
  ITガバナンス: "ITガバナンスは、ITサービスの運用を対象としたベストプラクティスのフレームワーク。",
  コーポレートガバナンス: "コーポレートガバナンスは、ITガバナンスと対立する概念。",
  ベン図: "ベン図は、数値の大小関係だけを棒グラフで表す図。",
  論理演算: "論理演算では、andはどちらか一方を満たせばよい条件を表す。",
  順列: "順列は、並び順を区別せずに選び方だけを数える考え方。",
  場合の数: "場合の数は、条件を満たすパターンを数えずに平均値を求める考え方。",
  成果物スコープ: "成果物スコープは、成果物を作るために必要な作業手順の範囲。",
  プロジェクトスコープ: "プロジェクトスコープは、プロジェクトで作成する成果物そのものの範囲。",
  WBS: "WBSは、作業の予定や進捗を横棒で表す図。",
  マイルストーン: "マイルストーンは、作業の順序関係と所要日数を矢印で表す図。",
  アローダイアグラム: "アローダイアグラムは、作業の予定や進捗を横棒で表す図。",
  クリティカルパス: "クリティカルパスは、短縮してもプロジェクト全体の完了日に影響しない作業経路。",
  ガントチャート: "ガントチャートは、プロジェクトチームが実行する作業を階層的に分解した図表。",
  進捗管理: "進捗管理では、管理者の感覚だけで進捗遅れを判断すればよい。",
  リスク対応: "リスク対応は、リスクが発生してから必ず何もせず受け入れることだけを指す。",
  リスク回避: "リスク回避は、リスクを外部委託や保険で第三者へ移すこと。",
  リスク転嫁: "リスク転嫁は、リスクの原因になる計画や方法を変更してリスク自体を避けること。",
  リスク軽減: "リスク軽減は、リスクを認識したうえで特別な対策を取らず受け入れること。",
  リスク受容: "リスク受容は、複雑な作業を簡単な構成に変えてリスクの影響を小さくすること。",
  コミュニケーション経路: "コミュニケーション経路は、メンバーが増えても常に人数と同じ数だけ増える。",
  要員計画: "要員計画では、メンバーの役割や責任をあいまいにして柔軟性を高めることが最も重要。",
  工数: "工数は、作業量ではなくプロジェクトの利益が0になる売上高。",
  生産性: "生産性は、作業順序や工程に関係なく担当者名のアルファベット順で決まる。",
  可用性: "可用性は、情報が正確で改ざんされていない性質。",
  インシデント管理: "インシデント管理は、インシデントの根本原因を調べ、再発防止を図る活動。",
  問題管理: "問題管理は、ITサービスを一刻も早く復旧させ、ビジネスへの影響を小さくする活動。",
  構成管理: "構成管理は、ITサービスに関する変更要求に基づいて発生する一連の作業を管理する活動。",
  変更管理: "変更管理は、ITサービスを提供するために必要な構成品目の情報を管理する活動。",
};

const state = {
  terms: [],
  cards: [],
  sessions: [],
  currentCards: [],
  currentIndex: 0,
  answered: false,
  filterPage: "all",
  view: "study",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function normalizeId(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-ぁ-んァ-ヶ一-龠]/g, "");
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      state.terms = parsed.terms || [];
      state.cards = parsed.cards || [];
      state.sessions = parsed.sessions || [];
      if (mergeSeedData()) {
        saveData();
      } else {
        enrichCardExplanations();
      }
      return;
    } catch (error) {
      console.warn("保存データを読み込めませんでした。初期データを使います。", error);
    }
  }
  state.terms = [...window.ITPASSPORT_SEED.terms];
  state.cards = buildSeedCards(state.terms);
  state.sessions = [];
  enrichCardExplanations();
  saveData();
}

function saveData() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      terms: state.terms,
      cards: state.cards,
      sessions: state.sessions,
      updatedAt: new Date().toISOString(),
    })
  );
}

function mergeSeedData() {
  const seedTerms = window.ITPASSPORT_SEED?.terms || [];
  const existingTermsById = new Map(state.terms.map((term) => [term.id, term]));
  const existingTermIds = new Set(existingTermsById.keys());
  const newTerms = seedTerms.filter((term) => !existingTermIds.has(term.id));

  seedTerms.forEach((seedTerm) => {
    const existingTerm = existingTermsById.get(seedTerm.id);
    if (existingTerm) {
      Object.assign(existingTerm, seedTerm);
    }
  });

  if (newTerms.length) {
    state.terms.push(...newTerms);
  }

  const seedTermIds = new Set(seedTerms.map((term) => term.id));
  const existingCardIds = new Set(state.cards.map((card) => card.id));
  const generatedCards = buildSeedCards(state.terms.filter((term) => seedTermIds.has(term.id)));
  const newCards = generatedCards.filter((card) => !existingCardIds.has(card.id));
  const generatedCardsById = new Map(generatedCards.map((card) => [card.id, card]));

  state.cards = state.cards.map((card) => {
    const generatedCard = generatedCardsById.get(card.id);
    if (!generatedCard) return card;
    return {
      ...card,
      termId: generatedCard.termId,
      page: generatedCard.page,
      field: generatedCard.field,
      sourceProblem: generatedCard.sourceProblem,
      status: generatedCard.status,
      difficulty: generatedCard.difficulty,
      statement: generatedCard.statement,
      answer: generatedCard.answer,
    };
  });

  if (newCards.length) {
    state.cards.push(...newCards);
  }

  enrichCardExplanations();
  return newTerms.length > 0 || newCards.length > 0;
}

function escapeHtml(value) {
  return value
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(value) {
  return value
    .toString()
    .replace(/[「」。、，．\s]/g, "")
    .replace(/こと$/, "");
}

function extractStatementDefinition(statement) {
  return statement.toString().split("は、").slice(1).join("は、").trim();
}

function similarity(a, b) {
  const left = normalizeText(a);
  const right = normalizeText(b);
  if (!left || !right) return 0;
  if (left.includes(right) || right.includes(left)) return 1;

  const leftChars = new Set([...left]);
  const rightChars = new Set([...right]);
  const overlap = [...leftChars].filter((char) => rightChars.has(char)).length;
  return overlap / Math.max(leftChars.size, rightChars.size);
}

function referencedTermForStatement(statement, currentTermId) {
  const definition = extractStatementDefinition(statement);
  if (!definition) return null;

  const candidates = state.terms
    .filter((term) => term.id !== currentTermId)
    .map((term) => ({
      term,
      score: Math.max(
        similarity(definition, term.summary),
        similarity(definition, term.examPoint)
      ),
    }))
    .sort((a, b) => b.score - a.score);

  return candidates[0]?.score >= 0.51 ? candidates[0].term : null;
}

function explanationForCard(card) {
  const term = state.terms.find((item) => item.id === card.termId);
  if (!term) return card.explanation || "";

  if (card.answer === "×") {
    const referencedTerm = referencedTermForStatement(card.statement, term.id);
    const referenceText = referencedTerm ? `この説明は「${referencedTerm.name}」のこと。` : "";
    return `${referenceText}正しくは、${term.name}は「${term.summary}」。${term.examPoint}`;
  }

  return `${term.name}は「${term.summary}」。${term.examPoint}`;
}

function enrichCardExplanations() {
  state.cards = state.cards.map((card) => ({
    ...card,
    explanation: explanationForCard(card),
  }));
}

function buildSeedCards(terms) {
  return terms.flatMap((term) => {
    const falseStatement = FALSE_QUIZ_BY_NAME[term.name] || buildFallbackFalseStatement(term, terms);
    const base = {
      termId: term.id,
      page: term.page,
      field: term.field,
      sourceProblem: term.problem,
      status: "#要復習",
      difficulty: 3,
      correct: 0,
      wrong: 0,
    };
    return [
      {
        ...base,
        id: `card-${term.id}-true`,
        statement: `${term.name}は、${term.summary}`,
        answer: "○",
        explanation: `${term.name}は「${term.summary}」。${term.examPoint}`,
      },
      {
        ...base,
        id: `card-${term.id}-false`,
        statement: falseStatement,
        answer: "×",
        explanation: "",
      },
    ];
  });
}

function buildFallbackFalseStatement(term, terms) {
  const confuser = terms.find((item) => item.page === term.page && item.id !== term.id) || terms.find((item) => item.id !== term.id);
  if (!confuser) return `${term.name}は、試験では問われない用語である。`;
  return `${term.name}は、${confuser.summary}`;
}

function termPages(item) {
  return item.page
    .toString()
    .split(",")
    .map((page) => page.trim())
    .filter(Boolean);
}

function matchesPage(item) {
  return state.filterPage === "all" || termPages(item).includes(state.filterPage);
}

function pages() {
  return [...new Set(state.terms.flatMap((term) => termPages(term)))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "ja"));
}

function pageFromUrl() {
  const page = new URLSearchParams(window.location.search).get("page");
  return page ? `p.${page.replace(/^p\.?/i, "")}` : "all";
}

function updateUrlPage(page) {
  const url = new URL(window.location.href);
  if (page === "all") {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", page.replace(/^p\./, ""));
  }
  window.history.replaceState(null, "", url);
}

function filteredCards() {
  return state.cards.filter((card) => matchesPage(card));
}

function filteredTerms() {
  const query = $("#searchInput")?.value.trim().toLowerCase() || "";
  return state.terms.filter((term) => {
    const pageOk = matchesPage(term);
    const queryOk = !query || [term.name, term.summary, term.examPoint, term.hobby].join(" ").toLowerCase().includes(query);
    return pageOk && queryOk;
  });
}

function renderPageOptions() {
  const select = $("#pageFilter");
  const current = state.filterPage || select.value;
  select.innerHTML = `<option value="all">すべて</option>${pages().map((page) => `<option value="${page}">${page}</option>`).join("")}`;
  select.value = pages().includes(current) ? current : "all";
  state.filterPage = select.value;
}

function renderStats() {
  const cards = filteredCards();
  const attempts = state.sessions.length;
  const correct = state.sessions.filter((item) => item.correct).length;
  $("#statTerms").textContent = filteredTerms().length;
  $("#statCards").textContent = cards.length;
  $("#statAccuracy").textContent = attempts ? `${Math.round((correct / attempts) * 100)}%` : "0%";
  $("#sessionSummary").textContent = `${attempts}問`;
}

function importantTermsInText(text) {
  return state.terms
    .map((term) => term.name)
    .filter((name, index, names) => name && text.includes(name) && names.indexOf(name) === index)
    .sort((a, b) => b.length - a.length);
}

function renderTextWithCopyTerms(text) {
  const terms = importantTermsInText(text);
  if (!terms.length) return escapeHtml(text);

  let html = "";
  let index = 0;
  while (index < text.length) {
    const matched = terms.find((term) => text.startsWith(term, index));
    if (matched) {
      const label = escapeHtml(matched);
      html += `<button class="copy-term" type="button" data-copy="${label}" title="クリックしてコピー">${label}</button>`;
      index += matched.length;
    } else {
      html += escapeHtml(text[index]);
      index += 1;
    }
  }
  return html;
}

function renderFeedbackMessage(correct, card) {
  const message = `${correct ? "正解" : "見直し"}。正解は「${card.answer}」。${card.explanation}`;
  return `${renderTextWithCopyTerms(message)}<span id="copyStatus" class="copy-status" aria-live="polite"></span>`;
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function copyTerm(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  } else {
    fallbackCopy(text);
  }
}

function resetDeck() {
  state.currentCards = filteredCards();
  state.currentIndex = 0;
  state.answered = false;
}

function currentCard() {
  if (!state.currentCards.length) return null;
  return state.currentCards[state.currentIndex % state.currentCards.length];
}

function renderStudy() {
  const card = currentCard();
  $("#studyScope").textContent = state.filterPage === "all" ? "すべてのページ" : state.filterPage;

  if (!card) {
    $("#cardPage").textContent = "-";
    $("#cardField").textContent = "-";
    $("#cardProgress").textContent = "0 / 0";
    $("#cardStatement").textContent = "このページにはカードがありません。追加タブからカードを増やしてください。";
    $("#feedback").hidden = true;
    return;
  }

  $("#cardPage").textContent = card.page;
  $("#cardField").textContent = card.field || "未分類";
  $("#cardProgress").textContent = `${(state.currentIndex % state.currentCards.length) + 1} / ${state.currentCards.length}`;
  $("#cardStatement").textContent = card.statement;
  $("#feedback").hidden = true;
  $("#feedback").className = "feedback";
}

function answerCard(answer) {
  if (state.answered) return;
  const card = currentCard();
  if (!card) return;
  const correct = answer === card.answer;
  card[correct ? "correct" : "wrong"] += 1;
  if (!correct) {
    card.difficulty = Math.min(5, (card.difficulty || 3) + 1);
  }
  state.sessions.unshift({
    cardId: card.id,
    term: termName(card.termId),
    page: card.page,
    answer,
    correct,
    at: new Date().toISOString(),
  });
  state.sessions = state.sessions.slice(0, 50);
  state.answered = true;
  saveData();

  const feedback = $("#feedback");
  feedback.hidden = false;
  feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
  feedback.innerHTML = renderFeedbackMessage(correct, card);
  renderStats();
  renderHistory();
}

function nextCard() {
  if (!state.currentCards.length) return;
  state.currentIndex = (state.currentIndex + 1) % state.currentCards.length;
  state.answered = false;
  renderStudy();
}

function termName(termId) {
  return state.terms.find((term) => term.id === termId)?.name || termId;
}

function renderHistory() {
  const list = $("#historyList");
  if (!state.sessions.length) {
    list.innerHTML = `<p class="help-text">まだ解答履歴がありません。</p>`;
    return;
  }
  list.innerHTML = state.sessions.slice(0, 8).map((item) => `
    <div class="history-item">
      <strong>${item.correct ? "正解" : "見直し"}</strong>
      <span>${item.page}</span>
      <span>${item.term}</span>
      <span>回答: ${item.answer}</span>
    </div>
  `).join("");
}

function renderTerms() {
  const terms = filteredTerms();
  $("#termGrid").innerHTML = terms.map((term) => `
    <article class="term-card">
      <div class="tag-row">
        <span class="tag">${term.page}</span>
        <span class="tag">${term.field || "未分類"}</span>
        ${term.problem ? `<span class="tag">${term.problem}</span>` : ""}
      </div>
      <h3>${term.name}</h3>
      <p>${term.summary}</p>
      <p>${term.examPoint}</p>
    </article>
  `).join("") || `<p class="help-text">該当する用語がありません。</p>`;
}

function switchView(view) {
  state.view = view;
  $$(".nav-tab").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  $$(".view").forEach((section) => section.classList.toggle("is-active", section.id === `${view}View`));
}

function addTermsFromForm(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const page = form.get("page").toString().trim();
  const scope = form.get("scope").toString().trim();
  const lines = form.get("terms").toString().split("\n").map((line) => line.trim()).filter(Boolean);
  const newTerms = [];

  for (const line of lines) {
    const [name, field = "マネジメント", summary = "", examPoint = "試験で説明文との対応を確認する。"] = line.split("|").map((part) => part.trim());
    if (!name || !summary) continue;
    const id = normalizeId(`${page}-${name}`);
    if (state.terms.some((term) => term.id === id)) continue;
    newTerms.push({
      id,
      name,
      field,
      page,
      problem: "",
      summary,
      hobby: `${scope}の中で、${name}を見分けるための目印として覚える。`,
      examPoint,
    });
  }

  if (!newTerms.length) return;
  state.terms.push(...newTerms);
  state.cards.push(...buildSeedCards(newTerms));
  enrichCardExplanations();
  saveData();
  event.currentTarget.reset();
  renderAll();
  switchView("study");
}

function exportJson() {
  const blob = new Blob([localStorage.getItem(STORAGE_KEY)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `itpassport-review-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      state.terms = parsed.terms || [];
      state.cards = parsed.cards || [];
      state.sessions = parsed.sessions || [];
      enrichCardExplanations();
      saveData();
      renderAll();
    } catch (error) {
      alert("JSONを読み込めませんでした。");
    }
  };
  reader.readAsText(file);
}

function renderAll() {
  renderPageOptions();
  resetDeck();
  renderStats();
  renderStudy();
  renderHistory();
  renderTerms();
}

function bindEvents() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  $("#pageFilter").addEventListener("change", (event) => {
    state.filterPage = event.target.value;
    updateUrlPage(state.filterPage);
    resetDeck();
    renderStats();
    renderStudy();
    renderTerms();
  });
  $("#answerTrue").addEventListener("click", () => answerCard("○"));
  $("#answerFalse").addEventListener("click", () => answerCard("×"));
  $("#feedback").addEventListener("click", async (event) => {
    const button = event.target.closest(".copy-term");
    if (!button) return;
    await copyTerm(button.dataset.copy);
    const status = $("#copyStatus");
    if (status) {
      status.textContent = `「${button.dataset.copy}」をコピーしました`;
      window.setTimeout(() => {
        status.textContent = "";
      }, 1600);
    }
  });
  $("#nextCardButton").addEventListener("click", nextCard);
  $("#resetSessionButton").addEventListener("click", () => {
    state.sessions = [];
    saveData();
    renderStats();
    renderHistory();
  });
  $("#searchInput").addEventListener("input", renderTerms);
  $("#addForm").addEventListener("submit", addTermsFromForm);
  $("#exportButton").addEventListener("click", exportJson);
  $("#importInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importJson(file);
  });
}

loadData();
state.filterPage = pageFromUrl();
bindEvents();
renderAll();
