// add button and remove
$(function() {
  let listState = 'add';
  $('#btn').on('click', function() {
    if (listState === 'add') {
      let list = $('.input').val();
      if (list !== '') {
        $('ul').append("<li><span><i class='fa fa-trash-o'> </i></span>" + list + "</li>");
        $('.input').val('');
        $('ul').on('click', 'span', function() {
          $(this).closest('li').fadeOut(500, function() {
            $(this).remove();
            $('.input').val('');
          });
        });
      }
    } else if (listState === 'edit') {
        listState = 'add';
        if ($(this).text() == 'Save') {
          $("li:eq(" + indexTask + ")").html("<span><i class='fa fa-trash-o'> </i></span>" + $('.input').val())
          $('#btn').html('Add');
          $('.input').val('')
        }
    };
    return false;
  });
  let indexTask;
  $(document).on('dblclick', 'li', function() {
    listState = 'edit';
    indexTask = $(this).index()
    $('.input').val($(this).text().trim());
    $('#btn').html('Save')
  });
});