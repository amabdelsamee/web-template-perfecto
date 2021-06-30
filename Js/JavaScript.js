
$(document).ready(function () {

    // Golabals
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();


    // Removing Loading Page
    $(window).load(function () {
        var loading = $(".loading");
        loading.fadeOut(1000);
        $("body").css("overflow","auto");
    });

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Home */

    // Setting Section Home's Height Dynamically
    var home = $(".home");
    var windowHeight = $(window).height();

    home.outerHeight(windowHeight);
    $(window).on("resize", function () {
        windowHeight = $(window).height();
        home.outerHeight(windowHeight);
    });

    // Make Home's Headings Dynamic
    var heading = $(".home .content div");
    setInterval(function () {
        appearedIndex= heading.index($(".home .content div.appear"));
        heading.removeClass("appear");
        heading.eq((appearedIndex+1)%heading.length).addClass("appear");
    },3000)

    /* End Section Home */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section About */

    var about = $("section.about");
    var logo = $(".about .logo");
    var whoWeAre = $(".who-we-are");


    $(window).on("scroll",function () {
        windowScrollTop = $(window).scrollTop();
        if (windowScrollTop >= about.offset().top-500 ) {
            logo.css("opacity","1");
        }
        if (windowScrollTop >= teamMembersHead.offset().top-600 ) {
            teamMembersContainer.css("opacity","1");
            teamMembersContainer.css("transform","translate(0)");
        }
    });

    /* End Section About */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Our Team Members */
    var teamMembersContainer  = $(".our-team-members .container");
    var teamMembers = $(".our-team-members .row >div");
    var teamMembersHead = $(".our-team-members .container >h3");

    // Fading Out Logo & Team Members
    $(window).on("scroll",function () {
        windowScrollTop = $(window).scrollTop();
        if (windowScrollTop >= whoWeAre.offset().top-600 ) {
            whoWeAre.css("opacity","1");
            whoWeAre.css("transform","translate(0)");
        }
        if (windowScrollTop >= teamMembersHead.offset().top-300 ) {
            teamMembers .css("opacity","1");
            teamMembers.css("transform","translate(0)");
        }
    });

    /* End Section Our Team Members */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Services */
    var serviceHolder = $(".services .row >div");
    var mainFace = $(".services .row >div >div");
    var hoverFace = $(".hover-face");

    // Setting Services Div's Height Dynamically In All Cases

    $(window).on("load",function () {
        hoverFace.outerHeight(mainFace.outerHeight());
    });
    $(window).on("resize", function () {
        hoverFace.outerHeight(mainFace.outerHeight());
    });

    $(window).on("scroll",function () {
        hoverFace.outerHeight(mainFace.outerHeight());
    });

    // Fading Out Services Divs
    $(window).on("scroll",function () {
        windowScrollTop = $(window).scrollTop();
        if (windowScrollTop >= serviceHolder.offset().top-700 ) {
            serviceHolder.css("opacity","1");
            serviceHolder.css("transform","translate(0)");
        }
    });

    /* End Section Services */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Our Ratings */

    var ourRatings = $(".our-ratings");
    var progress = $(".progress");

    // Setting Progress Width To Zero, To Fill Its Width Again On Scrolling
    progress.css("width","0");

    // Filling Progress Width Again On Scrolling
    $(window).on("scroll",function () {
        windowScrollTop = $(window).scrollTop();
        if (windowScrollTop >= ourRatings.offset().top-400 ) {
            progress.css("width","100%");
        }
    });

    /* End Section Our Ratings /*

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Highlights >> Nivo-Slider */

    var nivoSlider = $(".nivoSlider");

    // Setting Nivo-Slider Height dynamic (80% Of Window Height)
    nivoSlider.outerHeight(windowHeight*0.8);

    $(window).on("resize", function () {
        windowHeight = $(window).height();
        nivoSlider.outerHeight(windowHeight*0.8);        
    });

    // Triggering Nivo-Slider Plugin After Loading
    $(window).on('load', function() {
        $('#slider').nivoSlider({ 
        effect: 'random',                 // Specify sets like: 'fold,fade,sliceDown' 
        slices: 15,                       // For slice animations 
        boxCols: 8,                       // For box animations 
        boxRows: 4,                       // For box animations 
        animSpeed: 500,                   // Slide transition speed 
        pauseTime: 3000,                  // How long each slide will show 
        startSlide: 0,                    // Set starting Slide (0 index) 
        directionNav: true,               // Next & Prev navigation 
        controlNav: true,                 // 1,2,3... navigation 
        controlNavThumbs: false,          // Use thumbnails for Control Nav 
        pauseOnHover: true,               // Stop animation while hovering 
        manualAdvance: false,             // Force manual transitions 
        prevText: 'Prev',                 // Prev directionNav text 
        nextText: 'Next',                 // Next directionNav text 
        randomStart: false,               // Start on a random slide 
        beforeChange: function(){},       // Triggers before a slide transition 
        afterChange: function(){},        // Triggers after a slide transition 
        slideshowEnd: function(){},       // Triggers after all slides have been shown 
        lastSlide: function(){},          // Triggers when last slide is shown 
        afterLoad: function(){}           // Triggers when slider has loaded 
        });
    }); 

    /* End Section Highlights >> Nivo-Slider  */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Portofolio */

    var categories = $(".categories button");
    var portofolioImgHolder = $(".portoflio-images .row >div");
    var portofolioImg = $(".portoflio-images .row >div img");
    var portofolioImgOverlay = $(".portoflio-images .row >div .overlay");
    var portofolioImgView = $(".portoflio-images .row >div button");
    var imageViewer = $(".viewer");
    var viewedImg = $(".viewer img");
    var exit = $(".viewer i.fa-sign-out-alt");
    var next = $(".viewer i.fa-chevron-right");
    var prev = $(".viewer i.fa-chevron-left")
    var portofolioImgClicked;

    // Activating Categories Buttons
    categories.on("click", function () {
        // On Click Hide All Portofolio Images Divs
        portofolioImgHolder.hide();

        // Then Showing The Ones with The Correspondent Category
        if ( $(this).html()==="All" ) {
            $(".portoflio-images .row >div.all").show();
        } else if ($(this).html()=== "Uncategorized") {
            $(".portoflio-images .row >div.uncategorized").show();
        } else if ($(this).html()=== "People") {
            $(".portoflio-images .row >div.people").show();
        } else if ($(this).html()==="Nature") {
            $(".portoflio-images .row >div.nature").show();
        } else if ($(this).html()==="Animal") {
            $(".portoflio-images .row >div.animal").show();
        }
    });

    // Portofolio Images
    // Setting Equal Dynamic Heights For Portofolio Images Divs & Its Overlays
    // Making A ratio Between Div's Height & Width
    portofolioImgHolder.outerHeight(portofolioImgHolder.outerWidth()*0.8);
    portofolioImgOverlay.outerHeight(portofolioImgHolder.outerHeight());

    $(window).resize( function () {
        portofolioImgHolder.outerHeight(portofolioImgHolder.outerWidth()*0.8);
        portofolioImgOverlay.outerHeight(portofolioImgHolder.outerHeight());
    });
    $(window).scroll( function () {
        portofolioImgHolder.outerHeight(portofolioImgHolder.outerWidth()*0.8);
        portofolioImgOverlay.outerHeight(portofolioImgHolder.outerHeight());
    });

    // Clicking On  "View Full Screen Button"
    // Viewing The Images In Another Empty (Position Fixed) Div By Copying The Clicked Images Into It
    portofolioImgView.on("click", function () {
        viewedImg = $(".viewer img");
        portofolioImgClicked = portofolioImgView.index($(this));
        viewedImg.remove();
        imageViewer.css("display","block");
        $("body").css("overflow-y","hidden");
        portofolioImg.eq(portofolioImgClicked).clone().appendTo(imageViewer);
    });

    // Image Viewer Controls
    exit.on("click",function () {
        viewedImg = $(".viewer img");
        viewedImg.remove();
        imageViewer.css("display","none");
        $("body").css("overflow-y","auto");
    })

    next.on("click",function () {
        viewedImg = $(".viewer img");
        portofolioImgClicked= (portofolioImgClicked+1)%(portofolioImg.length);

        while (portofolioImgHolder.eq(portofolioImgClicked).css("display") === "none") {
            portofolioImgClicked= (portofolioImgClicked+1)%(portofolioImg.length);
        }

        viewedImg.remove();
        portofolioImg.eq(portofolioImgClicked).clone().appendTo(imageViewer);
    });

    prev.on("click",function () {
        viewedImg = $(".viewer img");
        portofolioImgClicked= (portofolioImgClicked-1);

        if (portofolioImgClicked < 0) {
            portofolioImgClicked= (portofolioImg.length-1);
        }

        while (portofolioImgHolder.eq(portofolioImgClicked).css("display") === "none") {
            portofolioImgClicked= (portofolioImgClicked-1);
            if (portofolioImgClicked < 0) {
                portofolioImgClicked= (portofolioImg.length-1);
            }
        }

        viewedImg.remove();
        portofolioImg.eq(portofolioImgClicked).clone().appendTo(imageViewer);
    });

    /* End Section Portofolio */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Testimonial */
    var testimonialContainer = $(".testimonial .container");
    var testimonialBlock = $(".testimonial .container >div");
    var testimonialBlockHead = $(".testimonial .container h3");
    var testimonialNext = $(".testimonial .container  .fa-chevron-right");
    var testimonialPrev = $(".testimonial .container  .fa-chevron-left");


    // Settings Testimonial Container Height Dynamic Due To "testimonialBlock" position absolute
    testimonialContainer.height( testimonialBlock.outerHeight() + testimonialBlockHead.outerHeight() );

    $(window).on("resize",function () {
        testimonialContainer.height( testimonialBlock.outerHeight() + testimonialBlockHead.outerHeight() );
    });

    // Testimonial Next & Prev Controls
    testimonialNext.on("click",function () {
        appearedCustomer = testimonialBlock.index($(".testimonial .container >div.active"));
        testimonialBlock.removeClass("active");
        testimonialBlock.eq((appearedCustomer+1)%testimonialBlock.length).addClass("active");
    });

    testimonialPrev.on("click",function () {
        appearedCustomer = testimonialBlock.index($(".testimonial .container >div.active"));

        if (appearedCustomer > 0) {
            appearedCustomer--;

        } else {
            appearedCustomer= (testimonialBlock.length)-1;

        }

        testimonialBlock.removeClass("active");
        testimonialBlock.eq(appearedCustomer).addClass("active");
    });

    /* End Section Testimonial */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    /* Start Section Contact Us */

    var textInput = $(".contact form input:not([type='submit'])");
    var txtArea = $(".contact form textarea");
    // Using Variable "Storage" In Storing inputs Placeholders 
    var storage;

    // Hide/Show Placeholder Texts On Focus/Blur
    textInput.on("focus", function () {
        storage = $(this).attr("placeholder");
        $(this).attr("placeholder","");
    });

    textInput.on("blur", function () {
        $(this).attr("placeholder",storage);
    });

    txtArea.on("focus", function () {
        storage = $(this).attr("placeholder");
        $(this).attr("placeholder","");
    });


    txtArea.on("blur", function () {
        $(this).attr("placeholder",storage);
    });

    /* End Section Contact Us */

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    // triggering Smooth-Scroll Plugin On "a" Links
    var navbar = $(".navbar");
    $("a").smoothScroll({

        offset: -(navbar.outerHeight()), // Negative Value

        // one of 'top' or 'left'
        direction: 'top',

        // only use if you want to override default behavior or if using $.smoothScroll
        scrollTarget: null,

        // automatically focus the target element after scrolling to it
        // (see https://github.com/kswedberg/jquery-smooth-scroll#focus-element-after-scrolling-to-it for details)
        autoFocus: false,

        // string to use as selector for event delegation
        delegateSelector: null,

        // fn(opts) function to be called before scrolling occurs.
        // `this` is the element(s) being scrolled
        beforeScroll: function() {},

        // fn(opts) function to be called after scrolling occurs.
        // `this` is the triggering element
        afterScroll: function() {},

        // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
        // from jQuery UI or elsewhere
        easing: 'swing',

        // speed can be a number or 'auto'
        // if 'auto', the speed will be calculated based on the formula:
        // (current scroll position - target scroll position) / autoCoefficient
        speed: 1500,

        // autoCoefficent: Only used when speed set to "auto".
        // The higher this number, the faster the scroll speed
        autoCoefficient: 2,

        // $.fn.smoothScroll only: whether to prevent the default click action
        preventDefault: true

    });

});

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

/* Start Google Map Using Pure Javascript */
function myMap() {
    var myCenter = new google.maps.LatLng(26.8206,30.8025);
    var mapProp= {
        center:new google.maps.LatLng(26.8206,30.8025),
        zoom:3,
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
/* End Google Map */








