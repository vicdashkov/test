var currentSlide = 0;

var killAllHumansBytes = "01001011 01101001 01101100 01101100 00100000 01100001 01101100 01101100 00100000 01101000 01110101 01101101 01100001 01101110 01110011 "

var depressionSlideConfig = {
    1: {
        linesStart: [
            {text: "hellovic", timing: 0},
            {text: "nice to see you", timing: 2000},
            {text: "How have you been?", timing: 4000}
        ]
    },
    2: {
        cursorChar: '<div class="base"><div class="lens"></div><div class="animation"></div></div>',
        callbackSlideChange: function () {
            console.log("TODO: bytecode goes here")
        },
        linesEnd: [
            {text: "No master", timing: 0}
        ],
        linesStart: [
            {text: "this is where..", timing: 0},
            {text: "hall", timing: 2000},
            {text: "comes in", timing: 4000}
        ]
    },
    4: {
        callbackSlideChange: openAlexaNewTab,
        linesStart: [
            {text: "this is where..", timing: 0},
            {text: "you should redirect", timing: 2000},
            {text: "about now", timing: 4000}
        ]
    }
};

var depressionStartCommands = ["okay depression", "next", "next slide", "good stuff"];

// depression speech part
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var depressionQues = ['okay depression'];
var grammar = '#JSGF V1.0; grammar depressionQues; public <color> = ' + depressionQues.join(' | ') + ' ;';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.body.onclick = function () {
    recognition.start();
    console.log('Ready to receive a depression commands.');
};

function shouldChange(phrase) {
    var found = false;
    phrase = phrase.trim();
    depressionStartCommands.some(function (e) {
       if (e.includes(phrase)) {
           found = true
       }
    });

    return found
}

recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var phrase = event.results[last][0].transcript;

    if (phrase && shouldChange(phrase)) {
        console.log('+');

        var slideConfig = depressionSlideConfig[currentSlide];
        if (slideConfig) {
            if (slideConfig.callbackSlideChange) {
                slideConfig.callbackSlideChange()
            }

            var linesEnd = slideConfig.linesEnd || [{text: "YES master", timing: 0}];

            readLines(linesEnd, null, 1)
        } else {
            readLines([{text: "YES master", timing: 0}], null, 1)
        }

        var timeout = (slideConfig && slideConfig.timeout) || 2500;
        setTimeout(function () {
            Reveal.next();
        }, timeout);

    } else {
        console.log('-')
    }
};


recognition.onspeechend = function () {
    recognition.stop();
};

recognition.onnomatch = function (event) {
    console.log("I didn't recognise that command.");
};

recognition.onerror = function (event) {
    console.log('Error occurred in recognition: ' + event.error);
};

// depression UI part
var body = document.getElementsByTagName('body');
var depressionElement = document.createElement('div');
depressionElement.innerHTML = '<div class="depression-line"></div>';
depressionElement.style.cssText = 'position:absolute;width:100%;height:20px;z-index:100;left:20px;bottom:20px';
document.body.appendChild(depressionElement);

Reveal.addEventListener('slidechanged', function (evt) {
    currentSlide = evt.indexh;
    depressionSlideStart(depressionSlideConfig[currentSlide])
});

function depressionSlideStart(config) {
    var linesStart = config && config.linesStart || null;
    var cursorChar = config && config.cursorChar || null;

    readLines(linesStart, cursorChar)
}

function readLines(lines, cursor, speed) {
    var cursorChar = cursor || '<div class="loader"></div>';

    depressionElement.innerHTML = '<div class="depression-line"></div>';
    var lineSpeed = speed || 50;

    var typeIt = new TypeIt('.depression-line',
        {speed: lineSpeed, cursorChar: cursorChar, cursorSpeed: 0});

    if (lines) {
        lines.forEach(function (element) {
            typeIt.pause(element.timing).type(element.text);
        })
    } else {
        typeIt.type("")
    }
}

function openAlexaNewTab() {
    url = 'http://www.google.ca';
    timeout = 3000;

    setTimeout(function () {
        var win = window.open(url, '_blank');
        win.focus();
    }, timeout)

}