
/* Get 'home' page */
module.exports.homelist = function(req, res){
		res.render('index', {title: 'home list Jason Lambert'});
};


/* Get 'location info' page */
module.exports.locationInfo = function(req, res){
		res.render('index', {title: 'locationInfo Jason Lambert'});
};



/* Get 'location info' page */
module.exports.addReview = function(req, res){
		res.render('index', {title: 'addReview Jason Lambert'});
};