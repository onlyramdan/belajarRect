const root = document.querySelector("#root");

function App() {
  const state = React.useState(0);
  console.log(state);
  const count = state[0];
  const upCount = state[1];
  return (
    <>
      <button
        onClick={() => {
          upCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          upCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
