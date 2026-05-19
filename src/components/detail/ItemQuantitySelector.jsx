import { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";


export default function ItemQuantitySelector({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onQuantityChange(newQty);
    }
  };

  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onQuantityChange(newQty);
  };

  return (
    <InputGroup className="mb-3" style={{ maxWidth: "150px" }}>
      <Button 
        variant="outline-secondary" 
        onClick={handleDecrement}
        disabled={quantity <= 1}
        aria-label="Disminuir cantidad"
      >
        -
      </Button>
      
      <FormControl
        type="text"
        value={quantity}
        readOnly
        className="text-center fw-bold"
        aria-label="Cantidad seleccionada"
      />
      
      <Button 
        variant="outline-secondary" 
        onClick={handleIncrement}
        aria-label="Aumentar cantidad"
      >
        +
      </Button>
    </InputGroup>
  );
}