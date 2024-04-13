import { createSlice } from '@reduxjs/toolkit';

// Создание среза данных
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        includedTours: [],
        group: 1,
        cartIsOpened: false,
    },
    reducers: {
        cartOpen: (state) => {
            state.cartIsOpened = true;
        },
        cartClose: (state) => {
            state.cartIsOpened = false;
        },

        addToCart: (state, action) => {
            state.includedTours.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.includedTours = state.includedTours.filter(item => item.id !== action.payload);
        },

        addPeople: state => {
            state.group = state.group < 10 ? state.group + 1 : state.group
        },
        removePeople: state => {
            state.group = state.group > 1 ? state.group - 1 : state.group;
        },
    }
})

// Экспорт функций получения дынных
export const getCart = state => state.cart.includedTours;
export const getCartOpening = state => state.cart.cartIsOpened;
export const getPeople = state => state.cart.group;
export const getTotal = state => {
    if (state.cart.includedTours.length !== 0) {
        return state.cart.includedTours.reduce((total, item) => {
            return total + item.price;
        }, 0) * state.cart.group;
    }
};

// Экспорт функций действия
export const { cartOpen, cartClose, addToCart, removeFromCart, addPeople, removePeople } = cartSlice.actions;
export default cartSlice.reducer;