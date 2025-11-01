import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <ProductList />
      </Layout>
    </>
  );
}

export default App;
