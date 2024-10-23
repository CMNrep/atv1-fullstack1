
import ItemLista from './ItemLista';
import Button from './Button';
import BtnLouco from './BtnLouco.jsx';

function Main() {
  const items = ['Batata', 'teste', 'sei-la', 'sem criavidade'];

  const Click = () => {
    alert('não entenda errado');
  };

  return (
    <main className="main-content">
      <ItemLista items={items} />
      <Button text="Não clique aqui" />
      <BtnLouco text="Sou difenciado" onClick={Click} />
    </main>
  );
}

export default Main;