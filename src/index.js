import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><App /> <ProductListing/></div>}></Route>
        <Route path='/product' element={<div><ProductDetails/></div>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

