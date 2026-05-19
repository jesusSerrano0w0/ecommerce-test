import { Table, Button } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPrice } from "../../utils/formatPrice";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Brief({ cart }) {
  const { removeFromCart } = useCart();

  return (
    <div className="table-responsive bg-white p-3 rounded shadow-sm">
      <Table striped hover responsive className="align-middle">
        <thead className="table-light">
          <tr>
            <th>Producto</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Cant.</th>
            <th className="text-center">Subtotal</th>
            <th className="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="fw-medium">{item.title}</td>
              <td className="text-center">{formatPrice(item.price)}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center fw-bold">{formatPrice(item.price * item.quantity)}</td>
              <td className="text-center">
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}