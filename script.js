
$(function () {
  //Changes display of individual time blocks based on user's current time
  var timeBlocks = $('#time-blocks').children();
  timeBlocks.on("click",".saveBtn", function(){
    localStorage.setItem($(this).parent().attr("id"), $(this).parent().children().eq(1).val());
    $("header").append('<p>✨Event saved to local storage✨</p>')
  } )
//Saves new events typed in by users to local storage
  var currentTime = dayjs().format('HHA'); 
 timeBlocks.each(function(){
    if ($(this).attr("id") === currentTime){$(this).addClass("present")}
    else if ($(this).attr("id")> currentTime) {$(this).addClass("future")};  
 })
//Displays saved events in each time block 
  for (var i = 0; i < timeBlocks.length; i += 1) {
    var blockID = $('#time-blocks').children().eq(i).attr("id");
    $(`#${blockID} .description`).val(localStorage.getItem(blockID))
  }
  //Displays the current date in the header of the page.
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
