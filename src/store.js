import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        changeName(state) {
            state.name = '관우'
        },
        increase(state, action) {
            state.age += action.payload
        }
    }
})

export const { changeName, increase } = user.actions

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 1, item: '토마토', amount: 2 },
        { id: 2, item: '수박', amount: 1 }
    ],
    reducers: {
        addCount(state, action) {
            let idx = state.findIndex((a) => { return a.id === action.payload })
            console.log(idx);
            ++state[idx].amount;
        },
        sortName(state) {
            state.sort((a, b) =>
                a.item > b.item ? 1 : -1
            );
        },
        addItem(state, action) {
            state.push(action.payload)
        },
    }
})

export const { addCount, sortName, addItem } = cart.actions

export default configureStore({

   reducer: {
    user: user.reducer,
    cart: cart.reducer
    }

})
