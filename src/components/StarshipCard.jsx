import { useState } from "react"

const StarshipCard = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (evt) => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <h2>{props.ship.name}</h2>
      <p>Manufacturer: {props.ship.manufacturer}</p>
      <p>Model: {props.ship.model}</p>
      {isClicked ? 
      <p>Hyperdrive Rating: {props.ship.hyperdrive_rating}</p>
      : <p></p>
    }
    </div>
  )
}

export default StarshipCard