var express = require('express');
var router = express.Router();





router.post('/login', function (req, res) {
 
    var db = require("../db");
    
    
    var consulta = {
        userName: req.body.username,
        senha: req.body.senha
    }

   var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    
   Users.find(consulta, function(erro, login){
       var resposta = {
                    status: true ,
                    message: "login Realizado com Sucesso"
                    }
                 
       if(erro) throw erro;
       
        if(login.length ==0 || login == null || login == undefined){
            
            console.log("Nenhuma conta cadastrada");
            
            }else{
                res.send(login);
                console.log(resposta);
            }

   });
    
});


module.exports = router;
