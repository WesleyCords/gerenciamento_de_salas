import Sala from "../models/salasModel.js";
import Horario from "../models/horarioModel.js";
import Reserva from "../models/reservasModel.js";
import { Op } from "sequelize";
import { sequelize } from "../config/databases.js";

const getRoomByCapacity = async (capacidade, data) => {
  const salas = await Sala.findAll({
    where: {
      capacidade: {
        [Op.gte]: capacidade,
      },
    },
    include: [
      {
        model: Horario,
        include: [
          {
            model: Reserva,
            required: false,
            where: {
              data: data,
            },
          },
        ],
      },
    ],
    distinct: true,
    col: "id",
  });
  if (salas.length === 0) {
    const error = new Error(
      "Não existe salas no momento para esses requisitos."
    );
    error.statusCode = 404;
    error.status = "falha";
    throw error;
  }

  const resultadoFormatado = salas
    .map((sala) => {
      const horariosLivres = sala.horarios
        .filter((horario) => horario.reservas.length === 0)
        .map((horario) => ({
          id: horario.id,
          inicio: horario.inicio,
          fim: horario.fim,
        }));

      return {
        id: sala.id,
        nome: sala.nome,
        descricao: sala.descricao,
        capacidade: sala.capacidade,
        horariosLivres: horariosLivres,
      };
    })
    .filter((sala) => sala.horariosLivres.length > 0);
  return resultadoFormatado;
};

const getRoomByID = async (salaID) => {
  const sala = await Sala.findOne({
    where: {
      id: salaID,
    },
  });

  if (!sala) {
    const error = new Error("Sala não encontrada.");
    error.statusCode = 404;
    error.status = "falha";
    throw error;
  }
  return sala;
};

const getHorariosRoomByID = async (salaID) => {
  const sala = await Sala.findOne({
    where: {
      id: salaID,
    },
  });
  if (!sala) {
    const error = new Error("Sala não encontrada.");
    error.statusCode = 404;
    error.status = "falha";
    throw error;
  }
  const horarios = await Horario.findAll({
    where: {
      salaId: salaID,
    },
  });
  return horarios;
};

const getRoomAvailable = async (salaID, data) => {
  const sala = await Sala.findOne({
    where: {
      id: salaID,
    },
  });
  if (!sala) {
    const error = new Error("Sala não encontrada.");
    error.statusCode = 404;
    error.status = "falha";
    throw error;
  }
  const horariosSala = await sequelize.query(
    `SELECT
      h.id AS id_horario,
      h.inicio AS horario_inicio,
      h.fim AS horario_fim
    FROM
      horarios AS h
    LEFT JOIN
      reservas AS r ON h.id = r.horario_id AND h.sala_id = r.sala_id AND r.data = :dataParam
    WHERE
      h.sala_id = :salaIdParam
      AND r.id IS NULL
    ORDER BY
      h.inicio;
      `,
    {
      replacements: {
        dataParam: data,
        salaIdParam: salaID,
      },
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return horariosSala;
};

export default {
  getRoomByCapacity,
  getRoomByID,
  getHorariosRoomByID,
  getRoomAvailable,
};
