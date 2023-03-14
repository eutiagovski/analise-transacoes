const fs = require("fs");
const csv = require("csv-parse");

exports.sendIndex = async (req, res) => {
  res.render("index");
};

exports.sendFile = async (req, res) => {
  console.log(req.file); // primeira tarefa

  const filePath = req.file.path;
  var results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      var transacao = {
        bOrigem: data[0],
        aOrigem: data[1],
        cOrigem: data[2],
        bDestino: data[3],
        aDestino: data[4],
        cDestino: data[5],
        vTransacao: data[6],
        dataHoraTransacao: data[7],
      };
      results.push(transacao);
    })
    .on("end", () => {
      // data/hora que a importação foi realizada e data das transações dessa importação.
      const registro = {
        dataTransacao: results[0].dataHoraTransacao,
        dataImportacao: new Date().toISOString(),
      };

      console.log(registro)

      res.send("Arquivo enviado");
    })
    .on("error", (err) => {
      res.send("Ocorreu um erro desconhecido no upload.");
    });
};
