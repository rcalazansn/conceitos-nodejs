const { isUuid } = require("uuidv4");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({
      error: "Repositorie ID not found",
    });
  }

  return next();
}
