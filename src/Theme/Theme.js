import { createTheme } from '@mui/material/styles';


const theme = createTheme({

    palette: {
      mode: 'dark',
      primary: {
        main: '#DA7767',
      }
    },
    
    components: {
      MuiListItemButton: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: `linear-gradient(180deg, #9F6CCB 0%, #DA7767 100%);`,
            borderRight: 'none',
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: `#2C2C32`,
            borderRadius: '1.2em',
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          subtitle1: {
            color: '#7F7F90',
            fontWeight:600
          },
          // h6: {
          //   color: '#7F7F90',
          // }
        }
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "bold" },
            style: {
              fontWeight: "bold",
              border: `4px solid red`,
              color: "orange",
            }
          }
        ]      
      }
    },
    typography: {
      fontFamily: 
        '"Cairo", sans-serif',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': ['Cairo'],
        },
      },
    },
    shape: {
      borderRadius: 6,
    },
    
    
  });

  export default theme