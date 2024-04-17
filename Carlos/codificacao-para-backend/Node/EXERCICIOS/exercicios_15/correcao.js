import http from "node:http"

const PORT = 3333

const participants =[]
const server = http.createServer((request, response)=>{
    const {url, method} = request
    
    
    if(url === '/participants' && method === 'GET'){
        console.log('GET participants/count')
        const quantidadeParticipant = participants.length
        response.setHeader('Contet-Type', 'application/json')
        response.end(JSON.stringify({"Quantidade de Participantes":  quantidadeParticipant}))
    }else if(url === '/participants/count' && method === "GET"){
    
    }else if(url ==='/participants/count/over18' && method === "GET"){
        console.log('GET participants/count/over18')
        const olderAge = participants.filter((participant)=> participant.age >= 18)
        response.setHeader('Contet-Type', 'application/json')
        response.end(JSON.stringify({"Quantidade de Participantes Maiores de idade":  olderAge.length}))
        
    } else if(url ==='/participants/city/most' && method === "GET"){
         console.log('GET participants/city/most')
    
         const contantoCidades = participants.reduce((acc, participant)=> {
            acc[participant.city] = (acc[participant.city] || 0) +1
            return acc
         },{})

         console.log(contantoCidades)
        //  console.log(Object.entries(contantoCidades))

         let quantidadeDeParticipantes = 0
         let cidadeComMaiorNumeroDeParticipantes = ''
         Object.entries(contantoCidades).forEach(([city, count])=>{
            if(count > quantidadeDeParticipantes){
                quantidadeDeParticipantes = count
                cidadeComMaiorNumeroDeParticipantes = city
            }
         })
         response.setHeader('Content-Type', 'application/json')
         response.end(JSON.stringify({
            "Quantidade total de participante": quantidadeDeParticipantes, 
            "Cidade com o maior número de participante": cidadeComMaiorNumeroDeParticipantes
         }))
    }else if(url.startsWith('/participants/') && method === "GET"){
            console.log('GET Unico participants')       

        const participantId= url.split('/')[2]
        const findParticipant = participants.find((participant)=>{
           return  participant.id == participantId
        })

        if(!findParticipant ){
            response.writeHead(404, 'Content-Type','application/json')
            return response.end(JSON.stringify({message: 'Participante não encontrado'}))
        }

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(findParticipant))

    }else if(url === '/participants' && method === 'POST'){
        console.log('POST participants')

        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', ()=>{
            const participant = JSON.parse(body)
            if(participant.age < 16){
                response.writeHead(403, {'Content-Type':    'application/json'})
               return response.end(JSON.stringify({message: 'Apenas usuário maiores que 15 anos'}))
            }else if(participant.password !== participant.confirmPassword){
                response.writeHead(400, {'Content-Type': 'application/json'})
                return response.end(JSON.stringify({message: 'As senhas fornecidas não correspondem'}))
            }else{
                participant.id = participants.length+1
                participants.push(participant)
                response.writeHead(201, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({message: "Participante cadastrado"}))
            }
        });

        


    }else if(url.startsWith('/participants/') && method === 'PUT'){
        console.log('PUT participants')

        const participantId = url.split('/')[2];

        let body = ''
        request.on('data', (chunk) =>{
            body += chunk
        }).on('end', () => {
            const updateParticipant = JSON.parse(body)
            const index = participants.findIndex(participant => participant.id == participantId)
            if(index !== -1){
                participants[index] = {...participants[index], ...updateParticipant}
                response.setHeader('Content-Type','application/json')
                response.end(JSON.stringify(participants[index]))
            }else{
                response.writeHead(400, {'Content-Type':'application/json'})
                return response.end(JSON.stringify({message: "Participante não encontrado"}))
            }
        })

    }else if(url.startsWith('/participants/') && method === "DELETE"){
        const participantId = url.split("/")[2]
        const index = participants.findIndex(e => e.id == participantId)
        if (index !== -1) {
            let body = ""
            request.on("data", (chunk) => {
                body += chunk.toString()
            })
            request.on("end", () => {
                const usuarioID = participants[index].id
                participants.splice(index, 1)
                
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ message : `Usuário ${usuarioID} foi deletado`}));
            })
        }
    }else{
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({codigo: 404, message:'Página não encontrada'}))
    }
})

server.listen(PORT, ()=>{
    console.log('servidor está on'+ PORT)
})