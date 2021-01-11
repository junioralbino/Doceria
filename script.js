ouibounce(document.getElementById('showModal'), {
    cookieExpire: 1,
    callback: function() { $('#showModal').show(); }
    });

  //Fecha Modal
  jQuery('body').on('click', function() {
   jQuery('#showModal').hide();
  });
  jQuery('#showModal .modal-close').on('click', function() {
   jQuery('#showModal').hide();
  });
  jQuery('#showModal .modal').on('click', function(e) {
   e.stopPropagation();
  })