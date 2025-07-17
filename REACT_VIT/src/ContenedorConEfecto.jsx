import { useEffect, useState } from "react";

function ContenedorConEfecto() {
  const [golosinas, setGolosinas] = useState(0);

  useEffect(() => {
    console.log("Comí una golosina");
  }, [golosinas]);
  return (
    <div>
      <p>He comido {golosinas} golosinas</p>
      <button onClick={() => setGolosinas(golosinas + 1)}>
        Comer golosina
      </button>
    </div>
  );
}

export default ContenedorConEfecto;
