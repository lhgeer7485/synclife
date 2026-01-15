const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const todoData = [
  { title: "타이틀1", priority: "High", date: getCurrentDate() },
  { title: "타이틀2", priority: "Medium", date: getCurrentDate() },
  { title: "타이틀3", priority: "Low", date: getCurrentDate() },
];

export const inProgressData = [
  { title: "타이틀4", priority: "High", date: getCurrentDate() },
  { title: "타이틀5", priority: "Medium", date: getCurrentDate() },
  { title: "타이틀6", priority: "Low", date: getCurrentDate() },
];

export const doneData = [
  { title: "타이틀7", priority: "High", date: getCurrentDate() },
  { title: "타이틀8", priority: "Medium", date: getCurrentDate() },
  { title: "타이틀9", priority: "Low", date: getCurrentDate() },
];
