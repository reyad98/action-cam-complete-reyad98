import React from 'react';
import Addservice from '../../AddService/AddService/Addservice';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeDetails from '../HomeDetails/HomeDetails';
import ShowProduct from '../ShowProduct/ShowProduct';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <TopBanner></TopBanner>
          <ShowProduct></ShowProduct>
        
        </div>
    );
};

export default Home;