const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

/*const username = 'Contact_14';
const password = 'Pixel_Pioneers';
const databaseName = 'Contact_Us';
const host = 'cluster3.qw3ehcj.mongodb.net';
const port = 27017;*/

//Environment variable for port (optional)
const PORT = process.env.PORT || 9080;

/*Middleware for parsing the body request*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*Connection for the MongoDB Database*/ 
const connectionString = `mongodb+srv://Contact_14:Pixel_Pioneers@cluster3.qw3ehcj.mongodb.net/Contact_Us`;

mongoose.connect(connectionString)
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

/*Include routes after connection to ensure they are available*/
const submissionRoutes = require('./routes/submissionRoutes');
app.use('/api', submissionRoutes);

/* Start the server after everything is set up*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
