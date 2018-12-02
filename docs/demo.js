$(function(){
var $color = $(".theme-picker").find("span");
var target = $(".codehim-dropdown");
$($color).click(function(){
    thisColor = $(this).attr('class');
    $(target).removeClass().addClass("codehim-dropdown shadow sticky" +" " + thisColor);
    $(".dropdown-items").removeClass().addClass("dropdown-items " + thisColor);
 });
});
