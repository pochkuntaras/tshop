import React from 'react';
import Catalog from './components/Catalog';
import CashVoucher from './components/CashVoucher';
import products from './constants/Products';

const App = () => (
  <div>
    <CashVoucher lineItems={products} />
    <Catalog products={products} />
  </div>
);

export default App;
