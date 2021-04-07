$(document).ready(function() {
    $('#table-service').DataTable({
        "language": {
            "url": "plug-ins/1.10.24/russian.json"
        },
        "paging": false,
        "info": false,
        "sDom": ''
    }); 

    $('#table-list').DataTable({
        "language": {
            "url": "plug-ins/1.10.24/russian.json"
        },
        "paging": false,
        "info": false,
        "sDom": ''
    }); 

    $('#table-popular').DataTable({
        "language": {
            "url": "plug-ins/1.10.24/russian.json"
        },
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

