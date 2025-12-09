import React, { useState, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';
import { useProducts } from '../../hooks/useProducts';
import { useAuth } from '../../context/AuthContext';

// Estado inicial para el formulario
const INITIAL_FORM_STATE = {
  name: '',
  brand: '',
  price: '',
  imageUrl: '' 
};

const ProductList = () => {
  const { products, isLoading, isError, addProductMutation, isAdding } = useProducts();
  const { isAuthenticated } = useAuth();
  const [newProduct, setNewProduct] = useState(INITIAL_FORM_STATE);

  
  const formRef = useRef(null);
  
  
  if (isLoading) {
    return <p>Cargando zapatillas...</p>;
  }
  if (isError) {
    return <p>Error: No se pudieron cargar los productos.</p>;
  }
  if (!products || products.length === 0) {
      return <p>Aún no hay zapatillas en la tienda. ¡Añade la primera!</p>
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
   
    if (!newProduct.name || !newProduct.brand || !newProduct.price) {
      alert('Por favor, completa los campos de nombre, marca y precio.');
      return;
    }
    
    const productToSend = {
        ...newProduct,
        price: parseFloat(newProduct.price) 
    };

    addProductMutation(productToSend, {
        onSuccess: () => {
            setNewProduct(INITIAL_FORM_STATE);
        }
    });
  };

  return (
    <div>
      {isAuthenticated && (
        <>
          
          <div className={styles.actionsContainer}>
            <button onClick={handleScrollToForm} className={styles.actionButton}>
              Añadir Nueva Zapatilla
            </button>
          </div>

          <form ref={formRef} onSubmit={handleAddProduct} className={styles.form}>
            
            <input 
              type="text" 
              name="name" 
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Nombre del modelo" 
            />
            <input 
              type="text" 
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
              placeholder="Marca" 
            />
            <input 
              type="number" 
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Precio" 
              step="0.01" 
            />
            <input 
              type="text" 
              name="imageUrl"
              value={newProduct.imageUrl}
              onChange={handleChange}
              placeholder="URL de la imagen" 
            />
            <button type="submit" disabled={isAdding}>
              {isAdding ? 'Añadiendo...' : 'Añadir Zapatilla'}
            </button>
          </form>
        </>
      )}
     
      <h3 className={styles.catalogueTitle}>Catálogo</h3>
      <div className={styles.list}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;