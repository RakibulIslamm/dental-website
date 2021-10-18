import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Doctors from './Pages/Doctors/Doctors';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import ContextProvider from './Context/ContextProvider';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
