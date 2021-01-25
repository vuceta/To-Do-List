//add and remove

$(function() {
    var listState = 'add';
    var editingTodoId = null;
    $('.add').on('click', function() {
      if(listState === 'add') {
        let list = $('.input').val();
        if (list !== '') {
             $('ul').append("<li><span><i class='fa fa-trash-o'></i></span>" + list  + "</li>");
             $('.input').val(''); 
             $("ul").on('click', 'span', function () {
                 $(this).closest("li").fadeOut(500,function() {
                  $(this).remove();
                  $('.input').val('');
                 });
               });
             return false;
         }
      } else if (listState === 'edit') {
       ///blabla 
      }
      
    });
    $(document).on('dblclick', 'li', function() {
        listState = "edit";
        $('.input').val($(this).text());
        $('.add').html('Save')
      });
});
















