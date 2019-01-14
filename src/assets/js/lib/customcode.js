import $ from 'jquery';
import jquery from 'jquery';



///////////////////////////////////////
// Button Github animation
///////////////////////////////////////
document.querySelector('.button').onmousemove = (e) => {

  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty('--x', `${ x }px`);
  e.target.style.setProperty('--y', `${ y }px`);

};

// document.querySelector('.back').onmousemove = (f) => {

//   const x = f.pageX - f.target.offsetLeft;
//   const y = f.pageY - f.target.offsetTop;
//   f.target.style.setProperty('--x', `${ x }px`);
//   f.target.style.setProperty('--y', `${ y }px`);

// };

///////////////////////////////////////
// Blur Font animation
// document.querySelector('.hero').onmousemove = (e) => {
//
//   const x = e.pageX - e.target.offsetLeft
//   const y = e.pageY - e.target.offsetTop
//
//   e.target.style.setProperty('--x', `${ x }px`)
//   e.target.style.setProperty('--y', `${ y }px`)
//
// }



///////////////////////////////////////
// Random Text – Replaces text inside hero -> h1
///////////////////////////////////////
function randomText() {
var items = Array('Dani you cool!','Jackie will budget for the most expensive zoology equipment.','Cute, kind, jovial, foxy physique, amazing beauty? Wowser!', 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?','Who packed five dozen old quart jugs in my box?', 'Pack my box with five dozen liquor jugs.','The quick brown fox jumps over a lazy dog.','Two driven jocks help fax my big quiz.','Jaded zombies acted quaintly but kept driving their oxen forward.');
var item = items[Math.floor(Math.random()*items.length)];
$(".test").text(item);
}

 $(document).ready(function(){
  // we call the function
  randomText();
});

///////////////////////////////////////
// Selector – Replaces Fontweight
///////////////////////////////////////
function displayVals() {
  var singleValues = $( "#single" ).val();
  // $("#lol p").css( "font-weight", singleValues);
  $(".edit-container .test").css( "font-weight", singleValues);
  $(".edit-container div").css( "font-weight", singleValues);

}

$( "select" ).change( displayVals );
displayVals();


///////////////////////////////////////
// Rangeslider
///////////////////////////////////////
$('.slider').on('changed.zf.slider', function() {

  var slideVal = $( "#sliderOutput1" ).val();
    $(".edit-container h1").css( "font-size", slideVal + "px");
});

///////////////////////////////////////
// Overlay
///////////////////////////////////////
// $('[data-toggle-overlay]').on("click", function(){
//   $("#section-form").toggleClass("is-open");
//   $("body").toggleClass("is-fixed");
// });

$('.privacy').on("click", function(){
  // $("#section-form").addClass("is-open");
  //$("#section-form").addClass("is-open");
  $("#section-form").removeClass('is-open').addClass('fade');
  $("body").addClass("is-fixed");
});

$('.back').on("click", function(){
  $("#section-form").addClass('is-open').removeClass('fade');
  $("body").removeClass("is-fixed");
});