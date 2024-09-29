//jQuery == $

// Ngecek apakah document (HTML) udah fully loaded
$(document).ready(function () {
    console.log('jQuery is attached');

    // Slider = Carousel + Container + Image
    // jQuery Selector
        // Class --> .
        //ID --> #
        // Element --> lgsng namanya

    var $slider = $('.carousel')
    // . untuk specify kalau itu class carousel
    var $sliderContainer = $('.carousel-image-container')
    var $slides = $('.carousel-image')

    // Komponen untuk membuat slider
    var slideWidth = $slides.width()
    var slideHeight = $slides.height();
    var slidesCount = $slides.length
    var totalWidth = slideWidth * slidesCount

    // bikin frame (using jQuery)
    // Pastiin tiap image memiliki size yg sama
    $slider.css({
        width: slideWidth,
        height: slideHeight
    });
    
    // autocomplete --> jcss

    // Container untuk sliding nya
    $sliderContainer.css({
        width: totalWidth,
        marginLeft: -slideWidth,
        transition: "margin 0.5s ease-in-out"
    });

    // Initial Position Slider
    var currIndex = 0;

    // Function untuk gerakinnya
    function moveSlider(){
        currIndex++;

        if(currIndex >= slidesCount) {
            currIndex = 0;
        }

        var newMarginLeft = -currIndex * slideWidth

        // modify position si frame
        $sliderContainer.css({
            // CSS:variable baru
            marginLeft:newMarginLeft
        });
    }

    //Apply
    setInterval(() => {
        //Masukkin mau lakuin apa
        moveSlider()
    }, 3000);


});