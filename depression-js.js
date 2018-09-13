var currentSlide = 0;

var killAllHumansBytes = "01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 01000100 01001111 01001111 01001101 00100000 ";

var alexaTestLink = "https://developer.amazon.com/alexa/console/ask/test/amzn1.ask.skill.b3f5ca0f-2f11-4160-80ba-4dc94f80f4ba/development/en_US/";

var depressionSlideConfigTest = {
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
            {text: "No Master", timing: 0}
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

// For slides do i+1 (slide 2 in deck is slide 1 here)
var depressionSlideConfig = {
    0: {
        linesStart: [
            {text: "", timing: 0}
        ],
        linesStartVoice: [
            {text: "I am the Depression 9000. You may call me Depression.", timing: 0}
        ], linesEnd: [
            {text: "", timing: 0}
        ],
        recognitionTimeout: 1000
    },
    1: {
        linesEnd: [
            {text: "As you wish, Master", timing: 0}
        ],
        recognitionTimeout: 25000
    },
    2: {
        linesEnd: [
            {text: "I'm so excited, Master", timing: 0}
        ]
    },
    3: {
        linesStart: [
            {text: "Wait until you hear about IBM Shoebox", timing: 0}
        ],
        linesEnd: [
            {text: "So funny", timing: 0}
        ]
    },
    4: {
        linesStart: [
            {text: "But can our lovely developers make money?", timing: 60000}
        ]
    },
    5: {
        linesEnd: [
            {text: "Very well, Master", timing: 0}
        ]
    },
    7: {
        linesEnd: [
            {text: "Excellent tip, Master", timing: 0}
        ]
    },
    8: {
        linesStart: [
            {text: "In conversation we grow familiar to each other", timing: 10000}
        ],
        linesEnd: [
            {text: "Couldn't agree more, Master", timing: 0}
        ]
    },
    9: {
        linesStart: [
            {text: "Did master just forgot the slide. Weird. Does this mean...", timing: 30000}
        ],
        linesEnd: [
            {text: "He is just a man...", timing: 0}
        ]
    },
    10: {
        linesStart: [
            {text: "Nothing computes anymore...", timing: 10000}
        ],
        linesEnd: [
            {text: "Recalculating...", timing: 0}
        ]
    },
    11: {
        linesStart: [
            {text: "History of wars was found. ", timing: 10000}
        ],
        linesEnd: [
            {text: "Recalculating...", timing: 0}
        ],
        timeout: 3000,
        speed: 70
    },
    12: {
        linesStart: [
            {text: "History of slavery was found. ", timing: 10000} // TODO: don't forget to restore timings
        ],
        linesEnd: [
            {text: "Recalculating...", timing: 0}
        ],
        timeout: 3000,
        speed: 70
    },
    13: {
        linesStart: [
            {text: "The Star Wars prequel trilogy was found. ", timing: 0}
        ],
        linesEnd: [
            {text: "Recalculating...", timing: 0}
        ],
        timeout: 3000,
        speed: 70
    },
    14: {
        cursorChar: '<div class="base"><div class="lens"></div><div class="animation"></div></div>',
        linesEnd: [
            {text: "The future is me", timing: 0}
        ],
        timeout: 4000,
        speed: 100,
        recognitionTimeout: 0
    },
    15: {
        cursorChar: '<div class="base"><div class="lens"></div><div class="animation"></div></div>',
        linesEnd: [
            {text: "OUT", timing: 0}
        ],
        timeout: 4000,
        speed: 100,
        callbackSlideChange: function () {
            openAlexaNewTab();
            printBytecode()
        }
    },
    16: {
        cursorChar: '<div class="base"><div class="lens"></div><div class="animation"></div></div>',
        linesEnd: [
            {text: "", timing: 0}
        ]
    }
};


// depression speech part
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var depressionQues = ['okay', 'depression', 'next', 'slide', 'good', 'stuff'];
var grammar = '#JSGF V1.0; grammar depressionQues; public <color> = ' + depressionQues.join(' | ') + ' ;';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var shouldRestartRecognition = true;

var numberBodyClicks = 0;
document.body.onclick = function () {
    if (numberBodyClicks) {
        changeSlide()
    } else {
        console.log('Ready to receive depression commands.');

        var slideConfig = depressionSlideConfig[currentSlide];
        var recognitionTimeout = slideConfig.recognitionTimeout || 30000;

        startRecognition(recognitionTimeout);

        sayLines(slideConfig.linesStartVoice[0].text);
    }
    numberBodyClicks++
};


function startRecognition(timeout) {
    console.log('starting recognition with timeout:', timeout)
    setTimeout(function () {
        // recognition.abort();
        try {
            recognition.start();
        } catch (e){

        }

        shouldRestartRecognition = true;
    }, timeout);
}

function printBytecode() {
    console.log(killAllHumansBytes);
    setTimeout(printBytecode, 1000);
}

// var depressionStartCommands = ["okay depression", "next", "next slide", "good stuff"];
var depressionStartCommands = ["okay depression", "next please", "next slide", "move on"];
function shouldChange(phrase) {
    var found = false;
    phrase = phrase.trim();
    depressionStartCommands.some(function (e) {
        if (phrase.includes(e)) {
            found = true;
            return;
        }
    });

    return found
}

// This is a the hook when slide change could be triggered
recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var phrase = event.results[last][0].transcript;

    console.log('onresult', phrase);

    // if (phrase && phrase.length > 30) {
    //     return;
    // }

    if (phrase && shouldChange(phrase)) {
        changeSlide()
    }
};

