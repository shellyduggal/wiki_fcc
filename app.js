console.log("hello");

// function getRandom() {
// 	$.ajax({
// 		url: "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=felix&prop=info&format=json",
// 		dataType: "jsonp",
// 		success: function(data) {
// 			console.log(data);
// 		}
// 	}); //close ajax
// }


function getRandom() {
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=felix&prop=info&inprop=url|displaytitle&format=json",
		dataType: "jsonp",
		success: function(data) {
			console.log(data);
		}
	}); //close ajax
}