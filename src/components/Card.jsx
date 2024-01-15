import Illustration from "../assets/images/illustration-article.svg";
import Avatar from "../assets/images/image-avatar.webp";

function Card() {
    return (
        <main>
            <div id="card">
                <div id="image">
                    <img src={Illustration} alt="" srcSet="" />
                </div>
                <div id="details">
                    <div className="badge">Learning</div>
                    Published 21 Dec 2023
                </div>
                <div id="content">
                    <h1>HTML & CSS foundations</h1>
                    <p>These languages are the backbone of every website, defining 
                        structure, content, and presentation.</p>
                </div>
                <div id="author">
                    <img src={Avatar} alt="" srcSet="" />
                    Greg Hooper
                </div>
            </div>
        </main>
    )
}

export default Card;