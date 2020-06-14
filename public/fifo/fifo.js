var playPause = anime({
    targets: 'div.box',
    // translateY: [{value:200},{value:0}],
    translateY: [
        { value: 200, duration: 1000 },
        { value: 0, duration: 1000 }
    ],
    // translateX:[
    //   {value:200,duration:500},
    //   {value:0, duration 800}
    // ],
    // translateX:[{value:200,duration:500},
    //            {value:0,duaration:800}],

    delay: function (el, i, l) { return i * 1000 },
    autoplay: false,
    loop: true
});

function getPositionXY(element) {
    var rect = element.getBoundingClientRect();
    document.getElementById('gfg').innerHTML =
        'X: ' + rect.x + ', ' + 'Y: ' + rect.y;
    console,log(rect.x +rect.y)
}

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;