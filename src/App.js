import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import './App.css';
import logo from './stackline_logo.svg';

import Page from './Page';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#062849' }}>
          <Toolbar>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{
                width: 150
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Page />
    </div>
  );
}

export default App;
