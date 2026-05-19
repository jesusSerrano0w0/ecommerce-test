import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPrice } from "../../utils/formatPrice";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Item({ id, title, price, image }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold text-primary">{formatPrice(price)}</Card.Text>
        <Link to={`/item/${id}`} className="mt-auto">
          <Button variant="outline-primary" className="w-100">
            <FontAwesomeIcon icon={faEye} /> Ver detalle
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}