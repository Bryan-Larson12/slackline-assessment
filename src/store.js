import { configureStore } from '@reduxjs/toolkit';
import productSalesDataReducer from './store/productSalesData';

export default configureStore({
  reducer: {
    productSalesData: productSalesDataReducer,
  },
});
