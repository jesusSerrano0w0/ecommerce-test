import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../services/api";
import ItemList from "./ItemList";


export default function ItemListContainer({ greeting, category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
      
        const data = category 
          ? await getProductsByCategory(category)
          : await getProducts();
          
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // Estado de carga
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return <div className="alert alert-danger mt-4">{error}</div>;
  }

  // Render principal
  return (
    <div>
      {greeting && <h2 className="mb-4 text-center">{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
}