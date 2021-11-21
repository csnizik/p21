(function ($) {
  $(document).ready(function () {
    var rulesDataAvailable = true;
    try {
      rulesData;
    } catch (e) {
      rulesDataAvailable = false;
    }

    if (rulesDataAvailable) {
      $('#rules').DataTable({
        data: rulesData,
        dom: 'f<"extra-filters">lrtip',
        scrollY: window.innerHeight - 300,
        scrollX: true,
        paging: false,
        language: {
          emptyTable: 'No records were found',
          loadingRecords: 'Loading...',
          info: 'Found _TOTAL_ records',
          infoEmpty: 'Found 0 records',
          infoFiltered: ' (filtered from a total of _MAX_)',
          search: '',
          searchPlaceholder: 'Search',
          zeroRecords: 'No results found',
        },
        columnDefs: [
          {
            targets: 'notes',
            createdCell: function (td, cellData, rowData, row, col) {
              if (
                cellData !== null &&
                cellData !== undefined &&
                cellData !== ''
              ) {
                return $(td)
                  .html('<i class="fa fa-comment"></i>')
                  .on('click', function () {
                    BootstrapDialog.show({
                      title: 'Rule Notes for ' + rowData[0],
                      message: $('<pre/>', {
                        text: cellData,
                        style: 'overflow-x: auto',
                      }),
                      buttons: [
                        {
                          label: 'Close',
                          action: function (dialog) {
                            dialog.close();
                          },
                        },
                      ],
                    });
                  });
              }
            },
          },
        ],
        initComplete: function () {
          if ($('th.fda').length || $('th.pmda').length) {
            var buttons =
              '<div class="btn-group btn-group-sm" data-toggle="buttons"> ' +
              '<button id="all-button" class="btn btn-default active"> ' +
              '<input type="radio" id="all-rules" name="All" checked /> All' +
              '</button> ';
            if ($('th.fda').length) {
              buttons +=
                '<button id="fda-button" class="btn btn-default"> ' +
                '<input type="radio" id="fda-rules" name="FDA" /> FDA ' +
                '</button> ';
            }
            if ($('th.pmda-legacy').length) {
              buttons +=
                '<button id="pmda-button-legacy" class="btn btn-default"> ' +
                '<input type="radio" id="pmda-rules-legacy" name="PMDA 1511.6" /> PMDA 1511.6 ' +
                '</button> ';
            }
            if ($('th.pmda').length) {
              buttons +=
                '<button id="pmda-button" class="btn btn-default"> ' +
                '<input type="radio" id="pmda-rules" name="PMDA 1810.3" /> PMDA 1810.3 ' +
                '</button> ';
            }
            buttons += '</div>';

            $(buttons)
              .prependTo($('.extra-filters'))
              .on('click', function (event) {
                handleFilterChange(event);
              });
          }
        },
      });

      function handleFilterChange(event) {
        // This will clear all previous column search filters or also reset to all if target is not fda or pmda
        $('#rules')
          .DataTable()
          .columns(['.fda', '.pmda', '.pmda-legacy'])
          .search('')
          .draw();

        if (event.target.id == 'fda-button') {
          $('#rules')
            .DataTable()
            .column('.fda')
            .search('^(?!s*$).+', true, false)
            .draw();
        } else if (event.target.id == 'pmda-button') {
          $('#rules')
            .DataTable()
            .column('.pmda')
            .search('^(?!s*$).+', true, false)
            .draw();
        } else if (event.target.id == 'pmda-button-legacy') {
          $('#rules')
            .DataTable()
            .column('.pmda-legacy')
            .search('^(?!s*$).+', true, false)
            .draw();
        }
      }
    }
  });
})(window.jQuery);
