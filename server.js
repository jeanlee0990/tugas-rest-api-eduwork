const express = require('express');
const bodyParser = require('body-parser');

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
