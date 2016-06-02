var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

/*ratings.forEach(function(item, index){
	var leftAges=ages.filter(function(minAge){
		return minAge>=minAgeForRating[index];
	}).toString();
	console.log(ratings[index]+ '\n' +leftAges);
});*/

var ratingsAllowed=ages.map(function(age){
	return ratings.filter(function(rating, index){
		return age>= minAgeForRating[index];
	});
});

ages.forEach(function(age, index){
	console.log("Age "+age+" is allowed to se: "+ratingsAllowed[index].toString());
});


/*var allowed=ages.forEach(function(num){
	function ratingsFilter(value,i){
		return num>minAgeForRating[i];
	}
})
*/

/*ages.forEach(function(item, index){

  var leftMinAgeForRating= minAgeForRating.filter(function(itemInminAgeForRating){
	  return ages[index]>=itemInminAgeForRating;
	  

  });
  

*/
 /*  leftMinAgeForRating.forEach(function(item, index){
	  var newArray=ratings.map(function(itemInRatings){
		  return itemInRatings[index];
	  });
	  console.log(newArray);
   });*/
	//console.log("Age "+ages[index] +" is allowed to see: "+leftMinAgeForRating);
	  
//});
