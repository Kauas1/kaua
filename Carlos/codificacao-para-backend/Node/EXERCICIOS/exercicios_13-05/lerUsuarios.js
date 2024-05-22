import fs from "node:fs"

const lerDadosUsuario = () =>{
    fs.readFile("socialize.json", "utf8", (err,data)=>{
        if(err){
            callback(err)
        }
        try {
            const usuarios = JSON.parse(data)
            callback(null, usuarios)
        } catch (error) {
            callback(error)
        }
    })
}
export default lerDadosUsuario;

