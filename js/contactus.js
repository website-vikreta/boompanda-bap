if (document.documentElement.clientWidth > 768) {
   $("#personalNext").click((e) => {
      e.preventDefault();

      // shifting pane
      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc(-60vw + 10vw))'
      })

      // adding active class
      $("#collegeDetailsItem .line").addClass('active');
   });
   $("#collegeNext").click((e) => {
      e.preventDefault();

      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc((-60vw + 10vw) * 2))'
      })
      // adding active class
      $("#generalItem .line").addClass('active');
   });
   $("#collegePrev").click((e) => {
      e.preventDefault();

      $(".pane-wrapper__form-pane").css({
         'transform': 'initial'
      })
      // removing active class
      $("#collegeDetailsItem .line").removeClass('active');
   });
   $("#generalPrev").click((e) => {
      e.preventDefault();

      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc((-60vw + 10vw)))'
      })
      // removing active class
      $("#generalItem .line").removeClass('active');
   });
} else {
   $("#personalNext").click((e) => {
      e.preventDefault();

      // shifting pane
      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc(-100vw + 10vw))'
      })

      // adding active class
      $("#collegeDetailsItem .line").addClass('active');
   });
   $("#collegeNext").click((e) => {
      e.preventDefault();

      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc((-100vw + 10vw) * 2))'
      })
      // adding active class
      $("#generalItem .line").addClass('active');
   });
   $("#collegePrev").click((e) => {
      e.preventDefault();

      $(".pane-wrapper__form-pane").css({
         'transform': 'initial'
      })
      // removing active class
      $("#collegeDetailsItem .line").removeClass('active');
   });
   $("#generalPrev").click((e) => {
      e.preventDefault();

      $(".pane-wrapper__form-pane").css({
         'transform': 'translateX(calc((-100vw + 10vw)))'
      })
      // removing active class
      $("#generalItem .line").removeClass('active');
   });
}