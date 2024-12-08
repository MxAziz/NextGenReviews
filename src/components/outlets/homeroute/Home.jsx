import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import HighestRatedGames from './HighestRatedGames';
import TooltipExample from './TooltipExample';

const Home = () => {
    return (
      <div>
        <Banner></Banner>

        <TooltipExample></TooltipExample>
        {/* Highest Rated Game section */}
        <HighestRatedGames></HighestRatedGames>

        {/* extra section */}
        <ExtraSection></ExtraSection>
      </div>
    );
};

export default Home;