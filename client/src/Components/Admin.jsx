import { useState } from "react"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import Up from "./Up"
function Admin() {
   const [portfolioSkills, serPortfolioSkills] = useState([])
   const [up,setUp] = useState([])
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
   
   const pointer = {
      cursor: "pointer",
   }

   const closeUp = () => {
      setUp([])
   }
   const openUp = (e,id) => {
      setUp(id)
   }

   return (
      <>
         <div className="about">
            <Up status={up} fn={closeUp} />
            <div className="container">
               <div className="mode" onClick={changeMode}>
                  <i className="fa-solid fa-sun light"></i>
                  <i className="fa-solid fa-moon dark"></i>
               </div>
               <div className="cabinet">
                  <img src="/photo_2022-10-20_16-02-07.jpg" alt="" />
                  <i className="fa fa-te"></i>
                  <div className="text">
                     <h1 onClick={(e) => { openUp(e,[123]) }} style={pointer}>Lazizbek Murodullayev</h1>
                     <p onClick={(e) => { openUp(e, [123]) }} style={pointer}>Full-Stack developer</p>
                     <div className="links">
                        <a onClick={(e) => { openUp(e, [1,2]) }} style={pointer}><i className="fa-brands fa-github"></i></a>
                        <a onClick={(e) => { openUp(e, [1,2]) }} style={pointer}><i className="fa-brands fa-twitter"></i></a>
                        <a onClick={(e) => { openUp(e, [1,2]) }} style={pointer}><i className="fa-brands fa-linkedin"></i></a>
                        <a onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}><i className="fa-brands fa-youtube"></i></a>
                        <a onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}><i style={{color: 'red'}} className="fa-brands fa-plus"></i></a>
                     </div>
                  </div>
               </div>
               <div className="experence">
                  <div className="text" onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}>
                     <h1 style={pointer}>5</h1>
                     <p style={pointer}>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="text" onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}>
                     <h1 style={pointer}>5</h1>
                     <p style={pointer}>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="text" onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}>
                     <h1 style={pointer}>5</h1>
                     <p style={pointer}>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <i style={{ color: 'red', fontSize: "70px", ...pointer }} onClick={(e) => { openUp(e, [1, 2]) }} className="fa-brands fa-plus"></i>
               </div>
               <div className="cv">
                  <button onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}>Download CV<i className="fa-solid fa-arrow-down-long"></i></button>
                  <button onClick={(e) => { openUp(e, [1, 2]) }} style={pointer}>Contact me</button>
               </div>
            </div>
         </div>
         <section className="portfolio">
            <div className="container">
               <div className="btns">
                  <button onClick={() => { serPortfolioSkills(true) }} className={portfolioSkills ? "active" : ""}>Portfolio</button>
                  <button onClick={() => { serPortfolioSkills(false) }} className={!portfolioSkills ? "active" : ""}>Skills</button>
               </div>
               {portfolioSkills && <Portfolio status={"admin"} />}
               {portfolioSkills || <Skills status={"admin"} />}
            </div>
         </section>
      </>
   )
}

export default Admin
