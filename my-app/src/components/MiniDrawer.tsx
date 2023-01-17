import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import DescriptionIcon from '@mui/icons-material/Description';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Badge from '@mui/material/Badge';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const myTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'rgba(255, 255, 255, 0.3)',
      },
    },
  });

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const messageBadges = () => {
    return (
        <Badge badgeContent={4} color="primary">
            <MapsUgcIcon />
        </Badge>
    );
  }

  return (
    <ThemeProvider theme={myTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color={'primary'}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography mt={2} variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Good Morning, Adam
          </Typography>
          <Stack direction="row" spacing={2}>
            <ColorButton variant="contained"> + Add Project</ColorButton>
            <Avatar alt="" src="../../public/logo512.png" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Projects', 'Dashboard', 'Messages', 'Documents', 'Organizations', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {text === 'Home' && <HomeIcon />}
                    {text === 'Projects' && <PendingActionsIcon />}
                    {text === 'Dashboard' && <DashboardIcon />}
                    {text === 'Messages' && messageBadges()}
                    {text === 'Documents' && <DescriptionIcon />}
                    {text === 'Organizations' && <CorporateFareIcon />}
                    {text === 'Settings' && <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {text === 'Logout' && <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1, width: '40%' }}>
        <DrawerHeader />
        <Grid direction='row' container spacing={1}>
        <Grid container item sx={{xs:12, sm:6}}>
        <Paper elevation={2} sx={{ width: '45%'}} >
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                    label="First Name"
                    id="firstName"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </InputAdornment>,
                    }}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        label="Last Name"
                        id="lastName"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            </InputAdornment>,
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        label="Display Name"
                        id="displayName"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <ContactsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            </InputAdornment>,
                        }}
                    />
                </Grid>

                <Grid item>
                    <TextField
                            label="Email"
                            id="email"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                </InputAdornment>,
                            }}
                        />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        label="Phone No (Home)"
                        id="phoneNoHome"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            </InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Phone No (Work)"
                        id="PhoneNoWork"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            </InputAdornment>,
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item>
                    <TextField
                        label="Location"
                        id="location"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            </InputAdornment>,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid sx={{margin: '3%'}}>
                <ColorButton variant="contained"> Save Changes </ColorButton>
            </Grid>
        </Paper>
        </Grid>
        <Grid container item justifyContent={'flex-end'} sx={{xs:6, sm:3, marginTop: '-28%'}}>
            <Paper elevation={2} sx={{ width: '20%', height:320, padding: '1%'}} variant={'outlined'} >
                <Grid container>
                        <Grid item>
                            <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                                alt="Camera"
                            />
                            <CardContent>
                                <Typography variant="h6" color="text.secondary">
                                    Adam Levine
                                </Typography>
                                <Typography variant="body2">
                                    adamlevine@kyro.us
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Paper>
        </Grid>
        </Grid>
        
      </Box>
      
    </Box>
    
      
      
    </ThemeProvider>
  );
}