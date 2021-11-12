import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Mypart from '../MyPart/Mypart';
import ShowProduct from '../ShowProduct/ShowProduct';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import ShowReview from '../ShowReview/ShowReview';
import FinalReview from '../Reviews/FinalReview/FinalReview';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <TopBanner></TopBanner>
           <ShowProduct></ShowProduct>
           <Mypart></Mypart>
          
           <ShowReview></ShowReview>
          
           <Footer></Footer>
        </div>
    );
};

export default Home;