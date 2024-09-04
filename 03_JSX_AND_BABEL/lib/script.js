const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "Creating Element in React"), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
  style: {
    width: 200
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "Input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "username"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "Input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "password"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));
const root = ReactDOM.createRoot(document.querySelector(".root"));
const user = "Saurabh Pandey";
const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", user); // here by {} we can use value

root.render(container);

/* 
we use JSX (JavaScript XML) and the Babel library to create elements in React. This approach helps reduce code length and improve readability 
*/