import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Appoinment from './Components/Appoinment/Appoinment';
import Department from './Components/Department/Department';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AuthProvider from './Components/Hooks/AuthProvider';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Specialist from './Components/Specialist/Specialist';
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home> </Home>
            </Route>
            <Route path="/home">
              <Home> </Home>
            </Route>
            <Route path="/specialist">
              <Specialist></Specialist>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/department">
              <Department></Department>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/appoinment">
              <Appoinment></Appoinment>
            </Route>
            <Route path="/details">
              <Details></Details>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
