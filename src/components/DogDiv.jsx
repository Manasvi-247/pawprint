import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { DogContext} from "../store/DogData";

export function DogDiv(){
    const data = useContext(DogContext)
    const navigate = useNavigate();
    
    return(
        <div className="dog-div-container">
            <div className="dog-card" onClick={() => navigate(`/dog/${data[0].name}`)}>
                <div className="dog-image-container">
                    <img 
                        src={data[0].image_link} 
                        alt={data[0].name}
                        className="dog-image"
                    />
                </div>
                <h2 className="dog-name">{data[0].name}</h2>
                <p className="click-hint">Click to see more details! 🐾</p>
            </div>
        </div>
    );
}