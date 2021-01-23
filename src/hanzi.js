let characters = [
  { zh: "一", en: "one" },
  { zh: "二", en: "two" },
  { zh: "三", en: "three" },
  { zh: "人", en: "person" },
  { zh: "个", en: "*one unit" },
  { zh: "大", en: "big" },
  { zh: "山", en: "mountain" },
  { zh: "上", en: "up" },
  { zh: "下", en: "down" },
  { zh: "小", en: "small" },
  { zh: "雨", en: "rain" },
  { zh: "天", en: "sky" },
  { zh: "车", en: "car" },
  { zh: "开", en: "open" },
  { zh: "火", en: "fire" },
  { zh: "门", en: "door" },
  { zh: "口", en: "mouth" },
  { zh: "月", en: "moon" },
  { zh: "羊", en: "sheep" },
  { zh: "只", en: "only / *one unit" },
  { zh: "有", en: "have" },
  { zh: "牛", en: "cow" },
  { zh: "水", en: "water" },
  { zh: "中", en: "in" },
  { zh: "风", en: "wind" },
  { zh: "头", en: "head" },
  { zh: "土", en: "soil" },
  { zh: "里", en: "in" },
  { zh: "在", en: "at / in" },
  { zh: "日", en: "sun" },
  { zh: "白", en: "white" },
  { zh: "马", en: "horse" },
  { zh: "手", en: "hand" },
  { zh: "出", en: "out" },
  { zh: "王", en: "king" },
  { zh: "子", en: "son" },
  { zh: "儿", en: "son" },
  { zh: "女", en: "daughter" },
  { zh: "刀", en: "knife" },
  { zh: "木", en: "wood" },
  { zh: "鸟", en: "bird" },
  { zh: "伞", en: "umbrella" },
  { zh: "鱼", en: "fish" },
  { zh: "瓜", en: "melon" },
  { zh: "气", en: "air" },
  { zh: "飞", en: "fly" },
  { zh: "虫", en: "bug" },
  { zh: "米", en: "rice" },
  { zh: "云", en: "cloud" },
];

const getRandomCharacters = (n = 5) => {
  return characters.sort(() => 0.5 - Math.random()).slice(0, n);
};

const getAllCharacters = () => {
  return characters;
};

export { getRandomCharacters, getAllCharacters };
