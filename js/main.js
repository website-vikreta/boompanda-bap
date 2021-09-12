// ! Load Animation will goes here
window.addEventListener("load", () => {
   // 
});

// ! ---------------------------------
// ! HERO ANIMATIONS
// ! ---------------------------------
bodymovin.loadAnimation({
   container: document.getElementById("heroAnim"),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: "https://assets10.lottiefiles.com/packages/lf20_ZoMAMc.json",
})

// ! ---------------------------------
// ! Lazy Load
// ! ---------------------------------
const lottieImages = document.querySelectorAll('[data-src]');

var imgOptions = {}
function preloadImage(img) {
   const src = img.getAttribute("data-src");
   const speed = img.getAttribute("data-speed");
   if (!src) {
      return;
   }
   var animation = bodymovin.loadAnimation({
      container: img,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: src,
   })
   if (speed) {
      animation.setSpeed(speed);
   }
}
var imgObserver = new IntersectionObserver((entries, imgObserver) => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         return;
      } else {
         preloadImage(entry.target);
         imgObserver.unobserve(entry.target);
      }
   })
}, imgOptions);

lottieImages.forEach(image => {
   imgObserver.observe(image);
})