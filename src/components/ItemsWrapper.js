const ItemsWrapper = (props) => {
  return (
    <div style={
        {
          display: "flex",
          border: "1px solid",
          justifyContent: "space-between"
       }}>

     

      {props.children}
      
    </div>
  )
}

export default ItemsWrapper