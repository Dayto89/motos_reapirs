const Repair = require("./repairs.model.js");

class RepairService {
    static async findOne(id){
        return await Repair.findOne({
            where: {
                id,
                status: 'pendind'
            }
        })
    }

    static async findAll(){
        return await Repair.findAll({
            where: {
                status: 'pending'
            }
        })
    }

    static async create(data){ 
        return await Repair.create(data)
    }

    static async updata(repair){
        return await Repair.update({ status: 'completed'})  
    }

    static async delete(repair){
        return await Repair.update({ status: 'cancelled'})
    }
}

module.exports = RepairService