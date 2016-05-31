var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

ratings.forEach(function(item, index){
	var leftAges=ages.filter(function(minAge){
		return minAge>=minAgeForRating[index];
	}).toString();
	console.log(ratings[index]+ '\n' +leftAges);
});




