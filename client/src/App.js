import logo from './logo.svg';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Navigation/NavParent';
import CategoryBar from './components/CategoryBar/CategoryBar';
import Home from './components/Home';
import Signout from './components/Signout';
import ProductList from './components/ProductPage/ProductList';
import Product from './components/Product/Product';
import Pay from './components/Payment/Pay';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Category from './components/PopularCategories/Category';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/pay" >
                  <Pay />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/searchedProducts">
                <Nav />
                <CategoryBar />
                <ProductList />
            </Route>
            <Route exact path="/product">
                <Nav />
                <CategoryBar />
                <Product />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/signout">
                <Signout />
            </Route>
          </Switch>
         
          
        </div>
      </Router>
    </Provider>  
  );
}

export default App;
