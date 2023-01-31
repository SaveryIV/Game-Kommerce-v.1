import { items } from "./Items";
import ProductCard from "./ProductCard";
import ShoppingCart from './ShoppingCart'
import { useState, useEffect } from "react";

function ProductList() {

  const [cart, setCart] = useState([])

  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(items);
  }, []);

  const addToCart = (title, price, id) => {
    const cantidad = cart.find((product) => product.id === id)
    if (cantidad) {
      cantidad.quantity +=1;
      setCart([...cart])
    } else {
      setCart([...cart, {title, price, quantity: 1, id}])
    }
  }
  
  const deleteFromCart = (id) => {
    setCart(cart.filter( product => product.id !== id))
  }
  
  return (
    <>
      {card.map((crd, id) => (
  <ProductCard key={crd.id} titles={crd.title} description={crd.description} name={crd.name} price={crd.price} id={crd.id} addToCart={addToCart}  card={card} />
))}

      <ShoppingCart cart={cart} deleteFromCart={deleteFromCart}/>
    </>
  );
}

export default ProductList;