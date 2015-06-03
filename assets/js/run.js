/**
 * Scribe Systems Custom JS
 * Scribe Inc.
 *
 * @author    : Rob Frawley 2nd
 * @license   : MIT License
 * @copyright : Scribe Inc.
 */

$(function () {

  function getNewProgrammerResponse() {

    // perform ajax request for random "programmer responses" text
    $.ajax({

      url      : "https://excuses.scribe.systems/",
      cache    : false,
      dataType : "json"

    })

    // function called on ajax success
    .success(function(text) {

      // setup our variables and perform our element selections
      var excuse       = '';
      var creditName   = '';
      var creditDomain = '';
      var excuseEl     = $('p.excuse');
      var creditEl     = $('p.credit');

      // set loading screen
      excuseEl.addClass('loading').html('<i class="fa fa-cog fa-spin"></i>');
      creditEl.html('');

      // if the ajax result is empty, null, or an empty object, an error occured
      if (text == "" || text == null || $.isEmptyObject(text)) {
        excuse       = 'Tried to retrieve a witty programmer comment, but couldn\'t parse the JSON. You\'r a developer; fix it.';
        creditName   = 'RMF';
        creditDomain = 'https://scribenet.com/';            

      // otherwise, use the values provided by the ajax response 
      }
      else {
        excuse       = text.excuse;
        creditName   = text.resource_name;
        creditDomain = text.resource_domain;
      }

      // remove loading class and add the relivent html entries
      excuseEl.removeClass('loading').html('"'+excuse+'"');
      creditEl.html('Courtesy of <a href="'+creditDomain+'">'+creditName+'</a>.');

    })

    // in the event of an ajax error...
    .error(function(xhr) {

      // setup our variables and perform our element selections
      var excuse       = 'Tried to retrieve a witty programmer comment, but an AJAX error occured. You\'r a developer; fix it.';
      var creditName   = 'RMF';
      var creditDomain = 'https://scribenet.com/';
      var excuseEl     = $('p.excuse');
      var creditEl     = $('p.credit');

      // remove loading class and add the error message
      excuseEl.removeClass('loading').html(excuse);
      creditEl.html($('Courtesy of <a href="'+creditDomain+'">'+creditName+'</a>'));

    });

  }

  // get initial response
  getNewProgrammerResponse();

  // enable retrieving a new quote (register click handler)
  $('#programmer-responses-wrapper h4 i').click(function(e) {

    getNewProgrammerResponse();

  }); 

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
