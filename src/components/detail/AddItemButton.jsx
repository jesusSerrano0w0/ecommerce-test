import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import { useState } from "react";


export default function AddItemButton({ product, quantity }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!product || quantity < 1) return;
    

    addToCart(product, quantity);
    
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Button
      variant={added ? "success" : "primary"}
      onClick={handleAdd}
      disabled={added || quantity < 1}
      className="d-flex align-items-center gap-2 px-4"
      aria-label={`Agregar {quantity} unidad(es) de {product?.title} al carrito`}
    >
      <FontAwesomeIcon icon={added ? faCheck : faCartPlus} />
      {added ? "¡Agregado!" : "Agregar al carrito"}
    </Button>
  );
}