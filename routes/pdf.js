const express = require('express')
const router = express.Router()
const PDFDocument = require('pdfkit')
var bodyParser = require('body-parser');

router.post('/', (req, res) => {

    let filename = "dokument";
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf';
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    const result=req.body.result;
    const prezime = req.body.prezime;
    const ime  = req.body.ime;
    const doc = new PDFDocument();
    doc.fontSize(20);

    doc.text('Sta nam pokazuje indeks telesne mase?\n',{align: 'center'});
    doc.y=100;
    doc.fontSize(12);
    doc.text('Indeks telesne mase (BMI) nam pokazuje odnos izmedju tezine i visine naseg tela.' +
        ' U zavisnosti od rezultata merenja i u odnosu na vase godine i pol, nas BMI kalkulator ' +
        'vam daje informaciju o tome da li imate normalnu tezinu ili ne. BMI tabela pokazuje razlizite ' +
        'kategorije telesne tezine prema godinama zivota i daje vam informaciju o tome da li ste na granici ' +
        'neke druge kategorije. BMI ce vam pokazati da se nalazite u okviru normalne težine, ali da se npr.' +
        ' priblizavate prekomernoj ili smanjenoj telesnoj tezini. Na osnovu vase trenutne telesne kondicije ' +
        'ili zdravstvenog stanja moze se desiti da je neophodno da smanjite ili povecate tezinu. Ako su vase ' +
        'vrednosti daleko ispod ili iznad proseka, svakako morate otici kod svog lekara, kako biste smanjili rizik ' +
        'za vase zdravlje.',{align:'left'});

    doc.y=250;
    doc.image('public/images/bmi.jpg', {width: 400})
    doc.y = 500;
    doc.text(ime + ' ' + prezime +' vas indeks telesne mase iznosi ' + result+'.');
 
    doc.pipe(res);
    doc.end()
})

module.exports = router;