const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const InfoPointRouter = require('./routes/infoPointRoutes');
const ArticleRouter = require('./routes/articleRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);
app.use("/infoPoints", InfoPointRouter);
app.use("/articles", ArticleRouter);

app.listen(3000, function (){
  console.log("App is running...");
})