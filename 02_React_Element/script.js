const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement(
      "section",
      { key: 1 },
      React.createElement("p", { key: 1 }, "Creating Element in React"),
      React.createElement('img',  
        { key:2,style:{width:200},src:`https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg`},
      )
    ),
    React.createElement(
      "section",
      { key: 2},
      React.createElement("form", { key: 1}, [
      React.createElement('div',{className:'Input-group',key:1},[
        React.createElement('label',{key:1,htmlFor:'username'},'username'),
        React.createElement('input',{key:2,id:"username"},)
      ]),
      React.createElement('div',{className:'Input-group',key:2},[
        React.createElement('label',{key:1,htmlFor:'password'},'password'),
        React.createElement('input',{key:2,id:"password"},)
      ]),
      
      ]),
      
    )
  ]
);
const root = ReactDOM.createRoot(document.querySelector(".root"));

/*
here are poperties which React.createElement gives so we can create by properties Also
const h2 = {
  $$typeof: Symbol.for('react.element'), //we use $$typeof because symbol cannot be pass thrugh JSON
  type: "h2",
  key: null,
  ref: null,
  props: {
    className: "heading",
    id: "subtitle",
    children: "react element",
  },
  
};

*/

root.render(container);

/*
//we will see how we create Element do in DOM JS and Why we use React Element ?

const h2=document.createElement('h2');
h2.innerText="Cerate element in JS"
document.querySelector(".root").append(h2);
console.dir(h2)

// reason: Creating elements in JavaScript using the DOM results in a lot of properties, making them heavy. 
// In contrast, creating elements in React involves fewer properties, which makes them faster.

*/
