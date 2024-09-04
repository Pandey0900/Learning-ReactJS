import { createRoot } from "react-dom/client";
import "./style.css";
import React  from "react";
// const h1 = <h1>Hello World</h1>

function Card(props) {
  console.log(props);
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="i phone" />
      <div className="card-contain">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

// const container = [card(1), card(2), card(3), card(4), card(5)];
const root = createRoot(document.getElementById("root"));

// root.render(<div className="container">{container}</div>);
// console.log('Hello world!!!')
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const container2 = data.products.map((product) => {
      return <Card
         title={product.title}
        price={product.price}
        key={product.id}
        image={product.thumbnail}
        brand={product.brand}
      />
    });

    root.render(<div className="container">{container2}</div>);
  });

const h1 = <h1>Hello</h1>;

//  root.render({
//   $$typeof: Symbol.for('react.element'),
//   type:'h1', // if there is string then it create DOM element and set the properties of props as attribute
//   ref:null,
//   props:{
//      children:'udtechs'
//   }})

// root.render({
//   $$typeof:Symbol.for('react.element'),
//   type:card, //here this is work as function and it pass all props as parameter
//   ref:null,
//   props:{
//     key:1,
//     title:'iPhone 15Pro',
//     image:'https://www.91-img.com/gallery_images_uploads/a/0/a0bd43abff0119aa6ab56a2aa6d2b998a5b8c05c.jpg?tr=h-630,c-at_max,q-80',
//     brand:'Apple',
//     price:'1500'

//   }
// })

// React component :- it is a rect element(object) which type is function and that function return react element(JSX).

// console.log(
//   React.createElement(card, {
//     key: 1,
//     title: "iPhone 15Pro",
//     image:
//       "https://www.91-img.com/gallery_images_uploads/a/0/a0bd43abff0119aa6ab56a2aa6d2b998a5b8c05c.jpg?tr=h-630,c-at_max,q-80",
//     brand: "Apple",
//     price: "1500",
//   })
// );

// root.render(
//   React.createElement(card, {
//     title: "iPhone 15Pro",
//     image:
//       "https://www.91-img.com/gallery_images_uploads/a/0/a0bd43abff0119aa6ab56a2aa6d2b998a5b8c05c.jpg?tr=h-630,c-at_max,q-80",
//     brand: "Apple",
//     price: "1500",
//   })
// );

// root.render(
//   <Card
//     title="iPhone 15Pro"
//     image="https://www.91-img.com/gallery_images_uploads/a/0/a0bd43abff0119aa6ab56a2aa6d2b998a5b8c05c.jpg?tr=h-630,c-at_max,q-80"
//     brand="Apple"
//     price="1500"
//   />
// )
// React component:- reusable pic of UI(once we created we can use more)