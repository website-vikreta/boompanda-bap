// ! Load Animation will goes here
window.addEventListener("load", () => {
   // 
});

// ! ---------------------------------
// ! Lazy Load
// ! ---------------------------------
const lottieImages = document.querySelectorAll('[data-src]');


var imgOptions = {
   threshold: 1
}
function preloadImage(img) {
   const src = img.getAttribute("data-src");
   if (!src) {
      return;
   }
   var animation = bodymovin.loadAnimation({
      container: img,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: src
   })
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