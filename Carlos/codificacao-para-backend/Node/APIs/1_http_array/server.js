import http from "node:http";

const PORT = 3333;
//Métodos: GET, POST, PUT, PATH, DELETE
/**
 * REQUISIÇÃO
 * 1. corpo da requsição (request.body) (POST)
 * 2. Parâmetros de busca (Search PARAMS, QUERY PARAMS) http://localhost:3333/users/2 (GET)
 * 3. Parâmetros de ROTA (ROUTE PARAMS) - http://localhost:3333/users/1 (PUT, PATH, DELETE)
 */
const users = [];
const server = http.createServer((request, response) => {
  const { method, url } = request;
 
  if (url === "/users" && method === "GET") {
    //Buscar todos os usuários
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  } else if (url.startsWith("/users/") && method === "GET") {
    // Buscar um único usuário
    const userId = url.split("/")[2];
    const user = users.find((user) => user.id == userId);

    if (user) {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(user));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Usuário não encontrado" }));
    }
  } else if (url === "/users" && method === "POST") {
    // Cadastrar um usuário
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const novoUsuario = JSON.parse(body);
      novoUsuario.id = users.length + 1;
      users.push(novoUsuario);
      response.writeHead(201, { "Content-Type": "application/json" });
      response.end(JSON.stringify(novoUsuario));
    });
  } else if (url.startsWith("/users/") && method === "PUT") {
    // Atualizar um usuário
    const userId = url.split("/")[2];

    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const updateUser = JSON.parse(body);
      const index = users.findIndex((user) => user.id == userId);
      if (index !== -1) {
        users[index] = { ...users[index], updateUser };
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(users[index]));
      } else {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ messsage: "Erro ao tentar atualizar usuário" })
        );
      }
    });
  } else if (url.startsWith("/users/") && method === "DELETE") {
    const userId = url.split("/")[2];
    const index = users.findIndex((user) => user.id == userId);
    if (index !== -1) {
        users.splice(index, 1)
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify({message:"Usuário excluido"}));
    }else{
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ messsage: "Erro ao tentar excluir o usuário" })
        );
    }

  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({ messsage: "Página não encontrada" })
    );
  }
});
