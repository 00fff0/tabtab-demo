// 五十音默认词库数据
// 数据结构：kana(假名) | romaji(罗马字) | example_jp(日语示例) | example_romaji(示例罗马字) | example_cn(中文) | example_en(英文)

const DEFAULT_GOJUON_DATA = [
  // 清音 - あ行
  { kana: "あ", romaji: "a", example_jp: "あい", example_romaji: "ai", example_cn: "爱", example_en: "Love" },
  { kana: "い", romaji: "i", example_jp: "いぬ", example_romaji: "inu", example_cn: "狗", example_en: "Dog" },
  { kana: "う", romaji: "u", example_jp: "うみ", example_romaji: "umi", example_cn: "海", example_en: "Sea" },
  { kana: "え", romaji: "e", example_jp: "えき", example_romaji: "eki", example_cn: "车站", example_en: "Station" },
  { kana: "お", romaji: "o", example_jp: "おと", example_romaji: "oto", example_cn: "声音", example_en: "Sound" },
  
  // 清音 - か行
  { kana: "か", romaji: "ka", example_jp: "かわ", example_romaji: "kawa", example_cn: "河", example_en: "River" },
  { kana: "き", romaji: "ki", example_jp: "きく", example_romaji: "kiku", example_cn: "菊花", example_en: "Chrysanthemum" },
  { kana: "く", romaji: "ku", example_jp: "くも", example_romaji: "kumo", example_cn: "云", example_en: "Cloud" },
  { kana: "け", romaji: "ke", example_jp: "けむり", example_romaji: "kemuri", example_cn: "烟", example_en: "Smoke" },
  { kana: "こ", romaji: "ko", example_jp: "こころ", example_romaji: "kokoro", example_cn: "心", example_en: "Heart" },
  
  // 清音 - さ行
  { kana: "さ", romaji: "sa", example_jp: "さくら", example_romaji: "sakura", example_cn: "樱花", example_en: "Cherry Blossom" },
  { kana: "し", romaji: "shi", example_jp: "しろ", example_romaji: "shiro", example_cn: "白色", example_en: "White" },
  { kana: "す", romaji: "su", example_jp: "すし", example_romaji: "sushi", example_cn: "寿司", example_en: "Sushi" },
  { kana: "せ", romaji: "se", example_jp: "せかい", example_romaji: "sekai", example_cn: "世界", example_en: "World" },
  { kana: "そ", romaji: "so", example_jp: "そら", example_romaji: "sora", example_cn: "天空", example_en: "Sky" },
  
  // 清音 - た行
  { kana: "た", romaji: "ta", example_jp: "たべる", example_romaji: "taberu", example_cn: "吃", example_en: "Eat" },
  { kana: "ち", romaji: "chi", example_jp: "ちから", example_romaji: "chikara", example_cn: "力量", example_en: "Power" },
  { kana: "つ", romaji: "tsu", example_jp: "つき", example_romaji: "tsuki", example_cn: "月亮", example_en: "Moon" },
  { kana: "て", romaji: "te", example_jp: "てがみ", example_romaji: "tegami", example_cn: "信", example_en: "Letter" },
  { kana: "と", romaji: "to", example_jp: "とり", example_romaji: "tori", example_cn: "鸟", example_en: "Bird" },
  
  // 清音 - な行
  { kana: "な", romaji: "na", example_jp: "なつ", example_romaji: "natsu", example_cn: "夏天", example_en: "Summer" },
  { kana: "に", romaji: "ni", example_jp: "にほん", example_romaji: "nihon", example_cn: "日本", example_en: "Japan" },
  { kana: "ぬ", romaji: "nu", example_jp: "ぬの", example_romaji: "nuno", example_cn: "布", example_en: "Cloth" },
  { kana: "ね", romaji: "ne", example_jp: "ねこ", example_romaji: "neko", example_cn: "猫", example_en: "Cat" },
  { kana: "の", romaji: "no", example_jp: "のり", example_romaji: "nori", example_cn: "海苔", example_en: "Seaweed" },
  
  // 清音 - は行
  { kana: "は", romaji: "ha", example_jp: "はな", example_romaji: "hana", example_cn: "花", example_en: "Flower" },
  { kana: "ひ", romaji: "hi", example_jp: "ひかり", example_romaji: "hikari", example_cn: "光", example_en: "Light" },
  { kana: "ふ", romaji: "fu", example_jp: "ふゆ", example_romaji: "fuyu", example_cn: "冬天", example_en: "Winter" },
  { kana: "へ", romaji: "he", example_jp: "へや", example_romaji: "heya", example_cn: "房间", example_en: "Room" },
  { kana: "ほ", romaji: "ho", example_jp: "ほし", example_romaji: "hoshi", example_cn: "星星", example_en: "Star" },
  
  // 清音 - ま行
  { kana: "ま", romaji: "ma", example_jp: "まち", example_romaji: "machi", example_cn: "城市", example_en: "City" },
  { kana: "み", romaji: "mi", example_jp: "みず", example_romaji: "mizu", example_cn: "水", example_en: "Water" },
  { kana: "む", romaji: "mu", example_jp: "むら", example_romaji: "mura", example_cn: "村庄", example_en: "Village" },
  { kana: "め", romaji: "me", example_jp: "めがね", example_romaji: "megane", example_cn: "眼镜", example_en: "Glasses" },
  { kana: "も", romaji: "mo", example_jp: "もり", example_romaji: "mori", example_cn: "森林", example_en: "Forest" },
  
  // 清音 - や行
  { kana: "や", romaji: "ya", example_jp: "やま", example_romaji: "yama", example_cn: "山", example_en: "Mountain" },
  { kana: "ゆ", romaji: "yu", example_jp: "ゆめ", example_romaji: "yume", example_cn: "梦", example_en: "Dream" },
  { kana: "よ", romaji: "yo", example_jp: "よる", example_romaji: "yoru", example_cn: "夜晚", example_en: "Night" },
  
  // 清音 - ら行
  { kana: "ら", romaji: "ra", example_jp: "らく", example_romaji: "raku", example_cn: "轻松", example_en: "Easy" },
  { kana: "り", romaji: "ri", example_jp: "りんご", example_romaji: "ringo", example_cn: "苹果", example_en: "Apple" },
  { kana: "る", romaji: "ru", example_jp: "るす", example_romaji: "rusu", example_cn: "不在", example_en: "Absence" },
  { kana: "れ", romaji: "re", example_jp: "れきし", example_romaji: "rekishi", example_cn: "历史", example_en: "History" },
  { kana: "ろ", romaji: "ro", example_jp: "ろうそく", example_romaji: "rousoku", example_cn: "蜡烛", example_en: "Candle" },
  
  // 清音 - わ行
  { kana: "わ", romaji: "wa", example_jp: "わたし", example_romaji: "watashi", example_cn: "我", example_en: "I/Me" },
  { kana: "を", romaji: "wo", example_jp: "を", example_romaji: "wo", example_cn: "助词", example_en: "Object Marker" },
  { kana: "ん", romaji: "n", example_jp: "さん", example_romaji: "san", example_cn: "三/先生", example_en: "Three/Mr." },
  
  // 片假名 - ア行
  { kana: "ア", romaji: "a", example_jp: "アイス", example_romaji: "aisu", example_cn: "冰淇淋", example_en: "Ice cream" },
  { kana: "イ", romaji: "i", example_jp: "インク", example_romaji: "inku", example_cn: "墨水", example_en: "Ink" },
  { kana: "ウ", romaji: "u", example_jp: "ウサギ", example_romaji: "usagi", example_cn: "兔子", example_en: "Rabbit" },
  { kana: "エ", romaji: "e", example_jp: "エレベーター", example_romaji: "erebeetaa", example_cn: "电梯", example_en: "Elevator" },
  { kana: "オ", romaji: "o", example_jp: "オレンジ", example_romaji: "orenji", example_cn: "橙子", example_en: "Orange" },
  
  // 片假名 - カ行
  { kana: "カ", romaji: "ka", example_jp: "カメラ", example_romaji: "kamera", example_cn: "相机", example_en: "Camera" },
  { kana: "キ", romaji: "ki", example_jp: "キー", example_romaji: "kii", example_cn: "钥匙", example_en: "Key" },
  { kana: "ク", romaji: "ku", example_jp: "クラス", example_romaji: "kurasu", example_cn: "班级", example_en: "Class" },
  { kana: "ケ", romaji: "ke", example_jp: "ケーキ", example_romaji: "keeki", example_cn: "蛋糕", example_en: "Cake" },
  { kana: "コ", romaji: "ko", example_jp: "コーヒー", example_romaji: "koohii", example_cn: "咖啡", example_en: "Coffee" },
  
  // 片假名 - サ行
  { kana: "サ", romaji: "sa", example_jp: "サラダ", example_romaji: "sarada", example_cn: "沙拉", example_en: "Salad" },
  { kana: "シ", romaji: "shi", example_jp: "シャツ", example_romaji: "shatsu", example_cn: "衬衫", example_en: "Shirt" },
  { kana: "ス", romaji: "su", example_jp: "スープ", example_romaji: "suupu", example_cn: "汤", example_en: "Soup" },
  { kana: "セ", romaji: "se", example_jp: "セーター", example_romaji: "seetaa", example_cn: "毛衣", example_en: "Sweater" },
  { kana: "ソ", romaji: "so", example_jp: "ソファ", example_romaji: "sofa", example_cn: "沙发", example_en: "Sofa" },
  
  // 片假名 - タ行
  { kana: "タ", romaji: "ta", example_jp: "タクシー", example_romaji: "takushii", example_cn: "出租车", example_en: "Taxi" },
  { kana: "チ", romaji: "chi", example_jp: "チーズ", example_romaji: "chiizu", example_cn: "奶酪", example_en: "Cheese" },
  { kana: "ツ", romaji: "tsu", example_jp: "ツアー", example_romaji: "tsuaa", example_cn: "旅游", example_en: "Tour" },
  { kana: "テ", romaji: "te", example_jp: "テレビ", example_romaji: "terebi", example_cn: "电视", example_en: "Television" },
  { kana: "ト", romaji: "to", example_jp: "トマト", example_romaji: "tomato", example_cn: "番茄", example_en: "Tomato" },
  
  // 片假名 - ナ行
  { kana: "ナ", romaji: "na", example_jp: "ナイフ", example_romaji: "naifu", example_cn: "刀", example_en: "Knife" },
  { kana: "ニ", romaji: "ni", example_jp: "ニュース", example_romaji: "nyuusu", example_cn: "新闻", example_en: "News" },
  { kana: "ヌ", romaji: "nu", example_jp: "ヌードル", example_romaji: "nuudoru", example_cn: "面条", example_en: "Noodle" },
  { kana: "ネ", romaji: "ne", example_jp: "ネクタイ", example_romaji: "nekutai", example_cn: "领带", example_en: "Necktie" },
  { kana: "ノ", romaji: "no", example_jp: "ノート", example_romaji: "nooto", example_cn: "笔记本", example_en: "Notebook" },
  
  // 片假名 - ハ行
  { kana: "ハ", romaji: "ha", example_jp: "ハンバーガー", example_romaji: "hanbaagaa", example_cn: "汉堡", example_en: "Hamburger" },
  { kana: "ヒ", romaji: "hi", example_jp: "ヒーター", example_romaji: "hiitaa", example_cn: "加热器", example_en: "Heater" },
  { kana: "フ", romaji: "fu", example_jp: "フルーツ", example_romaji: "furuutsu", example_cn: "水果", example_en: "Fruit" },
  { kana: "ヘ", romaji: "he", example_jp: "ヘリコプター", example_romaji: "herikoputaa", example_cn: "直升机", example_en: "Helicopter" },
  { kana: "ホ", romaji: "ho", example_jp: "ホテル", example_romaji: "hoteru", example_cn: "酒店", example_en: "Hotel" },
  
  // 片假名 - マ行
  { kana: "マ", romaji: "ma", example_jp: "マスク", example_romaji: "masuku", example_cn: "口罩", example_en: "Mask" },
  { kana: "ミ", romaji: "mi", example_jp: "ミルク", example_romaji: "miruku", example_cn: "牛奶", example_en: "Milk" },
  { kana: "ム", romaji: "mu", example_jp: "ムービー", example_romaji: "muubii", example_cn: "电影", example_en: "Movie" },
  { kana: "メ", romaji: "me", example_jp: "メニュー", example_romaji: "menyuu", example_cn: "菜单", example_en: "Menu" },
  { kana: "モ", romaji: "mo", example_jp: "モデル", example_romaji: "moderu", example_cn: "模特", example_en: "Model" },
  
  // 片假名 - ヤ行
  { kana: "ヤ", romaji: "ya", example_jp: "ヤード", example_romaji: "yaado", example_cn: "码", example_en: "Yard" },
  { kana: "ユ", romaji: "yu", example_jp: "ユニフォーム", example_romaji: "yunifoomu", example_cn: "制服", example_en: "Uniform" },
  { kana: "ヨ", romaji: "yo", example_jp: "ヨーグルト", example_romaji: "yooguruto", example_cn: "酸奶", example_en: "Yogurt" },
  
  // 片假名 - ラ行
  { kana: "ラ", romaji: "ra", example_jp: "ラーメン", example_romaji: "raamen", example_cn: "拉面", example_en: "Ramen" },
  { kana: "リ", romaji: "ri", example_jp: "リモコン", example_romaji: "rimokon", example_cn: "遥控器", example_en: "Remote" },
  { kana: "ル", romaji: "ru", example_jp: "ルール", example_romaji: "ruuru", example_cn: "规则", example_en: "Rule" },
  { kana: "レ", romaji: "re", example_jp: "レストラン", example_romaji: "resutoran", example_cn: "餐厅", example_en: "Restaurant" },
  { kana: "ロ", romaji: "ro", example_jp: "ロボット", example_romaji: "robotto", example_cn: "机器人", example_en: "Robot" },
  
  // 片假名 - ワ行
  { kana: "ワ", romaji: "wa", example_jp: "ワイン", example_romaji: "wain", example_cn: "葡萄酒", example_en: "Wine" },
  { kana: "ヲ", romaji: "wo", example_jp: "ヲ", example_romaji: "wo", example_cn: "助词", example_en: "Object Marker" },
  { kana: "ン", romaji: "n", example_jp: "パン", example_romaji: "pan", example_cn: "面包", example_en: "Bread" }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_GOJUON_DATA };
}
