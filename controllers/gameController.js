module.exports.playGame = function(req,res){
    res.render('index',{
        title: "Flappy bee"
    });
};