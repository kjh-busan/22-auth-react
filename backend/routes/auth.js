const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const data = req.body;
  let errors = {};

  if (!pwIsValid) {
    return res.status(422).json({
      message: "Invalid credentials.",
      errors: { credentials: "Invalid email or password entered." },
    });
  }

  const token = createJSONToken(email);
  res.json({ token });
});

module.exports = router;
