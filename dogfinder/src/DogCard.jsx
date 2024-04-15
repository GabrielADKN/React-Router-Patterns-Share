import "./DogCard.css"
import { Link } from "react-router-dom";

const DogCard = ({ dog }) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={dog.src} alt={dog.name} className="card-img-top"/>
            <h3 className="card-title">{dog.name}</h3>
            <p className="card-text">Age: {dog.age}</p>
            <Link to={`/dogs/${dog.name}`} className="btn btn-primary">More Info</Link>
        </div>
    );
}

export default DogCard