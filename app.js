console.log("hello");

function getRandom() {
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&list=random",
		dataType: "json",
		success: function(data) {
			console.log(data);
		}
	}); //close ajax
}