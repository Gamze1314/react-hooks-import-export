import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain"
import * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees)
console.log(RMFunctions.wildlife())
console.log(RMFunctions.elevation()) // error => elevation is not a default export

const wildLifeResult =  wildlife()

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <h1>{wildLifeResult}</h1> {/* Use the variable in JSX */}
    </div>
  );
}

export default ColoradoStateParks
