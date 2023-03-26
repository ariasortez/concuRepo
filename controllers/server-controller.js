import connection from "../config/bd.js";

const getCar = async (req, res) => {
  try {
    const { id, sucursalId } = req.query;
    const [result] = await (
      await connection
    ).query(`SELECT * FROM cars WHERE id = ? AND sucursal_id = ?`, [
      id,
      sucursalId,
    ]);

    return res.json({
      result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
const getEmployee = async (req, res) => {
  try {
    const { username, sucursalId } = req.query;
    const [result] = await (
      await connection
    ).query(`SELECT * FROM employees WHERE username = ? AND sucursal_id = ?`, [
      username,
      sucursalId,
    ]);

    return res.json({
      result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
const getBranch = async (req, res) => {
  try {
    const { id } = req.query;
    const [result] = await (
      await connection
    ).query(`SELECT * FROM sucursales WHERE id = ?`, `${id}`);

    return res.json({
      result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export { getCar, getEmployee, getBranch };
