import Publicacao from "../models/publicacaoModel";
import { literal } from "sequelize";

export const getAll = async (request, response) => {


    try{
    //1 buscar informacoes de publicacoes
    const publicacao = await Publicacao.findAll({
        raw: true,
        attributes:[
        "id",
        "titulo",
        "local",
        "cidade",
        "imagem"
        //Adicionar Likes
        [literal(`(
                SELECT COUNT(*) FROM curtidas
                WHERE curtidas.publicacoes_id = publicacao.id
                AND curtidas.tipo_avaliacao = 'up'
        )`), "total Likes"],
        [literal(`()`), "total Deslikes"],
        [literal(`()`), "total Comentarios"],
        ]
    })
    response.status(200).json(publicacao)
    }catch (error){
    console.log(error);
    response.status(500).json({ err: "Erro" })
    }
    //2 buscar likes individualmente 
    //3 buscar deslike individualmente
    //4 buscar comentarios individualmente
};