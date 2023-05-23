import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./About.css";

function Skills() {
  return (
    <HelmetProvider>
      <section className="about" id="about">
        <Helmet>
          <title>Chhatresh Khatri | Portfolio | About</title>
        </Helmet>
        <h1>About me</h1>
        <div className="container">
          <div className="about-bx">
            <p>
              Hi there! My name is Chhatresh Khatri and I'm a web developer with
              a passion for building modern and user-friendly websites and
              applications. I have experience working
              with a range of <a href="#tech-stack">Tech Stack</a> to create
              clean and modular code that follows industry best practices. In
              addition to my technical skills, I also have a keen eye for design
              and enjoy creating responsive and visually appealing websites. I'm
              learning about the latest trends in the tech industry. I'm a total
              go-getter and always bring my A-game, plus I'm super easy to talk
              to! I'm driven, self-motivated, and passionate about all things
              tech. Let's work together and make something amazing! Thanks for
              visiting my portfolio website!
            </p>
          </div>
          <div id="tech-stack">
          <h2>My Technology Stack</h2>
          <div className="about-bx">
                  <div className="techStack-lang">
                    <h3>Languages</h3>

                    <img
                      src="https://img.shields.io/badge/c-1563b1.svg?logo=c&logoColor=white"
                      alt="C"
                    />
                    <img
                      src="https://img.shields.io/badge/c++-004488.svg?logo=c%2B%2B&logoColor=white"
                      alt="C++"
                    />
                    <img
                      src="https://img.shields.io/badge/Java-3a75b0?logo=openjdk&logoColor=white"
                      alt="java"
                    />
                    <img
                      src="https://img.shields.io/badge/MySql-f29111.svg?logo=mysql"
                      alt="MySql"
                    />
                    <img
                      src="https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white"
                      alt="HTML5"
                    />
                    <img
                      src="https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white"
                      alt="CSS3"
                    />
                    <img
                      src="https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E"
                      alt="JavaScript"
                    />

                    <h3>Framework & Libraries</h3>

                    <img
                      src="https://img.shields.io/badge/bootstrap-702cf5.svg?logo=bootstrap&logoColor=white"
                      alt="Bootstrap"
                    />
                    <img
                      src="https://img.shields.io/badge/ReactJS-282c34.svg?logo=react&logoColor=61dafb"
                      alt="ReactJS"
                    />
                    <img
                      src="https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB"
                      alt="ExpressJS"
                    />
                    <img
                      src="https://img.shields.io/badge/Node.js-233056.svg?logo=nodedotjs"
                      alt="Node"
                    />
                    <img
                      src="https://img.shields.io/badge/Axios-5A29E4.svg?logo=Axios&logoColor=white"
                      alt="Axios"
                    />
                    <img
                      src="https://img.shields.io/badge/React%20Router-CA4245.svg?logo=React-Router&logoColor=white"
                      alt="React-router"
                    />
                    <img
                      src="https://img.shields.io/badge/Redux-764ABC.svg?logo=Redux&logoColor=white"
                      alt="React-redux"
                    />
                    <img
                      src="https://img.shields.io/badge/.ENV-ECD53F.svg?logo=dotenv&logoColor=black"
                      alt=".env"
                    />

                    <h3>Tools & IDEs</h3>

                    <img
                      src="https://img.shields.io/badge/MongoDB-001e2b.svg?logo=mongodb"
                      alt="MongoDB"
                    />
                    <img
                      src="https://img.shields.io/badge/nodemon-4f4d3f.svg?logo=nodemon"
                      alt="nodemon"
                    />
                    <img
                      src="https://img.shields.io/badge/netlify-%23000000.svg?logo=netlify"
                      alt="netlify"
                    />
                    <img
                      src="https://img.shields.io/badge/render-1f1f1f.svg?logo=render"
                      alt="Render"
                    />
                    <img
                      src="https://img.shields.io/badge/-Back4App-10203a?logo=back4app"
                      alt="Back4App"
                    />
                    <img
                      src="https://img.shields.io/badge/-Git-f0efe7?logo=git"
                      alt="Git"
                    />
                    <img
                      src="https://img.shields.io/badge/-GitHub-161b22?logo=github"
                      alt="GitHub"
                    />
                    <img
                      src="https://img.shields.io/badge/GitHub%20Actions-0d1117.svg?logo=GitHub-Actions"
                      alt="GitHub Actions"
                    />
                    <img
                      src="https://img.shields.io/badge/GitHub%20Pages-222222.svg?logo=GitHub-Pages&logoColor=white"
                      alt="GitHub Pages"
                    />
                    <img
                      src="https://img.shields.io/badge/firebase-%23039BE5.svg?logo=firebase"
                      alt="Firebase"
                    />
                    <img
                      src="https://img.shields.io/badge/Canva-%2300C4CC.svg?logo=Canva&logoColor=white"
                      alt="Canva"
                    />
                    <img
                      src="https://img.shields.io/badge/Gimp-0e2426.svg?logo=gimp&logoColor=white"
                      alt="Gimp"
                    />
                    <img
                      src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white"
                      alt="Postman"
                    />
                    <img
                      src="https://img.shields.io/badge/Cloudflare-1d1d1d?logo=cloudflare&logoColor=orange"
                      alt="Cloudflare"
                    />
                    <img
                      src="https://img.shields.io/badge/AlibabaCloud-2c3134?logo=alibabacloud"
                      alt="Alibaba Cloud"
                    />
                    <img
                      src="https://img.shields.io/badge/GoogleCloud-5f6368?logo=googlecloud"
                      alt="Google Cloud"
                    />
                    <img
                      src="https://img.shields.io/badge/Android%20Studio-3DDC84.svg?logo=Android-Studio&logoColor=white"
                      alt="Android Studio"
                    />
                    <img
                      src="https://img.shields.io/badge/VSCode-1f1f1f?logo=visualstudiocode&logoColor=026ec1"
                      alt="VS Code"
                    />

                    <h3>OS</h3>

                    <img
                      src="https://img.shields.io/badge/Linux-FCC624.svg?&logo=Linux&logoColor=black"
                      alt="Linux"
                    />
                    <img
                      src="https://img.shields.io/badge/Ubuntu-E95420.svg?&logo=Ubuntu&logoColor=white"
                      alt="Ubuntu"
                    />
                    <img
                      src="https://img.shields.io/badge/Windows%2011-0078D4.svg?&logo=Windows-11&logoColor=white"
                      alt="Windows 11"
                    />
                  </div>
          </div>
        </div>
        </div>
        
      </section>
    </HelmetProvider>
  );
}

export default Skills;