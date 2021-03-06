import { Redirect, Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from "./Navbar"
import Footer from "./Footer"


const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
       <Route exact path = "/" component= {Home} />
       <Route exact path = "/about" component= {About} />
       <Route exact path = "/service" component= {Service} />
       <Route exact path = "/contact" component= {Contact} />
       {/* <Route path="/github"  component = {Footer} /> */}
       <Redirect to = "/" />
       
       
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      
    </div>
  )
}

export default App;