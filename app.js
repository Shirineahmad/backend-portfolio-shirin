require("dotenv").config();
const cors = require("cors");
const express = require("express");
const dbConnection = require("./config/db");
const SkillsRoute = require("./routes/skillsRoutes");
const HeroRoute = require("./routes/heroRoutes");
const AboutRoute = require("./routes/aboutRoutes");
const ContactMeRoute = require("./routes/contactMeRoutes");
const TestimonialsRoute = require("./routes/testimonialRoutes");
const MyProjectsRoute = require("./routes/projectsRoutes");
const ContactInfoAndDescRoute = require("./routes/contactInfoAndDescRoutes");
const LogInRoute = require("./routes/loginRoutes");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/Skills", SkillsRoute);
app.use("/Hero", HeroRoute);
app.use("/About", AboutRoute);
app.use("/ContactMe", ContactMeRoute);
app.use("/Testimonials", TestimonialsRoute);
app.use("/MyProjects", MyProjectsRoute);
app.use("/ContactInfoAndDesc", ContactInfoAndDescRoute);
app.use("/LogIn", LogInRoute);

app.listen(port, () => {
  dbConnection()
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
  console.log(`Example app listening on port ${port}`);
});
