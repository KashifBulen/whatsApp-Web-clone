import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


// import React from 'react';
// import { DrawerProvider } from '../context/Drawercontext';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   const theme = createTheme({
//     palette: {
//       mode: 'light', // Default mode, can be overridden by the DrawerContext
//     },
//   });

//   return (
//     <DrawerProvider>
//       <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </MuiThemeProvider>
//     </DrawerProvider>
//   );
// }

// export default MyApp;
