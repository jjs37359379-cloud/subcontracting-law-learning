const lessons = [
  {
    icon: "⌁", title: "이 거래, 하도급일까?", desc: "회사 규모가 아니라 거래의 실질로 적용 여부를 판단합니다.",
    lead: "‘협력사 구매’라고 부른다고 모두 하도급은 아닙니다. 반대로 ‘일반 매입’이라고 등록했어도 실질이 제조위탁이면 하도급법이 적용될 수 있습니다.",
    sections: [
      ["판단의 세 축", ["위탁 유형: 제조·수리·건설·용역위탁 중 하나인지", "업(業) 관련성: 우리 회사가 제조·판매하거나 제공하는 제품·서비스와 관련된 위탁인지", "당사자 요건: 원사업자와 수급사업자의 기업 규모 관계가 법정 기준에 맞는지"]],
      ["소비재 회사의 대표 장면", ["자사 브랜드 화장품·식품·생활용품을 협력사가 생산하는 OEM·ODM", "제품 용기, 라벨, 단상자 등 판매 제품의 구성품 제작", "광고물·콘텐츠·물류 등은 용역위탁 해당 여부를 별도로 검토", "완제품을 규격 변경 없이 그대로 사오는 단순 매입은 일반적으로 제조위탁과 구별"]],
      ["구매담당자의 행동", ["신규 거래 등록 시 중소기업 여부와 직전 사업연도 매출액 자료를 확보", "품목과 생산 공정을 구체적으로 적어 법무·컴플라이언스 체크", "애매할 때는 하도급이 아니라고 단정하지 말고 계약 체결 전에 문의"]]
    ], callout: ["한 줄 기억", "계약 이름보다 ‘누가, 무엇을, 어떤 사업을 위해 만들어 달라고 했는가’가 중요합니다."]
  },
  {
    icon: "▤", title: "작업 전 서면 발급", desc: "구두 발주와 사후 계약이 왜 위험한지 익힙니다.",
    lead: "협력사가 작업을 시작하기 전에 계약 조건이 담긴 서면을 발급하는 것이 출발점입니다. 급하다는 이유는 사후 발급을 정당화하지 못합니다.",
    sections: [
      ["언제까지?", ["원칙적으로 제조·수리위탁은 수급사업자가 물품 납품을 위한 작업을 시작하기 전", "전자계약·전자문서도 가능하지만 발급 사실과 내용을 나중에 증명할 수 있어야 함", "기본계약서만 있고 품목·수량·단가 등이 비어 있다면 개별 발주서까지 함께 확인"]],
      ["무엇을 적나?", ["위탁일, 목적물의 내용·수량, 납품 시기와 장소", "검사의 방법과 시기, 하도급대금과 지급방법·지급기일", "원재료 가격 변동 등에 따른 대금 조정 요건·방법·절차", "해당되는 경우 하도급대금 연동에 관한 사항"]],
      ["변경 발주도 동일", ["수량 추가, 사양 변경, 납기 단축, 금형 수정은 말이나 메신저로 끝내지 않기", "변경 작업 착수 전에 변경 서면을 발급", "발주·변경·검수·지급 자료를 회사 보존정책에 따라 일관되게 관리"]]
    ], callout: ["위험 신호", "‘일단 생산 들어가 주세요. PO는 월말에 소급해서 넣을게요’라는 말이 나오면 작업 착수부터 멈추고 서면을 먼저 완성하세요."]
  },
  {
    icon: "₩", title: "단가와 특약의 경계", desc: "원가절감과 부당한 대금결정·감액을 구별합니다.",
    lead: "좋은 협상은 객관적 근거와 자발적 합의가 있습니다. 구매 목표를 협력사에 일률적으로 전가하거나 이미 확정된 대금을 깎으면 법적 위험이 커집니다.",
    sections: [
      ["부당한 대금결정 위험", ["정당한 이유 없이 일률적 비율로 단가 인하", "협조 요청 등 명목으로 일방적으로 낮은 단가 결정", "경쟁입찰 후 추가 협상으로 최저 입찰가보다 낮게 결정", "발주 후 대금을 정하지 않다가 납품이 임박한 때 낮은 가격을 강요"]],
      ["부당감액 위험", ["판매 부진, 행사 실패, 고객 클레임 등 원사업자 사정으로 이미 정한 대금을 삭감", "새 단가를 합의하면서 과거 납품분에 소급 적용", "법적 근거 없이 판촉비·전산비·성과장려금을 대금에서 공제"]],
      ["부당특약", ["예측하기 어려운 모든 비용을 수급사업자에게 부담시키는 조항", "입찰내역에 없는 비용이나 원사업자가 부담해야 할 민원·산재 비용 전가", "법이 보장한 대금조정 신청이나 신고 권리를 제한하는 조항"]]
    ], callout: ["실무 원칙", "단가 변경의 원가 근거, 협의 과정, 적용 시점을 남기고 변경 합의 이후의 물량에 적용하세요."]
  },
  {
    icon: "✓", title: "납품·검사·반품", desc: "검수 기준과 10일 원칙, 부당 반품을 알아봅니다.",
    lead: "검사는 구매자의 재량이 아니라 계약에서 합의한 기준에 따라야 합니다. 판매가 기대보다 부진하다는 이유로 정상 제품을 협력사에 되돌릴 수 없습니다.",
    sections: [
      ["수령", ["수급사업자가 납품하면 검사 전이라도 수령증명서를 즉시 발급", "수령은 사실상 지배 아래 두게 된 때를 기준으로 판단", "정당한 사유 없이 납품 수령을 거부하거나 지연하지 않기"]],
      ["검사", ["검사 기준·방법은 객관적이고 공정하게 정해 계약에 명시", "원칙적으로 목적물을 수령한 날부터 10일 이내 결과를 서면 통지", "정당한 사유 없이 기간 내 통지하지 않으면 검사에 합격한 것으로 봄"]],
      ["반품", ["판매 부진, 발주 오류, 소비자 취향 변화 등 원사업자 사정에 따른 반품 금지", "불명확하거나 계약 후 새로 만든 검사 기준으로 불합격 처리하면 위험", "협력사 책임이 명확한 하자라면 계약·검사자료에 근거해 협의"]]
    ], callout: ["현장 예시", "시즌 종료 후 남은 판촉세트를 ‘품질 재검사’라는 이름으로 반품하는 것은 명칭과 관계없이 부당반품이 될 수 있습니다."]
  },
  {
    icon: "◷", title: "대금 지급과 연동", desc: "60일 지급기한과 공급원가 변동 대응을 익힙니다.",
    lead: "협력사가 납품한 뒤 대금을 제때 받는 것은 가장 기본적인 권리입니다. 지급일 산정과 원재료 가격 변동 대응을 구매 단계에서 설계해야 합니다.",
    sections: [
      ["지급기한", ["원칙적으로 목적물 수령일부터 60일 이내의 가능한 짧은 기한으로 지급일 설정", "지급기일을 정하지 않았다면 수령일, 60일을 넘겨 정했다면 수령일부터 60일째를 지급기일로 봄", "지연 시 법정 지연이자가 문제될 수 있으므로 검수·세금계산서 절차를 이유로 지급을 미루지 않기"]],
      ["발주자로부터 선급금을 받은 경우", ["해당 위탁에 대응하는 선급금의 내용과 비율에 따라 수급사업자에게 지급", "받은 날부터 법정기한 내 지급하고 지연에 따른 비용도 확인", "선급금 수령 사실을 구매·재무 부서가 공유하도록 프로세스 연결"]],
      ["하도급대금 연동", ["주요 원재료 가격이 변동할 때 하도급대금을 조정하는 기준과 절차를 서면에 반영", "예외 적용 여부는 담당자가 임의 판단하지 말고 법정 요건과 증빙 확인", "연동 대상이 아니어도 공급원가 변동에 따른 조정 신청이 오면 성실히 협의"]]
    ], callout: ["숫자로 기억", "납품·수령일을 Day 0으로 관리하고, 60일은 ‘목표’가 아니라 넘지 말아야 할 법정 상한이라는 관점으로 운영하세요."]
  },
  {
    icon: "◇", title: "기술자료 보호", desc: "레시피·도면·공정정보를 요구할 때 지켜야 할 절차입니다.",
    lead: "소비재 ODM에서 처방, 배합비, 제조공정, 금형도면은 협력사의 생존과 직결될 수 있습니다. 필요하다는 이유만으로 이메일 한 통으로 요구해서는 안 됩니다.",
    sections: [
      ["먼저 물을 것", ["그 자료가 정말 계약 이행·품질 검증에 필요한가", "완성품 시험성적서 등 덜 민감한 자료로 목적을 달성할 수 없는가", "요구 목적과 열람자를 최소화했는가"]],
      ["정당한 요구라면", ["요구 목적, 비밀유지 방법, 권리귀속 관계, 대가와 지급방법 등을 협의", "법정 기재사항을 담은 기술자료 요구서를 요구 시점에 발급", "기술자료 수령·열람·반환·폐기 이력을 남기고 접근권한 제한"]],
      ["절대 금지", ["단가 인상을 요구한 기존 업체를 교체하려고 자료를 경쟁업체에 제공", "계약 목적을 벗어나 자체 개발이나 제3자 생산에 사용", "NDA가 있다는 이유만으로 정당한 사유와 요구서 없이 자료 요청"]]
    ], callout: ["기억할 제재", "기술자료 유용은 손해액의 최대 5배까지 배상책임이 인정될 수 있는 중대한 위반 유형입니다."]
  },
  {
    icon: "!", title: "문제가 생겼을 때", desc: "취소·변경·신고 상황에서 올바르게 대응합니다.",
    lead: "납기 지연이나 판매계획 변경이 생기면 ‘누구 책임인가’부터 단정하지 말고 사실과 계약 기준을 확인해야 합니다. 신고나 자료 제출을 이유로 불이익을 주어서는 안 됩니다.",
    sections: [
      ["위탁 취소·변경", ["생산 착수 후 판매계획 변경만으로 일방 취소하지 않기", "필요하면 협력사와 잔여 원재료·완성품·투입비용을 확인해 합리적으로 정산", "변경 내용과 비용·납기 영향을 서면 합의"]],
      ["분쟁 징후", ["관련 이메일·메신저·발주·검수·지급 자료를 훼손하거나 사후 작성하지 않기", "협력사 요청을 개인적으로 막지 말고 법무·컴플라이언스에 즉시 공유", "감정적 표현, 거래 중단 암시, 평가 불이익 언급을 피하기"]],
      ["보복조치 금지", ["공정위 신고, 분쟁조정 신청, 조사 협조를 이유로 발주 축소·거래정지 등 불이익 금지", "정상적 거래 결정이라면 객관적 성과 자료와 일관된 기준을 남기기", "신고 사실을 알게 된 이후의 공급사 평가는 독립적인 검토와 승인을 거치기"]]
    ], callout: ["마지막 원칙", "기록은 나중에 만드는 방어자료가 아니라, 공정하게 의사결정했다는 과정을 그때그때 남기는 것입니다."]
  }
];

