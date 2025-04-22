import { useContext } from "react";
import { DogContext, DogData } from "../store/DogData";
import { DogDiv } from "./DogDiv";

export function DogComponent(){
    const data = useContext(DogContext);

    return(
        <div className="dog-component">
            {data ? (
                <DogDiv />
            ) : (
                <div className="no-data-message">
                    <h3>🐕 Woof! No Data Found 🐕</h3>
                    <p>Try searching for a different breed!</p>
                </div>
            )}
        </div>
    );
}