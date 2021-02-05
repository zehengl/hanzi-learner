let characters = [
  "一",
  "二",
  "三",
  "人",
  "个",
  "大",
  "山",
  "上",
  "下",
  "小",
  "雨",
  "天",
  "车",
  "开",
  "火",
  "门",
  "口",
  "月",
  "羊",
  "只",
  "有",
  "牛",
  "水",
  "中",
  "风",
  "头",
  "土",
  "里",
  "在",
  "日",
  "白",
  "马",
  "手",
  "出",
  "王",
  "子",
  "儿",
  "女",
  "刀",
  "木",
  "鸟",
  "伞",
  "鱼",
  "瓜",
  "气",
  "飞",
  "虫",
  "米",
  "云",
];

const getRandomCharacters = (n = 5) => {
  return characters.sort(() => 0.5 - Math.random()).slice(0, n);
};

const getAllCharacters = () => {
  return characters;
};

export { getRandomCharacters, getAllCharacters };
