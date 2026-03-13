export const checkLogin = (status) => {
    return {
        type: "CHECK_LOGIN",
        status: status
    }
}

export const checkLogout = (status) => {
    return {
        type: "CHECK_LOGOUT",
        status: status
    }
}