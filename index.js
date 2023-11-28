const express = require("express");
const jsPDF = require("jspdf");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/generate-pdf", (req, res) => {
  const doc = new jsPDF();
  doc.text(req.body.text, 10, 10);
  const pdfData = doc.output("datauristring");
  res.send({ pdfData });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
