// // import logo from "./logo.svg";
// // import "./App.css";

// // const imageUrl =
// //   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// // const productPrice = 10.99;
// import Product from './Product';

// function App() {
//   return (
//     // <div>
//     //   <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     //   <h2>Tacos With Lime</h2>
//     //   <p>Price: {productPrice}$</p>
//     //   <button type="button">Add to cart</button>
//     // </div>
//     // <div>
//     //   <img
//     //     src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//     //     alt="Tacos With Lime"
//     //     width="640"
//     //   />
//     //   <h2>Tacos With Lime</h2>
//     //   <p>Price: 10.99$</p>
//     //   <button type="button">Add to cart</button>

//     //   <h1>Best selling products</h1>
//     //   <Product name="Tacos With Lime" />
//     // </div>
//     <div>
//       <h1>Best selling products</h1>
//       <Product
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         name="Tacos With Lime"
//         price={10.99}
//       />
//       <Product
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         name="Fries and Burger"
//         price={14.29}
//       />
//     </div>
//   );
// }

// export default App;

// const Product = ({
//   imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// /*
//  * Визначення defaultProps гарантує, що props.imgUrl матиме значення,
//  * навіть якщо воно не було вказане під час виклику компонента у батька.
//  */
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Product name="Tacos With Lime" price={10.99} />
// );
