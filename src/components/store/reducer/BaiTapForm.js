const stateDefault = {
    mangNguoiDung: [
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
    ],

    selectedUser: null
}

export const BaiTapForm = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            const data = [...state.mangNguoiDung]
            const value = data.findIndex(item => item.id === action.payload.id)
            if (value === -1) {
                data.push(action.payload)
            }
            return { ...state, mangNguoiDung: data }
        } break;
        case 'DELETE_USER': {
            const dataUpdate = state.mangNguoiDung.filter(item => item.id !== action.payload)
            return { ...state, mangNguoiDung: dataUpdate }
        } break;
        case 'EDIT_USER': {
            const user = state.mangNguoiDung.find(item => item.id === action.payload)
            return { ...state, selectedUser: user }
        }
        case 'UPLOAD_USER': {
            const newMangNguoiDung = state.mangNguoiDung.map(item => item.id === action.payload.id ? action.payload : item)
            state.selectedUser = null
            return { ...state, mangNguoiDung: newMangNguoiDung }
        }
        default: return { ...state }
    }


}