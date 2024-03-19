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

router.post('/api/components/newComponent', (req, res) => {
    const componentModel = component(req.body);
    componentModel
    .save()
    .then((newComponent) => res.json(newComponent))
    .catch((error) => res.json({message:error}))
});

router.get('/api/components/:component_id', (req, res) => {
    const {id} = req.params;
    component
    .findById(id)
    .then((Component) => res.json(Component))
    .catch((error) => res.json({message:error}));
  })

router.put('/api/components/:component_id', async(req, res) => {
  try {
    const Id = req.params.component_id;
    const componente = await component.findOneAndReplace({component_id:Id}, req.body, {new:true});
    console.log({componente});
    res.json({componente});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error});
  }
})

router.patch('/api/components/:component_id', async(req, res) => {
  try {
    const Id = req.params.component_id;
    const componente = await component.findOneAndUpdate({component_id:Id}, req.body, {new:true});
    console.log({componente});
    res.json({componente});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message:error});
  }
})

router.delete('/api/components/:id', (req, res) => {
  const {id} = req.params;
  component
  .findByIdAndDelete({_id:id})
  .then((component) => re.json(component))
  .catch((error)=> res.json({message:error}))
})

router.put('/api/components/component_id', (req, res) => {res.send ()})
router.delete('/api/components/component_id', (req, res) => {res.send ()})


module.exports = router
