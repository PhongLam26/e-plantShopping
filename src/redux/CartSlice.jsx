import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      if (!product?.id) return;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) existingItem.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, action) {
      const id = typeof action.payload === 'object' ? action.payload?.id : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload ?? {};
      const item = state.items.find((entry) => entry.id === id);
      if (!item || !Number.isFinite(quantity)) return;
      const safeQuantity = Math.floor(quantity);
      if (safeQuantity <= 0) state.items = state.items.filter((entry) => entry.id !== id);
      else item.quantity = safeQuantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
