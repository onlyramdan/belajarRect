const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);

  React.useEffect(function () {
    judulRef.current.textContent = "App";
  }, []);
  return (
    <>
      <h1 ref={judulRef}>Aplication</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
