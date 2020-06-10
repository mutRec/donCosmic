const express = require('express');
const app = express();
const path = require('path');

// Configuracions.
app.set('port', 3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// Aplicacions intermitges.

// Rutes.
app.use(require('./routes/index'));

// Fitxers estàtics.
app.use(express.static(path.join(__dirname, 'public')))

// Servidor escoltant en el port definit.
//app.listen(app.get('port'), () => {
//    console.log('Servidor sobre el port', app.get('port'));
//});
