
function Up({ status, fn }) {
   if (status[0] === undefined) {
      return ""
   } else {
      return (
         <div className="up">
            <i className="fa-solid fa-x" onClick={() => { fn() }}></i>
            {status.map((item, i) => {
               return (
                  <input key={i} type="text" />
               )
            })}
            <input type="button" value="Send" />
         </div>
      )
   }
}

export default Up
