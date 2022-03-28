import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { requestItems } from "./item";

export const GET_ASK_START = "redux-start/ask/GET_ASK_START";

//깃헙 API 호출에 대한 응답이 응답이 성공적으로 돌아온 경우
export const GET_ASK_SUCCESS = "redux-start/ask/GET_ASK_SUCCESS";

//깃헙 API 호출에 대한 응답이 응답이 실패한 경우
export const GET_ASK_FAIL = "redux-start/ask/GET_ASK_FAIL";

// 액션 생성 함수
export function getAskStart() {
  return {
    type: GET_ASK_START,
  };
}

export function getAskSuccess(askData) {
  return {
    type: GET_ASK_SUCCESS,
    askData,
  };
}
export function getAskFail(error) {
  return {
    type: GET_ASK_FAIL,
    error,
  };
}
const initialState = {
  loading: false,
  askData: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ASK_START:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case GET_ASK_SUCCESS:
      return {
        ...state,
        loading: false,
        askData: action.askData,
      };

    case GET_ASK_FAIL:
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

const GET_ASK_SAGA_START = "GET_ASK_SAGA_START";
let startNum = 0;

function* getAskSaga(action) {
  try {
    yield put(getAskStart());

    const res = yield call(
      axios.get,
      "https://hacker-news.firebaseio.com/v0/askstories.json"
    );

    const itemNum = 10;

    let sliceResData = res.data.slice(startNum, startNum + itemNum);

    startNum += itemNum;

    const promiseArr = yield requestItems(sliceResData);

    const askData = yield call(axios.all, promiseArr);
    console.log("askData", askData);

    yield put(getAskSuccess(askData));
  } catch (error) {
    yield put(getAskFail(error));
  }
}

export function getAskSagaStart() {
  return {
    type: GET_ASK_SAGA_START,
  };
}

export function* askSaga() {
  yield takeEvery(GET_ASK_SAGA_START, getAskSaga);
}
