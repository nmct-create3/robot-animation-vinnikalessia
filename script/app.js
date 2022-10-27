let btnSlow, btnNormal, btnFast, btnPause, btnPlay;


const robot = function(){
    let tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power1.inOut',
        },
        repeat: -1,
        yoyo: true,
    })
    tl.set('#Shadow', {
        transformOrigin: '50% 100%'
    })
    .fromTo('#Robot',{
        y: 2.5,
      },{
        y: -2.5,
      })
      .to('#Shadow',{
        scale: 0.75,
      },
        '<',
    )
    buttons(tl)
}

const buttons = function(tl){
    btnSlow.onclick = () => tl.timeScale(.5)
    btnNormal.onclick = () => tl.timeScale(1)
    btnFast.onclick = () => tl.timeScale(2)
    btnPause.onclick = function(){
        tl.paused(!tl.paused())
        btnPause.classList.toggle('is-paused')
    }
}


document.addEventListener('DOMContentLoaded', function () {
    btnSlow = document.querySelector('.js-slow');
    btnNormal = document.querySelector('.js-normal');
    btnFast = document.querySelector('.js-fast');

    btnPlay = document.querySelector('.js-play');
    btnPause = document.querySelector('.js-pause');

    robot();
});






