//values assigned
let height, width, color;

//if sizePicker is clicked get values of height and width and store them
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

// When size is submitted by the user, call makeGrid()
//new comment to test git
//comment to test git push
//automatically removes the last grid when run
function makeGrid(x, y) {
  $('tr').remove();

  for (let i = 1; i <= x; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');

      for (let j = 1; j <= y; j++) {
          $('#table' + i).append('<td></td>');
      }
  }


//adding color
//if td is clicked run the funciton of getColor
$('td').click(function getColor () {
    color =  $('#colorPicker').val();
//deleted the old one > if there was already a color then it would go back to white and then click again for new color
    $(this).attr('style', 'background-color:' + color);

});

}
