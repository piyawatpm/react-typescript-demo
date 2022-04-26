type NameNick = {
  name: string;
  nickName: string;
};
type ObjectArrayDiffrent = {
  key1: string | number;
  key2?: string;
  key3?: string | string[] | number[] | boolean[] | NameNick;
};
type GreetProps = {
  name: string;
  messageCount: number;
  personName: {
    first: string;
    last: string;
  };
  birthDate: number[];
  objectArrayDiffrent: ObjectArrayDiffrent[];
};
const Greet = ({
  name,
  messageCount,
  personName,
  birthDate,
  objectArrayDiffrent,
}: GreetProps) => {
  return (
    <div>
      Hello {name} messageCount = {messageCount}
      <br />
      fullname = {personName.first} {personName.last}
      <br />
      Array
      {birthDate.map((i) => {
        return <>{i} </>;
      })}
      <br />
      {objectArrayDiffrent.map((i) => {
        return (
          <>
            {i.key1} {i.key2}
            <h1>Array</h1>
            {typeof i.key3 === "object" ? (
              Array.isArray(i.key3) ? (
                i.key3.map((arr) => {
                  // array
                  return <> loopkey3 = {arr}</>;
                })
              ) : (
                <>
                  <hr />
                  <h1>object </h1>
                  {/* object */}
                  {i.key3.name} nickName = {i.key3.nickName}
                </>
              )
            ) : (
              //string or undifined
              i.key3
            )}
            <br />
          </>
        );
      })}
      <hr />
    </div>
  );
};

export default Greet;
