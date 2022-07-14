import React from 'react';
import styled from 'styled-components';
import mealsImage from '../../assets/meals.jpg';

const OverviewImg = () => {
    const CoverImage = styled.div`
        width: 100%;
        height: 25rem;
        z-index: 0;
        overflow: hidden;

        & > img{
            width: 110%;
            height: 100%;
            object-fit: cover;
            transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
        }
    `;

  return (
    <CoverImage>
        <img src={mealsImage} alt='overview'/>
    </CoverImage>
  )
}

export default OverviewImg