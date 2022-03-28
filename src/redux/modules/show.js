import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { requestItems } from "./item";

export const GET_SHOW_START = "redux-start/show/GET_SHOW_START";

//깃헙 API 호출에 대한 응답이 응답이 성공적으로 돌아온 경우
export const GET_SHOW_SUCCESS = "redux-start/show/GET_SHOW_SUCCESS";

//깃헙 API 호출에 대한 응답이 응답이 실패한 경우
export const GET_SHOW_FAIL = "redux-start/show/GET_SHOW_FAIL";

// 액션 생성 함수
export function getShowStart() {
  return {
    type: GET_SHOW_START,
  };
}

export function getShowSuccess(showData) {
  return {
    type: GET_SHOW_SUCCESS,
    showData,
  };
}
export function getShowFail(error) {
  return {
    type: GET_SHOW_FAIL,
    error,
  };
}
const initialState = {
  loading: false,
  showData: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SHOW_START:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case GET_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        showData: [...state.showData, ...action.showData],
      };

    case GET_SHOW_FAIL:
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
const GET_SHOW_SAGA_START = "GET_SHOW_SAGA_START";
let startNum = 0;

function* getShowSaga(action) {
  try {
    yield put(getShowStart());

    const res = yield call(
      axios.get,
      "https://hacker-news.firebaseio.com/v0/showstories.json"
    );

    const itemNum = 10;

    let sliceResData = res.data.slice(startNum, startNum + itemNum);

    startNum += itemNum;

    const promiseArr = yield requestItems(sliceResData);

    const showData = yield call(axios.all, promiseArr);
    console.log("showData", showData);

    yield put(getShowSuccess(showData));
  } catch (error) {
    yield put(getShowFail(error));
  }
}

export function getShowSagaStart() {
  return {
    type: GET_SHOW_SAGA_START,
  };
}

export function* showSaga() {
  yield takeEvery(GET_SHOW_SAGA_START, getShowSaga);
}
