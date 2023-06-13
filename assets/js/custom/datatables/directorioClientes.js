"use strict";
var KTDatatablesBasic = {
    init: function () {
        $("#kt_datatable_example_4").DataTable({
            select: {
                style: "os",
                selector: "td:first-child",
                className: "row-selected"
            },
            processing: true,
            language: {
                decimal: "",
                emptyTable: "No hay información para mostrar",
                info: "Mostrando _START_ a _END_ de _TOTAL_ resultados",
                infoEmpty: "Mostrando 0 a 0 de 0 resultados",
                infoFiltered: "(filtrado desde _MAX_ resultados totales)",
                infoPostFix: "",
                thousands: ",",
                lengthMenu: "Mostrando _MENU_ resultados",
                loadingRecords: "Cargando datos...",
                processing: "Procesando...",
                search: "<i class='bi bi-search cursor-pointer'></i>",
                searchPlaceholder: "Escriba aquí",
                zeroRecords: "No se encontraron resultados",
                paginate: {
                    first: "Primero",
                    last: "Último",
                    next: "Siguiente",
                    previous: "Anterior"
                },
                aria: {
                    sortAscending: ": activar para ordenar columna ascendente",
                    sortDescending: ": activar para ordenar columna descendente"
                }
            },
            scrollY: 300,
            scrollX: !0,
            dom: "<'row'" +
                "<'col-sm-12 d-flex align-items-center justify-conten-start'B>" +
                ">" +
                "<'row'" +
                "<'col-sm-6 d-flex align-items-center justify-content-start'l>" +
                "<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
                ">" +
                "<'table-responsive'tr>" +
                "<'row'" +
                "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
                "<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
                ">",
            /* dom: 'Blfrtip',  */
            buttons: [
                'excelHtml5', 'pdf'
            ],
        });
    }
};
KTUtil.onDOMContentLoaded((function () {
    KTDatatablesBasic.init()
}));