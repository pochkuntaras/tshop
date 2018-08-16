import React from 'react';
import Catalog from './components/Catalog';
import CartLabel from './components/CartLabel';
import Cart from './components/Cart';
import products from './constants/Products';

const App = () => (
  <div style={{position: 'relative'}}>
    <CartLabel quantity={3} />
    <Cart />
    <Catalog products={products} />
  </div>
);

export default App;
