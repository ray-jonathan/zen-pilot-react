import React from 'react';
function About(props){
    return(
    <div>
        <link rel="stylesheet" href="./styles/about.css" />
        <div className="about-copy">
            <div className="about-picture-frame">
                <img src="./images/helene-about.png" alt="Helene in a plane's cockpit" />
            </div>
            <p className="about-text">
            Hi! I’m Hélène. Gypsy pilot. With thousands of hours above the cloud lines of Africa, Europe and the Caribbean’s, I’d like to think I have picked up a thing or two about travelling and focusing on what is essential. My background is both in literature and aeronautics, but I am also passionate about poetry, meditation, yoga, wasting less, and minimalism. 
            </p>
            <p>
            How can you curate a life that is meaningful to you and suppress the daily stressors and clutter? I can help.
            </p>
            <p>
            <em>Welcome aboard!</em>
            </p>
        </div>
    </div>
    )
}

export default About;