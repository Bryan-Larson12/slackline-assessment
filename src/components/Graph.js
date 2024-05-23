import { LineChart } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';

import './Graph.css';

const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ];

const customize = {
  height: 450,
  legend: { hidden: true },
};

export default function StacklineGraph() {
  const productSalesData = useSelector((state) => state.productSalesData.value);
  const itemData = productSalesData[0];
  const chartData = itemData.sales.map((value) =>
    ({...value, weekEnding: new Date(value.weekEnding)}));

  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'weekEnding',
          scaleType: 'time',
          valueFormatter: (value, context) =>
            context.location === 'tick'
              ? months[value.getMonth()]
              : value.toISOString().split('T')[0],
        },
      ]}
      yAxis={[
        {
          min: -800000,
          max: 2000000,
        },
      ]}
      series={[{
        dataKey: 'retailSales',
        label: 'Retail Sales',
        showMark: false,
        curve: 'natural',
        valueFormatter: (value) => `$${value}`,
      }]}
      leftAxis={null}
      colors={['#46a8f6']}
      dataset={chartData}
      {...customize}
    />
  );
}
