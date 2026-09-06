export default function GroceryRow({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <li className="row">
      <span className="name">{item.name}</span>
      <span className="qty">qty: {item.qty}</span>
      <button onClick={() => onDecrement(item.id)}>-</button>
      <button onClick={() => onIncrement(item.id)}>+</button>
      <button className="remove" onClick={() => onRemove(item.id)}>
        x
      </button>
    </li>
  );
}
