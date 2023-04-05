import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../HomePages/HomePages.css';
// import 'react-html5video/dist/style.css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import 'react-html5video/dist/styles.css';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import introVideo from '../../components/Videos/0b1a7a3d87bd6de5de6278d9dc9b8a98.mp4';
import thum from '../../components/Videos/Untitled_1.1.1.jpg';

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
        <h2>Новая коллекция</h2>
        <Button
          className="ButtonOpenShop"
          variant="outlined"
          startIcon={<ArrowForwardRoundedIcon />}
          onClick={() => navigate(`/shop`)}>
          Открыть магазин
        </Button>
      </div>
      <div className="WhatImportant">
        <h2>Что для нас важно</h2>
      </div>
    </div>
  );
};

export default HomePages;
