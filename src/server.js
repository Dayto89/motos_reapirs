const app = require('./app.js');
const { authenticated, syncUp } = require('./config/database/database.js');
const {envs} = require('./config/enviroments/enviroments.js');

async function main (){
    try {
        await authenticated()
        await syncUp()
    }catch (error) {
        console.log(error);
    }
}

main()

app.listen(envs.PORT, () => {
    console.log("Server running on port: " + envs.PORT)
}) 
