import bear from "./assets/rankerBackground/bear.svg";
import cat from "./assets/rankerBackground/cat.svg";
import elephant from "./assets/rankerBackground/elephant.svg";
import fox from "./assets/rankerBackground/fox.svg";
import girraffe from "./assets/rankerBackground/girraffe.svg";
import monkey from "./assets/rankerBackground/monkey.svg";
import rabbit from "./assets/rankerBackground/rabbit.svg";
import raindear from "./assets/rankerBackground/raindear.svg";

import profileBear from "./assets/newCardProfile/bear.svg";
import profileCat from "./assets/newCardProfile/cat.svg";
import profileElephant from "./assets/newCardProfile/elephant.svg";
import profilelion from "./assets/newCardProfile/lion.svg";
import profileFox from "./assets/newCardProfile/fox.svg";
import profileMonkey from "./assets/newCardProfile/monkey.svg";
import profileRabbit from "./assets/newCardProfile/rabbit.svg";
import profileRaindear from "./assets/newCardProfile/raindear.svg";

import id_1 from "./assets/user/id_1.svg";
import id_2 from "./assets/user/id_2.svg";
import id_3 from "./assets/user/id_3.svg";
import id_4 from "./assets/user/id_4.svg";
import id_5 from "./assets/user/id_5.svg";
import id_6 from "./assets/user/id_6.svg";
import id_7 from "./assets/user/id_7.svg";

const rankerBackgorundPhoto = [
  bear,
  cat,
  elephant,
  fox,
  girraffe,
  monkey,
  rabbit,
  raindear,
];

export function randomRankerBackgorundPhoto() {
  let randomNum = Math.floor(Math.random() * rankerBackgorundPhoto.length + 1);
  return rankerBackgorundPhoto[randomNum];
}

const newCardProfile = [
  profileBear,
  profileCat,
  profileElephant,
  profileFox,
  profileMonkey,
  profileRabbit,
  profileRaindear,
  profilelion,
];

export function newCardProfileImg() {
  let randomNum = Math.floor(Math.random() * newCardProfile.length + 1);
  return newCardProfile[randomNum];
}

const userProfileImg = [id_1, id_2, id_3, id_4, id_5, id_6, id_7];

export function randomUserProfileImg() {
  let randomNum = Math.floor(Math.random() * userProfileImg.length + 1);
  return userProfileImg[randomNum];
}

export function convertDateForm(timeStamp) {
  let nowYear = new Date(Date.now()).getFullYear();
  let nowMonth = new Date(Date.now()).getMonth() + 1;
  let nowDate = new Date(Date.now()).getDate();
  let nowHours = new Date(Date.now()).getHours();
  let nowMinutes = new Date(Date.now()).getMinutes();
  let nowSeconds = new Date(Date.now()).getSeconds();

  const date = new Date(timeStamp * 1000);

  let itemYear = date.getFullYear();
  let itemMonth = date.getMonth() + 1;
  let itemDate = date.getDate();
  let itemHours = date.getHours();
  let itemMinutes = date.getMinutes();
  let itemSeconds = date.getSeconds();

  if (nowYear > itemYear) {
    return `${nowYear - itemYear} years ago`;
  } else if (nowMonth > itemMonth) {
    return `${nowMonth - itemMonth} month ago`;
  } else if (nowDate > itemDate) {
    return `${nowDate - itemDate} date ago`;
  } else if (nowHours > itemHours) {
    return `${nowHours - itemHours} hours ago`;
  } else if (nowMinutes > itemMinutes) {
    return `${nowMinutes - itemMinutes} min ago`;
  } else if (nowSeconds > itemSeconds) {
    return `${nowSeconds - itemSeconds} sec ago`;
  }
}
