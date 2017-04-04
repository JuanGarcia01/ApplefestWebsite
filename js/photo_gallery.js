//codes adopted and changed from Qing Qing Li's assignment
//variables
var index = 0;

//function for displaying the previous image
function previous_image() {
    "use strict";
    //variables: pictures and main_image
    var pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"],
        // images are taken from Andrew Halpern https://www.flickr.com/photos/106103661@N02/albums
        main_image = document.getElementById('apple_fest_images');
    //wrap around to the last image if the first image is currently displayed
    if (index === 0) {
        index = pics.length - 1;
        main_image.src = 'images/gallery/' + pics[index];
    } else {
        index = index - 1;
        main_image.src = 'images/gallery/' + pics[index];
    }
}

//function for displaying the next image
function next_image() {
    "use strict";
    // variables pics and main_image
    var pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"],
        main_image = document.getElementById('apple_fest_images');
    //wrap around to the first image if the last image is currently displayed
    if (index === (pics.length - 1)) {
        index = 0;
        main_image.src = 'images/gallery/' + pics[index];
    } else {
        index = index + 1;
        main_image.src = 'images/gallery/' + pics[index];
    }
}