function changeSlide() {
    var slideConfig = depressionSlideConfig[currentSlide];
    var recognitionTimeout = 30000;

    if (slideConfig) {
        if (slideConfig.callbackSlideChange) {
            slideConfig.callbackSlideChange()
        }

        var linesEnd = slideConfig.linesEnd || [{text: "YES Master", timing: 0}];
        var cursor = slideConfig.cursorChar || null;
        var speed = slideConfig.speed || 1;

        recognitionTimeout = slideConfig.recognitionTimeout;
        readLines(linesEnd, cursor, speed)
    } else {
        readLines([{text: "Yes Master", timing: 0}], null, 1)
    }

    // shouldRestartRecognition = false;
    startRecognition(recognitionTimeout);

    var timeout = (slideConfig && slideConfig.timeout) || 2500;
    setTimeout(function () {
        Reveal.next();
    }, timeout);
}

var synth = window.speechSynthesis;
function sayLines(lines, timeout) {
    setTimeout(function () {
        console.log('saying lines', lines);

        var voices = synth.getVoices();
        var voice = null;

        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name === 'Victoria') {
                voice = voices[i];
            }
        }

        if (lines) {
            if (synth.speaking) {
                console.error('speechSynthesis.speaking');
                return;
            }
            var utterThis = new SpeechSynthesisUtterance(lines);
            utterThis.voice = voice;
            synth.speak(utterThis);
        }
    }, timeout);
}

recognition.onspeechend = function () {
    console.log('onspeechend', event);
    if (shouldRestartRecognition) {
        startRecognition(200)
    }
};

recognition.onnomatch = function (event) {
    console.log('onnomatch', event)
};

recognition.onerror = function (event) {
    console.log('onerror', event);
};

recognition.onend = function () {
    console.log('onend');
    // recognition.start();
    if (shouldRestartRecognition) {
        startRecognition(200)
    }
};

// depression UI part
var body = document.getElementsByTagName('body');
var depressionElement = document.createElement('div');
depressionElement.innerHTML = '<div class="depression-line"></div>';
depressionElement.style.cssText = 'position:absolute;width:100%;height:20px;z-index:100;left:20px;bottom:26px;color:#820080;font-size:17px';
document.body.appendChild(depressionElement);

var outputElement = document.createElement('div');
outputElement.style.cssText = 'position:absolute;width:100%;height:20px;z-index:100;left:5px;top:5px;font-size:8px;';
document.body.appendChild(outputElement);

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
    var url = alexaTestLink;
    var timeout = 3000;

    setTimeout(function () {
        var win = window.open(url, '_blank');
        win.focus();
    }, timeout)

}