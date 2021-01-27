const app = require("./app");
const { PORT = 9742 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
