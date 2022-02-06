import React, {useState} from "react";
// run setIsInCart when button is clicked 


function Item({ name, category }) {
  // make array with variable for in cart item and callback func for use Sate of false

  const [isInCart, setIsInCart] = useState(false);
// set the state to inCart of not in cart based on current state
  function handleAddCart(){
    setIsInCart((isInCart)=> !isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button
    // if its in the cart, change the copy to remove, if its not in cart, make it say add

      className={isInCart ? "remove" : "add"}
      // use the click handler on click
      onClick={handleAddCart}
    >
      {isInCart ? "Remove From" : "Add to"} Cart
    </button>
  </li>
);
}

export default Item;