const lessonChecks = [
  [
    { q: "A사는 시중에서 파는 공병을 사되 자사 전용 금형·색상·로고 규격으로 생산하도록 했습니다. 가장 타당한 판단은?", options: ["공병은 상품이므로 언제나 단순매입이다", "계약명이 매입이어도 실제 제조지시와 당사자 요건을 함께 봐야 한다", "금형비를 A사가 내면 하도급법은 적용되지 않는다"], answer: 1 },
    { q: "대기업이 소규모 영상사에 신제품 광고영상을 맡겼습니다. 곧바로 하도급거래라고 결론 내릴 수 있을까요?", options: ["아니다. 용역위탁의 법정 범위와 업 관련성·당사자 요건을 더 확인해야 한다", "그렇다. 규모가 큰 회사가 작은 회사에 맡기면 모두 하도급이다", "아니다. 무형 결과물은 하도급법 대상이 될 수 없다"], answer: 0 },
    { q: "기성 완제품 1,000개를 그대로 매입하다가 다음 주문부터 전용 성분과 포장을 요구했습니다. 구매담당자의 조치는?", options: ["첫 거래가 일반매입이었으므로 계속 같은 분류를 쓴다", "가격이 같으면 거래 성격도 같다고 본다", "변경된 거래 실질을 기준으로 제조위탁 여부를 다시 점검한다"], answer: 2 }
  ],
  [
    { q: "연간 기본계약은 체결했지만 품목·수량·단가가 담긴 PO는 생산 이틀 뒤 발행했습니다. 가장 정확한 평가는?", options: ["기본계약이 있으므로 발급시점 문제는 없다", "필수사항을 확정한 서면이 착수 후 발급되어 위반 위험이 있다", "납품 전에만 PO를 주면 언제나 적법하다"], answer: 1 },
    { q: "긴급 사양변경을 이메일로 알렸고 협력사는 즉시 작업했습니다. 변경단가와 납기는 다음 주 합의할 예정입니다. 우선 조치는?", options: ["기존 계약이 있으므로 그대로 진행한다", "협력사의 답장만 받으면 필수사항은 나중에 정해도 된다", "변경 작업을 멈추고 필요한 조건을 확정한 변경서면을 먼저 발급한다"], answer: 2 },
    { q: "전자발주라면 서면발급 의무를 충족하기 위해 무엇까지 갖추는 것이 가장 안전할까요?", options: ["필수 기재사항과 발급·수신 사실을 사후 입증할 수 있는 전자기록", "ERP 화면에 품목명만 등록", "담당자 개인 메신저의 구두 합의 요약"], answer: 0 }
  ],
  [
    { q: "구매팀이 원가절감 목표 3%를 정했지만 업체별 원가자료를 검토하고 적용률·시점을 개별 협의했습니다. 평가는?", options: ["목표율이 존재하면 무조건 위법이다", "형식적 합의만 보면 언제나 적법하다", "객관적 근거와 실질적 협의 여부를 종합 판단해야 한다"], answer: 2 },
    { q: "소비자 클레임 비용을 협력사 대금에서 먼저 공제한 뒤 귀책을 조사하기로 했습니다. 가장 큰 위험은?", options: ["귀책과 감액 근거가 확정되기 전 일방 공제한 부당감액 위험", "클레임이 접수되었으므로 위험이 없다", "다음 달에 정산하면 감액이 아니다"], answer: 0 },
    { q: "8월 물량부터 새 단가를 적용하기로 8월 20일 합의했습니다. 8월 1~19일 이미 납품된 물량 처리로 가장 안전한 것은?", options: ["월 단위 계약이므로 새 단가를 자동 소급한다", "기존 확정대금을 유지하고 새 단가 적용 범위를 명확히 서면화한다", "구매 목표 달성을 위해 차액을 판촉비로 공제한다"], answer: 1 }
  ],
  [
    { q: "물류센터가 제품을 인수했지만 품질검사는 3일 뒤 끝납니다. 오늘 해야 할 일은?", options: ["검사 합격일까지 수령 기록을 보류한다", "검사와 별개로 수령증명서를 즉시 발급하고 검사기한을 관리한다", "세금계산서 발행일을 수령일로 정한다"], answer: 1 },
    { q: "수령 10일이 지났는데 내부 시험장비 고장으로 결과를 알리지 못했습니다. 법적 효과를 가장 신중하게 설명한 것은?", options: ["내부 사정만으로 검사기간은 자동 연장된다", "통지를 안 했으므로 언제든 반품할 수 있다", "정당한 사유가 인정되지 않으면 합격으로 간주될 수 있다"], answer: 2 },
    { q: "계약 기준에는 맞지만 매장 판매가 부진해 ‘추가 품질검사’ 기준을 만들어 반품하려 합니다. 평가는?", options: ["원사업자 사정과 사후 기준에 따른 부당반품 위험이 크다", "품질검사라는 명칭이면 허용된다", "시즌 종료 전이면 자유롭게 반품할 수 있다"], answer: 0 }
  ],
  [
    { q: "제품은 4월 1일 수령했지만 세금계산서는 4월 20일 받았습니다. 특별한 사정이 없다면 60일 기산의 기준은?", options: ["4월 1일 목적물 수령일", "4월 20일 세금계산서 수령일", "내부 검수 승인일"], answer: 0 },
    { q: "자사 고객이 대금을 주지 않아 협력사 지급을 90일로 늦추려 합니다. 가장 정확한 판단은?", options: ["상위 고객 미지급이면 자동 면책된다", "원사업자의 자금사정은 원칙적으로 60일 상한을 미루는 근거가 되지 않는다", "협력사가 구두 동의하면 지연이자는 항상 사라진다"], answer: 1 },
    { q: "담당자가 ‘연동 예외’라고 판단해 연동사항을 비워 둔 채 계약했습니다. 적절한 보완은?", options: ["회사 내부 기준만 맞으면 그대로 둔다", "단가가 낮으면 예외 사유 기록은 필요 없다", "법정 예외 요건과 관련 서면·사유를 확인하고 조정신청 절차도 안내한다"], answer: 2 }
  ],
  [
    { q: "NDA 체결 후 품질팀이 배합비 전체를 이메일로 요청했습니다. 시험성적서만으로 검증이 가능한 상황이라면?", options: ["NDA가 있으므로 전체 배합비를 받아도 된다", "필요 최소 자료인지 먼저 재검토하고, 요구가 필요하면 법정 요구서를 발급한다", "품질팀 요청은 구매팀 요청이 아니므로 법 적용이 없다"], answer: 1 },
    { q: "기술자료 요구서에 목적·열람자·반환일은 썼지만 자료 사용의 대가와 권리귀속은 협의하지 않았습니다. 평가는?", options: ["일부 기재만으로 충분하다고 단정하기 어렵고 법정 기재사항을 보완해야 한다", "NDA가 있으면 누락을 모두 대체한다", "자료를 아직 제3자에게 주지 않았으므로 요구 절차는 중요하지 않다"], answer: 0 },
    { q: "기존 ODM사의 처방을 원가검토 컨설턴트에게 전달하려 합니다. 우선 판단할 것은?", options: ["컨설턴트가 비밀유지서약을 했는지만 본다", "회사 비용으로 개발했는지만 본다", "당초 요구 목적·제공 범위에 포함되는지와 정당한 권한·보호조치를 확인한다"], answer: 2 }
  ],
  [
    { q: "생산 착수 뒤 판매계획이 취소됐고 협력사도 일부 납기를 지연했습니다. 첫 대응으로 가장 적절한 것은?", options: ["협력사 지연을 이유로 전량 무상 취소한다", "각 원인과 투입비용을 자료로 분리 확인한 뒤 취소·변경·정산을 협의한다", "분쟁을 피하려고 발주기록을 삭제한다"], answer: 1 },
    { q: "신고 업체의 발주를 줄이려는데 최근 불량률도 상승했습니다. 보복조치 위험을 줄이는 핵심은?", options: ["신고 후 한 달만 기다린다", "담당자를 바꾸면 신고와 무관한 결정이 된다", "신고와 독립된 객관적 평가기준·비교자료·승인과정을 확보한다"], answer: 2 },
    { q: "분쟁 가능성을 인지한 뒤 담당자가 빠진 계약내용을 현재 날짜로 보완하려 합니다. 올바른 조치는?", options: ["원본을 보존하고 사실관계·누락 경위를 별도로 기록해 담당부서에 공유한다", "완전한 계약서처럼 보이도록 원본을 교체한다", "개인 메신저 기록부터 정리·삭제한다"], answer: 0 }
  ]
];

