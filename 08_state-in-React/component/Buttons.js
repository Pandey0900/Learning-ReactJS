
const Buttons = ({imageUrl,Arrows,clickHandler}) => {
    console.log({imageUrl});
  return (
    <button onClick={clickHandler} title={Arrows}>
        <img src={imageUrl} alt={Arrows} />
    </button>
  )
}

export default Buttons