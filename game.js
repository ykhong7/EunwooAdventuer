const STAGE_TARGETS = [5, 5, 10];
const WALK_DURATION = 2000;
const REACTION_DURATION = 1200;

const STAGES = [
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
      "id": 1,
      "question": "왕이 양쪽에 있으면?",
      "answerA": "좌왕우왕",
      "answerB": "우왕좌왕",
      "correct": "B"
    },
    {
      "id": 2,
      "question": "침대에서 가장 야한 것은?",
      "answerA": "베개",
      "answerB": "이불",
      "correct": "B"
    },
    {
      "id": 3,
      "question": "비 오는 날 먹는 햄은?",
      "answerA": "습햄",
      "answerB": "스팸",
      "correct": "A"
    },
    {
      "id": 4,
      "question": "몸에 안 좋은 청바지는?",
      "answerA": "찢어진 청바지",
      "answerB": "유해진",
      "correct": "B"
    },
    {
      "id": 5,
      "question": "바람이 귀엽게 부는 곳은?",
      "answerA": "분당",
      "answerB": "강풍",
      "correct": "A"
    },
    {
      "id": 6,
      "question": "부엉이가 물에 빠지면?",
      "answerA": "첨부엉 첨부엉",
      "answerB": "물부엉",
      "correct": "A"
    },
    {
      "id": 7,
      "question": "딸기가 직장을 잃으면?",
      "answerA": "딸기주스",
      "answerB": "딸기시럽",
      "correct": "B"
    },
    {
      "id": 8,
      "question": "빵이 목장에 간 이유는?",
      "answerA": "소보로",
      "answerB": "우유를 마시려고",
      "correct": "A"
    },
    {
      "id": 9,
      "question": "형제가 싸울 때 동생 편만 드는 세상은?",
      "answerA": "동생 나라",
      "answerB": "형편없는 세상",
      "correct": "B"
    },
    {
      "id": 10,
      "question": "3월에 대학생을 절대 못 이기는 이유는?",
      "answerA": "개강하니까",
      "answerB": "시험기간이라",
      "correct": "A"
    },
    {
      "id": 11,
      "question": "9가 자기소개하면?",
      "answerA": "전구",
      "answerB": "구번",
      "correct": "A"
    },
    {
      "id": 12,
      "question": "가장 인기 있는 벌레는?",
      "answerA": "스타벅스",
      "answerB": "반딧불이",
      "correct": "A"
    },
    {
      "id": 13,
      "question": "가장 폭력적인 동물은?",
      "answerA": "팬다",
      "answerB": "호랑이",
      "correct": "A"
    },
    {
      "id": 14,
      "question": "감기에 또 걸리면?",
      "answerA": "재감기",
      "answerB": "되감기",
      "correct": "B"
    },
    {
      "id": 15,
      "question": "거북이가 소화제를 먹은 이유는?",
      "answerA": "속이 거북해서",
      "answerB": "배가 고파서",
      "correct": "A"
    },
    {
      "id": 16,
      "question": "고등학생들이 싫어하는 나무는?",
      "answerA": "은행나무",
      "answerB": "야자나무",
      "correct": "B"
    },
    {
      "id": 17,
      "question": "고추장보다 높은 사람은?",
      "answerA": "초고추장",
      "answerB": "된장",
      "correct": "A"
    },
    {
      "id": 18,
      "question": "과자가 자기소개하면?",
      "answerA": "전과자",
      "answerB": "새우깡",
      "correct": "A"
    },
    {
      "id": 19,
      "question": "귤이 감을 보고 한 말은?",
      "answerA": "유감",
      "answerB": "반갑다",
      "correct": "A"
    },
    {
      "id": 20,
      "question": "기름을 수출하는 데 걸리는 시간은?",
      "answerA": "오일",
      "answerB": "하루",
      "correct": "A"
    },
    {
      "id": 21,
      "question": "김밥이 죽으면 어디로 갈까?",
      "answerA": "김밥천국",
      "answerB": "분식집",
      "correct": "A"
    },
    {
      "id": 22,
      "question": "깨가 죽으면?",
      "answerA": "볶음깨",
      "answerB": "주근깨",
      "correct": "B"
    },
    {
      "id": 23,
      "question": "꽃게를 냉장고에 넣으면?",
      "answerA": "꽃게탕",
      "answerB": "게으름",
      "correct": "B"
    },
    {
      "id": 24,
      "question": "달에서 쓰는 언어는?",
      "answerA": "문어",
      "answerB": "영어",
      "correct": "A"
    },
    {
      "id": 25,
      "question": "독수리가 타오르면?",
      "answerA": "불독수리",
      "answerB": "이글이글",
      "correct": "B"
    },
    {
      "id": 26,
      "question": "돌잔치를 영어로 하면?",
      "answerA": "락페스티벌",
      "answerB": "베이비파티",
      "correct": "A"
    },
    {
      "id": 27,
      "question": "루이16세의 유언은?",
      "answerA": "제목없음",
      "answerB": "잘 있어",
      "correct": "A"
    },
    {
      "id": 28,
      "question": "매일 미안해하는 동물은?",
      "answerA": "오소리",
      "answerB": "여우",
      "correct": "A"
    },
    {
      "id": 29,
      "question": "머리 아플 때 약을 얼마나 먹어야 할까?",
      "answerA": "두 알",
      "answerB": "두통",
      "correct": "B"
    },
    {
      "id": 30,
      "question": "둘리가 다니는 고등학교 이름은?",
      "answerA": "빙하고",
      "answerB": "빙하타고",
      "correct": "B"
    },
    {
      "id": 31,
      "question": "마늘이 싸움에서 모두 지면?",
      "answerA": "다진 마늘",
      "answerB": "통마늘",
      "correct": "A"
    },
    {
      "id": 32,
      "question": "왕과 작별할 때 하는 말은?",
      "answerA": "안녕, 폐하",
      "answerB": "바이킹",
      "correct": "B"
    },
    {
      "id": 33,
      "question": "항상 추운 나라는?",
      "answerA": "시리아",
      "answerB": "핀란드",
      "correct": "A"
    },
    {
      "id": 34,
      "question": "차도가 없는 나라는?",
      "answerA": "인도",
      "answerB": "네팔",
      "correct": "A"
    },
    {
      "id": 35,
      "question": "이빨이 없는 곰은?",
      "answerA": "반달곰",
      "answerB": "젤리곰",
      "correct": "B"
    },
    {
      "id": 36,
      "question": "할아버지가 좋아하는 돈은?",
      "answerA": "용돈",
      "answerB": "할머니",
      "correct": "B"
    },
    {
      "id": 37,
      "question": "세상에서 가장 가난한 왕은?",
      "answerA": "최저임금",
      "answerB": "거지왕",
      "correct": "A"
    },
    {
      "id": 38,
      "question": "우주인이 술 마시는 장소는?",
      "answerA": "우주정거장",
      "answerB": "스페이스바",
      "correct": "B"
    },
    {
      "id": 39,
      "question": "소가 불에 타면?",
      "answerA": "탄소",
      "answerB": "불소",
      "correct": "A"
    },
    {
      "id": 40,
      "question": "소가 노래하면?",
      "answerA": "소송",
      "answerB": "우타",
      "correct": "A"
    },
    {
      "id": 41,
      "question": "소가 죽으면?",
      "answerA": "다이소",
      "answerB": "한우국밥",
      "correct": "A"
    },
    {
      "id": 42,
      "question": "세상에서 가장 외로운 왕은?",
      "answerA": "솔로몬",
      "answerB": "고독왕",
      "correct": "A"
    },
    {
      "id": 43,
      "question": "꽃들이 전쟁하면?",
      "answerA": "플라워",
      "answerB": "꽃대전",
      "correct": "A"
    },
    {
      "id": 44,
      "question": "왼쪽으로 절하면?",
      "answerA": "좌절",
      "answerB": "반절",
      "correct": "A"
    },
    {
      "id": 45,
      "question": "소금의 유통기한은?",
      "answerA": "천일염",
      "answerB": "유통기한 없음",
      "correct": "A"
    },
    {
      "id": 46,
      "question": "세상에서 가장 지루한 중학교는?",
      "answerA": "기다림중",
      "answerB": "로딩중",
      "correct": "B"
    },
    {
      "id": 47,
      "question": "새우가 출연하는 드라마는?",
      "answerA": "대하드라마",
      "answerB": "오징어게임",
      "correct": "A"
    },
    {
      "id": 48,
      "question": "모든 사람을 일어나게 하는 숫자는?",
      "answerA": "다섯",
      "answerB": "열",
      "correct": "A"
    },
    {
      "id": 49,
      "question": "비가 1시간 동안 내리면?",
      "answerA": "기상특보",
      "answerB": "추적 60분",
      "correct": "B"
    },
    {
      "id": 50,
      "question": "콩 한 알을 영어로 말하면?",
      "answerA": "원빈",
      "answerB": "One Bean",
      "correct": "A"
    },
    {
      "id": 51,
      "question": "햄버거의 색깔은?",
      "answerA": "버건디",
      "answerB": "노란색",
      "correct": "A"
    },
    {
      "id": 52,
      "question": "있을 수도 있고 없을 수도 있는 섬은?",
      "answerA": "독도",
      "answerB": "아마도",
      "correct": "B"
    },
    {
      "id": 53,
      "question": "미소의 반대말은?",
      "answerA": "당기소",
      "answerB": "울상",
      "correct": "A"
    },
    {
      "id": 54,
      "question": "물고기가 싫어하는 물은?",
      "answerA": "바닷물",
      "answerB": "그물",
      "correct": "B"
    },
    {
      "id": 55,
      "question": "미국에 비가 내리면?",
      "answerA": "USB",
      "answerB": "USA",
      "correct": "A"
    },
    {
      "id": 56,
      "question": "서울에 사는 거지 이름은?",
      "answerA": "설거지",
      "answerB": "서울이",
      "correct": "A"
    },
    {
      "id": 57,
      "question": "왕이 담배를 피우면?",
      "answerA": "스모킹",
      "answerB": "흡연왕",
      "correct": "A"
    },
    {
      "id": 58,
      "question": "커플이 좋아하는 곤충은?",
      "answerA": "잠자리",
      "answerB": "나비",
      "correct": "A"
    },
    {
      "id": 59,
      "question": "포도가 자기소개할 때 쓰는 말은?",
      "answerA": "포도당",
      "answerB": "포도입니다",
      "correct": "A"
    },
    {
      "id": 60,
      "question": "유부남이 가장 무서워하는 치킨은?",
      "answerA": "양념치킨",
      "answerB": "마늘치킨",
      "correct": "B"
    },
    {
      "id": 61,
      "question": "공이 웃으면?",
      "answerA": "풋볼",
      "answerB": "축구공",
      "correct": "A"
    },
    {
      "id": 62,
      "question": "왕이 넘어질 때 들리는 소리는?",
      "answerA": "쿵왕",
      "answerB": "킹콩",
      "correct": "B"
    },
    {
      "id": 63,
      "question": "송혜교, 송강, 송윤아의 공통점은?",
      "answerA": "성동일",
      "answerB": "송씨",
      "correct": "A"
    },
    {
      "id": 64,
      "question": "혀가 거짓말할 때 하는 말은?",
      "answerA": "전 혀 아닙니다",
      "answerB": "믿어 주세요",
      "correct": "A"
    },
    {
      "id": 65,
      "question": "기독교인이 강아지가 짖는 걸 보고 하는 말은?",
      "answerA": "아멘",
      "answerB": "지져쓰",
      "correct": "B"
    },
    {
      "id": 66,
      "question": "신사가 자기소개할 때 하는 말은?",
      "answerA": "신사입니다",
      "answerB": "신사임당",
      "correct": "B"
    },
    {
      "id": 67,
      "question": "도둑이 가장 싫어하는 과자는?",
      "answerA": "누네띠네",
      "answerB": "홈런볼",
      "correct": "A"
    },
    {
      "id": 68,
      "question": "세상에서 가장 억울한 도형은?",
      "answerA": "사각형",
      "answerB": "원통",
      "correct": "B"
    },
    {
      "id": 69,
      "question": "오리가 얼면?",
      "answerA": "언덕",
      "answerB": "냉동오리",
      "correct": "A"
    },
    {
      "id": 70,
      "question": "무가 눈물을 흘리면?",
      "answerA": "무즙",
      "answerB": "무뚝뚝",
      "correct": "B"
    },
    {
      "id": 71,
      "question": "어부들이 싫어하는 가수는?",
      "answerA": "배철수",
      "answerB": "윤도현",
      "correct": "A"
    },
    {
      "id": 72,
      "question": "세상에서 가장 똑똑한 새는?",
      "answerA": "하버드",
      "answerB": "독수리",
      "correct": "A"
    },
    {
      "id": 73,
      "question": "아이스크림이 죽으면?",
      "answerA": "다이하드",
      "answerB": "녹차",
      "correct": "A"
    },
    {
      "id": 74,
      "question": "세상에서 가장 뜨거운 과일은?",
      "answerA": "천도복숭아",
      "answerB": "망고",
      "correct": "A"
    },
    {
      "id": 75,
      "question": "세상에서 가장 예쁜 풀은?",
      "answerA": "민들레",
      "answerB": "뷰티풀",
      "correct": "B"
    },
    {
      "id": 76,
      "question": "피카츄가 담배 피우기 전에 하는 말은?",
      "answerA": "피까",
      "answerB": "피카",
      "correct": "A"
    },
    {
      "id": 77,
      "question": "화장실에서 막 나온 사람은?",
      "answerA": "일본 사람",
      "answerB": "깨끗한 사람",
      "correct": "A"
    },
    {
      "id": 78,
      "question": "폭우가 심하게 쏟아질 때 필요한 사람은?",
      "answerA": "기상캐스터",
      "answerB": "비서",
      "correct": "B"
    },
    {
      "id": 79,
      "question": "김소월이 수능에서 수리 가형을 보는 이유는?",
      "answerA": "수학을 좋아해서",
      "answerB": "나 보기가 역겨워",
      "correct": "B"
    },
    {
      "id": 80,
      "question": "죽은 소가 너무 많으면?",
      "answerA": "산소부족",
      "answerB": "목장부족",
      "correct": "A"
    },
    {
      "id": 81,
      "question": "물이 썩으면 나는 냄새는?",
      "answerA": "비린내",
      "answerB": "수상한 냄새",
      "correct": "B"
    },
    {
      "id": 82,
      "question": "토끼들이 가장 잘하는 것은?",
      "answerA": "토끼기",
      "answerB": "달리기",
      "correct": "A"
    },
    {
      "id": 83,
      "question": "사람이 먹지 못하는 간장은?",
      "answerA": "양조간장",
      "answerB": "애간장",
      "correct": "B"
    },
    {
      "id": 84,
      "question": "세금을 내는 동물은?",
      "answerA": "양",
      "answerB": "소",
      "correct": "A"
    },
    {
      "id": 85,
      "question": "양이 한정되어 있는 음식은?",
      "answerA": "한정식",
      "answerB": "양념치킨",
      "correct": "A"
    },
    {
      "id": 86,
      "question": "소가 머리를 깎으면?",
      "answerA": "이발소",
      "answerB": "민소머리",
      "correct": "A"
    },
    {
      "id": 87,
      "question": "자기만 옳다고 하는 사람이 사는 집은?",
      "answerA": "고집",
      "answerB": "한옥",
      "correct": "A"
    },
    {
      "id": 88,
      "question": "덜 뚱뚱한 사람들이 모여 사는 동네는?",
      "answerA": "반포동",
      "answerB": "마포동",
      "correct": "A"
    },
    {
      "id": 89,
      "question": "사람이 죽지 않는 산맥은?",
      "answerA": "안데스산맥",
      "answerB": "태백산맥",
      "correct": "A"
    },
    {
      "id": 90,
      "question": "입이 평화로우면?",
      "answerA": "마우스피스",
      "answerB": "입조심",
      "correct": "A"
    },
    {
      "id": 91,
      "question": "이탈리아의 날씨는?",
      "answerA": "맑게띠",
      "answerB": "습하게띠",
      "correct": "B"
    },
    {
      "id": 92,
      "question": "슈퍼주니어 신동 옆에 있는 사람은?",
      "answerA": "신동엽",
      "answerB": "이특",
      "correct": "A"
    },
    {
      "id": 93,
      "question": "떡집 사장이 주식을 안 하는 이유는?",
      "answerA": "떡상할까 봐",
      "answerB": "떡값이 올라서",
      "correct": "A"
    },
    {
      "id": 94,
      "question": "닭에게 작은 옷을 입히면?",
      "answerA": "병아리",
      "answerB": "꼭끼오",
      "correct": "B"
    },
    {
      "id": 95,
      "question": "세상에서 가장 착한 사자는?",
      "answerA": "백사자",
      "answerB": "자원봉사자",
      "correct": "B"
    },
    {
      "id": 96,
      "question": "맥주가 죽기 전에 한 말은?",
      "answerA": "유언비어",
      "answerB": "건배",
      "correct": "A"
    },
    {
      "id": 97,
      "question": "한의사가 카지노에 가면 하는 말은?",
      "answerA": "인생은 한 방",
      "answerB": "침 한 방",
      "correct": "A"
    },
    {
      "id": 98,
      "question": "술 취해서 큰 소리로 노래하는 것을 사자성어로 하면?",
      "answerA": "아빠인가",
      "answerB": "고성방가",
      "correct": "B"
    },
    {
      "id": 99,
      "question": "개가 벽을 보고 하는 말은?",
      "answerA": "월월",
      "answerB": "멍멍",
      "correct": "A"
    },
    {
      "id": 100,
      "question": "전화로 세운 건물은?",
      "answerA": "콜로세움",
      "answerB": "전화국",
      "correct": "A"
    },
    {
      "id": 101,
      "question": "왕이 궁에 가기 싫을 때 하는 말은?",
      "answerA": "궁시렁궁시렁",
      "answerB": "귀찮다",
      "correct": "A"
    },
    {
      "id": 102,
      "question": "직접 만든 총은?",
      "answerA": "손수건",
      "answerB": "수제총",
      "correct": "A"
    },
    {
      "id": 103,
      "question": "뚱뚱한 사람들이 모여 사는 동네는?",
      "answerA": "개포동",
      "answerB": "반포동",
      "correct": "A"
    },
    {
      "id": 104,
      "question": "세상에서 가장 뜨거운 바다는?",
      "answerA": "홍해",
      "answerB": "열받아",
      "correct": "B"
    },
    {
      "id": 105,
      "question": "세상에서 가장 뜨거운 전화는?",
      "answerA": "화상전화",
      "answerB": "영상통화",
      "correct": "A"
    },
    {
      "id": 106,
      "question": "말이 다리가 부러지면?",
      "answerA": "말뚝",
      "answerB": "목발",
      "correct": "A"
    },
    {
      "id": 107,
      "question": "소가 그림을 그리면?",
      "answerA": "피카소",
      "answerB": "화가소",
      "correct": "A"
    },
    {
      "id": 108,
      "question": "웃가 웃으면?",
      "answerA": "미소",
      "answerB": "웃소",
      "correct": "A"
    },
    {
      "id": 109,
      "question": "영어가 감기에 걸리면?",
      "answerA": "에이치",
      "answerB": "ABC",
      "correct": "A"
    },
    {
      "id": 110,
      "question": "할아버지가 등산하면?",
      "answerA": "산타 할아버지",
      "answerB": "등산왕",
      "correct": "A"
    },
    {
      "id": 111,
      "question": "걸어 다니는 주머니는?",
      "answerA": "호주머니",
      "answerB": "아주머니",
      "correct": "B"
    },
    {
      "id": 112,
      "question": "호주에서 쓰는 돈은?",
      "answerA": "호주머니",
      "answerB": "호주달러",
      "correct": "A"
    },
    {
      "id": 113,
      "question": "서울에서 땅값이 가장 싼 동네는?",
      "answerA": "일원동",
      "answerB": "중구",
      "correct": "A"
    },
    {
      "id": 114,
      "question": "세상에서 가장 긴 음식은?",
      "answerA": "참기름",
      "answerB": "국수",
      "correct": "A"
    },
    {
      "id": 115,
      "question": "차를 발로 차면?",
      "answerA": "카놀라유",
      "answerB": "교통사고",
      "correct": "A"
    },
    {
      "id": 116,
      "question": "다이어트하는 사람이 여름을 싫어하는 이유는?",
      "answerA": "비만 와서",
      "answerB": "더워서",
      "correct": "A"
    },
    {
      "id": 117,
      "question": "아이스크림이 가수가 될 수 없는 이유는?",
      "answerA": "노래를 못해서",
      "answerB": "녹음이 안 돼서",
      "correct": "B"
    },
    {
      "id": 118,
      "question": "완전 야한 가수는?",
      "answerA": "비",
      "answerB": "다비치",
      "correct": "B"
    },
    {
      "id": 119,
      "question": "엄마가 길을 잃으면?",
      "answerA": "맘마미아",
      "answerB": "엄마 어디가",
      "correct": "A"
    },
    {
      "id": 120,
      "question": "소가 구걸하면?",
      "answerA": "우거지",
      "answerB": "소지갑",
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

function getTargetScore() {
  return STAGE_TARGETS[currentStage];
}

function updateUI() {
  const targetScore = getTargetScore();
  const totalQuestions = STAGES[currentStage].length;
  const displayedQuiz = Math.min(quizCursor + 1, totalQuestions);

  els.score.innerHTML = `
    <span class="hud-stage">Stage ${currentStage + 1}</span>
    <span>Score ${score} / ${targetScore}</span>
    <span>Quiz ${displayedQuiz} / ${totalQuestions}</span>
  `;
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
    if (score >= getTargetScore()) {
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
    els.finishText.textContent = `퀴즈 ${getTargetScore()}개를 모두 맞혔어요!`;
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
