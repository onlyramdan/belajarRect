const root = document.querySelector("#root");
function App() {
  const [count, upCount] = React.useState(0);
  const [klik, setKlik] = React.useState(false);
  React.useEffect(function () {
    console.log(document.getElementById("judul"));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, " Hallo ini judul "), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setKlik(true);
    }
  }, "klik aku", " "), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      upCount(count + 1);
    }
  }, "Tambah"), /*#__PURE__*/React.createElement("span", null, " Nilai sekarang ", count));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);