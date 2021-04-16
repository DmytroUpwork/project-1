// Скрипт пагинации отзывов 
jQuery(document).ready(function () {
    
  jQuery.noConflict()(function($){
    var show_per_page = 5; 
    var number_of_items = $('#pagingBox').children().size();
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    
    var navigation_html = '<a class="previous_link" href="javascript:previous();">Предыдущая</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
      navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
      current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">Следующая</a>';
    
    $('#page_navigation').html(navigation_html);
    $('#page_navigation .page_link:first').addClass('active_page');
    $('#pagingBox').children().css('display', 'none');
    $('#pagingBox').children().slice(0, show_per_page).css('display', 'block');
  });

});
  
function previous(){
  new_page = parseInt($('#current_page').val()) - 1;
  if($('.active_page').prev('.page_link').length==true){
      go_to_page(new_page);
  }  
};

function next(){
  new_page = parseInt($('#current_page').val()) + 1;
  if($('.active_page').next('.page_link').length==true){
      go_to_page(new_page);
  } 
};

function go_to_page(page_num){
  var show_per_page = parseInt($('#show_per_page').val());
  start_from = page_num * show_per_page;
  end_on = start_from + show_per_page;
  $('#pagingBox').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
  $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
  $('#current_page').val(page_num);
};









$(document).ready(function() {

  // Таблицы левого блока 
  $('#table-service').DataTable({
    "language": {
        "url": "/project-1/plug-ins/1.10.24/russian.json"
    },
    "scrollY":        "410px",
    "scrollCollapse": true,
    "paging": false,
  }); 

  $('#table-list').DataTable({
      "language": {
          "url": "/project-1/plug-ins/1.10.24/russian.json"
      },
      "scrollY":        "410px",
      "scrollCollapse": true,
      "paging": false,
  }); 

  $('#table-popular').DataTable({
      "language": {
          "url": "/project-1/plug-ins/1.10.24/russian.json"
      },
      "scrollY":        "410px",
      "scrollCollapse": true,
      "paging": false,
  }); 


  // Таблицы правого блока
  $('#table-statistic').DataTable({
      "language": {
          "url": "/project-1/plug-ins/1.10.24/russian.json"
      }
  }); 

  $('#available-rooms').DataTable({
      "language": {
          "url": "/project-1/plug-ins/1.10.24/russian.json"
      }
  }); 

});






// document.addEventListener('DOMContentLoaded', function(){ 


  var show_ar_form = false;

  function change_reviewtype(num) {
    var tsiddesc = document.getElementById('tsiddesc');
    if (num == 2) {
      tsiddesc.style.display = document.all && !document.querySelector ? 'block' : 'table-row';//ie7fix
    } else {
      tsiddesc.style.display = 'none';
      //tsidposdesc.style.display = document.all && !document.querySelector ? 'block' : 'table-row';//ie7fix
    }
  };

  // Скрипт добавления формы отправки отзыва 
  function switch_arform(obj, position, is_start) {
    if (show_ar_form) {
      if (is_start) obj.style.position = 'static';

      position += 130;
      if (position < ar_form_height) {
        obj.style.height = position + 'px';
      } else {
        position = ar_form_height;
        obj.style.height = 'auto';
        return;
      }
    } else {
      position -= 130;
      if (position > 0) {
        obj.style.height = position + 'px';
      } else {
        obj.style.position = 'absolute';
        obj.style.left = '-9999px';
        obj.style.height = 'auto';
        document.getElementById('ar_bullet').className = 'review_addicon bulletdown';
        return;
      }
    }
    setTimeout(function () {
      switch_arform(obj, position, false);
    }, 10);
  }

  function show_addreviewform(whatis) {
    var new_show_ar_form;
    if (whatis == 1) {
      new_show_ar_form = true;
    } else if (whatis == 2) {
      new_show_ar_form = false;
    } else {
      new_show_ar_form = !show_ar_form;
    }
    if (show_ar_form == new_show_ar_form) return;
    show_ar_form = new_show_ar_form;

    var review_form = document.getElementById('review_form');
    ar_form_height = review_form.clientHeight;
    if (show_ar_form) {
      switch_arform(review_form, 0, true);
      document.getElementById('ar_bullet').className = 'review_addicon bulletup';
    } else {
      switch_arform(review_form, ar_form_height, true);
    }
  }

  // Скрипт рткрытия окна подтверждения удаления отзыва
  function removeElem(delElem, attribute, attributeName) {
    if (!(delElem && attribute && attributeName)) return;
    return function(e) {
      let target = e.target;
      if (!(target.hasAttribute(attribute) ?
          (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
      let elem = target;
      while (target != this) {
        if (target.classList.contains(delElem)) {
          let removeReviews = confirm("Вы действительно хотите удалить отзыв?");
          if (removeReviews == true) {
            target.remove();
            return;
          }
        }
        target = target.parentNode;
      }
      return;
    };
  }
  document.addEventListener("click", removeElem("review_block", "data-del", "delete"));

  // Скрипт отображения textarea поля для написания комментария 
  document.onclick = function(event) { 
    var target = event.target;  
    var id = target.getAttribute('data-addComment');
    if (!id) return;
    var elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
  };

// });