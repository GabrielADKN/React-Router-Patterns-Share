import dogs from "../db.json";
import { useParams, Link } from "react-router-dom";

const DogDetails = () => {

    const { name } = useParams();
    const dog = dogs.dogs.find(dog => dog.name === name);

    if (!dog) {
        return <p>Dog not found</p>
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={dog.src} alt={dog.name} className="card-img-top"/>
            <h3 className="card-title">{dog.name}</h3>
            <p className="card-text">Age: {dog.age}</p>
            <p className="card-text">Facts: </p>
            <ul className="list-group list-group-flush">
                {dog.facts.map((fact, index) => (
                    <li key={index} className="list-group-item">{fact}</li>
                ))}
            </ul>
            <Link to="/dogs" className="btn btn-primary">Home</Link>
        </div>
    )
}

export default DogDetails