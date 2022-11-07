import { useState } from "react"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
function About() {
   const [portfolioSkills, serPortfolioSkills] = useState(true)
   
   document.body.className = window.localStorage.getItem('modeColor') || "light"
   function changeMode(e) {
      let modeColor = window.localStorage.getItem('modeColor') || "light"
      if (modeColor == "light") {
         window.localStorage.setItem('modeColor', "dark")
         document.body.classList = "dark"
      } else {
         window.localStorage.setItem('modeColor', "light")
         document.body.classList = "light"
      }
   }
   return (
      <>
         <div className="about">
            <div className="container">
               <div className="mode" onClick={changeMode}>
                  <i className="fa-solid fa-sun light"></i>
                  <i className="fa-solid fa-moon dark"></i>
               </div>
               <div className="cabinet">
                  <img src="/photo_2022-10-20_16-02-07.jpg" alt="" />
                  <div className="text">
                     <h1>Lazizbek Murodullayev</h1>
                     <p>Full-Stack developer</p>
                     <div className="links">
                        <a href=""><i className="fa-brands fa-github"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                     </div>
                  </div>
               </div>
               <div className="experence">
                  <div className="text">
                     <h1>5</h1>
                     <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="text">
                     <h1>5</h1>
                     <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="text">
                     <h1>5</h1>
                     <p>Lorem ipsum dolor sit amet.</p>
                  </div>
               </div>
               <div className="cv">
                  <button>Download CV<i className="fa-solid fa-arrow-down-long"></i></button>
                  <button>Contact me</button>
               </div>
            </div>
         </div>
         <section className="portfolio">
            <div className="container">
               <div className="btns">
                  <button onClick={() => { serPortfolioSkills(true) }} className={portfolioSkills ? "active":""}>Portfolio</button>
                  <button onClick={() => { serPortfolioSkills(false) }} className={!portfolioSkills ? "active":""}>Skills</button>
               </div>
               {portfolioSkills && <Portfolio />}
               {portfolioSkills || <Skills/>}
               
               
            </div>
         </section>
      </>
   )
}

export default About
