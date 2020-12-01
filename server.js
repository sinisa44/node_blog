const app = require('./app');
const database = require('./utils/database/connection');


database.database();

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log(`app running on port ${PORT}`));


