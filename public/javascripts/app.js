$(document).ready(function () {
  console.log('page is loaded')


  $('select').each(function () {
    var $this = $(this);
    var defaultOpt = $this.data("selected")
    if (defaultOpt !== undefined) {
      $this.val(defaultOpt);
    }
    $this.material_select();
  })

      $("#upload").on("change", function () {
          if (!$(this).val() || !this.files || !this.files[0]) { return; }
          var reader = new FileReader();

          // image loaded
          reader.onload = function(event) {
              var dataUri = event.target.result;
              $("img.user-image").attr("src", dataUri);
         };

          // error
         reader.onerror = function(event) {
             alert("Failed to load the image: " + event.target.error.code);
         };

         reader.readAsDataURL(this.files[0]);
      });

//pop-up window 
  $("#start_button").click(startGame);

  function startGame() {
    console.log('start button clicked')
    $('.instructions').hide();
  }


// carousel slider
      $(document).ready(function(){
      $('.carousel').carousel();
    });

      $('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);
// 

$('.carousel.carousel-slider').carousel({full_width: true});




//slider for images
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
    // Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');







//   var howToPlay = $(".howTo")
//
//   howToPlay.click(newHowTo)
//
//
// $(".howTo").click(function(){
//       $(".overlay").fadeIn(1000);
//   });
});
