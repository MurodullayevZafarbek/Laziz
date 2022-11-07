import Up from "./Up"
import { useState } from 'react';
function Portfolio({ status }) {
   const [up, setUp] = useState([])
   const pointer = {
      cursor: "pointer",
   }
   const closeUp = () => {
      setUp([])
   }
   const openUp = (e, id) => {
      setUp(id)
   }
   return (
      <div className="Portfolio">
         <Up status={up} fn={closeUp} />
         <div className="projects">
            <div className="project" onClick={(e) => { openUp(e, [1,2,3,4]) }} style={{ ...pointer, backgroundImage: "url('/photo_2022-10-20_16-02-07.jpg')" }}>
               <div className="hover">
                  <h1>Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum.</p>
                  <i className="fa fa-link"></i>
               </div>
            </div>
            <div className="project" style={{ backgroundImage: "url('/photo_2022-10-20_16-02-07.jpg')" }}>
               <div className="hover">
                  <h1>Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum.</p>
                  <i className="fa fa-link"></i>
               </div>
            </div>
            <div className="project" style={{ backgroundImage: "url('/photo_2022-10-20_16-02-07.jpg')" }}>
               <div className="hover">
                  <h1>Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum.</p>
                  <i className="fa fa-link"></i>
               </div>
            </div>
            <div className="project" style={{ backgroundImage: "url('/photo_2022-10-20_16-02-07.jpg')" }}>
               <div className="hover">
                  <h1>Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum.</p>
                  <i className="fa fa-link"></i>
               </div>
            </div>
            <div className="project" style={{ backgroundImage: "url('/photo_2022-10-20_16-02-07.jpg')" }}>
               <div className="hover">
                  <h1>Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum.</p>
                  <i className="fa fa-link"></i>
               </div>
            </div>
            {status === "admin" ?
               <div className="project" onClick={(e) => { openUp(e, [1, 2, 3, 4]) }} style={{ ...pointer, background: "white" }}>
                  <div className="hover">
                     <i className="fa fa-add"></i>
                  </div>
               </div>:""
            }
         </div>
      </div>
   )
}

export default Portfolio
