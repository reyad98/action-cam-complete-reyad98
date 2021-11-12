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
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ConfrimPurches from './Pages/DetailsPage/ConfrimPurches/ConfrimPurches';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


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
           <Navigation></Navigation>
          <Showallproducts></Showallproducts>
         </Route>
         <Route path="/payment">
         <Payment></Payment>
         </Route>
         <PrivateRoute path="/dashboard">
         <Dashboard></Dashboard>
         </PrivateRoute>
         <Route path="/login">
         <Navigation></Navigation>
           <Login></Login>
         </Route>
         <Route path="/register">
         <Navigation></Navigation>
           <Register></Register>
           </Route>
         <PrivateRoute path="/confrimpurches/:serviceId">
           <Navigation></Navigation>
          <ConfrimPurches></ConfrimPurches>
         </PrivateRoute>
         <PrivateRoute path="/exconfrimpurches/:serviceId">
           <Navigation></Navigation>
          <Expurches></Expurches>
         </PrivateRoute>
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
