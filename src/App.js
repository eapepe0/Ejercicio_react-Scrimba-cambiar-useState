import React from "react";

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  /* como valor inicial tenemos el true */

  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
    /* la funcion callback recibe el estado anterior , y devuelve lo contrario */
  }
  return (
    <div className="state">
      <h1 className="state--title">¿Tenes ganas de salir esta noche?</h1>
      <div onClick={changeMind} className="state--value">
        {/* usamos en onClick la funcion changeMind */}
        <h1>{isGoingOut ? "Si" : "No"}</h1>
        {/* usamos un ternario si isGoingOut es verdadero ,mostramos "Si" de lo contratio "NO" */}
      </div>
    </div>
  );
}
