const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Choose an unused port number (e.g., 3000)
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connectionString = "mongodb+srv://Contact_14:Pixel_Pioneers@cluster3.qw3ehcj.mongodb.net/Contact_Us";
mongoose.connect(connectionString, {
  connectTimeoutMS: 30000, // Increased connection timeout
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

const submissionRoutes = require('./routes/submissionRoutes');
app.use('/api', submissionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
