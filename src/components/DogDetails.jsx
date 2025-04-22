import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DogContext } from "../store/DogData";
import axios from 'axios';

export function DogDetails() {
    const { breedId } = useParams();
    const navigate = useNavigate();
    const [dogData, setDogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: `https://api.api-ninjas.com/v1/dogs?name=${breedId}`,
                    headers: {
                        'X-Api-Key': import.meta.env.VITE_API_NINJAS_KEY
                    }
                };
                const response = await axios(options);
                if (response.data && response.data.length > 0) {
                    setDogData(response.data[0]);
                } else {
                    setError("Dog breed not found");
                }
            } catch (err) {
                setError("Error fetching dog data");
            } finally {
                setLoading(false);
            }
        };

        fetchDogData();
    }, [breedId]);

    if (loading) {
        return (
            <div className="dog-details-container">
                <div className="dog-details-card">
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dog-details-container">
                <div className="dog-details-card">
                    <h2>Error: {error}</h2>
                    <button className="close-button" onClick={() => navigate('/search')}>
                        🐾 Back to Search 🐾
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="dog-details-container">
            <div className="dog-details-card">
                <div className="dog-header">
                    <img 
                        src={dogData.image_link} 
                        alt={dogData.name}
                        className="dog-detail-image"
                    />
                    <h2 className="dog-detail-name">{dogData.name}</h2>
                </div>
                
                <div className="dog-stats">
                    <div className="stat-group">
                        <h3>Life Expectancy</h3>
                        <p>{dogData.min_life_expectancy} - {dogData.max_life_expectancy} Years</p>
                    </div>
                    
                    <div className="stat-group">
                        <h3>Personality Traits</h3>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <span>Playfulness</span>
                                <div className="rating">{dogData.playfulness}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Protectiveness</span>
                                <div className="rating">{dogData.protectiveness}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Trainability</span>
                                <div className="rating">{dogData.trainability}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Energy Level</span>
                                <div className="rating">{dogData.energy}/5</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stat-group">
                        <h3>Behavior</h3>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <span>Barking</span>
                                <div className="rating">{dogData.barking}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Shedding</span>
                                <div className="rating">{dogData.shedding}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>Grooming Needs</span>
                                <div className="rating">{dogData.grooming}/5</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stat-group">
                        <h3>Compatibility</h3>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <span>With Strangers</span>
                                <div className="rating">{dogData.good_with_strangers}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>With Children</span>
                                <div className="rating">{dogData.good_with_children}/5</div>
                            </div>
                            <div className="stat-item">
                                <span>With Other Dogs</span>
                                <div className="rating">{dogData.good_with_other_dogs}/5</div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="close-button" onClick={() => navigate('/search')}>
                    🐾 Back to Search 🐾
                </button>
            </div>
        </div>
    );
} 