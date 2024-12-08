import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import HighestRatedGames from './HighestRatedGames';
import TypewriterExample from './TypewriterExample';

const Home = () => {
    return (
      <div>
        <Banner></Banner>

        {/* extra section and challenge part */}
        <TypewriterExample></TypewriterExample>
        {/* Highest Rated Game section */}
        <HighestRatedGames></HighestRatedGames>

        {/* extra section */}
        <ExtraSection></ExtraSection>
      </div>
    );
};

export default Home;