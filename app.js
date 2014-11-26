//Create lightbox (overlay) for images in gallery

//Create overlay
var $overlay = $('<div id="overlay"></div>');
	//image
var $image = $('<img>');
	//caption
var $caption = $('<p></p>');
	//close button
var $button = $('<br><button>Close Please!</button>')

//Add (append) overlay to body of html doc
$overlay.append($image);
$overlay.append($caption);
$overlay.append($button);
$("body").append($overlay);

//Capture click event to link
$("#imageGallery a").click(function(event){
	//Stop default behavior of following link
	event.preventDefault();
	var imageLocation = $(this).attr('href');
	//Show overlay
	$overlay.show();
	//Route image from src to link
	$image.attr("src", imageLocation);
	//Get caption text and display
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);

});


//Click close button
$button.click(function(){
	$overlay.hide();
});
	//hide overlay