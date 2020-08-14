module.exports = function(app)
{
     app.get('/about',function(req,res){
        res.render('about.html');
    });
	
	 app.get('/',function(req,res){
		 res.render('index.html');
    });
    app.get('/input',function(req,res){
        res.render('dataInput.html');
    });

}