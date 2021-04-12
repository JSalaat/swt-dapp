import ServiceWeb3Setters from "../services/web3-service-setters"
import ServiceWeb3 from "../services/web3-service"
import { setManageData } from "./reducers"

import * as t from "./actionTypes.js"

const serviceWeb3Setters = new ServiceWeb3Setters()
const serviceWeb3 = new ServiceWeb3()

const userSettersState = {
  showRestakeLoader: false,
  showWindDownLoader: false,
  showWorkerLoader: false,
  showDivideLoader: false,
  showProlongLoader: false,
  showWithdrawNuLoader: false,
  showWithdrawPolicyLoader: false,
}

export const settersButtonsStateReducer = (state = userSettersState, action) => {
  switch (action.type) {
    case t.SET_SHOW_RESTAKE_LOADER:
      return { ...state, showRestakeLoader: action.payload }
    case t.SET_SHOW_WINDDOWN_LOADER:
      return { ...state, showWindDownLoader: action.payload }
    case t.SET_WORKER_LOADER:
      return { ...state, showWorkerLoader: action.payload }
    case t.SET_DIVIDE_LOADER:
      return { ...state, showDivideLoader: action.payload }
    case t.SET_PROLONG_LOADER:
      return { ...state, showProlongLoader: action.payload }
    case t.SET_WITHDRAW_NU_LOADER:
      return { ...state, showWithdrawNuLoader: action.payload }
    case t.SET_WITHDRAW_POLICY_LOADER:
      return { ...state, showWithdrawPolicyLoader: action.payload }
    default:
      return state
  }
}

const _updateDataHelper = (type, dispatch) => {
  setTimeout(() => {
    dispatch({ type: type, payload: false })
  }, 2000)

  setTimeout(() => {
    dispatch(setManageData({}, true))
    serviceWeb3.getManageData().then(payload => dispatch(setManageData(payload, false)))
  }, 4500)
}

export const setRestakeThunk = bool => dispatch => {
  dispatch({ type: t.SET_SHOW_RESTAKE_LOADER, payload: true })
  serviceWeb3Setters
    .setRestake(bool)
    .then(() => {
      dispatch({ type: t.SET_RESTAKE_STATUS, payload: bool })
      dispatch({ type: t.SET_SHOW_RESTAKE_LOADER, payload: false })
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_SHOW_RESTAKE_LOADER, payload: false })
    })
}

export const setWindDownThunk = bool => dispatch => {
  dispatch({ type: t.SET_SHOW_WINDDOWN_LOADER, payload: true })
  serviceWeb3Setters
    .setWinddown(bool)
    .then(() => {
      dispatch({ type: t.SET_WINDDOWN_STATUS, payload: bool })
      dispatch({ type: t.SET_SHOW_WINDDOWN_LOADER, payload: false })
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_SHOW_WINDDOWN_LOADER, payload: false })
    })
}

export const setWorkerThunk = address => dispatch => {
  dispatch({ type: t.SET_WORKER_LOADER, payload: true })
  serviceWeb3Setters
    .setWorker(address)
    .then(() => {
      dispatch({ type: t.SET_WORKER_ADDRESS, payload: address })
      dispatch({ type: t.SET_WORKER_LOADER, payload: false })
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_WORKER_LOADER, payload: false })
    })
}

export const divideStakeThunk = (index, value, periods) => dispatch => {
  dispatch({ type: t.SET_DIVIDE_LOADER, payload: true })
  serviceWeb3Setters
    .divideStake(index, value, periods)
    .then(() => {
      _updateDataHelper(t.SET_DIVIDE_LOADER, dispatch)
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_DIVIDE_LOADER, payload: false })
    })
}

export const prolongStakeThunk = (index, periods) => dispatch => {
  dispatch({ type: t.SET_PROLONG_LOADER, payload: true })
  serviceWeb3Setters
    .prolongStake(index, periods)
    .then(() => {
      _updateDataHelper(t.SET_PROLONG_LOADER, dispatch)
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_PROLONG_LOADER, payload: false })
    })
}

export const withdrawNuThunk = value => dispatch => {
  dispatch({ type: t.SET_WITHDRAW_NU_LOADER, payload: true })
  serviceWeb3Setters
    .withdrawNu(value)
    .then(() => {
      _updateDataHelper(t.SET_WITHDRAW_NU_LOADER, dispatch)
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_WITHDRAW_NU_LOADER, payload: false })
    })
}

export const withdrawPolicyThunk = () => dispatch => {
  dispatch({ type: t.SET_WITHDRAW_POLICY_LOADER, payload: true })
  serviceWeb3Setters
    .withdrawPolicy()
    .then(() => {
      _updateDataHelper(t.SET_WITHDRAW_POLICY_LOADER, dispatch)
    })
    .catch(err => {
      console.error(err)
      dispatch({ type: t.SET_WITHDRAW_POLICY_LOADER, payload: false })
    })
}
