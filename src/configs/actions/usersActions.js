
const ADDUSER = 'ADDUSER';
const MODIFICAUSER = 'MODIFICAUSER';
const MODIFICAPASS = 'MODIFICAPASS';
const MODIFICAPASSCONF = 'MODIFICAPASSCONF';
const CANCELCADASTRO = 'CANCELCADASTRO';

export const modificaUsername = (user) => {
    return{
      type: MODIFICAUSER,
      payload: user
    }
}

export const modificaPass = (pass) => {
    return{
      type: MODIFICAPASS,
      payload: pass
    }
}

export const modificaPassConf = (passConfirm) => {
    return{
      type: MODIFICAPASSCONF,
      payload: passConfirm
    }
}

export const addUser = () => {
    return {
      type: ADDUSER
    }    
}

export const cancelCadastro = () =>{
  return{
    type: CANCELCADASTRO
  }
}

