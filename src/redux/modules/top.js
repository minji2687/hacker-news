import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { requestItems } from "./item";

export const GET_TOP_START = "redux-start/top/GET_TOP_START";

//깃헙 API 호출에 대한 응답이 응답이 성공적으로 돌아온 경우
export const GET_TOP_SUCCESS = "redux-start/top/GET_TOP_SUCCESS";

//깃헙 API 호출에 대한 응답이 응답이 실패한 경우
export const GET_TOP_FAIL = "redux-start/top/GET_TOP_FAIL";

// 액션 생성 함수
export function getTopStart() {
  return {
    type: GET_TOP_START,
  };
}

export function getTopSuccess(topData) {
  return {
    type: GET_TOP_SUCCESS,
    topData,
  };
}
export function getTopFail(error) {
  return {
    type: GET_TOP_FAIL,
    error,
  };
}
const initialState = {
  loading: false,
  topData: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_START:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case GET_TOP_SUCCESS:
      return {
        ...state,
        loading: false,
        topData: action.topData,
      };

    case GET_TOP_FAIL:
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

const GET_TOP_SAGA_START = "GET_TOP_SAGA_START";

function* getTopSaga(action) {
  try {
    yield put(getTopStart());

    const res = yield call(
      axios.get,
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );

    let startNum = 0;
    const itemNum = 10;

    let sliceResData = res.data.slice(startNum, startNum + itemNum);

    startNum += itemNum;

    const promiseArr = yield requestItems(sliceResData);

    const topData = yield call(axios.all, promiseArr);
    console.log("topData", topData);

    yield put(getTopSuccess(topData));
  } catch (error) {
    yield put(getTopFail(error));
  }
}

export function getTopSagaStart() {
  return {
    type: GET_TOP_SAGA_START,
  };
}

export function* topSaga() {
  yield takeEvery(GET_TOP_SAGA_START, getTopSaga);
}
