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







    // // Таблицы левого блока для локалки пути
    // $('#table-service').DataTable({
    //     "language": {
    //         "url": "/plug-ins/1.10.24/russian.json"
    //     },
    //     "scrollY":        "410px",
    //     "scrollCollapse": true,
    //     "paging": false,
    // }); 

    // $('#table-list').DataTable({
    //     "language": {
    //         "url": "/plug-ins/1.10.24/russian.json"
    //     },
    //     "scrollY":        "410px",
    //     "scrollCollapse": true,
    //     "paging": false,
    // }); 

    // $('#table-popular').DataTable({
    //     "language": {
    //         "url": "/plug-ins/1.10.24/russian.json"
    //     },
    //     "scrollY":        "410px",
    //     "scrollCollapse": true,
    //     "paging": false,
    // }); 


    // // Таблицы правого блока
    // $('#table-statistic').DataTable({
    //     "language": {
    //         "url": "/plug-ins/1.10.24/russian.json"
    //     }
    // }); 

    // $('#available-rooms').DataTable({
    //     "language": {
    //         "url": "/plug-ins/1.10.24/russian.json"
    //     }
    // }); 


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






document.onclick = function(event) { 
  var target = event.target;  
  var id = target.getAttribute('data-addComment');
  if (!id) return;
  var elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
};
    
    

    // var linkAddComment = document.getElementsByClassName("comment_add");

    // [].forEach.call(linkAddComment,function(el){
    //   el.addEventListener('click', function (e) {
    //     document.querySelectorAll("form_addComment").className = '';
    //   })
    // });

    // window.onload = function(){
    //   document.getElementById('addComment3').onclick = startKomm;
    // }
    // function startKomm(){
    //   var text = document.getElementById('txt').value;
    //   var komm = document.createElement('p');
    //   var newText = document.createTextNode(text);
    //   komm.appendChild(newText);
    //   document.getElementById('komments').appendChild(komm);
    //   return true;
    // }