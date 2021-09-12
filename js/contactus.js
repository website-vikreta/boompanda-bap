if (document.documentElement.clientWidth > 768) {
   var viewWidth = "-60vw"
} else {
   var viewWidth = "-100vw"
}



$("#personalNext").click((e) => {
   e.preventDefault();
   // shifting pane
   $(".pane-wrapper__form-pane").css({
      'transform': 'translateX(calc(' + viewWidth + ' + 10vw))'
   })
   // adding active class
   $("#collegeDetailsItem .line").addClass('active');
});


$("#collegeNext").click((e) => {
   e.preventDefault();
   $(".pane-wrapper__form-pane").css({
      'transform': 'translateX(calc((' + viewWidth + ' + 10vw) * 2))'
   })
   $("#generalItem .line").addClass('active');
});


$("#collegePrev").click((e) => {
   e.preventDefault();
   $(".pane-wrapper__form-pane").css({
      'transform': 'initial'
   })
   $("#collegeDetailsItem .line").removeClass('active');
});


$("#generalPrev").click((e) => {
   e.preventDefault();
   $(".pane-wrapper__form-pane").css({
      'transform': 'translateX(calc((' + viewWidth + ' + 10vw)))'
   })
   $("#generalItem .line").removeClass('active');
});