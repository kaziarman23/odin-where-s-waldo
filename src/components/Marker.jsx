function Marker({ x, y, name }) {
  return (
    <div
      className="absolute text-red-600 font-bold"
      style={{ top: y - 10 + "px", left: x + 10 + "px" }}
    >
      ✔ {name}
    </div>
  );
}

export default Marker;
