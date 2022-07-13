import { createContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = createTheme({
    palette: {
      mode: `${darkTheme ? 'light' : 'dark'}`,
      whiteColor:{
        main: '#e3f2fd'
      },
      blackColor: {
        main: '#212121'
      }
    },
  
  });

  function setTheme() {
    setDarkTheme(!darkTheme);
  }

  const value = {
    darkTheme,
    setTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
