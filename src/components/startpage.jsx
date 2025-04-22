import { useNavigate } from "react-router-dom";

export function Start() {
    const navigate = useNavigate();
    
    return(
        <div className="start-container">
            <div className="welcome-card">
                <h1>🐾 PawPrints 🐾</h1>
                <h3>Dogs: because who else is going to enthusiastically judge your squirrel-chasing technique? 🐶✨</h3>
                <p>Welcome to your ultimate doggie guide! 🐶 Whether you're a seasoned dog lover or on the hunt for your first furry friend, we've got you covered with fun, easy-to-digest info on over 200 dog breeds. From teeny tiny lap dogs to big lovable goofballs, explore each breed's personality, quirks, and more. Think of us as your tail-wagging, bark-loving, breed-matching best friend!</p>
                <button className="start-button" onClick={() => navigate('/search')}>
                    <span>🐕 GO to Search Page 🐕</span>
                </button>
            </div>
        </div>
    );
}