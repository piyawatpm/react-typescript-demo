
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}
const Inoperator = () => {
  return (
    <div>Inoperator</div>
  )
}

export default Inoperator