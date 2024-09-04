import Tarefa from "../models/taskModel.js"
import { z } from "zod";
import formatZodError from "../middleware/zodError.js";

//Validações com ZOD
const createSchema = z.object({
    tarefa: z.string().min(3, { message: "A tarefa deve ter pelo menos 3 caracteres" }).transform((txt)=>txt.toLowerCase()),
    descricao:  z.string().min(5, { message: "A tarefa deve ter pelo menos 5 caracteres" })
})

const getSchema = z.object({
  id: z.string().uuid({message: "Id da tarefa. está inválido."})
})

const buscarTarefaPorSituacaoSchema = z.object({
  situacao: z.enum(["pendente", "concluida"])
})

const updateTarefaSchema = z.object({
    tarefa: z.string().min(3,{message: "A Tarefa deve ter pelo menos 3 caracteres"}).transform((txt)=> txt.toLocaleLowerCase()),
    descricao: z.string().min(3,{message: "A Descrição deve ter pelo menos 3 caracteres"}).transform((txt)=> txt.toLocaleLowerCase()),
    situacao: z.enum(["pendente", "concluida"])
})

// Adicionar uma nova tarefa:
export const createNewTask = async (req, res) => {
  
  //implementar a validação.(Schema)
  const bodyValidation = createSchema.safeParse(req.body)
  if(!bodyValidation.success){
    res.status(400).json({message: "Os dados estão incompletos.", detalhes: formatZodError(bodyValidation.error)})
    return
  }

  const { nome, descricao } = req.body
  const status = "pendente"

  const novaTarefa = { 
    nome, descricao, status 
  }

  try {
    await Tarefa.create(novaTarefa)
    res.status(201).json({
      message: "Tarefa cadastrada com sucesso!"
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err: "Erro interno ao criar nova tarefa."
    })
  }
}

// Listar tarefas com paginação
export const getTasksByPage = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const offset = (page - 1) * limit

  try {
    const tarefas = await Tarefa.findAndCountAll({
      limit, offset
    })
    const totalPaginas = Math.ceil(tarefas.count / limit)
    
    res.status(200).json({
      totalTarefas: tarefas.count,
      totalPaginas,
      paginaAtual: page,
      itemsPorPagina: limit,
      proximaPagina: totalPaginas === 0 
        ? null 
        : `${process.env.BASE_URL}/tarefas?page=${page + 1}&limit=${limit}`,
      tarefas: tarefas.rows
    })
  } catch (error) {
    res.status(500).json({
      err: "Erro interno ao buscar tarefas."
    })
  }
}

  // Buscar tarefa por ID
export const getTasksByID = async (req, res) => { //3

  const paramValidator = getSchema.safeParse(req.params)
  if(!paramValidator.success){
    res.status(400).json({ message: "Número de identificação está inválida.",
    detalhes: formatZodError(paramValidator.error)
    })
    return
  }

  const tarefaId = req.params.id
  
  try {
    const tarefa = await Tarefa.findByPk(tarefaId)

    if (tarefa) {
      res.status(200).json(tarefa)
    } else {
      res.status(404).json({
        message: "Tarefa não encontrada."
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err: "Erro interno ao buscar a tarefa."
    })
  }
}

// Atualizar tarefa
export const updateTask = async (req, res) => {
  
  const paramValidator = getSchema.safeParse(req.params)
  if(!paramValidator.success){
    res.status(400).json({ message: "Número de identificação está inválida.",
    detalhes: formatZodError(paramValidator.error)
    })
    return
  }

  const updateValidator = updateTarefaSchema.safeParse(req.body)
  if(!updateValidator.success){
    res.status(400).json({
      message: "Dados para atualização estão incorretos",
      detalhes: formatZodError(updateValidator.error)
    })
    return
  }
  
  const { id } = req.params
  const { nome, descricao, status } = req.body
  
  const tarefaAtualizada = {
    nome,
    descricao,
    status,
  }

  try {
    const [linhasAfetadas] = await Tarefa.update(tarefaAtualizada, { where: { tarefa_id: id } })

    if (linhasAfetadas < 1) {
      return res.status(404).json({
        message: "Tarefa não encontrada."
      })
    }

    res.status(200).json({
      message: "Tarefa atualizada com sucesso."
    })
  } catch (error) {
    res.status(500).json({
      err: "Erro ao atualizar tarefa."
    })
  }
}

// Atualizar status da tarefa
export const updateStatus = async (req, res) => {
 
  const paramValidator = getSchema.safeParse(req.params)
  if(!paramValidator.success){
    res.status(400).json({ message: "Número de identificação está inválida.",
    detalhes: formatZodError(paramValidator.error)
    })
    return
  }
 
  const { id } = req.params
  const { status } = req.body

  if (status !== "pendente" && status !== "concluida") {
    return res.status(400).json({
      err: "Valor inválido passado como status da tarefa."
    })
  }

  try {
    const tarefa = await Tarefa.findOne({ where: { tarefa_id: id } })

    if (!tarefa) {
      res.status(404).json({
        message: "Tarefa não encontrada."
      })
    }

    await tarefa.update({ status })

    res.status(200).json({
      message: `O status da tarefa foi alterado para ${status}.`
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err: "Erro interno ao alterar o status da tarefa."
    })
  }
}

// Buscar tarefas por situação
export const getTasksByStatus = async (req, res) => {
 
 
  const situacaoValidation  = buscarTarefaPorSituacaoSchema.safeParse(req.params)
  if(!situacaoValidation.success){
    res.status(400).json({
      message: "Situação inválida.",
      detalhes: formatZodError(situacaoValidation.error)
    })
    return
  }
 
  const { situacao } = req.params

  if (situacao !== "pendente" && situacao !== "concluida") {
    return res.status(400).json({
      err: "Valor inválido passado como situação da tarefa."
    })
  }

  try {
    const tarefa = await Tarefa.findAll({
      where: {
        status: situacao
      }
    })

    res.status(200).json(tarefa)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err: "Erro interno ao buscar as tarefas."
    })
  }
}

