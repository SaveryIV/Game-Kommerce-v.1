function ProductCard({titles, description, price, id,addToCart}) {

  return (
    <table style={{ 
      width: "100%", 
      borderCollapse: "collapse", 
      margin: "30px auto", 
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
      backgroundColor: "black"
    }}>
      <tbody>
        <tr style={{ 
          backgroundColor: "#fff", 
          border: "1px solid #e5e5e5", 
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)", 
          borderRadius: "5px" 
        }}>
          <td style={{ 
            verticalAlign: "top", 
            textAlign: "center", 
            width: "30%", 
            padding: "20px", 
            fontFamily: "Arial, sans-serif",
            borderRight: "1px solid #e5e5e5"
          }}>
            <h1 style={{ fontSize: "24px", margin: "0" }}>{titles}</h1>
            <p style={{ fontSize: "18px", color: "#999", margin: "10px 0" }}>{description}</p>
          </td>
          <td style={{ 
            verticalAlign: "top", 
            textAlign: "center", 
            width: "20%", 
            padding: "20px", 
            borderRight: "1px solid #e5e5e5"
          }}>
            <h4 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>$ {price}</h4>
          </td>
          <td style={{ 
            verticalAlign: "top", 
            textAlign: "center", 
            width: "20%", 
            padding: "20px", 
            borderRight: "1px solid #e5e5e5"
          }}>
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
                addToCart(titles, price, id) 
              }}>
              Añadir al carrito
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ProductCard