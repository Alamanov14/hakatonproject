import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../HomePages/HomePages.css';

const HomePages = () => {
  const navigate = useNavigate();
  return (
    <div className="Main">
      <div className="Block1">
        <h1>Новые поступления в этом сезоне </h1>
        <h3>
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время
          исследовать.
        </h3>
        <button onClick={() => navigate(`/shop`)}>Открыть магазин</button>

        <iframe
          width="560"
          height="315"
          src="C:\Users\Sherm\Desktop\hakatonproject\Content "
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default HomePages;
