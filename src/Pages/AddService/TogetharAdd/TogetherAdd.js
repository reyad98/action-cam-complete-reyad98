import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AddAllServices from '../AddAllServices/AddAllServices';
import Addservice from '../AddService/Addservice';

const TogetherAdd = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Addservice></Addservice>
            <AddAllServices></AddAllServices>
        </div>
    );
};

export default TogetherAdd;