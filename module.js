(function ($) {
    
    var module = (function () {
      var init = function () {
      
      };
      
      return {
        init: init
      };
    })();

    $.extend(true, window, {
      core: {
        module: module
      }
    });

    $(function () {
        core.module.init();
    });

}(jQuery));