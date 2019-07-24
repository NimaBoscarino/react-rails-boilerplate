import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselSlide from "./CarouselSlide";

export default () => (
  <Carousel infiniteLoop autoPlay={false} showThumbs={false} showStatus={false}>
    <CarouselSlide />

    <div>
      <div className='area-selector'>
        <h1 className='area-selector-hood'>Yaletown</h1>
        <h5 className='area-selector-hood-description'>
          Happening Yaletown is known for its old warehouse buildings now home
          to hip restaurants and cocktail lounges, many with buzzing outdoor
          terraces, as well as indie fashion and decor boutiques. On the
          waterfront, David Lam Park has an expansive lawn and a playground,
          while the Seawall is popular for cycling and walking. Professional
          sports and rock concerts take place at nearby BC Place stadium and the
          Rogers Arena.
        </h5>
      </div>
    </div>

    <div className='area-selector'>
      <h1 className='area-selector-hood'>Mount Pleasant</h1>
      <h5 className='area-selector-hood-description'>
        Mount Pleasant is a largely residential area with gastropubs and indie
        fashion shops on Main Street and chain restaurants in Cambie Village.
        It’s also home to specialist outdoor stores selling kayaks, bikes and
        ski gear. Edgy galleries dot the Flats, an emerging art district in an
        industrial zone, while Science World shows interactive exhibits and IMAX
        films in a geodesic dome.
      </h5>
    </div>

    <div className='area-selector'>
      <h1 className='area-selector-hood'>Kitsilano</h1>
      <h5 className='area-selector-hood-description'>
        Kitsilano is a laid-back residential area known for the huge saltwater
        Kitsilano Pool and mountain views from Kitsilano Beach. Stores selling
        yoga wear, outdoor gear and fashionable clothes line West 4th Avenue,
        the main drag, and dining options range from waterside seafood spots to
        long-standing vegetarian eateries. Cultural attractions include the
        Vancouver Maritime Museum and the H.R. MacMillan Space Centre.
      </h5>
    </div>

    <div className='area-selector'>
      <h1 className='area-selector-hood'>West End</h1>
      <h5 className='area-selector-hood-description'>
        Mostly residential, the easygoing West End offers gay bars in Davie
        Village, chic fashion stores on Robson Street, and diverse dining
        ranging from ramen shops to seafood grills. It’s also the gateway to
        vast Stanley Park, known for its forested trails and Seawall waterfront
        path. The area’s public art includes the A-maze-ing Laughter sculpture,
        featuring 14 cast-bronze figures, and the Inukshuk, a stone Inuit
        statue.
      </h5>
    </div>
  </Carousel>
);
