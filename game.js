const TARGET_SCORE = 5;
const WALK_DURATION = 2000;
const REACTION_DURATION = 1200;

const STAGES = [
  [
    {
      "id": 1,
      "question": "바나나가 웃으면?",
      "answerA": "바나나우유",
      "answerB": "바나나킥",
      "correct": "B"
    },
    {
      "id": 2,
      "question": "소가 계단을 오르면?",
      "answerA": "소오름",
      "answerB": "황소",
      "correct": "A"
    },
    {
      "id": 3,
      "question": "왕이 넘어지면?",
      "answerA": "킹콩",
      "answerB": "왕창",
      "correct": "B"
    },
    {
      "id": 4,
      "question": "오리가 얼면?",
      "answerA": "언덕",
      "answerB": "냉동오리",
      "correct": "A"
    },
    {
      "id": 5,
      "question": "자동차가 가장 싫어하는 음식은?",
      "answerA": "카레",
      "answerB": "김치",
      "correct": "A"
    },
    {
      "id": 6,
      "question": "도둑이 좋아하는 아이스크림은?",
      "answerA": "보석바",
      "answerB": "월드콘",
      "correct": "A"
    },
    {
      "id": 7,
      "question": "병아리가 먹는 약은?",
      "answerA": "감기약",
      "answerB": "삐약",
      "correct": "B"
    },
    {
      "id": 8,
      "question": "개가 사람을 가르치면?",
      "answerA": "개인교습",
      "answerB": "멍멍수업",
      "correct": "A"
    },
    {
      "id": 9,
      "question": "세상에서 가장 긴 떡은?",
      "answerA": "가래떡",
      "answerB": "송편",
      "correct": "A"
    },
    {
      "id": 10,
      "question": "우유가 넘어지면?",
      "answerA": "흰우유",
      "answerB": "아야유",
      "correct": "B"
    },
    {
      "id": 11,
      "question": "공이 웃으면?",
      "answerA": "축구공",
      "answerB": "빵!",
      "correct": "B"
    },
    {
      "id": 12,
      "question": "가장 작은 새는?",
      "answerA": "참새",
      "answerB": "눈곱새",
      "correct": "B"
    },
    {
      "id": 13,
      "question": "가장 추운 바다는?",
      "answerA": "썰렁해",
      "answerB": "동해",
      "correct": "A"
    },
    {
      "id": 14,
      "question": "사과가 공부를 잘하면?",
      "answerA": "애플사과",
      "answerB": "청사과",
      "correct": "A"
    },
    {
      "id": 15,
      "question": "신발이 화나면?",
      "answerA": "신발끈!",
      "answerB": "운동화",
      "correct": "A"
    },
    {
      "id": 16,
      "question": "가장 가난한 왕은?",
      "answerA": "거지왕",
      "answerB": "세종대왕",
      "correct": "A"
    },
    {
      "id": 17,
      "question": "연필이 화나면?",
      "answerA": "샤프해진다",
      "answerB": "몽당연필",
      "correct": "A"
    },
    {
      "id": 18,
      "question": "빵이 목욕하면?",
      "answerA": "식빵",
      "answerB": "촉촉빵",
      "correct": "B"
    },
    {
      "id": 19,
      "question": "토끼가 가장 좋아하는 집은?",
      "answerA": "당근하우스",
      "answerB": "토끼굴",
      "correct": "A"
    },
    {
      "id": 20,
      "question": "축구공이 졸리면?",
      "answerA": "쿨쿨공",
      "answerB": "축구화",
      "correct": "A"
    },
    {
      "id": 21,
      "question": "소금을 좋아하는 새는?",
      "answerA": "짠새",
      "answerB": "참새",
      "correct": "A"
    },
    {
      "id": 22,
      "question": "비가 자기소개하면?",
      "answerA": "비입니다.",
      "answerB": "비 와요",
      "correct": "A"
    },
    {
      "id": 23,
      "question": "컴퓨터가 가장 싫어하는 벌레는?",
      "answerA": "버그",
      "answerB": "모기",
      "correct": "A"
    },
    {
      "id": 24,
      "question": "닭이 웃으면?",
      "answerA": "꼬끼오",
      "answerB": "치킨",
      "correct": "B"
    },
    {
      "id": 25,
      "question": "세상에서 가장 빠른 닭은?",
      "answerA": "후다닥",
      "answerB": "치킨",
      "correct": "A"
    },
    {
      "id": 26,
      "question": "개미가 용돈을 받으면?",
      "answerA": "개미원",
      "answerB": "천 원",
      "correct": "A"
    },
    {
      "id": 27,
      "question": "달이 좋아하는 과자는?",
      "answerA": "새우깡",
      "answerB": "별사탕",
      "correct": "B"
    },
    {
      "id": 28,
      "question": "벌이 화나면?",
      "answerA": "벌벌 떤다",
      "answerB": "윙윙 난다",
      "correct": "A"
    },
    {
      "id": 29,
      "question": "돼지가 잘하는 운동은?",
      "answerA": "돈까스(?)",
      "answerB": "축구",
      "correct": "A"
    },
    {
      "id": 30,
      "question": "감이 경찰이 되면?",
      "answerA": "단속감",
      "answerB": "홍시",
      "correct": "A"
    },
    {
      "id": 31,
      "question": "가장 시원한 개는?",
      "answerA": "진돗개",
      "answerB": "개운하다",
      "correct": "B"
    },
    {
      "id": 32,
      "question": "오징어가 춤추면?",
      "answerA": "오징어댄스",
      "answerB": "문어춤",
      "correct": "A"
    },
    {
      "id": 33,
      "question": "딸기가 회사에 가면?",
      "answerA": "딸기과장",
      "answerB": "딸기사원",
      "correct": "A"
    },
    {
      "id": 34,
      "question": "햄버거가 노래하면?",
      "answerA": "버거송",
      "answerB": "치즈송",
      "correct": "A"
    },
    {
      "id": 35,
      "question": "시계가 배고프면?",
      "answerA": "시계침",
      "answerB": "밥시계",
      "correct": "B"
    },
    {
      "id": 36,
      "question": "가장 무서운 전화는?",
      "answerA": "벌벌전화",
      "answerB": "휴대전화",
      "correct": "A"
    },
    {
      "id": 37,
      "question": "원숭이가 목욕하면?",
      "answerA": "깨끗몽",
      "answerB": "몽키",
      "correct": "A"
    },
    {
      "id": 38,
      "question": "사자가 시험을 잘 보면?",
      "answerA": "백사자",
      "answerB": "숫사자",
      "correct": "A"
    },
    {
      "id": 39,
      "question": "물고기가 싫어하는 물은?",
      "answerA": "선물",
      "answerB": "바닷물",
      "correct": "A"
    },
    {
      "id": 40,
      "question": "세상에서 가장 더러운 집은?",
      "answerA": "쓰레기집",
      "answerB": "돼지우리",
      "correct": "B"
    },
    {
      "id": 41,
      "question": "문어가 경찰이 되면?",
      "answerA": "문어수사대",
      "answerB": "해양경찰",
      "correct": "A"
    },
    {
      "id": 42,
      "question": "돼지가 웃으면?",
      "answerA": "꿀꿀",
      "answerB": "꿀잼",
      "correct": "B"
    },
    {
      "id": 43,
      "question": "고양이가 좋아하는 자동차는?",
      "answerA": "스포츠카",
      "answerB": "야옹카",
      "correct": "B"
    },
    {
      "id": 44,
      "question": "강아지가 좋아하는 책은?",
      "answerA": "멍문학",
      "answerB": "동화책",
      "correct": "A"
    },
    {
      "id": 45,
      "question": "눈이 화나면?",
      "answerA": "눈보라",
      "answerB": "함박눈",
      "correct": "A"
    },
    {
      "id": 46,
      "question": "세상에서 가장 뜨거운 과일은?",
      "answerA": "천도복숭아",
      "answerB": "수박",
      "correct": "A"
    },
    {
      "id": 47,
      "question": "말이 넘어지면?",
      "answerA": "말아톤",
      "answerB": "낙마",
      "correct": "B"
    },
    {
      "id": 48,
      "question": "펭귄이 다니는 학교는?",
      "answerA": "냉방학교",
      "answerB": "남극학교",
      "correct": "A"
    },
    {
      "id": 49,
      "question": "가장 부지런한 벌은?",
      "answerA": "바쁘벌",
      "answerB": "꿀벌",
      "correct": "A"
    },
    {
      "id": 50,
      "question": "물이 가장 좋아하는 음악은?",
      "answerA": "발라드",
      "answerB": "흐르는 음악",
      "correct": "B"
    }
  ],
  [
    {
      "question": "대한민국의 수도는 어디일까요?",
      "answerA": "서울",
      "answerB": "부산",
      "correct": "A"
    },
    {
      "question": "무지개는 보통 몇 가지 색으로 이루어져 있을까요?",
      "answerA": "5가지",
      "answerB": "7가지",
      "correct": "B"
    },
    {
      "question": "1년은 모두 며칠일까요?",
      "answerA": "365일",
      "answerB": "360일",
      "correct": "A"
    },
    {
      "question": "지구에서 가장 큰 바다는?",
      "answerA": "태평양",
      "answerB": "대서양",
      "correct": "A"
    },
    {
      "question": "낮에 하늘에서 빛을 비추는 별은?",
      "answerA": "달",
      "answerB": "태양",
      "correct": "B"
    },
    {
      "question": "밤하늘에서 가장 크게 보이는 천체는?",
      "answerA": "달",
      "answerB": "금성",
      "correct": "A"
    },
    {
      "question": "우리나라 국기의 이름은?",
      "answerA": "태극기",
      "answerB": "무궁화기",
      "correct": "A"
    },
    {
      "question": "대한민국의 꽃은?",
      "answerA": "장미",
      "answerB": "무궁화",
      "correct": "B"
    },
    {
      "question": "대한민국의 동쪽 바다는?",
      "answerA": "동해",
      "answerB": "서해",
      "correct": "A"
    },
    {
      "question": "물은 몇 ℃에서 얼까요?",
      "answerA": "0℃",
      "answerB": "10℃",
      "correct": "A"
    },
    {
      "question": "물은 몇 ℃에서 끓을까요?",
      "answerA": "100℃",
      "answerB": "90℃",
      "correct": "A"
    },
    {
      "question": "사람의 심장은 보통 어디에 있을까요?",
      "answerA": "왼쪽",
      "answerB": "오른쪽",
      "correct": "A"
    },
    {
      "question": "거미의 다리는 몇 개일까요?",
      "answerA": "6개",
      "answerB": "8개",
      "correct": "B"
    },
    {
      "question": "문어의 다리는 몇 개일까요?",
      "answerA": "8개",
      "answerB": "10개",
      "correct": "A"
    },
    {
      "question": "무당벌레는 곤충일까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "A"
    },
    {
      "question": "지구는 어떤 모양에 가장 가까울까요?",
      "answerA": "공 모양",
      "answerB": "네모",
      "correct": "A"
    },
    {
      "question": "공룡과 사람이 함께 살았을까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "B"
    },
    {
      "question": "식물이 자라는데 가장 중요한 것은?",
      "answerA": "햇빛",
      "answerB": "모래",
      "correct": "A"
    },
    {
      "question": "벌은 꽃에서 무엇을 모을까요?",
      "answerA": "꿀",
      "answerB": "모래",
      "correct": "A"
    },
    {
      "question": "올챙이가 자라면 무엇이 될까요?",
      "answerA": "개구리",
      "answerB": "도마뱀",
      "correct": "A"
    },
    {
      "question": "대한민국은 어느 대륙에 있을까요?",
      "answerA": "아시아",
      "answerB": "유럽",
      "correct": "A"
    },
    {
      "question": "우리나라 화폐의 단위는?",
      "answerA": "원",
      "answerB": "달러",
      "correct": "A"
    },
    {
      "question": "1시간은 몇 분일까요?",
      "answerA": "60분",
      "answerB": "100분",
      "correct": "A"
    },
    {
      "question": "1분은 몇 초일까요?",
      "answerA": "60초",
      "answerB": "100초",
      "correct": "A"
    },
    {
      "question": "지구는 태양 주위를 돌까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "A"
    },
    {
      "question": "달은 지구 주위를 돌까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "A"
    },
    {
      "question": "기린의 목이 긴 이유는?",
      "answerA": "높은 나뭇잎을 먹기 위해",
      "answerB": "헤엄을 잘 치려고",
      "correct": "A"
    },
    {
      "question": "코끼리의 코는 무엇에 사용할까요?",
      "answerA": "숨 쉬고 물 마시기",
      "answerB": "날기",
      "correct": "A"
    },
    {
      "question": "박쥐는 새일까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "B"
    },
    {
      "question": "펭귄은 날 수 있을까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "B"
    },
    {
      "question": "지구에서 가장 높은 산은?",
      "answerA": "에베레스트산",
      "answerB": "한라산",
      "correct": "A"
    },
    {
      "question": "우리나라에서 가장 높은 산은?",
      "answerA": "한라산",
      "answerB": "지리산",
      "correct": "A"
    },
    {
      "question": "사계절이 있는 나라는?",
      "answerA": "대한민국",
      "answerB": "남극",
      "correct": "A"
    },
    {
      "question": "봄 다음 계절은?",
      "answerA": "여름",
      "answerB": "겨울",
      "correct": "A"
    },
    {
      "question": "겨울 다음 계절은?",
      "answerA": "봄",
      "answerB": "가을",
      "correct": "A"
    },
    {
      "question": "사과는 어디에서 자랄까요?",
      "answerA": "나무",
      "answerB": "땅",
      "correct": "A"
    },
    {
      "question": "감자는 어디에서 자랄까요?",
      "answerA": "땅",
      "answerB": "나무",
      "correct": "A"
    },
    {
      "question": "바나나는 어떤 색에서 익기 시작할까요?",
      "answerA": "초록색",
      "answerB": "보라색",
      "correct": "A"
    },
    {
      "question": "무지개의 색은 비 온 뒤 잘 보일까요?",
      "answerA": "예",
      "answerB": "아니오",
      "correct": "A"
    },
    {
      "question": "북극곰은 주로 어디에 살까요?",
      "answerA": "북극",
      "answerB": "남극",
      "correct": "A"
    },
    {
      "question": "펭귄은 주로 어디에 살까요?",
      "answerA": "남극",
      "answerB": "북극",
      "correct": "A"
    },
    {
      "question": "세계에서 가장 큰 동물은?",
      "answerA": "대왕고래",
      "answerB": "코끼리",
      "correct": "A"
    },
    {
      "question": "치타는 어떤 특징이 있을까요?",
      "answerA": "매우 빠르다",
      "answerB": "날 수 있다",
      "correct": "A"
    },
    {
      "question": "벌은 몇 쌍의 날개를 가지고 있을까요?",
      "answerA": "2쌍",
      "answerB": "1쌍",
      "correct": "A"
    },
    {
      "question": "사람의 손가락은 양손을 합쳐 몇 개일까요?",
      "answerA": "10개",
      "answerB": "12개",
      "correct": "A"
    },
    {
      "question": "1년은 몇 달일까요?",
      "answerA": "12달",
      "answerB": "10달",
      "correct": "A"
    },
    {
      "question": "지구의 위성은 무엇일까요?",
      "answerA": "달",
      "answerB": "태양",
      "correct": "A"
    },
    {
      "question": "비가 많이 오는 계절은?",
      "answerA": "장마철",
      "answerB": "겨울",
      "correct": "A"
    },
    {
      "question": "나침반은 어느 방향을 가리킬까요?",
      "answerA": "북쪽",
      "answerB": "남쪽",
      "correct": "A"
    },
    {
      "question": "우리나라를 상징하는 새는?",
      "answerA": "까치",
      "answerB": "참새",
      "correct": "A"
    }
  ],
  [
    {
      "question": "세상에서 가장 큰 코는?",
      "answerA": "멕시코",
      "answerB": "코끼리",
      "correct": "A"
    },
    {
      "question": "아몬드가 죽으면?",
      "answerA": "다이아몬드",
      "answerB": "볶은 아몬드",
      "correct": "A"
    },
    {
      "question": "왕이 헤엄을 치면?",
      "answerA": "수영왕",
      "answerB": "킹크랩",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 착한 사자는?",
      "answerA": "봉사자",
      "answerB": "백사자",
      "correct": "A"
    },
    {
      "question": "신이 화가 나면?",
      "answerA": "신경질",
      "answerB": "천둥",
      "correct": "A"
    },
    {
      "question": "자동차가 가장 싫어하는 음식은?",
      "answerA": "김치",
      "answerB": "카레",
      "correct": "B"
    },
    {
      "question": "세상에서 가장 무거운 싸움은?",
      "answerA": "권투",
      "answerB": "씨름",
      "correct": "B"
    },
    {
      "question": "세상에서 가장 뜨거운 과일은?",
      "answerA": "수박",
      "answerB": "천도복숭아",
      "correct": "B"
    },
    {
      "question": "도둑이 가장 좋아하는 아이스크림은?",
      "answerA": "보석바",
      "answerB": "월드콘",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 긴 떡은?",
      "answerA": "인절미",
      "answerB": "가래떡",
      "correct": "B"
    },
    {
      "question": "개가 사람을 가르치면?",
      "answerA": "애견학교",
      "answerB": "개인교습",
      "correct": "B"
    },
    {
      "question": "물이 가장 싫어하는 물은?",
      "answerA": "바닷물",
      "answerB": "선물",
      "correct": "B"
    },
    {
      "question": "연필이 화나면?",
      "answerA": "샤프해진다",
      "answerB": "몽당연필",
      "correct": "A"
    },
    {
      "question": "비가 자기소개하면?",
      "answerA": "비입니다",
      "answerB": "비가 와요",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 시원한 개는?",
      "answerA": "개운하다",
      "answerB": "진돗개",
      "correct": "A"
    },
    {
      "question": "사과가 공부를 잘하면?",
      "answerA": "청사과",
      "answerB": "A플사과",
      "correct": "B"
    },
    {
      "question": "컴퓨터가 가장 싫어하는 벌레는?",
      "answerA": "버그",
      "answerB": "개미",
      "correct": "A"
    },
    {
      "question": "오리가 얼면?",
      "answerA": "냉동오리",
      "answerB": "언덕",
      "correct": "B"
    },
    {
      "question": "가장 돈이 많은 새는?",
      "answerA": "독수리",
      "answerB": "부엉이",
      "correct": "B"
    },
    {
      "question": "시계가 배고프면?",
      "answerA": "밥시계",
      "answerB": "알람시계",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 차가운 과일은?",
      "answerA": "배",
      "answerB": "참외",
      "correct": "A"
    },
    {
      "question": "사자가 시험을 잘 보면?",
      "answerA": "백사자",
      "answerB": "라이언킹",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 멋있는 사자는?",
      "answerA": "라이언킹",
      "answerB": "숫사자",
      "correct": "A"
    },
    {
      "question": "닭이 가장 싫어하는 채소는?",
      "answerA": "치킨무",
      "answerB": "오이",
      "correct": "A"
    },
    {
      "question": "소가 계단을 오르면?",
      "answerA": "황소",
      "answerB": "소오름",
      "correct": "B"
    },
    {
      "question": "벌이 화나면?",
      "answerA": "벌벌 떤다",
      "answerB": "윙윙 난다",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 무서운 전화는?",
      "answerA": "휴대전화",
      "answerB": "벌벌전화",
      "correct": "B"
    },
    {
      "question": "바나나가 웃으면?",
      "answerA": "바나나우유",
      "answerB": "바나나킥",
      "correct": "B"
    },
    {
      "question": "딸기가 회사에 입사하면?",
      "answerA": "딸기사원",
      "answerB": "딸기과장",
      "correct": "A"
    },
    {
      "question": "햄버거가 노래하면?",
      "answerA": "버거송",
      "answerB": "치즈송",
      "correct": "A"
    },
    {
      "question": "문어가 경찰이 되면?",
      "answerA": "문어수사대",
      "answerB": "해양경찰",
      "correct": "A"
    },
    {
      "question": "눈이 화나면?",
      "answerA": "눈보라",
      "answerB": "함박눈",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 바쁜 벌은?",
      "answerA": "바쁘벌",
      "answerB": "꿀벌",
      "correct": "A"
    },
    {
      "question": "가장 힘이 센 말은?",
      "answerA": "경주마",
      "answerB": "말힘",
      "correct": "B"
    },
    {
      "question": "가장 슬픈 도시는?",
      "answerA": "서울",
      "answerB": "울산",
      "correct": "B"
    },
    {
      "question": "가장 억울한 도형은?",
      "answerA": "원통",
      "answerB": "삼각형",
      "correct": "A"
    },
    {
      "question": "가장 쉬운 숫자는?",
      "answerA": "십구만",
      "answerB": "일",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 빠른 닭은?",
      "answerA": "치킨",
      "answerB": "후다닥",
      "correct": "B"
    },
    {
      "question": "세상에서 가장 긴 음식은?",
      "answerA": "라면",
      "answerB": "국수",
      "correct": "B"
    },
    {
      "question": "세상에서 가장 더러운 집은?",
      "answerA": "돼지우리",
      "answerB": "쓰레기집",
      "correct": "A"
    },
    {
      "question": "왕이 넘어지면?",
      "answerA": "킹콩",
      "answerB": "왕창",
      "correct": "B"
    },
    {
      "question": "오징어가 춤추면?",
      "answerA": "문어춤",
      "answerB": "오징어댄스",
      "correct": "B"
    },
    {
      "question": "가장 무서운 비는?",
      "answerA": "비명",
      "answerB": "장대비",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 뜨거운 바다는?",
      "answerA": "홍해",
      "answerB": "열받아",
      "correct": "B"
    },
    {
      "question": "가장 행복한 바지는?",
      "answerA": "웃음바지",
      "answerB": "청바지",
      "correct": "A"
    },
    {
      "question": "펭귄이 다니는 학교는?",
      "answerA": "남극학교",
      "answerB": "냉방학교",
      "correct": "B"
    },
    {
      "question": "가장 가난한 왕은?",
      "answerA": "세종대왕",
      "answerB": "거지왕",
      "correct": "B"
    },
    {
      "question": "세상에서 가장 오래 자는 동물은?",
      "answerA": "곰",
      "answerB": "잠만보",
      "correct": "A"
    },
    {
      "question": "가장 많이 먹는 벌레는?",
      "answerA": "먹보벌레",
      "answerB": "반딧불이",
      "correct": "A"
    },
    {
      "question": "세상에서 가장 놀라운 오리는?",
      "answerA": "깜짝오리",
      "answerB": "오리무중",
      "correct": "A"
    }
  ]
];

