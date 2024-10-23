function ItemLista({ items }) {
  return (
    <div className="item-lista">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemLista;
