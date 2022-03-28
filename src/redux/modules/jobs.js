import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { requestItems } from "./item";

export const GET_JOBS_START = "redux-start/jobs/GET_JOBS_START";

//깃헙 API 호출에 대한 응답이 응답이 성공적으로 돌아온 경우
export const GET_JOBS_SUCCESS = "redux-start/jobs/GET_JOBS_SUCCESS";

//깃헙 API 호출에 대한 응답이 응답이 실패한 경우
export const GET_JOBS_FAIL = "redux-start/jobs/GET_JOBS_FAIL";

// 액션 생성 함수
export function getJobsStart() {
  return {
    type: GET_JOBS_START,
  };
}

export function getJobsSuccess(jobsData) {
  return {
    type: GET_JOBS_SUCCESS,
    jobsData,
  };
}
export function getJobsFail(error) {
  return {
    type: GET_JOBS_FAIL,
    error,
  };
}
const initialState = {
  loading: false,
  jobsData: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS_START:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobsData: action.jobsData,
      };

    case GET_JOBS_FAIL:
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

const GET_JOBS_SAGA_START = "GET_JOBS_SAGA_START";

function* getJobsSaga(action) {
  try {
    yield put(getJobsStart());

    const res = yield call(
      axios.get,
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    let startNum = 0;
    const itemNum = 10;

    let sliceResData = res.data.slice(startNum, startNum + itemNum);

    startNum += itemNum;

    const promiseArr = yield requestItems(sliceResData);

    const jobsData = yield call(axios.all, promiseArr);
    console.log("jobsData", jobsData);

    yield put(getJobsSuccess(jobsData));
  } catch (error) {
    yield put(getJobsFail(error));
  }
}

export function getJobsSagaStart() {
  return {
    type: GET_JOBS_SAGA_START,
  };
}

export function* jobsSaga() {
  yield takeEvery(GET_JOBS_SAGA_START, getJobsSaga);
}
