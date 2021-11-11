import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}   from "react-router-dom";
import Home from './Pages/Homepage/Home/Home';
import Addservice from './Pages/AddService/AddService/Addservice';
import DetailsPage from './Pages/DetailsPage/DetailsPage/DetailsPage';
import AddAllServices from './Pages/AddService/AddAllServices/AddAllServices';
import TogetherAdd from './Pages/AddService/TogetharAdd/TogetherAdd';
import Showallproducts from './Pages/DetailsPage/ShowallProducts/Showallproducts';
import Payment from './Pages/DetailsPage/Payment/Payment';
import Purches from './Pages/DetailsPage/Purches/Purches';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Expurches from './Pages/DetailsPage/ExPurches/Expurches';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Authprovider from './contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
     <Authprovider>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/addservice">
          <TogetherAdd></TogetherAdd>
         </Route>
         <Route path="/detailspage">
          <Showallproducts></Showallproducts>
         </Route>
         <Route path="/payment">
         <Payment></Payment>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
           </Route>
         <Route path="/purches/:serviceId">
           <Navigation></Navigation>
         <Purches></Purches>
         </Route>
         <Route path="/expurches/:serviceId">
           <Navigation></Navigation>
        <Expurches></Expurches>
         </Route>
         {/* <Route path="/addallservices">
           <AddAllServices></AddAllServices>
         </Route> */}
       </Switch>
     </Router>
     </Authprovider>
    </div>
  );
}

export default App;
