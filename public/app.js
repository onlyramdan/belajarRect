const root = document.querySelector("#root");
function App() {
  const state = React.useState(0);
  console.log(state);
  const count = state[0];
  const upCount = state[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      upCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      upCount(count + 1);
    }
  }, "+"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);