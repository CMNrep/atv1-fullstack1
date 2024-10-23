import './BtnLouco.css'; 
function BtnLouco({ text, onClick }) {
  return (
    <button className="btnL" onClick={onClick}>
      {text}
    </button>
  );
}

export default BtnLouco;