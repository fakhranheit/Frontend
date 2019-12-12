const INITIAL_STATE={
    id:'',
    username:'',
    password:'',
    login:false,
    error:'',
    loading:false
}

export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return{...state,...action.payload,login:true}
        case 'LOGOUT_SUCCESS':
            return INITIAL_STATE
        case 'LOGIN_ERROR':
            return{...state,error:action.payload,loading:false}
        default:
            return state;
    }
}