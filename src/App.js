import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Home from "./Home";
import Posts from './Posts';





function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/facts/:post_id' component={Posts}/>
    </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
