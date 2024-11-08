import Curtida from "../models/curtidaModel";
import Empresa from "../models/empresaModel";

export const getEmpresa = async (request, response) => {    
    try {
    //1 buscar informacoes da empresa -> tabela empresa
    const inforEmpresa = await Empresa.findByPk(1,{raw: true});

     //2 contar a quantidade de likes da tabela curtida
    const likes = await Curtida.count({
        where:{
            tipo_avaliacao: "up",
        },
    });
    
    const dislikes = await Curtida.count({
        where:{
            tipo_avaliacao: "down",
        },
    });
    
    inforEmpresa.likes = likes
    inforEmpresa.dislike = dislikes
    response.status(200).json(inforEmpresa);
    } catch (error) {
        console.log(error);
        response.status(500).json({ message:"Erro ao buscar dados da empresa"})
    }
}    