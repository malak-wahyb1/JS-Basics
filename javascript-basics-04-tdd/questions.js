
const stringSize = (text) => {
  return(text.length)

}
const replaceCharacterE = (text) => {
    return text.replace("e"," ")
   

}
const concatString = (text1, text2) => {
return(text1+""+text2);
}
const showChar5 = (text) => {
return(text[4])
}
const showChar9 = (text) => {
   return text.slice(0,9)
}
const toCapitals = (text) => {
   return text.toUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return text.trim()

}
const IsString = (text) => {
return typeof text=="string";
}

const getExtension = (text) => {
var a =text.split(".").pop();
return a;
}
const countSpaces = (text) => {
   return text.split(" ").length - 1;
}
const InverseString = (text) => {
   return text.split("").reverse().join("");
}

const power = (x, y) => {
return Math.pow(x, y);
}
const absoluteValue = (num) => {
return Math.abs(num);
}
const absoluteValueArray = (array) => {
   return array.map((e) => {
      return Math.abs(e);
    });
}
const circleSurface = (radius) => {
return Math.round(radius * radius * Math.PI);
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab,ac)
}
const BMI = (weight, height) => {
return Math.round((weight / (height * height)) * 100) / 100;
}

const createLanguagesArray = () => {
const arr=["Html", "CSS", "Java", "PHP"];
return arr;
}

const createNumbersArray = () => {
const arr=[0, 1, 2, 3, 4, 5];
return arr;
}

const replaceElement = (languages) => {
   const arr=["Html", "CSS", "Java", "PHP"];
   arr[2]="Javascript";
   return arr
}

const addElement = (languages) => {
   const arr=["Html", "CSS", "Javascript", "PHP"];
   arr.push("Ruby", "Python");
   return arr;
}

const addNumberElement = (numbers) => {
   const arr=[0, 1, 2, 3, 4, 5];
   arr.unshift(-2, -1);
   return arr;
}

const removeFirst = (languages) => {
const arr=["Html", "CSS", "Javascript", "PHP", "Ruby", "Python"];
arr.shift();
return arr
}

const removeLast = (languages) => {
   const arr=["CSS", "Javascript", "PHP", "Ruby", "Python"];
   arr.pop();
   return arr
}

const convertStrToArr = (social_arr) => {
return social_arr.split(",")
}

const convertArrToStr = (languages) => {
return languages.join(",")
}

const sortArr = (social_arr) => {
return social_arr.sort();
}

const invertArr = (social_arr) => {
return social_arr.reverse();
}