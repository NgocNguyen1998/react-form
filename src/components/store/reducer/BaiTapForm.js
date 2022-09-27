const stateDefault = {
   mangNguoiDung:[
    {
        id: 1,
        fullName: 'A',
        phoneNumber: '0988888888',
        email: 'abc@gmail.com'

    },
    {
        id: 2,
        fullName: 'B',
        phoneNumber: '0984478888',
        email: 'abc@gmail.com'

    },
   ]
   
   
}

export const BaiTapForm = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_USER':{
            const data = [...state.mangNguoiDung]
            const value = data.findIndex(item=>item.id===action.payload.id)
            if(value === -1){
                data.push(action.payload)
            }
            return {...state, mangNguoiDung:data}
        }
        default: return { ...state }
    }


}