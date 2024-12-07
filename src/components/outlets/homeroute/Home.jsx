import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import HighestRatedGames from './HighestRatedGames';

const Home = () => {
    return (
      <div>
        <Banner></Banner>

        {/* Highest Rated Game section */}
        <HighestRatedGames></HighestRatedGames>

        {/* extra section */}
        <ExtraSection></ExtraSection>
      </div>
    );
};

export default Home;