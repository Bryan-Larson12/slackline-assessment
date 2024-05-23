import { createSlice } from '@reduxjs/toolkit';

export const productSalesDataSlice = createSlice({
  name: 'productSalesData',
  initialState: {
    value: [],
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = productSalesDataSlice.actions;

export default productSalesDataSlice.reducer;
