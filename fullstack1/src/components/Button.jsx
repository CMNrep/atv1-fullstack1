function Button({ text }) {
  const handleClick = () => {
    alert('Porque clicou aqui?');
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
