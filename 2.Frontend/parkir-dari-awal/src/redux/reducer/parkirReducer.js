const initial_state={
    parkirState:{
        total:0,
        durasiParkir:''
    }
}

export default(parkirState=initial_state,action) =>{
    switch (action.type) {
        case 'MOBIL':
            var newObj={
                durasiParkir : action.durasiParkir,
                total:action.total
                
            }
            return{...parkirState,...newObj}
        case 'MOTOR':
                var newObj={
                    durasiParkir : action.durasiParkir,
                    total:action.total
                }
            return{...parkirState,...newObj}
    
        default:
            return parkirState;
    }
}
