function ShoppingCart({cart = [], deleteFromCart}) {

  const total = cart.reduce((acc, {price, quantity}) => acc + (price * quantity), 0)

  return (
  <div style={{ textAlign: "center" }}>
  <hr style={{ border: "1px solid #e5e5e5" }} />
  <h4 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", margin: "30px 0" }}>Carrito de Compras</h4>
  {cart.length > 0 ? (
    cart.map((carts, id) => (
      <div key={id} style={{ display: "flex", justifyContent: "space-between", margin: "30px 0", padding: "20px", backgroundColor: "#fff", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
  <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
    <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>{carts.title}</p>
    <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>$$ {carts.price}</p>
    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>cantidad: {carts.quantity}</p>
  </div>
  <button 
    style={{ 
      backgroundColor: "#333", 
      color: "#fff", 
      padding: "10px 20px", 
      border: "none", 
      borderRadius: "25px", 
      cursor: "pointer",
      transition: "all 0.5s ease", 
      fontWeight: "bold", 
    }}
    onClick={() => deleteFromCart(carts.id)}>
    Eliminar
  </button>
</div>
    ))
  ) : (
    <p style={{ fontSize: "18px", color: "#999", margin: "30px 0" }}>El carrito esta vacio</p>
  )}
  {cart.length > 0 ? (
    <>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333", margin: "30px 0" }}>Subtotal: ${total}</p>
      <button 
        style={{ 
          backgroundColor: "#333", 
          color: "#fff", 
          padding: "10px 20px", 
          border: "none", 
          borderRadius: "25px", 
          cursor: "pointer",
          transition: "all 0.5s ease", 
          fontWeight: "bold" 
        }}
        onClick={() => {
          alert("Compra finalizada")
        }}>
        Finalizar Compra
      </button>
    </>
  ) : (
    ""
  )}    
  </div>
  )
}

export default ShoppingCart;