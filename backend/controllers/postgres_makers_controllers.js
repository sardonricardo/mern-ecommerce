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
            message: 'something goes wrong',
            data: {}
            })
        }
    }
}

/* makers_api_PG.createMaker('PIONEER', 'A61240529', 'Camino can Camps (vallsolana Business Park, Polígon can sant Joan), 17 -19, EDIF VINSON, 1A PL, PTA F, sant Cugat del Valles, 08174 , Barcelona')
 */

module.exports = makers_api_PG

