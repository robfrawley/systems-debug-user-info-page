/**
 * Scribe Systems Custom JS
 * Scribe Inc.
 *
 * @author    : Rob Frawley 2nd
 * @license   : MIT License
 * @copyright : Scribe Inc.
 */

$(function () {

  var parser = new UAParser();
  var env = parser.getResult();
  env["resolution"] = {};
  env.resolution["width"] = $(window).width();
  env.resolution["height"] = $(window).height();

  $('#debug_overview_string').html(JSON.stringify(env));

});

$(function () {

  var parser = new UAParser();
  var table = $('#debug_detail_table');
  var row = $('#debug_detail_table_tr');

  function addRow(tableToAppendTo, rowToClone, scope, value, defaultValue) {
    if (value == undefined || value == '' || !(value.length > 0)) {
      if (defaultValue == undefined) {
        return;
      } else {
        value = defaultValue;
      }
    }

    newRow = rowToClone.clone();
    newRow.find('th').html(scope);
    newRow.find('code').html(value);
    tableToAppendTo.find('tr:last').after(newRow);
  }

  addRow(table, row, 'User Agent', parser.getUA());

  addRow(table, row, 'OS Type', parser.getOS().name);
  if (parser.getOS().version != undefined && (parser.getOS().version != parser.getCPU().architecture)) {
    addRow(table, row, 'OS Version', parser.getOS().version);
  }
  addRow(table, row, 'OS Architecture', parser.getCPU().architecture);
  addRow(table, row, 'Browser Type', parser.getBrowser().name);
  addRow(table, row, 'Browser Release', parser.getBrowser().major);
  addRow(table, row, 'Browser Version', parser.getBrowser().version);
  addRow(table, row, 'Engine Type', parser.getEngine().name);
  addRow(table, row, 'Engine Version', parser.getEngine().version);

  if (parser.getDevice().type == undefined) {
    addRow(table, row, 'Device Type', 'Desktop');    
  } else {
    addRow(table, row, 'Device Type', parser.getDevice().type);
    addRow(table, row, 'Device Vendor', parser.getDevice().vendor);
    addRow(table, row, 'Device Model', parser.getDevice().model);    
  }

  row.remove();

});


$(function () {

  // enable tooltips
  $('[data-toggle="tooltip"]').tooltip()

});

$(function () {

  // enable dismissing the usage agreement
  $('#usage-agreement h4 i').click(function(e) {

    // setup our element selections
    var usageEl     = $('#usage-agreement-wrapper');
    var responsesEl = $('#programmer-responses-wrapper');

    // destroy the element and expand the responses box
    usageEl.remove();
    responsesEl.removeClass('col-md-6');
    responsesEl.addClass('col-md-12');

  }); 

});

$(function() {

  // enable smoothscroll
  $('a').smoothScroll({offset: -100});

});

/* EOF */
