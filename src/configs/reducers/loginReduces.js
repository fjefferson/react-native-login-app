const initialState = {
     logged: false,
     userLogged: {username: null, password: null, remember: false}
   
}


const loginReduces = (state = initialState, action = {}) =>{

    switch(action.type){
        case 'LOGAR': 
        let users = action.users; ///.filter( user => ( user.password === state.userLogged.password && user.username === state.userLogged.username)? user: null);
        let findUser = users.filter( user => ( state.userLogged.username == user.username  && state.userLogged.password== user.password));
        console.log(findUser);
        return {
            ...state,
            logged: findUser.length > 0 ? true : false
        }

        case 'SETUSERNAME':
         return{
             ...state,
             userLogged: {...state.userLogged, username: action.payload}
         }
        
        case 'SETPASSWORD':
         return{
             ...state,
             userLogged: {...state.userLogged, password: action.payload}
         }

         case 'SETREMEMBER':
         return{
             ...state,
             userLogged: {...state.userLogged, remember: action.payload}
         }

         default:
         return state
    }

}

export default loginReduces;