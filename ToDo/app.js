// add button and remove

$(function() {
    $('.add').on('click', function() {
        let list = $('.input').val();
        if (list !== '') {
             $('ul').append("<li><span><i class='fa fa-trash-o'></i></span>" + list + "</li>");
             $('.input').val(''); 
             $('ul').on('click', 'span', function () {
                 $(this).closest("li").fadeOut(500,function() {
                  $(this).remove();
                  $('.input').val('');
                 });
               });
             return false;
         }
    });

    // edit and save button

    let indexTask;
    $(document).on('dblclick', 'li', function() {
      indexTask = $(this).index()
      $('.input').val($(this).text());
      $('.add').html('Save')
    });
    $('.add').on('click', function() {
      if ($(this).text() == "Save") {
        $("li:eq(" + indexTask + ")").html('');
        $('.add').html('Add');
        $('.input').val('')
      }
    })
  });














