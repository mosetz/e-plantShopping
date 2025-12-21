import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload
        /* Check if the item already exist in the arry or not if not add new one and appen it quantity */
        const existingItem = state.items.find(item => item.name === name)
        if (existingItem) {
            existingItem.quantity++ ;
        } else {
            state.items.push({name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
