// const image = document.querySelector("img");
// const image = document.getElementById("tImgX");

// function updateImageSource() {
//     if (window.matchMedia("(max-width: 730px)").matches) {
//         image.src = "assets/images/image-web-3-mobile.jpg";
//     } else {
//         image.src = "assets/images/image-web-3-desktop.jpg";
//     }
// }

// window.addEventListener("resize", updateImageSource);

// updateImageSource();

$(document).ready(function () {
    const image = $("#tImgX");

    function updateImageSource() {
        if ($(window).width() <= 919) {
            image.attr("src", "assets/images/image-web-3-mobile.jpg");
        } else {
            image.attr("src", "assets/images/image-web-3-desktop.jpg");
            $(".menuBox").removeClass("open");
        }
    }

    $(window).resize(updateImageSource);

    updateImageSource();
});



//  2Nd version using em
$(document).ready(function () {
    const image = $("#tImgX");

    function updateImageSource() {
        // Get the current font size of the window in pixels
        const fontSizeInPixels = parseFloat($(window).css('font-size'));

        // Convert em units to pixels by multiplying with the font size
        const minWidthInPixels = 35 * fontSizeInPixels;

        if ($(window).width() >= minWidthInPixels) {
            // Code to be executed if window width is greater than or equal to 35em
            image.attr("src", "assets/images/image-web-3-desktop.jpg");
        } else {
            // Code to be executed if window width is less than 35em
            image.attr("src", "assets/images/image-web-3-mobile.jpg");
        }
    }

    $(window).resize(updateImageSource);

    updateImageSource();
});


// vanilla js
document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector("#tecImg");
  
    function updateImageSource() {
      // Get the current font size of the window in pixels
      const fontSizeInPixels = parseFloat(getComputedStyle(window).fontSize);
  
      // Convert em units to pixels by multiplying with the font size
      const minWidthInPixels = 35 * fontSizeInPixels;
  
      if (window.innerWidth >= minWidthInPixels) {
        // Code to be executed if window width is greater than or equal to 35em
        image.src = "assets/technology/image-space-capsule-portrait.jpg";
      } else {
        // Code to be executed if window width is less than 35em
        image.src = "assets/technology/image-space-capsule-landscape.jpg";
      }
    }
  
    window.addEventListener("resize", updateImageSource);
  
    updateImageSource();
  });
  
