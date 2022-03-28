import { combineReducers } from "redux";
import news from "./news";
import show from "./show";
import ask from "./ask";
import jobs from "./jobs";
import top from "./top";
import page from "./page";

const reducer = combineReducers({
  news,
  show,
  ask,
  jobs,
  top,
  page,
});

export default reducer;
