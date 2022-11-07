const control = {}
const Skills = require('../model/Skills')

control.index = async (req, res) => {
   try {
      let data = await Skills.find({})
      res.send({title:"Skills", message:"All skills", data}).status(200)
   } catch (e) {
      res.json({title: 'Error',message: e.message}).status(404)
  }
}

control.show = async (req, res) => {
   try {
      let data = await Skills.findById(req.params.id)
      res.send({ title: "Skill", message: "Spicial skills", data }).status(200)
   } catch (e) {  
      res.json({ title: 'Error', message: e.message }).status(404)
   }
}

control.create = async (req, res) => {
   try {
      let data = await Skills.create(req.body)
      res.send({ title: "Skill", message: "Skill added", data }).status(200)
   } catch (e) {
      res.json({ title: 'Error', message: e.message }).status(404)
   }
}

control.update = async (req, res) => {
   try {
      let data = await Skills.findByIdAndUpdate(req.params.id,{...req.body})
      res.send({ title: "Skill", message: "Skill updated", data }).status(200)
   } catch (e) {
      res.json({ title: 'Error', message: e.message }).status(404)
   }
}

control.remove = async (req, res) => {
   try {
      let data = await Skills.findByIdAndDelete(req.params.id)
      res.send({ title: "Skill", message: "Skill deleted", data }).status(200)
   } catch (e) {
      res.json({ title: 'Error', message: e.message }).status(404)
   }
}

module.exports =  control