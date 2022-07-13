import { useEffect, useState, useContext } from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  AppBar,
  useMediaQuery,
  createTheme,
} from '@mui/material';
import { AccountCircle, Menu, LightMode, DarkMode } from '@mui/icons-material';
import { FormField, Sidebar } from './index';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const { darkTheme, setTheme } = useContext(ThemeContext);

  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    if (matches) {
      setOpenSideBar(false);
    }
  }, [matches]);

  return (
    <Box>
      <AppBar
        position='fixed'
        sx={{
          width: `${matches ? 'calc(100% - 240px)' : 1}`,
          height: 79,
          pt: { xs: '11px', sm: '7px' },
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ ml: '2px', display: { sm: 'none' } }}
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            <Menu />
          </IconButton>

          <Box sx={{ flexGrow: 1, ml: '8px', mr: '20px' }}>
            <IconButton onClick={()=> setTheme()} color='inherit'>
              {darkTheme ? <DarkMode /> : <LightMode /> }
            </IconButton>
          </Box>
          <FormField />
          <Typography sx={{ ml: 4, mr: 1 }}>my movies</Typography>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Sidebar
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
        matches={matches}
      />
    </Box>
  );
};

export default Navbar;
