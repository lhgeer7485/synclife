const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const todoData = [
  {
    id: 0,
    title: "타이틀1",
    description: "로그인 페이지 UI 구현",
    priority: "High",
    date: getCurrentDate(),
  },
  {
    id: 1,
    title: "타이틀2",
    description: "API 명세서 정리 및 공유",
    priority: "Medium",
    date: getCurrentDate(),
  },
  {
    id: 2,
    title: "타이틀3",
    description: "버튼 컴포넌트 스타일 수정",
    priority: "Low",
    date: getCurrentDate(),
  },
];

export const inProgressData = [
  {
    id: 3,
    title: "타이틀4",
    description: "드래그 앤 드롭 기능 구현",
    priority: "High",
    date: getCurrentDate(),
  },
  {
    id: 4,
    title: "타이틀5",
    description: "상태 관리 로직 리팩토링",
    priority: "Medium",
    date: getCurrentDate(),
  },
  {
    id: 5,
    title: "타이틀6",
    description: "모바일 반응형 레이아웃 대응",
    priority: "Low",
    date: getCurrentDate(),
  },
];

export const doneData = [
  {
    id: 6,
    title: "타이틀7",
    description: "프로젝트 초기 세팅 완료",
    priority: "High",
    date: getCurrentDate(),
  },
  {
    id: 7,
    title: "타이틀8",
    description: "Pretendard 폰트 적용",
    priority: "Medium",
    date: getCurrentDate(),
  },
  {
    id: 8,
    title: "타이틀9",
    description: "카드 컴포넌트 UI 완성",
    priority: "Low",
    date: getCurrentDate(),
  },
];