const lessonLawLinks = [
  [["법 제2조", "정의·위탁 유형과 당사자 요건", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제2조"]],
  [["법 제3조", "서면 발급·보존", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제3조"], ["시행령 제3조", "서면 필수 기재사항", "https://www.law.go.kr/법령/하도급거래공정화에관한법률시행령/제3조"]],
  [["법 제3조의4", "부당특약 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제3조의4"], ["법 제4조", "부당한 대금결정 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제4조"], ["법 제11조", "감액 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제11조"]],
  [["법 제8조", "부당한 수령거부 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제8조"], ["법 제9조", "검사 기준·결과 통지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제9조"], ["법 제10조", "부당반품 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제10조"]],
  [["법 제13조", "대금 지급기한·방법", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제13조"], ["법 제16조의2", "공급원가 변동에 따른 조정", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제16조의2"]],
  [["법 제12조의3", "기술자료 요구·유용 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제12조의3"]],
  [["법 제19조", "보복조치 금지", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제19조"], ["법 제22조", "위반행위 신고", "https://www.law.go.kr/법령/하도급거래공정화에관한법률/제22조"]]
];

const legacyCases = [
  {
    category: "기술자료", date: "2021. 01", company: "㈜엠에이피컴퍼니 · 화장품 책임판매",
    title: "NDA만 받고 화장품 제조 정보를 요구한 사건",
    facts: "화장품 ODM 업체에 전성분·배합비 등 기술자료를 요구하면서 요구 목적, 비밀유지, 권리귀속, 대가 등을 적은 법정 서면을 발급하지 않아 시정명령과 과징금 처분을 받았습니다.",
    lesson: "비밀유지계약이 기술자료 요구서를 대신하지 않습니다. 정당한 사유와 요구 절차를 각각 갖춰야 합니다.",
    url: "https://www.ftc.go.kr/www/selectBbsNttView.do?bordCd=3&key=12&nttSn=41769"
  },
  {
    category: "경제적 이익", date: "2022. 09", company: "G사 · 도시락 등 신선식품 제조위탁",
    title: "성과장려금·판촉비를 협력사에 요구한 사건",
    facts: "9개 수급사업자에게 도시락 등 신선식품 제조를 맡기면서 성과장려금과 판촉비 등의 명목으로 경제적 이익을 부당하게 요구해 시정명령과 243억 원의 과징금 조치를 받았습니다.",
    lesson: "계약 대가와 무관한 비용을 ‘상생’이나 ‘행사 분담’이라는 이름으로 요구해도 실질에 따라 위법할 수 있습니다.",
    url: "https://www.ftc.go.kr/www/contents.do?key=743"
  },
  {
    category: "부당감액", date: "2020. 10", company: "H사 · 45개 수급사업자",
    title: "확정된 하도급대금 80.5억 원을 감액한 사건",
    facts: "다수 협력사에 지급할 하도급대금 총 80.5억 원을 부당하게 감액해 시정명령, 115억 원의 과징금 및 법인 고발 조치를 받았습니다.",
    lesson: "구매 목표나 회사 손익 사정은 이미 정해진 대금을 사후에 깎을 정당한 근거가 되지 않습니다.",
    url: "https://www.ftc.go.kr/www/contents.do?key=743"
  },
  {
    category: "대금결정", date: "2011. 07", company: "㈜파브코 · 자동차부품 임가공",
    title: "원가절감률을 일률적으로 떠넘긴 사건",
    facts: "7개 협력사에 2~10%의 목표 공정개선율을 일방 설정하고 품목 단가를 1~9%씩 낮췄습니다. 공정위는 2억 5,483만 원 지급명령과 1억 1,800만 원 과징금을 부과했습니다.",
    lesson: "원가요인·품목 특성을 검토하지 않은 일률 인하는 ‘협상’ 형식을 갖춰도 부당한 대금결정이 될 수 있습니다.",
    url: "https://www.ftc.go.kr/www/selectBbsNttView.do?bordCd=1&key=4&nttSn=30086"
  },
  {
    category: "서면발급", date: "2019. 08", company: "플랜트 설비업체 · 공정위 의결 제2019-206호",
    title: "계약서는 있었지만 필수사항이 빠진 사건",
    facts: "338개 수급사업자와의 1,359건 위탁 서면에서 대금 지급방법·기일 또는 대금조정 요건·절차 등을 누락했고, 일부 위탁은 서면을 늦게 발급했습니다.",
    lesson: "서명된 문서가 있다는 사실만으로 충분하지 않습니다. 법정 필수사항과 발급 시점을 함께 점검해야 합니다.",
    url: "https://case.ftc.go.kr/ocp/co/getFileList.do?docId=20220617103844331613&docSn=2"
  },
  {
    category: "기술유용", date: "2022. 05", company: "C사 · 부품 제조위탁",
    title: "단가 인상 요구 뒤 도면을 경쟁사에 넘긴 사건",
    facts: "수급사업자의 단가 인상 요구에 대응해 기존에 받은 부품 제작 기술자료를 제3의 업체에 전달하고 거래선을 변경했습니다. 시정명령, 9.2억 원 과징금 및 법인·개인 고발 조치를 받았습니다.",
    lesson: "정당하게 취득한 자료도 합의한 목적을 벗어나 대체업체 선정에 사용하면 기술유용이 될 수 있습니다.",
    url: "https://www.ftc.go.kr/www/contents.do?key=743"
  },
  {
    category: "대금지급", date: "2017. 09", company: "한일중공업㈜ · 제조위탁",
    title: "대금과 지연이자를 지급하지 않은 사건",
    facts: "목적물을 받고도 하도급대금 2억 2,000만 원을 지급하지 않고, 선급금·기성금을 10~414일 늦게 지급하며 발생한 지연이자도 지급하지 않아 지급명령과 과징금을 받았습니다.",
    lesson: "검수·자금사정·발주자 미지급을 이유로 법정 지급기일과 지연이자를 놓치지 않도록 재무 절차를 연결해야 합니다.",
    url: "https://www.ftc.go.kr/www/selectBbsNttView.do?bordCd=3&key=12&nttSn=40510"
  }
];

const cases = window.FTC_CASES || legacyCases;

const duties = [
  ["서면 발급·서류 보존", "착수 전 필수사항을 서면 발급하고 거래자료 보존"],
  ["선급금 지급", "받은 선급금을 내용과 비율에 따라 수급사업자에게 지급"],
  ["내국신용장 개설", "수출품 제조위탁 시 법정기한 내 신용장 개설"],
  ["검사·결과 통지", "공정한 기준으로 검사하고 원칙적으로 10일 내 서면 통지"],
  ["하도급대금 지급", "수령일부터 60일 이내의 가능한 짧은 기한에 지급"],
  ["대금 지급보증", "건설위탁 시 원칙적으로 하도급대금 지급을 보증"],
  ["관세 등 환급액 지급", "환급받은 관세 등을 법정기한 내 수급사업자에게 지급"],
  ["설계변경 대금조정", "발주자로부터 증액받은 경우 내용·비율에 따라 조정"],
  ["공급원가 조정협의", "수급사업자의 조정 신청을 받으면 성실하게 협의"]
];

const bans = [
  ["부당특약", "원사업자 부담 비용이나 예측 불가 비용 전가"],
  ["부당한 대금결정", "일률 인하·최저입찰가보다 낮은 금액 강요"],
  ["물품 등의 구매강제", "지정 물품·장비의 구매 또는 사용 강요"],
  ["부당 위탁취소·수령거부", "발주 후 임의 취소 또는 납품 거부"],
  ["부당반품", "판매 부진·발주 오류 등을 이유로 반품"],
  ["부당감액", "확정된 대금을 정당한 사유 없이 삭감"],
  ["구매대금 부당결제 청구", "제공 물품의 대금을 지나치게 일찍 회수"],
  ["경제적 이익 부당요구", "판촉비·장려금·금전 등 부당 요구"],
  ["기술자료 부당요구·유용", "필요 없는 자료 요구 또는 목적 외 사용"],
  ["부당한 대물변제", "법정 예외 없이 물품으로 대금 지급"],
  ["부당한 경영간섭", "거래·인력·원가 등 경영사항에 부당 개입"],
  ["보복조치", "신고·조정·조사 협조를 이유로 불이익"],
  ["탈법행위", "우회·허위 방식으로 법 적용을 회피"]
];

const quiz = [
  { q: "자사 브랜드로 판매할 샴푸를 중소 ODM사에 처방 개발부터 완제품 생산까지 맡깁니다. 계약 명칭은 ‘상품 매입계약’입니다. 가장 적절한 판단은?", options: ["매입계약이므로 하도급법과 무관하다", "거래 명칭과 무관하게 제조위탁 및 당사자 요건을 확인한다", "금액이 1억 원을 넘을 때만 하도급이다", "ODM은 연구개발이므로 언제나 하도급이 아니다"], answer: 1, note: "계약서 제목보다 거래의 실질이 중요합니다. 제조위탁 해당 여부와 원·수급사업자 요건을 함께 확인해야 합니다." },
  { q: "출시 일정이 급해 협력사에 메신저로 ‘먼저 생산 시작’이라고 하고 계약서는 다음 주에 발급하려 합니다.", options: ["협력사가 동의하면 가능하다", "단가만 합의됐으면 가능하다", "작업 착수 전에 필수사항을 담은 서면을 발급해야 한다", "월말까지 소급 작성하면 된다"], answer: 2, note: "제조 작업을 시작하기 전에 서면을 발급해야 합니다. 급한 일정이나 협력사의 구두 동의가 사후 발급을 정당화하지 않습니다." },
  { q: "전자메일로 발주서를 보내는 경우에 대한 설명 중 맞는 것은?", options: ["종이 계약서가 아니므로 항상 무효다", "전자문서는 필수사항·발급시점·진정성을 갖추면 서면이 될 수 있다", "제목에 발주라고 쓰면 내용은 없어도 된다", "담당자의 개인 메신저가 항상 가장 안전하다"], answer: 1, note: "전자적 방식도 가능하지만 필수 기재사항을 갖추고 착수 전 발급했으며 나중에 송수신 사실을 확인할 수 있어야 합니다." },
  { q: "제품을 5월 1일 수령했습니다. 특별한 사유 없이 검사 결과를 5월 20일 처음 서면 통지했다면?", options: ["내부 검사에는 기간 제한이 없다", "통상 원칙인 수령 후 10일 이내 통지를 놓쳤고 합격 간주 문제가 생길 수 있다", "대금 지급 전에만 통지하면 된다", "불합격이면 언제 통지해도 된다"], answer: 1, note: "정당한 사유가 없다면 수령일부터 10일 이내 검사 결과를 서면 통지해야 하며, 미통지 시 합격한 것으로 봅니다." },
  { q: "기획세트가 예상보다 팔리지 않아 품질에는 문제가 없는 잔여 물량을 제조사에 반품하려 합니다.", options: ["판매 부진은 제조사도 부담해야 하므로 가능하다", "원사업자의 판매 부진을 이유로 한 반품은 부당반품 위험이 크다", "납품 후 60일 이내면 자유롭게 반품할 수 있다", "전화로 합의하면 언제나 적법하다"], answer: 1, note: "판매 부진이나 발주 오류 등 원사업자 사정으로 정상 납품품을 반품하는 것은 대표적인 위험 유형입니다." },
  { q: "7월부터 단가를 5% 낮추기로 합의한 뒤, 구매팀이 4~6월 납품분에도 새 단가를 적용했습니다.", options: ["연간 계약이면 가능하다", "소급 적용은 부당감액 위험이 있다", "감액률이 10% 미만이면 가능하다", "현금으로 지급하면 가능하다"], answer: 1, note: "단가 인하 합의를 합의 전 납품분에 소급 적용하는 행위는 부당감액의 대표 사례입니다." },
  { q: "목적물 수령일부터 하도급대금을 지급하는 기본 원칙으로 가장 적절한 것은?", options: ["90일 이내", "세금계산서 발행일부터 60일 이내", "수령일부터 60일 이내의 가능한 짧은 기한", "최종 소비자 판매가 끝난 뒤"], answer: 2, note: "목적물 수령일부터 60일 이내에서 가능한 짧은 기한으로 지급기일을 정해야 합니다." },
  { q: "화장품 안전성 검토를 위해 협력사의 배합비가 꼭 필요합니다. NDA를 체결했다면 다음 행동은?", options: ["NDA만 있으면 즉시 요구 가능하다", "구두로 목적만 설명하면 된다", "정당한 사유를 확인하고 법정사항을 담은 기술자료 요구서를 발급한다", "경쟁 ODM사에도 동시에 공유한다"], answer: 2, note: "NDA와 별개로 요구 목적·비밀유지·권리귀속·대가 등 법정사항을 담은 요구서를 발급해야 합니다." },
  { q: "구매담당자가 행사 손실을 만회하려고 신선식품 제조 협력사에 계약에 없던 판촉비를 요구했습니다.", options: ["장기 거래사라면 괜찮다", "상생협력비라고 부르면 괜찮다", "부당한 경제적 이익 요구가 될 수 있다", "판촉 종료 후 요구하면 괜찮다"], answer: 2, note: "명칭보다 실질을 봅니다. 원사업자의 이익을 위해 계약 대가와 무관한 비용을 부당하게 요구하면 위법 위험이 큽니다." },
  { q: "주요 원재료 가격이 크게 변동하는 장기 제조계약을 새로 체결합니다. 바람직한 조치는?", options: ["가격 위험을 모두 협력사에 부담시킨다", "연동 대상과 예외 요건을 확인하고 기준·절차를 서면에 반영한다", "가격이 오른 뒤 구두로 협의한다", "연동제를 적용하지 않는다는 담당자 메모만 보관한다"], answer: 1, note: "하도급대금 연동 대상 여부와 법정 예외를 확인하고, 주요 원재료·조정요건·산식 등 필요한 내용을 서면으로 다뤄야 합니다." },
  { q: "계약서에 ‘예상하지 못한 모든 비용은 수급사업자가 부담한다’고 규정했습니다.", options: ["서명했으므로 항상 유효하다", "표준 문구면 문제없다", "수급사업자의 정당한 이익을 제한하는 부당특약이 될 수 있다", "계약금액이 크면 허용된다"], answer: 2, note: "원사업자가 부담해야 하거나 수급사업자가 예측하기 어려운 비용을 포괄 전가하는 조항은 부당특약 위험이 있습니다." },
  { q: "협력사가 이미 원재료를 샀는데 판매계획이 취소됐습니다. 구매담당자의 가장 적절한 대응은?", options: ["즉시 무상 취소 통보", "향후 거래 중단을 언급하며 자진 포기를 요청", "투입비용과 재고를 확인해 협의·정산하고 변경 내용을 서면화", "발주 시스템에서 기록만 삭제"], answer: 2, note: "원사업자의 사정에 따른 일방 취소는 위험합니다. 실제 투입비용과 책임을 확인해 합리적으로 협의하고 기록해야 합니다." },
  { q: "다음 중 하도급법 적용 여부를 판단할 때 가장 덜 중요한 것은?", options: ["실제 위탁한 일의 내용", "원사업자와 수급사업자의 규모 관계", "우리 회사의 업과 위탁 유형", "ERP에 등록한 계약 카테고리의 명칭"], answer: 3, note: "사내 분류 명칭은 법적 실질을 바꾸지 않습니다. 거래 내용, 업 관련성, 위탁 유형과 당사자 요건을 확인합니다." },
  { q: "기존 ODM사가 단가 인상을 요청하자, 과거 품질검증 목적으로 받은 제조도면을 신규 업체 견적에 활용했습니다.", options: ["대금을 지급하고 받은 자료이므로 자유롭게 사용 가능하다", "사내에서 전달했으므로 문제없다", "당초 목적을 벗어난 기술자료 유용 위험이 크다", "신규 업체와 NDA가 있으면 문제없다"], answer: 2, note: "적법하게 받은 자료도 합의된 목적과 범위를 벗어나 경쟁업체 선정·자체개발에 사용하면 기술유용이 될 수 있습니다." },
  { q: "협력사가 공정위에 신고한 사실을 알게 된 뒤 다음 분기 평가점수를 낮추고 발주를 중단하려 합니다.", options: ["신고로 신뢰가 깨졌으므로 가능하다", "구매팀 재량이므로 가능하다", "신고를 이유로 한 불이익은 보복조치가 될 수 있다", "한 달 뒤 조치하면 문제없다"], answer: 2, note: "신고·분쟁조정 신청·조사 협조를 이유로 거래정지나 발주 축소 등 불이익을 주는 보복조치는 금지됩니다." }
];

const state = {
  completed: new Set(JSON.parse(localStorage.getItem("fairbuy-completed") || "[]")),
  passed: new Set(JSON.parse(localStorage.getItem("fairbuy-lesson-passed-v1") || "[]")),
  currentFilter: "전체",
  currentYear: "전체"
};

// 이전 버전의 단순 완료 기록은 확인문제를 통과한 기록이 없으면 완료로 인정하지 않습니다.
state.completed = new Set([...state.completed].filter(index => state.passed.has(index)));
localStorage.setItem("fairbuy-completed", JSON.stringify([...state.completed]));

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function showView(name) {
  $$(".view").forEach(view => view.classList.toggle("active", view.id === `${name}-view`));
  $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === name));
  history.replaceState(null, "", `#${name}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLessons() {
  $("#lessonGrid").innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-card ${state.completed.has(index) ? "completed" : ""}" data-lesson="${index}">
      <span class="lesson-no">LESSON ${String(index + 1).padStart(2, "0")}</span>
      <span class="card-arrow">${state.completed.has(index) ? "✓" : "↗"}</span>
      <span class="lesson-icon" aria-hidden="true">${lesson.icon}</span>
      <h3>${lesson.title}</h3><p>${lesson.desc}</p>
    </button>`).join("");
  updateLearningProgress();
}

function openLesson(index) {
  const lesson = lessons[index];
  const passed = state.passed.has(index);
  $("#dialogNumber").textContent = `LESSON ${String(index + 1).padStart(2, "0")} · 약 ${index === 0 ? 7 : 6}분`;
  $("#dialogBody").innerHTML = `
    <h2 id="dialogTitle">${lesson.title}</h2><p class="lesson-lead">${lesson.lead}</p>
    ${lesson.sections.map(([title, bullets]) => `<section class="lesson-section"><h3>${title}</h3><ul>${bullets.map(x => `<li>${x}</li>`).join("")}</ul></section>`).join("")}
    <div class="lesson-callout"><strong>${lesson.callout[0]}</strong>${lesson.callout[1]}</div>
    <section class="law-links"><div><span>OFFICIAL LAW</span><h3>관련 조문에서 자세히 보기</h3></div><div>${lessonLawLinks[index].map(([label, detail, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer"><strong>${label}</strong><span>${detail}</span><b>국가법령정보센터 ↗</b></a>`).join("")}</div></section>
    ${renderLessonCheck(index, passed)}
    <footer><span>${state.completed.has(index) ? "이 수업을 완료했습니다." : passed ? "확인문제를 통과했습니다. 이제 완료할 수 있어요." : "확인문제 3개를 모두 맞혀야 완료할 수 있어요."}</span><button class="complete-button" data-complete="${index}" ${passed ? "" : "disabled"}>${state.completed.has(index) ? "완료 취소" : passed ? "학습 완료" : "퀴즈 통과 후 완료"}</button></footer>`;
  $("#lessonDialog").showModal();
}

function renderLessonCheck(index, passed = state.passed.has(index)) {
  if (passed) {
    return `<section class="lesson-check passed"><span class="check-badge">3 / 3</span><div><strong>확인문제를 모두 맞혔습니다</strong><p>이 챕터의 핵심 내용을 이해했어요.</p></div></section>`;
  }
  return `<form class="lesson-check-form" data-lesson-check="${index}">
    <div class="check-heading"><span>LESSON CHECK</span><h3>핵심 확인문제 · 3문제</h3><p>세 문제를 모두 맞히면 학습 완료 버튼이 열립니다.</p></div>
    ${lessonChecks[index].map((item, questionIndex) => `
      <fieldset class="check-question" data-check-question="${questionIndex}">
        <legend><b>Q${questionIndex + 1}</b>${item.q}</legend>
        <div>${item.options.map((option, optionIndex) => `<label><input type="radio" name="lesson-${index}-q${questionIndex}" value="${optionIndex}" required><span>${option}</span></label>`).join("")}</div>
      </fieldset>`).join("")}
    <div class="check-actions"><p class="check-feedback" aria-live="polite">각 문항의 답을 선택해주세요.</p><button type="submit">정답 확인</button></div>
  </form>`;
}

function gradeLessonCheck(event) {
  const form = event.target.closest("[data-lesson-check]");
  if (!form) return;
  event.preventDefault();
  const index = Number(form.dataset.lessonCheck);
  let score = 0;
  lessonChecks[index].forEach((item, questionIndex) => {
    const fieldset = $(`[data-check-question="${questionIndex}"]`, form);
    const selected = $(`input[name="lesson-${index}-q${questionIndex}"]:checked`, form);
    const correct = selected && Number(selected.value) === item.answer;
    if (correct) score++;
    fieldset.classList.remove("correct", "incorrect");
    fieldset.classList.add(correct ? "correct" : "incorrect");
  });
  if (score === 3) {
    state.passed.add(index);
    localStorage.setItem("fairbuy-lesson-passed-v1", JSON.stringify([...state.passed]));
    form.outerHTML = renderLessonCheck(index, true);
    const completeButton = $("[data-complete]", $("#lessonDialog"));
    completeButton.disabled = false;
    completeButton.textContent = "학습 완료";
    $(".lesson-dialog footer span").textContent = "확인문제를 통과했습니다. 이제 완료할 수 있어요.";
    toast("3문제를 모두 맞혔습니다! 학습 완료 버튼이 열렸어요.");
  } else {
    const previousNotice = $(".review-notice", $("#dialogBody"));
    if (previousNotice) previousNotice.remove();
    const notice = document.createElement("div");
    notice.className = "review-notice";
    notice.innerHTML = `<strong>${score} / 3 · 다시 학습해볼까요?</strong><span>한 문제라도 틀리면 바로 재응시할 수 없습니다. 아래 내용을 다시 읽은 뒤 확인문제에 도전하세요.</span>`;
    $(".lesson-lead").insertAdjacentElement("afterend", notice);
    form.reset();
    $$(".check-question", form).forEach(fieldset => fieldset.classList.remove("correct", "incorrect"));
    $(".check-feedback", form).textContent = "내용을 다시 읽은 후 각 문항의 답을 선택해주세요.";
    $(".check-actions button", form).textContent = "정답 확인";
    const dialog = $("#lessonDialog");
    dialog.scrollTo({ top: 0, behavior: "smooth" });
    $("#dialogBody").scrollTo({ top: 0, behavior: "smooth" });
    toast(`${score} / 3 · 학습내용을 다시 읽은 후 재도전하세요.`);
  }
}

function toggleComplete(index) {
  if (!state.passed.has(index)) {
    toast("확인문제 3개를 모두 맞혀야 완료할 수 있습니다.");
    return;
  }
  state.completed.has(index) ? state.completed.delete(index) : state.completed.add(index);
  localStorage.setItem("fairbuy-completed", JSON.stringify([...state.completed]));
  renderLessons();
  $("#lessonDialog").close();
  toast(state.completed.has(index) ? "학습 완료로 저장했습니다." : "완료 표시를 취소했습니다.");
}

function updateLearningProgress() {
  const count = state.completed.size;
  const percent = Math.round(count / lessons.length * 100);
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressRing").style.setProperty("--progress", `${percent * 3.6}deg`);
  $("#progressDetail").textContent = `${count} / ${lessons.length} 수업 완료`;
  $("#progressMessage").textContent = count === 7 ? "모든 수업을 완료했습니다!" : count ? "좋아요, 학습을 이어가세요" : "첫 수업을 시작해보세요";
}

function renderRuleMap() {
  $("#dutyList").innerHTML = duties.map(([title, detail]) => `<li><strong>${title}</strong><small>${detail}</small></li>`).join("");
  $("#banList").innerHTML = bans.map(([title, detail]) => `<li><strong>${title}</strong><small>${detail}</small></li>`).join("");
}

function formatLawDate(value) {
  if (!value) return "확인 전";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: value.includes("T") ? "short" : undefined }).format(date);
}

function renderLawUpdates() {
  const data = window.LAW_UPDATES || { laws: [], changes: [] };
  const latest = data.changes[0];
  $("#latestTrainingUpdate").innerHTML = latest ? `<div><span class="section-kicker">LATEST LAW UPDATE · ${latest.status || "시행"}</span><h2 id="latest-training-title">${latest.headline || latest.lawName}</h2><p>${latest.summary}</p></div><div class="latest-update-action"><time>${formatLawDate(latest.effectiveDate || latest.detectedAt)}</time><button data-view="updates">변경 전·후와 주의사항 보기 →</button></div>` : "";
  $("#latestTrainingUpdate").hidden = !latest;
  $("#lawCheckedAt").textContent = data.generatedAt ? `마지막 자동 확인 ${formatLawDate(data.generatedAt)} · ${data.source}` : "자동 점검을 처음 실행하면 현재 법령을 기준선으로 저장합니다.";
  $("#trackedLawGrid").innerHTML = data.laws.map(law => `<article class="tracked-law-card">
    <span>${law.status || "감시 중"}</span><h3>${law.name}</h3>
    <dl><div><dt>공포번호</dt><dd>${law.promulgation || "확인 중"}</dd></div><div><dt>시행일</dt><dd>${formatLawDate(law.effectiveDate)}</dd></div></dl>
    <a href="${law.url}" target="_blank" rel="noopener noreferrer">국가법령정보센터 원문 ↗</a>
  </article>`).join("");
  $("#lawChangeList").innerHTML = data.changes.length ? data.changes.slice(0, 3).map((change, index) => `<article class="law-change-card ${index === 0 ? "latest" : ""}">
    <header><span>${formatLawDate(change.effectiveDate || change.detectedAt)} ${change.status || "시행"}</span><b>${index === 0 ? "LATEST · " : ""}${change.type || "법령 변경"}</b></header>
    <p class="change-law-name">${change.promulgation || ""} · ${change.lawName}</p><h3>${change.headline || change.lawName}</h3><p class="change-summary">${change.summary}</p>
    ${change.changedArticles?.length ? `<div class="changed-articles"><strong>변경 조문</strong>${change.changedArticles.map(article => `<span>${article}</span>`).join("")}</div>` : ""}
    ${change.changes?.length ? `<section class="focused-changes"><h4>딱 바뀐 부분</h4>${change.changes.map(item => `<div><strong>${item.label}</strong><p><b>변경 전</b>${item.before}</p><span>→</span><p><b>변경 후</b>${item.after}</p></div>`).join("")}</section>` : ""}
    ${change.articleDiffs?.length ? `<details class="article-diffs"><summary>자동 감지 원문 발췌 보기</summary>${change.articleDiffs.map(diff => `<section><strong>${diff.article}</strong><div><p><b>변경 전</b>${diff.before}</p><p><b>변경 후</b>${diff.after}</p></div></section>`).join("")}</details>` : ""}
    ${change.why ? `<section class="change-reason"><strong>왜 바뀌었나요?</strong><p>${change.why}</p></section>` : ""}
    ${change.cautions?.length ? `<section class="change-cautions"><strong>구매담당자 주의사항</strong><ul>${change.cautions.map(item => `<li>${item}</li>`).join("")}</ul></section>` : ""}
    <div class="change-source-links"><a href="${change.url}" target="_blank" rel="noopener noreferrer">법제처 개정이유·개정문 ↗</a>${change.secondaryUrl ? `<a href="${change.secondaryUrl}" target="_blank" rel="noopener noreferrer">시행령 개정이유·개정문 ↗</a>` : ""}</div>
  </article>`).join("") : `<div class="law-empty"><strong>아직 감지된 변경이 없습니다.</strong><p>자동 점검을 연결하면 이후 변경부터 이곳에 누적됩니다.</p></div>`;
  const updateDot = $("#updateDot");
  updateDot.hidden = !data.changes.some(change => change.status === "시행 예정" || Math.abs(Date.now() - new Date(change.effectiveDate || change.detectedAt).getTime()) < 1000 * 60 * 60 * 24 * 30);
}

function renderDeliveryNotice() {
  const config = window.SITE_CONFIG || {};
  const notice = $("#localCopyNotice");
  notice.hidden = location.protocol !== "file:";
  const link = $("#canonicalSiteLink");
  if (config.canonicalUrl) {
    link.href = config.canonicalUrl;
    link.hidden = false;
  }
}

async function refreshRemoteLawUpdates() {
  const config = window.SITE_CONFIG || {};
  const remoteUrl = config.remoteLawDataUrl || (location.protocol.startsWith("http") ? new URL("law-updates.json", location.href).href : "");
  if (!remoteUrl) return;
  try {
    const response = await fetch(`${remoteUrl}${remoteUrl.includes("?") ? "&" : "?"}t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    window.LAW_UPDATES = await response.json();
    renderLawUpdates();
  } catch (error) {
    console.warn("최신 법령 데이터를 불러오지 못해 파일에 포함된 데이터를 표시합니다.", error);
  }
}

function renderCaseFilters() {
  const categories = ["전체", ...new Set(cases.flatMap(item => item.categories || [item.category]))];
  $("#caseFilters").innerHTML = categories.map(category => `<button class="filter-button ${category === state.currentFilter ? "active" : ""}" data-filter="${category}">${category}</button>`).join("");
}

function caseLesson(item) {
  const labels = item.categories || [item.category];
  const notes = {
    "서면발급": "계약서의 존재뿐 아니라 필수 기재사항, 서명과 작업 착수 전 발급 시점을 확인하세요.",
    "대금 미지급": "수령일을 기준으로 지급기일을 관리하고 검수·정산 지연이 지급 지연으로 이어지지 않게 하세요.",
    "지연이자 등": "원금 지급으로 끝나지 않습니다. 지연이자·어음할인료 등 부대금액까지 점검하세요.",
    "기술유용": "자료의 요구 목적, 열람자와 사용 범위를 정하고 제3자 제공을 통제하세요.",
    "기술자료 요구": "정당한 필요성을 확인하고 법정 기재사항을 담은 요구서를 먼저 발급하세요.",
    "기술자료 요구·유용": "요구 필요성과 서면 절차뿐 아니라 취득 후 사용 목적과 제3자 제공까지 통제하세요.",
    "부당감액": "합의한 단가를 과거 물량에 소급하거나 구매사 사정으로 확정 대금을 깎지 마세요.",
    "부당 대금결정": "원가·품목별 근거 없이 일률 인하하거나 최저입찰가보다 낮게 강요하지 마세요.",
    "부당특약": "원사업자 부담 비용과 예측하기 어려운 위험을 포괄적으로 전가하지 마세요.",
    "경제적 이익 요구": "계약 대가와 무관한 판촉비·장려금·금전을 거래 조건으로 요구하지 마세요.",
    "지급보증": "건설위탁은 계약 단계에서 지급보증 발급과 법정 면제 사유를 확인하세요.",
    "대금조정": "설계·물량·원가가 바뀌면 변경 내용과 대금 영향을 함께 서면 조정하세요.",
    "선급금": "발주자로부터 받은 선급금과 협력사 지급을 하나의 절차로 연결하세요.",
    "위탁취소·수령거부": "착수 후 구매사 사정으로 일방 취소하지 말고 투입비용을 확인해 정산하세요.",
    "시정명령 불이행": "시정명령은 선택사항이 아닙니다. 담당부서·기한·이행증빙을 지정해 관리하세요.",
    "탈법·허위서면": "실제 거래와 다른 단가·조건을 적은 이중 또는 허위 서면을 만들지 마세요."
  };
  return notes[labels.find(label => notes[label])] || "사건명만 보지 말고 공식자료에서 거래 구조, 위반 조문과 시정조치를 함께 확인하세요.";
}

function renderCases() {
  const query = $("#caseSearch").value.trim().toLowerCase();
  const filtered = cases.filter(item => {
    const labels = item.categories || [item.category];
    const matchesType = state.currentFilter === "전체" || labels.includes(state.currentFilter);
    const matchesYear = state.currentYear === "전체" || (item.year || item.date.slice(0, 4)) === state.currentYear;
    const haystack = `${item.company || ""} ${item.title} ${labels.join(" ")} ${item.summary || item.facts || ""}`.toLowerCase();
    return matchesType && matchesYear && haystack.includes(query);
  });
  $("#caseCount").textContent = filtered.length;
  $("#caseGrid").innerHTML = filtered.length ? filtered.map(item => `
    <article class="case-card">
      <div class="case-card-top"><div class="case-tags">${(item.categories || [item.category]).map(label => `<span class="case-tag">${label}</span>`).join("")}</div><time class="case-date">${item.date}</time></div>
      <h2>${item.title}</h2><p class="case-company">공정거래위원회 · ${item.department || item.company || "공식 공개자료"}</p>
      <div class="case-facts">${item.summary || item.facts}</div>
      <div class="case-lesson"><strong>BUYER NOTE</strong><span>${caseLesson(item)}</span></div>
      <a class="case-link" href="${item.url}" target="_blank" rel="noopener">공식자료 보기 ↗</a>
    </article>`).join("") : `<div class="empty-state">조건에 맞는 사례가 없습니다.</div>`;
}

function renderQuiz() {
  $("#quizQuestions").innerHTML = quiz.map((item, index) => `
    <section class="question-card" data-question="${index}">
      <span class="question-number">QUESTION ${String(index + 1).padStart(2, "0")}</span>
      <h2>${item.q}</h2>
      <div class="options">${item.options.map((option, optionIndex) => `<label class="option"><input type="radio" name="q${index}" value="${optionIndex}"><span>${option}</span></label>`).join("")}</div>
      <p class="answer-note"><strong>해설</strong> · ${item.note}</p>
    </section>`).join("");
}

function updateQuizProgress() {
  const answered = quiz.filter((_, index) => $(`input[name="q${index}"]:checked`)).length;
  $("#answeredCount").textContent = answered;
  $("#quizProgressBar").style.width = `${answered / quiz.length * 100}%`;
}

function gradeQuiz(event) {
  event.preventDefault();
  const answered = quiz.filter((_, index) => $(`input[name="q${index}"]:checked`)).length;
  if (answered < quiz.length) {
    toast(`아직 ${quiz.length - answered}문제가 남았습니다.`);
    const firstMissing = quiz.findIndex((_, index) => !$(`input[name="q${index}"]:checked`));
    $(`[data-question="${firstMissing}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  let score = 0;
  quiz.forEach((item, index) => {
    const card = $(`[data-question="${index}"]`);
    const selected = Number($(`input[name="q${index}"]:checked`).value);
    const correct = selected === item.answer;
    if (correct) score++;
    card.classList.add("graded", correct ? "correct" : "incorrect");
    $$(".option", card).forEach((option, optionIndex) => {
      if (optionIndex === item.answer) option.style.boxShadow = "inset 3px 0 #4c987d";
    });
  });
  const percent = Math.round(score / quiz.length * 100);
  const message = percent >= 90 ? "현장에 바로 투입해도 좋습니다." : percent >= 70 ? "핵심을 잘 이해했습니다. 틀린 문제만 복습해보세요." : "학습센터의 핵심 수업을 한 번 더 살펴보세요.";
  $("#quizResult").hidden = false;
  $("#quizResult").innerHTML = `<span class="section-kicker light">YOUR RESULT</span><div class="result-score">${score} / ${quiz.length}</div><h2>${percent}점 · ${percent >= 80 ? "수료 기준 통과" : "조금 더 복습이 필요해요"}</h2><p>${message}</p><button type="button" id="retryQuiz">다시 풀기</button>`;
  $("#quizResult").scrollIntoView({ behavior: "smooth", block: "center" });
  $("#retryQuiz").addEventListener("click", resetQuiz);
}

function resetQuiz() {
  $("#quizForm").reset();
  $$(".question-card").forEach(card => {
    card.classList.remove("graded", "correct", "incorrect");
    $$(".option", card).forEach(option => option.style.boxShadow = "");
  });
  $("#quizResult").hidden = true;
  updateQuizProgress();
  $("#quiz-title").scrollIntoView({ behavior: "smooth" });
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => element.classList.remove("show"), 2200);
}

function downloadPdf() {
  const link = document.createElement("a");
  link.href = "assets/하도급법_신입구매담당자_교육자료.pdf";
  link.download = "하도급법_신입구매담당자_교육자료.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  toast("교육자료 PDF 다운로드를 시작합니다.");
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-view]");
  if (nav) showView(nav.dataset.view);
  const lessonCard = event.target.closest("[data-lesson]");
  if (lessonCard) openLesson(Number(lessonCard.dataset.lesson));
  const complete = event.target.closest("[data-complete]");
  if (complete) toggleComplete(Number(complete.dataset.complete));
  const filter = event.target.closest("[data-filter]");
  if (filter) { state.currentFilter = filter.dataset.filter; renderCaseFilters(); renderCases(); }
});

$("#startLearning").addEventListener("click", () => openLesson(0));
$("#continueLearning").addEventListener("click", () => openLesson(lessons.findIndex((_, i) => !state.completed.has(i)) === -1 ? 0 : lessons.findIndex((_, i) => !state.completed.has(i))));
$("#closeDialog").addEventListener("click", () => $("#lessonDialog").close());
$("#lessonDialog").addEventListener("click", event => { if (event.target === $("#lessonDialog")) $("#lessonDialog").close(); });
$("#lessonDialog").addEventListener("submit", gradeLessonCheck);
$("#caseSearch").addEventListener("input", renderCases);
$("#caseYear").addEventListener("change", event => { state.currentYear = event.target.value; renderCases(); });
$("#quizForm").addEventListener("change", updateQuizProgress);
$("#quizForm").addEventListener("submit", gradeQuiz);
$("#downloadPdf").addEventListener("click", downloadPdf);

renderLessons();
renderRuleMap();
renderCaseFilters();
renderCases();
renderQuiz();
renderLawUpdates();
renderDeliveryNotice();
refreshRemoteLawUpdates();
const initialRoute = location.hash.slice(1);
if (["learn", "cases", "quiz", "updates"].includes(initialRoute)) showView(initialRoute);
const lessonRoute = initialRoute.match(/^lesson-(\d+)$/);
if (lessonRoute && Number(lessonRoute[1]) < lessons.length) {
  showView("learn");
  openLesson(Number(lessonRoute[1]));
}
