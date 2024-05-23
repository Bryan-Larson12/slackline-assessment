import store from './store';
import { setData } from './store/productSalesData';

import jsonData from './stackline_frontend_assessment_data_2021.json';

export async function getProductSalesData() {
  // fetch('/api/v1/product-sales-data')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Unable to retrieve product sales data');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     store.dispatch(setData(data));
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  const data = jsonData;
  store.dispatch(setData(data));
}
