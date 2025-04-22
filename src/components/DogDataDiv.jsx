import { useContext } from "react";
import { DogContext} from "../store/DogData";

export function DogDataDiv({func}){
    const data = useContext(DogContext);
    
    return(
        <div className="dog-details-container">
            <div className="dog-details-card">
                <div className="dog-header">
                    <img 
                        src={data[0].image_link} 
                        alt={data[0].name}
                        className="dog-detail-image"
                    />
                    <h2 className="dog-detail-name">{data[0].name}</h2>
                </div>
                
                <div className="dog-stats">
                    <div className="stat-group">
                        <h3>Life Expectancy</h3>
                        <p>{data[0].min_life_expectancy} - {data[0].max_life_expectancy} Years</p>
                    </div>
                    
                    <div className="stat-group">
                        <h3>Personality Traits</h3>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <span>Playfulness</span>
                                <div className="rating">{data[0].playfulness}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Protectiveness</span>
                                <div className="rating">{data[0].protectiveness}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Trainability</span>
                                <div className="rating">{data[0].trainability}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Energy Level</span>
                                <div className="rating">{data[0].energy}/5</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stat-group">
                        <h3>Behavior</h3>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <span>Barking</span>
                                <div className="rating">{data[0].barking}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Shedding</span>
                                <div className="rating">{data[0].shedding}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Grooming Needs</span>
                                <div className="rating">{data[0].grooming}/5</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stat-group">
                        <h3>Compatibility</h3>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <span>With Strangers</span>
                                <div className="rating">{data[0].good_with_strangers}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>With Children</span>
                                <div className="rating">{data[0].good_with_children}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>With Other Dogs</span>
                                <div className="rating">{data[0].good_with_other_dogs}/5</div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="close-button" onClick={func}>
                    🐾 Close Details 🐾
                </button>
            </div>
        </div>
    );
}