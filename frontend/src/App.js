import React from "react";
import {hot} from "react-hot-loader";
import AppRouter from './router/AppRouter'
import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import 'normalize.css'

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#404040',
      main: '#000000',
      dark: '#333333'
    },
    secondary: {
      light: '#404040',
      main: '#000000',
      dark: '#333333'
    },
    info: {
      main: '#4d4d4d',
      light: '#002233',
      dark: '#002233'
    },
    error: {
      main: '#d32f2f',
      light: '#d32f2f',
      dark: '#d32f2f'
    },
    warning: {
      main: '#f57c00',
      light: '#f57c00',
      dark: '#f57c00'
    },
    success: {
      main: '#388e3c',
      light: '#388e3c',
      dark: '#388e3c'
    },
    default: {
      main: '#ffffff'
    },
    background: {
      default: '#000000'
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    color: '#ffffff'
  },
});

const defTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#008000',
      main: '#006600',
      dark: '#004d00'
    },
    secondary: {
      light: '#ffffff',
      main: '#00cccc',
      dark: '#f2f2f2'
    },
    info: {
      main: '#e6ffe6',
      light: '#002233',
      dark: '#002233'
    },
    error: {
      main: '#d32f2f',
      light: '#d32f2f',
      dark: '#d32f2f'
    },
    warning: {
      main: '#f57c00',
      light: '#f57c00',
      dark: '#f57c00'
    },
    success: {
      main: '#388e3c',
      light: '#388e3c',
      dark: '#388e3c'
    },
    default: {
      main: '#000000'
    },
    background: {
      default: '#003399'
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    color: '#ffffff'
  },
});

function App() {
  const [themeType, setThemeType] = React.useState(defTheme)

  const chooseTheme = (e) => {
    console.log(e.target.innerText)
    switch(e.target.innerText) {
      case 'dark':
        setThemeType(darkTheme);
        break;
      default: 
        setThemeType(defTheme)
        break;
    }
  }

  return(
    <ThemeProvider theme={themeType} >
      <Box bgcolor='info.main'> 
        <button onClick={chooseTheme}>dark</button>
        <button onClick={chooseTheme}>default</button>
        <AppRouter/>
      </Box>
    </ThemeProvider>
  );
}

export default hot(module)(App);