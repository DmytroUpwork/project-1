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