const TOKEN = 'token_key'

function getToken(){
    return localStorage.getItem(TOKEN)
}

function setToken(values){
    localStorage.setItem(TOKEN, values)
}

function removeToken(){
    localStorage.removeItem(TOKEN)
}

export{
    getToken,
    setToken,
    removeToken
}