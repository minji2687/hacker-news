import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { requestItems } from "./item";

export const GET_NEWS_START = "redux-start/news/GET_NEWS_START";

//깃헙 API 호출에 대한 응답이 응답이 성공적으로 돌아온 경우
export const GET_NEWS_SUCCESS = "redux-start/news/GET_NEWS_SUCCESS";

//깃헙 API 호출에 대한 응답이 응답이 실패한 경우
export const GET_NEWS_FAIL = "redux-start/news/GET_NEWS_FAIL";

// 액션 생성 함수
export function getNewsStart() {
  return {
    type: GET_NEWS_START,
  };
}

export function getNewsSuccess(newsData) {
  return {
    type: GET_NEWS_SUCCESS,
    newsData,
  };
}
export function getNewsFail(error) {
  return {
    type: GET_NEWS_FAIL,
    error,
  };
}
const initialState = {
  loading: false,
  newsData: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_START:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsData: [...state.newsData, ...action.newsData],
      };

    case GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

//saga

const GET_NEWS_SAGA_START = "GET_NEWS_SAGA_START";
let startNum = 0;

function* getNewsSaga(action) {
  try {
    yield put(getNewsStart());

    const res = yield call(
      axios.get,
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );

    const itemNum = 10;

    let sliceResData = res.data.slice(startNum, startNum + itemNum);

    startNum += itemNum;

    const promiseArr = yield requestItems(sliceResData);

    const newsData = yield call(axios.all, promiseArr);

    console.log("newsData", newsData);

    yield put(getNewsSuccess(newsData));
  } catch (error) {
    yield put(getNewsFail(error));
  }
}

export function getNewsSagaStart() {
  return {
    type: GET_NEWS_SAGA_START,
  };
}

export function* newsSaga() {
  yield takeEvery(GET_NEWS_SAGA_START, getNewsSaga);
}
