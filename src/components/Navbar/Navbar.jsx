import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Block, Favorite } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { display, style } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar className="NavbarMain" position="static" id="app_bar">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: ' 0 200px',
            color: 'black',
          }}>
          <Box className="left" sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="a" href="/" marginBottom="-10px" marginRight="200px">
              <img src="https://i.ibb.co/DYY9Lks/image.png" alt="image" border="0" />
            </Typography>
            <Typography id="Navbar_Navigation" sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  textTransform: 'none',
                }}>
                Главная
              </Button>
              <Button
                className="NavbarButton"
                variant="h6"
                component="a"
                onClick={() => navigate('/shop')}
                sx={{
                  textTransform: 'none',
                }}>
                Магазин
              </Button>
              <Button
                className="NavbarButton"
                variant="h6"
                component="a"
                onClick={() => navigate('/about')}
                sx={{
                  textTransform: 'none',
                }}>
                О бренде
              </Button>
              <Button
                className="NavbarButton"
                variant="h6"
                component="a"
                onClick={() => navigate('/contact')}
                sx={{
                  textTransform: 'none',
                }}>
                Контакты
              </Button>
            </Typography>
          </Box>

          <Box className="Right" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="a"
              href="tel:+720(495)20823-54-12"
              sx={{ display: 'flex', alignItems: 'center', marginRight: '200px' }}>
              <CallIcon />
              <p> +7 (495) 823-54-12</p>
            </Box>
            <LocalMallIcon onClick={() => navigate('/contact')} />
            <Favorite />
            <Button sx={{ textTransform: 'none', color: 'black' }}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
