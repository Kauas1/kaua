import http from 'node:http'
const PORT = 3333

const participants = [

]

const server = http.createServer((req, res) => {
    const { url, method } = req
    console.log(`URL: ${url}`)

    //CRUD: Create, Read, Update e Delete

    // Cadastrando Participante

    if (method === 'GET' && url === '/participants') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(participants))
    } else if (method === 'GET' && url === ('/participants/count')) {
        const lengthPart = participants.length
        if (lengthPart === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: "Não foi encontrado participantes registrados" }))
        } else {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: `Existem ${lengthPart} participantes cadastrados!`, value: `${lengthPart}` }))
        }

        
    } else if (method === 'GET' && url === ('/participants/count/over18')) {
        const lengthPart = participants.length
        if (lengthPart === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: "Não foi encontrado participantes registrados" }))
        } else {
            const over18 = participants.filter(participant => participant.idade >= 18)
            if (over18.length !== 0) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: `Existem ${lengthPart} participantes, dentre eles ${over18.length} são maiores de 18!`, value: `${over18.length}` }))
            } else {
                res.writeHead(400, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: "Não foi encontrado participantes registrados com mais de 18" }))
            }
        }
    } else if (method === 'GET' && url === ('/participants/city/most')) {
        
        const countCity = participants.reduce((acc, participant) => {
            acc[participant.city] = (acc[participant.city] || 0) + 1
            return acc
        }, {})

        let qntPart = 0
        let mostPartCity = ''
        Object.entries(countCity).forEach((city, count) => {
            if(count > qntPart){
                qntPart = count
                mostPartCity = city
            }
        }) //transformei o objeto em array
        
        res.setHeader('Content-type', 'application/json')
        res.end(JSON.stringify({
            "Quantidade total": qntPart,
            "Cidade com maior numero de participantes": mostPartCity
        }))

    } else if (method === 'POST' && url === '/participants') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk
        }).on('end', () => {
            const participant = JSON.parse(body)
            if (participant.idade < 16) {
                res.writeHead(403, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({ message: "Não pode ter participante menor de 16" }))
            } else if (participant.password !== participant.confirmPassword) {
                res.writeHead(400, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({ message: "Senha não condiz" }))
            } else {
                participant.id = participants.length + 1
                participants.push(participant)
                res.writeHead(201, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({ message: "Participante cadastrado", dados: participant }))
            }
        })
    } else if (method === 'PUT' && url.startsWith('/participants/')) {
        const participantId = url.split('/')[2];

        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        }).on('end', () => {
            const updateParticipant = JSON.parse(body)
            const index = participants.findIndex(participant => participant.id == participantId)
            if (index !== -1) {
                if (updateParticipant.idade < 16) {
                    res.writeHead(403, { 'Content-Type': 'application/json' })
                    return res.end(JSON.stringify({ message: "Não pode ter participante menor de 16" }))
                } else if (updateParticipant.password !== participant.confirmPassword) {
                    res.writeHead(400, { 'Content-Type': 'application/json' })
                    return res.end(JSON.stringify({ message: "Senha não condiz" }))
                } else {
                    participants[index] = { ...participants[index], ...updateParticipant }
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(participants[index]))
                }
            } else {
                res.writeHead(400, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify({ message: "Usuario não encontrado" }))
            }
        })

    } else if (method === 'DELETE' && url.startsWith('/participants/')) {
        const idPart = url.split('/')[2]
        const index = participants.findIndex((participantes) => participantes.id == idPart)
        const partFound = participants.find((participantes) => participantes.id == idPart)
        if (index !== -1) {
            res.setHeader("Content-Type", "application/json")
            participants.push(partFound) //envia uma copia do user para o final
            participants.splice(index, 1) //deleta o index desejado
            participants.pop() //deleta a copia criada, assim realocando os outros para não ficar um espaço vazio
            res.end(JSON.stringify("Sucesfull delete"))
        } else {
            //retorna erro caso não exista esse index
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ message: "Can't update this user" }))
        }
    } else if (method === 'GET' && url.startsWith('/participants/')) {
        const participantId = url.split('/')[2]
        const findParticipant = participants.find(participant => participant.id == participantId)

        if (!findParticipant) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ message: "Participante não encontrado, espero ter ajudado" }))
        } else {
            res.setHeader('Content-Type', 'application/json')
            return res.end(JSON.stringify(findParticipant))
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ codigo: 404, message: "Página não encontra" }))
    }

}).listen(PORT, () => {
    console.log('Server Open in port ' + PORT)
})