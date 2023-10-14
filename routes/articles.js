const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    msg: "success",
    data: [
      {
        id: 1,
        author: 123,
        title: "Hello World!",
      },
    ],
  });
});

module.exports = router;
