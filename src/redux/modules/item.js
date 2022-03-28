import axios from "axios";

export function requestItems(IDdataArr) {
  return IDdataArr.map((id) =>
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  );
}

export function requestItem(id) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}
