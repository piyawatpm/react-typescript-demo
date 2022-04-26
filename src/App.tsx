import { Children } from "react";
import "./App.css";
import ChildrenType from "./components/ChildrenType";
import EnumType from "./components/EnumType";
import FunctionType from "./components/FunctionType";
import Greet from "./components/Greet";
import PlayGround from "./components/PlayGround";
const personName = {
  first: "piyawat",
  last: "mahattanasawat",
};
const birthDate = [18, 4, 1999];
const objectArrayDiffrent = [
  {
    key1: "string1",
    key2: "string2",
  },
  {
    key1: 1999, //use union type
    key2: "string2",
  },
  {
    key1: "string1", //use optional type
  },
  {
    key1: "string or arraystring", //use optional type
    key3: "key3 string",
  },
  {
    key1: "string or arraystring", //use optional type
    key3: ["a", "b", "c"],
  },
  {
    key1: "string or arraynumber", //use optional type
    key3: [1, 2, 3, 4],
  },
  {
    key1: "string or arrayboolean", //use optional type
    key3: [true, false, true, true],
  },
  {
    key1: "string or arrayboolean", //use optional type
    key3: {
      name: "piyawatmahat",
      nickName: "Art",
    },
  },
];
const HeadingComp = ()=>{
  return(
    <h1>Heading Component</h1>
  )
}
function App() {
  return (
    <div className="App">
      {/* <Greet
        name="piyawat"
        messageCount={20}
        personName={personName}
        birthDate={birthDate}
        objectArrayDiffrent={objectArrayDiffrent}
      />
      <ChildrenType>
        <HeadingComp></HeadingComp>
      </ChildrenType> */}
      {/* <FunctionType/> */}
      {/* <EnumType/> */}
      <PlayGround/>
    
    </div>
  );
}

export default App;
