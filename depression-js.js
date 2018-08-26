var depressionSlideConfig = {
    1: {
        lines: [
            {text: "hellovic", timing: 0},
            {text: "nice to see you", timing: 2000},
            {text: "How have you been?", timing: 4000}
        ]
    },
    2: {
        cursorChar: '<div class="base"><div class="lens"></div><div class="animation"></div></div>',
        lines: [
            {text: "this is where..", timing: 0},
            {text: "hall", timing: 2000},
            {text: "comes in", timing: 4000}
        ]
    }
};


var body = document.getElementsByTagName('body');
var depressionElement = document.createElement('div');
depressionElement.style.cssText = 'position:absolute;width:100%;height:20px;z-index:100;left:20px;bottom:20px';
document.body.appendChild(depressionElement);

Reveal.addEventListener('slidechanged', function (evt) {
    applySlideConfig(depressionSlideConfig[evt.indexh], depressionElement)
});

function applySlideConfig(config, el) {

    el.innerHTML = '<div class="depression-line"></div>';

    var cursorChar = (config && config.cursorChar) || ('<div class="loader"></div>');

    var typeIt = new TypeIt('.depression-line',
        {speed: 50, cursorChar: cursorChar, cursorSpeed: 0});

    if (config) {
        readLines(config.lines, typeIt)
    } else {
        readLines([{timing: 0, tex: [""]}], typeIt)
    }

}

function readLines(lines, typeIt) {
    lines.forEach(function (element) {
        typeIt.pause(element.timing).type(element.text)
    });
}