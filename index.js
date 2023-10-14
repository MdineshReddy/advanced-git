const express = require("express");
const app = express();
const path = require("path");

const usersRouters = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));
app.use("/users", usersRouters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
