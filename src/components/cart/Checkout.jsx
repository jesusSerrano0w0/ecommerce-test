import { useCart } from "../../context/CartContext";
import Brief from "./Brief";
import { formatPrice } from "../../utils/formatPrice"; 
import { Button, Container, Row, Col, Alert, Card } from "react-bootstrap";

export default function Checkout() {
  const { cart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="info" className="d-inline-block">
           Tu carrito está vacío. Agrega productos desde el catálogo.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Finalizar Compra</h2>
      <Row className="g-4">
  
        <Col lg={8}>
          <Brief cart={cart} />
        </Col>

        <Col lg={4}>
          <Card className="sticky-top shadow-sm">
            <Card.Body>
              <Card.Title>Resumen de Pago</Card.Title>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Productos:</span>
                <span>{totalItems}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 fw-bold fs-5">
                <span>Total:</span>
                <span className="text-success">{formatPrice(totalPrice)}</span>
              </div>
              <Button 
                variant="success" 
                className="w-100"
                onClick={() => alert("✅ Compra finalizada con éxito (simulado)")}
              >
                Confirmar Compra
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}