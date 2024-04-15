import dogs from "../db.json";
import DogCard from "./DogCard";

export default function DogList() {
    return (
        <section className="cards">
            {dogs.dogs.map((dog) => (
                <DogCard key={dog.name} dog={dog} />
            ))}
        </section>
    );
}