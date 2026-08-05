
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel-block').forEach(function (block) {
    var track = block.querySelector('.carousel');
    var slides = block.querySelectorAll('.carousel__slide');
    var prevBtn = block.querySelector('.carousel__arrow--prev');
    var nextBtn = block.querySelector('.carousel__arrow--next');
    var dots = block.querySelectorAll('.carousel__dot');

    function currentIndex() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }
    function goTo(index) {
      index = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
    }
    function updateControls() {
      var idx = currentIndex();
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === idx);
      });
      prevBtn.disabled = idx <= 0;
      nextBtn.disabled = idx >= slides.length - 1;
    }

    prevBtn.addEventListener('click', function () { goTo(currentIndex() - 1); });
    nextBtn.addEventListener('click', function () { goTo(currentIndex() + 1); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { goTo(i); });
    });

    track.addEventListener('scroll', updateControls);

    updateControls();
  });
});
