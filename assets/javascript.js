
var topics = ["Space", "Universe", "Black Hole", "Starman", "Sun", "Star", "Nasa", "Rocket Launch", "Super Nova", "Planet", "Gravity", "Steven Hawking", "Black Science Man"];

var key = "GJmEMx8mp8xjDF4o9zIslHuNaR54KVTl";



function toggleSRC(image) {
		if(image.src.indexOf("_s.gif") > -1){
			image.src = image.src.replace("_s.gif", ".gif")
		}
		else{
			image.src = image.src.replace(".gif", "_s.gif")
		}
	}

var word = "monty python";

$("#submit").on("click", function() {
	event.preventDefault();
	var newButton = $("<button>");
	newButton.addClass("addedButton");
	newButton.html($("#newWord").val().trim());
	topics.push($("#newWord").val().trim());
	console.log(topics);
	$("#buttonholder").append(newButton);

$(".addedButton").on("click", function() {
	word = $(this).text();
	var rating = ""
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&rating=" + rating + "&limit=10&q=" + word;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		var addedResults = response.data;
		console.log(response);

		for (var i=0; i<addedResults.length; i++){

		if (addedResults[i].rating !== "r" && addedResults[i].rating !== "pg-13") {
				var addedImageHolder = $("<img>");

				rating = addedResults[i].rating;
				var addedDisplayRating = $("<p>").text("Rating: " + rating);

				addedImageHolder.attr("src", addedResults[i].images.fixed_height_still.url);
				$("#gifHolder").prepend(addedDisplayRating);
				$("#gifHolder").prepend(addedImageHolder);

				$(addedImageHolder).on("click", function() {
					toggleSRC(this);
			});
		}	
	}
})
})




})


	for (var i=0; i<topics.length; i++) {
			var button = $("<button>");
			button.addClass("gifButton");
			// button.attr("class", "gifButton");
			word = topics[i];
			console.log(word);
			console.log(i);
			button.html(word);
			$("#buttonholder").append(button);	
			// imageHolder.attr("src", response.data[i].images.fixed_height.url);
			// $("#gifHolder").append(imageHolder);
			
	}


$("button").on("click", function() {

word = $(this).text();
var rating = ""
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&rating=" + rating + "&limit=10&q=" + word;


$.ajax({
url: queryURL,
method: "GET"
}).done(function(response) {


	var results = response.data;
	console.log(results);

	for (var i=0; i<results.length; i++){
		var imageHolder = $("<img>");
		
		// imageHolder.data("data-still", results[i].images.fixed_height_still.url);
		// imageHolder.data("data-animate", results[i].images.fixed_height.url);
		// imageHolder.data("data-state", "still");

		// var state = (this).data-state;

		rating = results[i].rating;
		var displayRating = $("<p>").text("Rating: " + rating);
		rating = results.rating;

		
		imageHolder.attr("src", results[i].images.fixed_height_still.url);
		$(imageHolder).on("click", function() {
			toggleSRC(this);
		})
		$("#gifHolder").prepend(displayRating);
		$("#gifHolder").prepend(imageHolder);
	}

	

	// console.log(word);
	// console.log(response);
	
	// console.log(word);
	
	
})


})
