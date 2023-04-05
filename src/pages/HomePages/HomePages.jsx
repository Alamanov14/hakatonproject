import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../HomePages/HomePages.css';
import './AdaptiveHomePage.css';
// import 'react-html5video/dist/style.css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import 'react-html5video/dist/styles.css';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import introVideo from '../../components/Videos/0b1a7a3d87bd6de5de6278d9dc9b8a98.mp4';
import thum from '../../components/Videos/Untitled_1.1.1.jpg';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SettingsIcon from '@mui/icons-material/Settings';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';

const HomePages = () => {
  const navigate = useNavigate();
  return (
    <div className="Main">
      <div className="Block1">
        <div className="HomeBlock1">
          <div className="TextBlock1">
            <h1>Новые поступления в этом сезоне </h1>
            <p>
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время
              исследовать.
            </p>
          </div>
          <Button
            className="ButtonOpenShop"
            variant="outlined"
            startIcon={<ArrowForwardRoundedIcon />}
            onClick={() => navigate(`/shop`)}>
            Открыть магазин
          </Button>
        </div>
        <div className="mainVideo">
          <Video autoplay loop poster={thum}>
            <source src={introVideo} type="video/webm" />
          </Video>
        </div>
      </div>

      <div className="NewCollectionBlock">
        <h1>Новая коллекция</h1>
        <div className="Collection">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                onClick={() => navigate(`/shop`)}
                component="img"
                height="340"
                image="https://img.joomcdn.net/1ee3bc96647ce46fd4ecdb3d2621f8cdf95333de_1024_1024.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Юбка
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                onClick={() => navigate(`/shop`)}
                component="img"
                height="340"
                image="https://i.pinimg.com/736x/87/3d/23/873d2364df90b0865b21bd04fad5c662.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Пальто
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                onClick={() => navigate(`/shop`)}
                component="img"
                height="340"
                image="https://avatars.mds.yandex.net/i?id=fe4c84e6b6e631d3fde219f96a61799f8759ed72-9198174-images-thumbs&n=13"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Джинсы
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="ButtonOpenShop2">
          <Button
            variant="outlined"
            startIcon={<ArrowForwardRoundedIcon />}
            onClick={() => navigate(`/shop`)}>
            Открыть магазин
          </Button>
        </div>
      </div>
      <div className="WhatImportant">
        <h2>Что для нас важно</h2>
        <div className="abutUS">
          <div className="quality">
            <VerifiedUserIcon fontSize="large" />
            <h3>Качество </h3>
            <p>
              Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного
              качества
            </p>
          </div>
          <div className="speed">
            <SettingsIcon fontSize="large" />
            <h3>Скорость </h3>
            <p>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в
              наших собственных цехах
            </p>
          </div>
          <div className="responsibility">
            <SignLanguageIcon fontSize="large" />
            <h3>Ответсвенность </h3>
            <p>
              Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда -
              все это Womazing
            </p>
          </div>
        </div>
      </div>

      <div className="WishTeamMain">
        <h2>Команда мечты Womazing</h2>
        <div className="WishTeam">
          <div className="Wishimage">
            <img
              src="https://avatars.mds.yandex.net/i?id=fe4c84e6b6e631d3fde219f96a61799f8759ed72-9198174-images-thumbs&n=13"
              alt=""
            />
          </div>

          <div className="WishBlock">
            <h3>Для каждой</h3>
            <p>
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей. Womazing ищет эти
              мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой
              девушки.
            </p>
            <Button className="WishBottom" variant="outlined" onClick={() => navigate(`/about`)}>
              Подробнее о бренде
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
