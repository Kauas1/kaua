import http from 'http'
import fs from 'node:fs'
import url from 'url'
import formidavel from 'formidable'
const model = {
"email": "carlos@gmail.com",
"nome": "Carlos Wilton",
"senha": "1234",
"confirmarEmail": "carlos@gmail.com",

"perfil": {
    "id": "1",
    "nome":"Carlos Wilton Vasconselos",
    "bio": "Hi, I'am Carlos Vasconcelos. TI teacher and web developer.",
    "imagem": "https://avatars.githubusercontent.com/u/81450652?v=4"
}
}
const PORT = 3333

const server = http.createServer((req, res) => {
    const {url, method} = req

    fs.readFile("socialize.json", "utf8", (err,data)=>{
        if(err){
            res.writeHead(500, {'Content-Type': 'applicaiton/json'})
            res.end(JSON.stringify({message: "Erro interno do servidor"}))
            return
        }

        let jsonData = []
        try{
            jsonData = JSON.parse(data)
        }catch(error){
            console.error("Erro ao analisar JSON:", error)
        }

        if(url === "/usuarios" && method === "GET"){
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(jsonData))
        }else if(url === "/login" && method === "POST"){
            
            let body = ""
            req.on("data", (chunk)=>{
                body += chunk.toString()
            })
            req.on("end", ()=>{
                const newItem = JSON.parse(body)
                if(!newItem.hasOwnProperty('senha') || !newItem.hasOwnProperty('nome')|| !newItem.hasOwnProperty('email') ){
                    res.writeHead(401, {"Content-Type": "application/json"})
                    res.end(JSON.stringify({message: `Erro ao cadastar o usuario, siga o modelo: ${model} `}))
                }else{
                    if(newItem.email === newItem.confirmaEmail){
                        res.writeHead(401, {"Content-Type": "application/json"})
                        res.end(JSON.stringify({message: "Esse email ja está registrado."}))
                    }else{
                        newItem.id = jsonData.length + 1 // Gerar um novo ID
                        jsonData.push(newItem)
                        fs.writeFile("socialize.json", JSON.stringify(jsonData,null,2), (err)=>{
                            if(err){
                                res.writeHead(500, {"Content-Type": "application/json"})
                                res.end(JSON.stringify({message: "Erro interno do servidor"}))
                                return
                            }
                            res.writeHead(201, {"Content-Type": "application/json"})
                            res.end(JSON.stringify(newItem))
                        })
                    
                    }
                }
            })
        }else if(method === 'PUT' && url.startsWith('/perfil/')){
            const id = parseInt(url.split("/")[2])
            let body = ""
            req.on("data", (chunk)=>{
                body += chunk.toString()
            })
            req.on("end", ()=>{
                const updatedItem = JSON.parse(body)
                // procurar o perfil pelo ID e atualizar seus dados
                const index = jsonData.findIndex((item)=> item.perfil === id)
                if(index !== -1){
                    if(!newItem.hasOwnProperty('senha') || !newItem.hasOwnProperty('nome') || !newItem.hasOwnProperty('email') ){
                        res.writeHead(401, {"Content-Type": "application/json"})
                        res.end(JSON.stringify({message: `Não foi autorizado a atualização do usuário. Siga o modelo ${model}`}))
                    }
                    jsonData[index] = { ...jsonData[index], ...updatedItem}
                    fs.writeFile("funcionarios.json"(jsonData, null, 2), (err)=>{
                        if(err){
                            res.writeHead(500, {"Content-Type":"application/json"})
                            res.end(JSON.stringify(jsonData[index]))
                        }
                    }
                    )
                }else{
                    res.writeHead(404, {"Content-Type": "application/json"})
                    res.end(JSON.stringify({message: "Perfil não encontrado."}))
                }
            })
            
        }else if(method === "GET" && url.startsWith('/perfil/')){
            const perfilID = url.split('/')[2]
            const findPerfil = jsonData.find(dado => dado.id == perfilID)

            if(!findPerfil){
                res.writeHead(404, {'Content-Type': 'application/json'})
                return res.end(JSON.stringify({message: "Perfil não encontrado."}))
            }else{
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify(findPerfil))
            }
        }else if(method === "POST" && url === '/login'){

            let body = ""
            req.on("data", (chunk) =>{
                body += chunk.toString()
            })
            req.on("end", () => {
                const login = JSON.parse(body)
                
                if(login.email !== login.email){
                    res.writeHead(401, {"Content-Type": "application/json"})
                    res.end(JSON.stringify({message: "Email não cadastrado."}))
                }else if(login.senha !== login.senha){
                    res.writeHead(401, {"Content-Type": "application/json"})
                    res.end(JSON.stringify({message:"Senha Incorreta."}))
                }else if(login.email == login.email && login.senha == login.confirmaSenha){
                    res.writeHead(200, {'Content-Type': 'application/json'})
                    res.end(JSON.stringify({message: `Bem vindo ${login.nome[login.id]}`}))
                }
               
            } )
            
        }else if (req.url === '/perfil' && req.method.toUpperCase() === 'PUT') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            const findPerfil = jsonData.find(dado => dado.perfil == userProfile)
            req.on('end', () => {
              const data = JSON.parse(body);
              const { nome, bio } = data;
        
              if (nome) {
                userProfile.nome = nome;
              }
              if (bio) {
                userProfile.bio = bio;
              }
              sendJSONResponse(res, 200, {
                message: 'Perfil atualizado com sucesso',
                perfil: userProfile.perfil
              });
            });
        }else if (req.url === '/perfil/imagem' && req.method === 'POST') {
            const form = new formidavel.IncomingForm();
           
            const findPerfil = jsonData.find(dado => dado.perfil == userProfile)

            form.parse(req, (err, fields, files) => {
              if (err) {
                return sendJSONResponse(res, 500, { message: 'Erro ao processar o upload da imagem' });
              }
        
              const oldPath = files.imagem.path;
              const newPath = path.join(form.uploadDir, files.imagem.name);
        
              fs.rename(oldPath, newPath, (err) => {
                if (err) {
                  return sendJSONResponse(res, 500, { message: 'Erro ao salvar a imagem' });
                }
        
                userProfile.perfil.imagem = `http://localhost:3333/uploads/${files.imagem.name}`;
        
                sendJSONResponse(res, 200, {
                  message: 'Imagem de perfil atualizada com sucesso',
                  perfil: userProfile.perfil
                });
              });
            });
            } else {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end('Rota não encontrada');
          }

    })
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})