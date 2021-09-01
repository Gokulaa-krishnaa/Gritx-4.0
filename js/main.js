$(document).ready(function () {
    $("#autoWidth").lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function () {
        $("#autoWidth").removeClass("cS-hidden");
      },
    });
  });


function goto(location){
    window.location.href= location;
}