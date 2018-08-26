var depressionLines = {
        1: {
            lines: [
                {text: "hellovic", timing: 0},
                {text: "nice to see you", timing: 2000},
                {text: "How have you been?", timing: 4000}
            ]
        },
        2: {
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
        readLines(depressionLines[evt.indexh], depressionElement)
    });

    function readLines(lines, el) {
        el.innerHTML = '<span class="depression-line"></span>';

        var cursorChar = lines.cursorChar || '<div class="loader"></div>';

        var typeIt = new TypeIt('.depression-line',
            {speed: 50, cursorChar: cursorChar, cursorSpeed: 0});

        console.log(typeIt);
        lines.lines.forEach(function (element) {
            typeIt.pause(element.timing).type(element.text)
        });
    }