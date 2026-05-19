import Item from "./Item";


export default function ItemList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-muted my-5">
        📭 No hay productos para mostrar en esta categoría.
      </p>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 col-sm-6">
          <Item {...product} />
        </div>
      ))}
    </div>
  );
}