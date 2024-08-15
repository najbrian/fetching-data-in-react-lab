import StarshipCard from "./StarshipCard"

const StarshipList = ({ ships }) => {
  const allShips = ships.map((ship) => <StarshipCard key={ship.name} ship={ship} />)

  return (
    <div className="list-container">
      {allShips}
    </div>
  )
}

export default StarshipList