export default function Button({classname, text, type, func}){

  
  let buttonComp = () => {
    if (func){
      return (<button className={`btn ${classname} ${type}`} onClick={() => func}>{text}</button>)
    }
  }

  return(
    {buttonComp}
  )
}