const { model, Schema } = require('mongoose')

module.exports = model("skill", new Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   src: {
      type: String,
      default:"defaultSkill.png"
   }
}))