const MC_IMAGES = [
  "assets/mc_idle.png",
  "assets/mc2_idle.png",
  "assets/mc3_idle.png"
];

const els = {
  score: document.querySelector("#score"),
  stageLabel: document.querySelector("#stageLabel"),
  eunwoo: document.querySelector("#eunwoo"),
  mc: document.querySelector("#mc"),
  startBtn: document.querySelector("#startBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  quizLayer: document.querySelector("#quizLayer"),
  question: document.querySelector("#question"),
  answerA: document.querySelector("#answerA"),
  answerB: document.querySelector("#answerB"),
  message: document.querySelector("#message"),
  finishModal: document.querySelector("#finishModal"),
  finishTitle: document.querySelector("#finishTitle"),
  finishText: document.querySelector("#finishText"),
  nextBtn: document.querySelector("#nextBtn"),
};

let currentStage = 0;
let quizOrder = [];
let quizCursor = 0;
let score = 0;
let locked = false;
let audioContext = null;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle(list) {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  return audioContext;
}

function playTone(frequency, duration, startDelay = 0, type = "sine", volume = 0.18) {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime + startDelay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

function playCorrectSound() {
  playTone(660, .16, 0);
  playTone(880, .18, .14);
  playTone(1040, .24, .29);
}

function playWrongSound() {
  playTone(280, .22, 0, "sawtooth", .12);
  playTone(190, .30, .18, "sawtooth", .10);
}

function setEunwooState(state) {
  els.eunwoo.className = `sprite eunwoo ${state}`;
}

function updateUI() {
  els.score.textContent = `SCORE ${score} / ${TARGET_SCORE}`;
  els.stageLabel.textContent = `${currentStage + 1}단계`;
  els.mc.style.backgroundImage = `url("${MC_IMAGES[currentStage]}")`;
}

function createQuizOrder() {
  quizOrder = shuffle(STAGES[currentStage]);
  quizCursor = 0;
}

function getCurrentQuiz() {
  if (quizCursor >= quizOrder.length) createQuizOrder();
  return quizOrder[quizCursor];
}

function showMessage(text) {
  els.message.textContent = text;
  els.message.classList.remove("hidden");
}

function hideMessage() {
  els.message.classList.add("hidden");
}

function resetPosition() {
  els.eunwoo.style.transition = "none";
  els.eunwoo.style.left = "5%";
  void els.eunwoo.offsetWidth;
}

async function walkToMC() {
  resetPosition();
  setEunwooState("walk");
  await wait(80);
  els.eunwoo.style.transition = `left ${WALK_DURATION}ms linear`;
  els.eunwoo.style.left = "56%";
  await wait(WALK_DURATION);
  setEunwooState("idle");
}

function openQuiz() {
  const q = getCurrentQuiz();
  els.question.textContent = q.question;
  els.answerA.textContent = `A. ${q.answerA}`;
  els.answerB.textContent = `B. ${q.answerB}`;
  els.answerA.disabled = false;
  els.answerB.disabled = false;
  locked = false;
  els.quizLayer.classList.remove("hidden");
}

async function beginRound() {
  els.quizLayer.classList.add("hidden");
  hideMessage();
  await walkToMC();
  openQuiz();
}

async function chooseAnswer(choice) {
  if (locked) return;
  locked = true;
  els.answerA.disabled = true;
  els.answerB.disabled = true;

  const q = getCurrentQuiz();
  const correct = choice === q.correct;
  quizCursor += 1;
  els.quizLayer.classList.add("hidden");

  if (correct) {
    score += 1;
    updateUI();
    setEunwooState("win");
    playCorrectSound();
    showMessage("정답!");
    await wait(REACTION_DURATION);
    if (score >= TARGET_SCORE) {
      showStageComplete();
      return;
    }
  } else {
    setEunwooState("lose");
    playWrongSound();
    showMessage(`아쉬워요! 정답은 ${q.correct}`);
    await wait(REACTION_DURATION);
  }

  hideMessage();
  setEunwooState("idle");
  await wait(200);
  beginRound();
}

function showStageComplete() {
  hideMessage();
  setEunwooState("idle");
  if (currentStage < STAGES.length - 1) {
    els.finishTitle.textContent = `${currentStage + 1}단계 성공!`;
    els.finishText.textContent = "퀴즈 5개를 모두 맞혔어요!";
    els.nextBtn.textContent = "다음 단계";
  } else {
    els.finishTitle.textContent = "모든 단계 성공!";
    els.finishText.textContent = "은우의 모험을 모두 완료했어요!";
    els.nextBtn.textContent = "처음부터";
  }
  els.finishModal.classList.remove("hidden");
}

function setupStage(stageIndex) {
  currentStage = stageIndex;
  score = 0;
  locked = false;
  createQuizOrder();
  updateUI();
  resetPosition();
  setEunwooState("idle");
  els.quizLayer.classList.add("hidden");
  els.finishModal.classList.add("hidden");
  hideMessage();
}

async function startFromBeginning() {
  const ctx = getAudioContext();
  if (ctx && ctx.state === "suspended") await ctx.resume();
  els.startBtn.classList.add("hidden");
  setupStage(0);
  await beginRound();
}

els.startBtn.addEventListener("click", startFromBeginning);
els.resetBtn.addEventListener("click", startFromBeginning);
els.answerA.addEventListener("click", () => chooseAnswer("A"));
els.answerB.addEventListener("click", () => chooseAnswer("B"));

els.nextBtn.addEventListener("click", async () => {
  if (currentStage < STAGES.length - 1) {
    setupStage(currentStage + 1);
  } else {
    setupStage(0);
  }
  await beginRound();
});

setupStage(0);
