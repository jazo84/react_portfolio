var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post('/email',function(req,res){
  var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASS
		}
});

var mailOptions = {
	    from: '"Jasmaine John" <jasmainejohn@gmail.com>',
	    subject: 'New Business Opportunity',
	    to: process.env.EMAIL,
	    message: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Message: ' + req.body.message,
	    html: '<p> ' + 'Name: ' + req.body.name + '<br>' + 'Email: ' + req.body.email + '<br>' + 'Message: ' + req.body.message + ' </p>'
	};
  transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        res.json({error: error});
	    } else {
			res.json({success: info});
	    }
	});
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
