import {atom} from 'recoil'

export const  UserAtom = atom({
    key: "UserAtom",
    default: {
        isLoggedIn: false,
        data: {}
    }
})