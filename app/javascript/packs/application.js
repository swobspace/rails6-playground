// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css"
import "../stylesheets/application";

import JSZip from 'jszip'
require('pdfmake')
require('datatables.net-bs4')
require('datatables.net-buttons-bs4')
require('datatables.net-buttons/js/buttons.colVis.js')
require('datatables.net-buttons/js/buttons.html5.js')
require('datatables.net-buttons/js/buttons.print.js')

window.JSZip = JSZip;

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "controllers"

var DataTable = $.fn.dataTable;
$.extend( true, DataTable.Buttons.defaults, {
  "dom": {
    "button": {
      "className": 'btn btn-outline-secondary btn-sm'
    }
  }
});

$(document).on('ready turbolinks:load', () => {
    $('table[role="datatable"]').DataTable({
    "pagingType": "full_numbers",
    "dom": "<'row'<'col-md-3'l><'col-md-5'BC><'col-md-4'f>>t<'row'<'col-md-6'ir><'col-md-6'p>>",
    "stateSave": false,
    "lengthMenu": [ [10, 25, 100, 250, 1000], [10, 25, 100, 250, 1000] ],
    "buttons": [
      {
        "extend": 'copy',
        "className": 'btn-outline-secondary btn-sm',
        "exportOptions": {
          "columns": ':visible',
          "search": ':applied'
        }
      },
      { 
        "extend": 'excelHtml5',
         // "title": $('table[role="datatable"]').data('title'),
        "className": 'btn-outline-secondary btn-sm',
        "exportOptions": {
          "search": ':applied'
        }
      },
      {
        "extend": 'pdf',
        "className": 'btn-outline-secondary btn-sm',
        "orientation": 'landscape',
        "pageSize": 'A4',
        "exportOptions": {
          "columns": ':visible',
          "search": ':applied'
        }
      },
      {
        "extend": 'print',
        "className": 'btn-outline-secondary btn-sm',
      },
      {
        "extend": 'colvis',
        "className": 'btn-outline-secondary btn-sm',
        // "text": "<%= I18n.t('titracka.change_columns') %>",
        "columns": ':gt(0)'
      }
    ],
    "columnDefs": [
      { "targets": "nosort", "orderable": false },
      { "targets": "notvisible", "visible": false }
    ]
  });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});
