const root = document.querySelector("#root");

function App() {
  const [count, upCount] = React.useState(0);
  const [klik, setKlik] = React.useState(false);
  React.useEffect(
    function () {
      console.log("exec");
    },
    [klik]
  );
  return (
    <>
      <h1 id="judul"> Hallo ini judul </h1>
      <button
        onClick={() => {
          setKlik(true);
        }}
      >
        klik aku{" "}
      </button>
      <button
        onClick={() => {
          upCount(count + 1);
        }}
      >
        Tambah
      </button>
      <span> Nilai sekarang {count}</span>
    </>
  );
}

ReactDOM.render(<App />, root);
