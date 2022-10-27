let btnSlow, btnNormal, btnFast, btnPause, btnPlay, btnLight, lightning;

const robot = function () {
  let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  });
  tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })
    .fromTo(
      '#Robot',
      {
        y: 2.5,
      },
      {
        y: -2.5,
      }
    )
    .to(
      '#Shadow',
      {
        scale: 0.75,
      },
      '<'
    );
  buttons(tl);
};

const buttons = function (tl) {
  btnSlow.onclick = () => tl.timeScale(0.5);
  btnNormal.onclick = () => tl.timeScale(1);
  btnFast.onclick = () => tl.timeScale(2);

  btnPP.onclick = function () {
    tl.paused(!tl.paused());
    if (tl.paused()) {
      btnPlay.style.display = 'block';
      btnPause.style.display = 'none';
    } else {
      btnPause.style.display = 'block';
      btnPlay.style.display = 'none';
    }
  };
};

const lightningButton = function () {
  btnLight = document.queryselector('.js-lightning');
  lightning = document.getElementById(btnLight);
  btnLight.onclick = () => lightning.beginElement();
};

document.addEventListener('DOMContentLoaded', function () {
  btnSlow = document.querySelector('.js-slow');
  btnNormal = document.querySelector('.js-normal');
  btnFast = document.querySelector('.js-fast');

  btnPlay = document.querySelector('.js-play-icon');
  btnPause = document.querySelector('.js-pause-icon');

  btnPP = document.querySelector('.js-pause');

  // btnLight = document.querySelector('.js-light');

  robot();
  lighteningButton();
});
