import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  //console.log(req.rawHeaders);
  res.send(
    "<b><center>This is the beginning of development <br /> <code> edit here </code></center></b> "
  );
});
app.get("/about", (req, res) => {
  //console.log(req.rawHeaders);
  res.send(
    "<b><center> About our program here <br /> <button> click here </button></center></b> "
  );
});
app.get("/contact", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<b><center> contact us here </center></b> ");
});
app.listen(port, () => {
  console.log(`the server has started on ${port} `);
});
