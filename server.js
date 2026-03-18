const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = "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"; //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 👈 AQUÍ

app.post("/ia", async (req, res) => {

  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+API_KEY
    },
    body: JSON.stringify({
      model:"llama3-70b-8192",
      messages:req.body.messages
    })
  });

  const data = await r.json();
  res.json(data);
});

app.listen(3000, ()=>console.log("🔥 http://localhost:3000"));