const LOGAR = 'LOGAR';
const SETUSERNAME = 'SETUSERNAME';
const SETPASSWORD = 'SETPASSWORD';
const SETREMEMBER = 'SETREMEMBER';

export const logar = (users)=> {
    return{
        type: LOGAR,
        users
    }
}

export const setUsername = (username)=> {
    return{
        type: SETUSERNAME,
        payload: username
    }
}

export const setPassword = (pass)=> {
    return{
        type: SETPASSWORD,
        payload: pass
    }
}

export const setRemember = (val)=> {
    return{
        type: SETREMEMBER,
        payload: val
    }
}
