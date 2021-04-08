$(document).ready(function() {
    $('#table-service').DataTable({
        "paging": false,
        "info": false,
        "sDom": ''
    }); 

    $('#table-list').DataTable({
        "paging": false,
        "info": false,
        "sDom": ''
    }); 

    $('#table-popular').DataTable({
        "paging": false,
        "info": false,
        "sDom": ''
    }); 

    $('#table-statistic').DataTable({
        "language": {
            "url": "plug-ins/1.10.24/russian.json"
        }
    }); 

    $('#available-rooms').DataTable({
        "language": {
            "url": "plug-ins/1.10.24/russian.json"
        }
    }); 
} );

