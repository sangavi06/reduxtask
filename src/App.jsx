import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Comonents/Header';
import ProductList from './Comonents/ProductList';
import { Provider } from 'react-redux';
import { ProductStore } from '../Features/ProductStore';
import React from 'react'

const App = () => {
  return (
    <>
      <Provider store={ProductStore}>
      <Header />
      <ProductList />
    </Provider>
    </>
  )
}

export default App
