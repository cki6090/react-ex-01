
function App() {
  const number = 1;

  const double = (number) => {
    return number * 2;
  };

  const printHello = () => {
    console.log('hello')
  };


  return (
    <>
      <div>{double(number)}</div>

      <button onClick={printHello}>Submit</button>
    </>
  );
}

export default App;
