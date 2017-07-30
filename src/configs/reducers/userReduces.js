const initialState = {
    users:[{username:'jeff', password: '123', confirmPass:'', remember:false}],
    user:{username:'', password: '', confirmPass:'', remember:false}
}
  
const userReducer = (state = initialState, action = {}) => {
 switch (action.type) {
    case 'ADDUSER':
      let users = state.users;
      users.push(state.user);
      return {
        ...state,
        users: users,
        user: initialState.user
      };
    
    case 'MODIFICAUSER':
      return{
        ...state,
        user: {...state.user, username: action.payload}
      };

    case 'MODIFICAPASS':
    return{
      ...state,
      user: {...state.user, password: action.payload}
    };

    case 'MODIFICAPASSCONF':
    return{
      ...state,
      user: {...state.user, confirmPass: action.payload}
    };

    case 'CANCELCADASTRO':
     return {
       ...state,
       user: initialState.user
      }
    default:
      return state;
  }
}

export default userReducer;