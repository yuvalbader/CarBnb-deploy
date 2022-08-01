import React from 'react';
import PhotoSwiper from '../../components/PhotoSwiper/PhotoSwiper';
import './style.css';
import { useLocation } from 'react-router-dom';
import SideSearch from '../../components/SideSearch/SlideSearch';
import { Overview } from '../../components/Overview/Overview';
import Features from '../../components/Features/Features';
export const Car = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="photoSwiper_container">
      <div className="photo_swiper">
        <PhotoSwiper />
      </div>
      <div className="details_container">
        <div className="left_side_container">
          <Overview state={state} />
          <Features state={state} />
        </div>
        <div className="right_side_container">
          <div className="side_search">
            <SideSearch state={state} />
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
