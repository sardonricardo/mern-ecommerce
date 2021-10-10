const Maker = require('../models/makers_sql_Model')

//Lógica Postgres
const makers_api_PG = {

    createMaker: async (req, res) => {
        //Extraemos los siguientes datos:
        const {name, CIF, address} = req.body;
    try {
        let newMaker = await Maker.create({
            name,
            CIF,
            address
        },{
            fields: ['name', 'CIF', 'address']
        }); 
        if (newMaker) {
            res.json({
                message: 'Project created successfully', 
                data: newMaker
            }); 
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'sometging goes wrong',
            data: {}
            })
        }
    }
}


module.exports = makers_api_PG

