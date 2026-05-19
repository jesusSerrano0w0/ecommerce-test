// src/components/detail/ItemDetail.jsx
import { Card, Row, Col } from "react-bootstrap";
import { useState } from "react"; 
import ItemQuantitySelector from "./ItemQuantitySelector";
import { formatPrice } from "../../utils/formatPrice"; 
import AddItemButton from "./AddItemButton"; 

export default function ItemDetail({ product }) {
  const [selectedQty, setSelectedQty] = useState(1); 

  if (!product) return null;

  return (
    <Card className="shadow-sm p-4">
      <Row className="g-4 align-items-center">
        <Col md={5}>
          <Card.Img
            src={product.image}
            alt={product.title}
            className="rounded img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>
        <Col md={7}>
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted mb-2">Categoría: {product.category}</p>
          <h4 className="text-primary fw-bold mb-3">{formatPrice(product.price)}</h4>
          <p className="mb-4">{product.description}</p>

          <div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
            <ItemQuantitySelector onQuantityChange={setSelectedQty} />
            <AddItemButton product={product} quantity={selectedQty} />
          </div>
        </Col>
      </Row>
    </Card>
  );
}