const express = require('express');
const component = require('../../models/component');
const router = express.Router();
//const componentController = require('../../controllers/component');

router.get('/api', (req, res) => {res.send ('hola API REST')})
router.get('/api/component/:component_id', (req, res) => {res.send ()})



router.get('/api/components', (req, res) => {
    component
    .find()
    .then((components) => res.json(components))
    .catch((error) => res.json({message:error}));
    });

router.post('/api/components', (req, res) => {
    const componentModel = component(req.body);
    componentModel
    .save()
    .then((newComponent) => res.json(newComponent))
    .catch((error) => res.json({message:error}))
});

router.get('/api/components/:id', (req, res) => {
    const {id} = req.params;
    component
    .findById(id)
    .then((Component) => res.json(Component))
    .catch((error) => res.json({message:error}));
  })
  
  
  router.put('/api/components/:id', (req, res) => {
    const {id} = req.params;
    const {component_id, description, ubicacion, activo, tipo, valor} = req.body;
    component
    .updateOne({_id:id}), {$set:{component_id, description, ubicacion, activo, tipo, valor}}
    .then((Component) => re.json(Component))
    .catch((error)=> res,json({message:error}))
  })
  
  
  router.delete('/api/components/:componente_id', (req, res) => {
    const {id} = req.params;
    component
    .remove({_id:id})
    .then((Component) => re.json(Compónent))
    .catch((error)=> res,json({message:error}))
  })

router.put('/api/components/component_id', (req, res) => {res.send ()})
router.delete('/api/components/component_id', (req, res) => {res.send ()})


module.exports = router