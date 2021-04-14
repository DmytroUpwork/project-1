$(document).ready(function() {
     
   
    // Таблицы левого блока 
    $('#table-service').DataTable({
        "language": {
            "url": "/plug-ins/1.10.24/russian.json"
        },
        "scrollY":        "410px",
        "scrollCollapse": true,
        "paging": false,
    }); 

    $('#table-list').DataTable({
        "language": {
            "url": "/plug-ins/1.10.24/russian.json"
        },
        "scrollY":        "410px",
        "scrollCollapse": true,
        "paging": false,
    }); 

    $('#table-popular').DataTable({
        "language": {
            "url": "/plug-ins/1.10.24/russian.json"
        },
        "scrollY":        "410px",
        "scrollCollapse": true,
        "paging": false,
    }); 


    // Таблицы правого блока
    $('#table-statistic').DataTable({
        "language": {
            "url": "/plug-ins/1.10.24/russian.json"
        }
    }); 

    $('#available-rooms').DataTable({
        "language": {
            "url": "/plug-ins/1.10.24/russian.json"
        }
    }); 


} );





var show_ar_form = false;

function change_reviewtype(num) {
  var tsiddesc = document.getElementById('tsiddesc');
  if (num == 2) {
    tsiddesc.style.display = document.all && !document.querySelector ? 'block' : 'table-row';//ie7fix
  } else {
    tsiddesc.style.display = 'none';
    //tsidposdesc.style.display = document.all && !document.querySelector ? 'block' : 'table-row';//ie7fix
  }
}








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




function removeElem(delElem, attribute, attributeName) {
    //проверка на наличие всех аргументов.
      if (!(delElem && attribute && attributeName)) return;
    //возвращаем функцию, которая будет иметь доступ к аргументам, и при этом будет в себе хранить объект события.
      return function(e) {
     //Узнаем на каком элементе был произведен клик.
        let target = e.target;
    //Делаем проверку на наличие атрибута "data-del", и проверяем на наличие параметра "delete".
        if (!(target.hasAttribute(attribute) ?
            (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
        let elem = target;
    //После мы производим поиск элемента, который нужно удалить. Поиск идет снизу вверх. За счет того, что кнопки находяться внутри "card", то мы точно удалить нужный нам "card"(сорри за тавтологию).
        while (target != this) {
          if (target.classList.contains(delElem)) {
            target.remove();
            return;
          }
          target = target.parentNode;
        }
        return;
      };
    }
    
    
    document.addEventListener("click", removeElem("review_block", "data-del", "delete"));
    
    document.getElementById("link_comment_add").addEventListener("click", show_addreview);
    function show_addreview() {
        document.getElementById("form_addComment").className = '';
    }