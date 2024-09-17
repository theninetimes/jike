import { createSlice } from '@reduxjs/toolkit'
import {setToken as _setToken, getToken} from "@/utils"
import { loginAPI, getProfileAPI} from '@/apis/user'
const userStore = createSlice({
    name:"user",
    initialState:{
        token:getToken()||'',
        userInfo:{}
    },
    reducers:{
        setToken(state, action){
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action){
            state.userInfo = action.payload
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
        }

    }
})

const { setToken, setUserInfo, clearUserInfo} = userStore.actions

const userReducer = userStore.reducer

//登录获取token异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        console.log(res)
        dispatch(setToken(res.data.token))
        
    }
}


//获取个人信息
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
        
    }
}
export{ fetchLogin, fetchUserInfo, clearUserInfo}

export default userReducer