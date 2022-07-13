import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Navbar, Sidebar } from './components';
import Routes from './Routes';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  const { theme, darkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: `${darkTheme ? '#fafafa' : '#424242'}` }}>
        <Navbar />
        <Sidebar />
        <Box
          sx={{
            ml: { xs: 20, sm: 33 },
            mt: 7,
          }}
        >
          <Routes />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
