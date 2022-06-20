import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { stories } from '../../../utils/data';

const Stories = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    
  };
  return (
    <>
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id}>
            <div className="m-1 relative cursor-pointer overflow-hidden rounded-lg">
              <img
                src={story.url}
                className="hover:scale-105 transition-transform duration-200 ease-in"
              />
              <h1 className="absolute bottom-1 text-primary font-semibold pl-2 text-sm">
                {story.name}
              </h1>
              <div className="absolute border-facebook rounded-full border-4 top-2 left-2">
                <img
                  src={story.url}
                  alt=""
                  className=" w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Stories;
