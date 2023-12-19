function adjustFbPageHeight() {

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth >= 1920) {

      var fbPage = document.querySelector('.fb-page');

      if (fbPage) {

        fbPage.setAttribute('data-height', '300');

      }

    }

  }



  window.addEventListener('resize', adjustFbPageHeight);



  adjustFbPageHeight();





  function adjustGoogleMapsHeight() {

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var iframe = document.getElementById('google-maps-iframe');

    if (screenWidth >= 1920 && iframe) {

      iframe.setAttribute('height', '265');

    } else {

      

      iframe.setAttribute('height', '190');

    }

  }



  window.addEventListener('resize', adjustGoogleMapsHeight);

  

  adjustGoogleMapsHeight();


// Disable right-click function
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });