
jQuery(document).ready(function() {
  jQuery('.left').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
      offset: 100
     });

  jQuery('.right').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
      offset: 100
     });

  jQuery('.lg-icons').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
      offset: 100
     });
});
