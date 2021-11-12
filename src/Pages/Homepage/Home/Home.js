import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Mypart from '../MyPart/Mypart';
import ShowProduct from '../ShowProduct/ShowProduct';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <TopBanner></TopBanner>
           <ShowProduct></ShowProduct>
           <Mypart></Mypart>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
    );
};

export default Home;