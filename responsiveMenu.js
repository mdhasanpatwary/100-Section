    // function o() {
    //   $(".main-menu .has-sub-item .sub-menu").each(function() {
    //       $(window).width() > 991 && $(this).offset().left + $(this).width() > $(window).width() && $(this).css({
    //           left: "auto",
    //           right: "100%"
    //       });
    //   });
    // }
    // o();


    /*==================================
      19: Menu Responsive in Small Device
      ====================================*/
    function menuR() {
      $('.main-menu .has-sub-item .sub-menu').each(function() {
        if($(window).width() > 991) {
         if($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({
            'left': 'auto',
            'left': '0'
          });
         }
        }
      });

      
      $('.main-menu .has-sub-item .sub-menu ul').each(function() {
        if($(window).width() > 991) {
         if($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({
            'left': 'auto',
            'right': '100%'
          });
         }
        }
      });
    }
    menuR();

    /*==================================
      19: Menu Responsive in Small Device
      ====================================*/
  //   function subMenu() {

  //     var $subMain = $('.main-menu > .has-sub-item > ul');
  //     var $subSub = $('.main-menu > .has-sub-item > ul ul');

  //     $subMain.each(function () {
  //         if ($(window).width() > 991) {
  //             if ($(this).offset().left + $(this).width() > $(window).width()) {
  //                 $(this).css({ 'left': 'auto', 'right': '0' });
  //             }
  //         }
  //     });

  //     $subSub.each(function () {
  //         if ($(window).width() > 991) {
  //             if ($(this).offset().left + $(this).width() > $(window).width()) {
  //                 $(this).css({ 'left': 'auto', 'right': '100%' });
  //             }
  //         }
  //     });
  // }
  // subMenu();