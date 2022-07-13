import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Drawer, Box, Divider } from '@mui/material';
import { SidebarItems } from './index';
import LogoLight from '../Assets/netflix-logo-black-and-white.png';
import LogoDark from '../Assets/netflix-logo.png';

const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <Box>
      <Drawer
        variant='permanent'
        anchor={'left'}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <Box sx={{ width: '250px' }}>
          <img
            src={darkTheme ? LogoLight : LogoDark}
            alt='Logo'
            style={{ width: '235px', height: '68px', margin: '3px' }}
          />
        </Box>
        <Divider />
        <SidebarItems />
      </Drawer>

      <Drawer
        variant='temporary'
        anchor={'right'}
        open={openSideBar}
        onClick={() => setOpenSideBar(false)}
        sx={{ display: { sm: 'none' } }}
      >
        <Box sx={{ width: '240px' }}>
          <SidebarItems />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
