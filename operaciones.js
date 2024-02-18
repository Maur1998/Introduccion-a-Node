const fs = require("fs");

const citas = JSON.parse(fs.readFileSync("./citas.json", "utf8"));
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  let registro = {
    nombre: nombre,
    edad: edad,
    animal: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  citas.push(registro);
  fs.writeFileSync("./citas.json", JSON.stringify(citas));
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("./citas.json", "utf8"));
  console.log("a", citas);
};

module.exports = { registrar, leer };
