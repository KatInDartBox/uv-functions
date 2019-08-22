import { toWords } from "./number-words";

var MAP_WORDS_KH = {
  point: "ចុច",
  zero: "សូន្យ",
  one: "មួយ",
  two: "ពីរ",
  three: "បី",
  four: "បួន",
  five: "ប្រាំ",
  six: "ប្រាំមួយ",
  seven: "ប្រាំពីរ",
  eight: "ប្រាំបី",
  nine: "ប្រាំបួន",
  ten: "ដប់",
  eleven: "ដប់មួយ",
  twelve: "ដប់ពីរ",
  thirteen: "ដប់បី",
  fourteen: "ដប់បួន",
  fifteen: "ដប់ប្រាំ",
  sixteen: "ដប់ប្រាំមួយ",
  seventeen: "ដប់ប្រាំពីរ",
  eighteen: "ដប់ប្រាំបី",
  nineteen: "ដប់ប្រាំបួន",
  twenty: "ម្ភៃ",
  thirty: "សាមសិប",
  forty: "សែសិប",
  fifty: "ហាសិប",
  sixty: "ហុកសិប",
  seventy: "ចិតសិប",
  eighty: "ប៉ែតសិប",
  ninety: "កៅសិប",
  hundred: "រយ",
  thousand: "ពាន់",
  million: "លាន",
  billion: "ពាន់លាន",
  trillion: "ទ្រីលាន",
  quadrillion: "ខ្វដទ្រីលាន"
};
export function toKhmerWord(num: number) {
  if (!num) return;
  const word = toWords(num);
  // console.log("word", word);
  var khWords: any = [];
  word
    .toString()
    .replace(/-/g, " ")
    .split(",")
    .forEach((words) => {
      var khComma = [];
      words.split(" ").forEach((w) => {
        khComma.push(MAP_WORDS_KH[w]);
      });
      khWords.push(khComma.join(""));
    });
  return khWords.join(" ");
}
