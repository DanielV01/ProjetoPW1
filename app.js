const express = require("express")
const app = express()
const port = 9099

//template engine
app.set('view engine','ejs')
app.use(express.static("public"))

//Body-parse
app.use(express.urlencoded({extended: true}))
app.use(express.json())



//rotas SITE COMPRA

app.get("/",function(req,res){
    res.render("pagina_inicial")
})

app.get("/compra",(req,res)=>{
    res.render("compra")
})


app.post("/compra_finalizada",(req,res)=>{
    
    res.send(`PEDIDO ENVIADO :) <br> Nome: ${req.body.nome} <br> Cep: ${req.body.cep} <br> rua: ${req.body.rua}<br> Bairro: ${req.body.bairro}<br> Cidade: ${req.body.cidade}<br> Estado: ${req.body.uf}<br> IBGE: ${req.body.ibge}`);

})

//rotas SITE JOGUINHO


app.get("/jogo",(req,res)=>{
    res.render("jogo")
})

app.get("/game_over",(req,res)=>{
    res.render("game_over")
})

app.get("/vitoria",(req,res)=>{
    res.render("vitoria")
})

//PERGUNTAS
app.get("/pergunta1",(req,res)=>{
    res.render("pergunta1")
})

app.get("/pergunta2",(req,res)=>{
    res.render("pergunta2")
})

app.get("/pergunta3",(req,res)=>{
    res.render("pergunta3")
})

app.get("/pergunta4",(req,res)=>{
    res.render("pergunta4")
})

app.get("/pergunta5",(req,res)=>{
    res.render("pergunta5")
})


//abertura do servidor
app.listen(port, ()=>{
    console.log("rodando servidor")
})

