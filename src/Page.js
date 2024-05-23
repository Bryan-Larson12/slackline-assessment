import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Graph from './components/Graph';
import Table from './components/Table';
import { getProductSalesData } from './api';

export default function Page() {
  const [productSalesDataLoaded, setProductSalesDataLoaded] = useState(false);

  useEffect(() => {
    getProductSalesData()
      .then(() => {
        setProductSalesDataLoaded(true);
      });
  }, []);

  const productSalesData = useSelector((state) => state.productSalesData.value);
  const itemData = productSalesData[0];

  return (
    <Box sx={{ flexGrow: 1 }} px={2} py={8}>
      { productSalesDataLoaded ?
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper sx={{ height: '100%' }}>
              <Box p={2} display="flex" flexDirection="column" alignItems="center" sx={{ textAlign: 'center' }}>
                <img src={ itemData.image } style={{ maxWidth: 150 }} alt="product" />
                <Typography variant="h6">{ itemData.title }</Typography>
                <Typography
                  variant="subtitle1"
                  color="#afb9c7"
                  fontSize={12}
                  sx={{ maxWidth: '200px' }}
                >
                  { itemData.subtitle }
                </Typography>
              </Box>
              <Box p={2} sx={{ borderTop: '1px solid #f9fafc', borderBottom: '1px solid #f9fafc' }}>
                {itemData.tags.map((text) => (
                  <Button
                    key={text}
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: '#ebedf3',
                      color: '#626978',
                      margin: '0 6px 12px',
                      padding: '2px 18px',
                      textTransform: 'none',
                    }}
                  >
                    {text}
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              direction="column"
              spacing={8}
            >
              <Grid item>
                <Paper>
                  <Box>
                    <Typography variant="h6" sx={{ padding: '24px 36px' }}>Retail Sales</Typography>
                    <Graph />
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Table />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        :
        <Box>Loading...</Box>
      }
    </Box>
  );
}
