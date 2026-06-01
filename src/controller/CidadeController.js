const { where } = require('sequelize');
const CidadeModel = require('../model/CidadeModel');

class CidadeController {
    async create(req, res) {
        try {
            const cidade = await  CidadeModel.create(req.body);
            return res.status(201).json(cidade);
        } catch (error) {
            return res.status(500).json({
                erro: 'Erro ao criar cidade', message: error.message
            });
        }
    }

    async all (req,res) {
        try {
            const cidades = await CidadeModel.findAll({
                order: [['nome', 'ASC']]
            });
            return res.status(200).json(cidades);
        }catch (err) {
            return res.status(500),json({erro:'Erro ao busca cidade', mensage: err.mensage})
        }
    }

    async update(req, res) {
        const {id}= req.params;

        try{
            const [update] = await CidadeModel.update(req.body, {where: {id}});
            if (update){
                const updateCity = await CidadeModel.findByPk(id);
                return res.status(200).json(updateCity)
            }
        }catch(err){
            return res.status(500).json({erro: 'Erro ao buscar cidade', mensage:err.mensage});

        }
       
    }

    async delete(req, res){
        const{id} = req.params;
        try{
            const deleted = await CidadeModel.destroy({where: {id}});
            if(deleted){
                return res.status(204).sed()
            }
            return res.status(404).json({error: 'Cidade não encontrada'})
        }catch(err){
            return res.status(500).json({error: 'Erro a excluir cidade',message:err.mensage})
        
        
        }
    }

}

module.exports = new CidadeController;