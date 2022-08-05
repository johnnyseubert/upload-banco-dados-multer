const routes = require('express').Router()
const multer = require('multer')
const multerConf = require('../configs/multer')
const imageModel = require('../models/Images')

routes.post('/posts', multer(multerConf).single('arquivo'), async (req, res) => {
   console.log(req.file)
   await imageModel.create({
      filename: req.file.originalname,
      imageText: req.file.buffer.toString('base64')
   })

   res.send('foi')
})

routes.get('/posts', async (req, res) => {
   const image = await imageModel.findByPk(1)
   res.json(image)

})

module.exports = routes;