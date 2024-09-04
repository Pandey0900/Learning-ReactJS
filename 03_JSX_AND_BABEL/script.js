const container = (
  <div className="container" id="container">
    <section>
      <p>Creating Element in React</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
        style={{ width: 200 }}
      />
    </section>
    <section>
      <form>
        <div className="Input-group">
          <label htmlFor="username">username</label>
          <input id="username" />
        </div>
        <div className="Input-group">
          <label htmlFor="password">password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector(".root"));

const user = "Saurabh Pandey";
const h2 = <h2>Hello {user}</h2>; // here by {} we can use value


root.render(container);


/* 
we use JSX (JavaScript XML) and the Babel library to create elements in React. This approach helps reduce code length and improve readability 
*/