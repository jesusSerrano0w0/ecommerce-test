import { useCart } from "../../context/CartContext";
import { Badge, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="text-decoration-none position-relative">
      <Button variant="light" size="sm">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
      {totalItems > 0 && (
        <Badge
          bg="danger"
          pill
          className="position-absolute top-0 start-100 translate-middle"
        >
          {totalItems}
        </Badge>
      )}
    </Link>
  );
}