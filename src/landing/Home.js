import React from "react";
import myImage from "../images/myImage.png"

const Home = () => {
    return (
        <body>
        <div className="Homepage">
           <div className="home-info">
               <p style={{align: 'center', fontSize:'30px', margin: 'auto'}}> Hello there! My name is Rylie Spriggs and this is my portfolio for my final project of Flatiron
               school. While attending Flatiron I've gained a tremendous amount of skills and knowledge of programming languages.
                <br></br>
                I've included links to each project and their relating blog posts. Also my goals to expand on those projects!
                <br></br>
                Cheers Flatiron!
           </p>
           <br></br>
           <img src={myImage} alt="profile"></img>
           </div>
       </div>
       </body>
    )
}

export default Home;