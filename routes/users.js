const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "success",
    data: [
      {
        id: 123,
        name: "Dinesh",
      },
    ],
  });
});

module.exports = router;
