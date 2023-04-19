const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);
  React.useEffect(function () {
    judulRef.current.textContent = "App";
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Aplication"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);