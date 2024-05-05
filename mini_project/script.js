const languages = [
    {
      no: "16",
      name: "English",
      native: "English",
      code: "en",
    },
    {
      no: "1",
      name: "Afrikaans",
      native: "Afrikaans",
      code: "af",
    },
    {
      no: "2",
      name: "Albanian",
      native: "Shqip",
      code: "sq",
    },
    {
      no: "3",
      name: "Arabic",
      native: "????",
      code: "ar",
    },
    {
      no: "4",
      name: "Armenian",
      native: "???????",
      code: "hy",
    },
    {
      no: "5",
      name: "Azerbaijani",
      native: "????????? ????",
      code: "az",
    },
    {
      no: "6",
      name: "Basque",
      native: "Euskara",
      code: "eu",
    },
    {
      no: "7",
      name: "Belarusian",
      native: "??????????",
      code: "be",
    },
    {
      no: "8",
      name: "Bulgarian",
      native: "?????????",
      code: "bg",
    },
    {
      no: "9",
      name: "Catalan",
      native: "Catal�",
      code: "ca",
    },
    {
      no: "10",
      name: "Chinese (Simplified)",
      native: "????",
      code: "zh-CN",
    },
    {
      no: "11",
      name: "Chinese (Traditional)",
      native: "????",
      code: "zh-TW",
    },
    {
      no: "12",
      name: "Croatian",
      native: "Hrvatski",
      code: "hr",
    },
    {
      no: "13",
      name: "Czech",
      native: "Ce�tina",
      code: "cs",
    },
    {
      no: "14",
      name: "Danish",
      native: "Dansk",
      code: "da",
    },
    {
      no: "15",
      name: "Dutch",
      native: "Nederlands",
      code: "nl",
    },
    {
      no: "17",
      name: "Estonian",
      native: "Eesti keel",
      code: "et",
    },
    {
      no: "18",
      name: "Filipino",
      native: "Filipino",
      code: "tl",
    },
    {
      no: "19",
      name: "Finnish",
      native: "Suomi",
      code: "fi",
    },
    {
      no: "20",
      name: "French",
      native: "Fran�ais",
      code: "fr",
    },
    {
      no: "21",
      name: "Galician",
      native: "Galego",
      code: "gl",
    },
    {
      no: "22",
      name: "Georgian",
      native: "???????",
      code: "ka",
    },
    {
      no: "23",
      name: "German",
      native: "Deutsch",
      code: "de",
    },
    {
      no: "24",
      name: "Greek",
      native: "????????",
      code: "el",
    },
    {
      no: "25",
      name: "Haitian Creole",
      native: "Krey�l ayisyen",
      code: "ht",
    },
    {
      no: "26",
      name: "Hebrew",
      native: "?????",
      code: "iw",
    },
    {
      no: "27",
      name: "Hindi",
      native: "??????",
      code: "hi",
    },
    {
      no: "28",
      name: "Hungarian",
      native: "Magyar",
      code: "hu",
    },
    {
      no: "29",
      name: "Icelandic",
      native: "�slenska",
      code: "is",
    },
    {
      no: "30",
      name: "Indonesian",
      native: "Bahasa Indonesia",
      code: "id",
    },
    {
      no: "31",
      name: "Irish",
      native: "Gaeilge",
      code: "ga",
    },
    {
      no: "32",
      name: "Italian",
      native: "Italiano",
      code: "it",
    },
    {
      no: "33",
      name: "Japanese",
      native: "???",
      code: "ja",
    },
    {
      no: "34",
      name: "Korean",
      native: "???",
      code: "ko",
    },
    {
      no: "35",
      name: "Latvian",
      native: "Latvie�u",
      code: "lv",
    },
    {
      no: "36",
      name: "Lithuanian",
      native: "Lietuviu kalba",
      code: "lt",
    },
    {
      no: "37",
      name: "Macedonian",
      native: "??????????",
      code: "mk",
    },
    {
      no: "38",
      name: "Malay",
      native: "Malay",
      code: "ms",
    },
    {
      no: "39",
      name: "Maltese",
      native: "Malti",
      code: "mt",
    },
    {
      no: "40",
      name: "Norwegian",
      native: "Norsk",
      code: "no",
    },
    {
      no: "41",
      name: "Persian",
      native: "?????",
      code: "fa",
    },
    {
      no: "42",
      name: "Polish",
      native: "Polski",
      code: "pl",
    },
    {
      no: "43",
      name: "Portuguese",
      native: "Portugu�s",
      code: "pt",
    },
    {
      no: "44",
      name: "Romanian",
      native: "Rom�na",
      code: "ro",
    },
    {
      no: "45",
      name: "Russian",
      native: "???????",
      code: "ru",
    },
    {
      no: "46",
      name: "Serbian",
      native: "??????",
      code: "sr",
    },
    {
      no: "47",
      name: "Slovak",
      native: "Slovencina",
      code: "sk",
    },
    {
      no: "48",
      name: "Slovenian",
      native: "Slovensko",
      code: "sl",
    },
    {
      no: "49",
      name: "Spanish",
      native: "Espa�ol",
      code: "es",
    },
    {
      no: "50",
      name: "Swahili",
      native: "Kiswahili",
      code: "sw",
    },
    {
      no: "51",
      name: "Swedish",
      native: "Svenska",
      code: "sv",
    },
    {
      no: "52",
      name: "Thai",
      native: "???",
      code: "th",
    },
    {
      no: "53",
      name: "Turkish",
      native: "T�rk�e",
      code: "tr",
    },
    {
      no: "54",
      name: "Ukrainian",
      native: "??????????",
      code: "uk",
    },
    {
      no: "55",
      name: "Urdu",
      native: "????",
      code: "ur",
    },
    {
      no: "56",
      name: "Vietnamese",
      native: "Ti?ng Vi?t",
      code: "vi",
    },
    {
      no: "57",
      name: "Welsh",
      native: "Cymraeg",
      code: "cy",
    },
    {
      no: "58",
      name: "Yiddish",
      native: "??????",
      code: "yi",
    },
  ];

const recordBtn = document.querySelector(".record"),
  result = document.querySelector(".result"),
  downloadBtn = document.querySelector(".download"),
  inputLanguage = document.querySelector("#language"),
  clearBtn = document.querySelector(".clear");

let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
  recognition,
  recording = false;

function populateLanguages() {
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerHTML = lang.name;
    inputLanguage.appendChild(option);
  });
}

populateLanguages();

function speechToText() {
  try {
    recognition = new SpeechRecognition();
    recognition.lang = inputLanguage.value;
    recognition.interimResults = true;
    recordBtn.classList.add("recording");
    recordBtn.querySelector("p").innerHTML = "Listening...";
    recognition.start();
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      //detect when intrim results
      if (event.results[0].isFinal) {
        result.innerHTML += " " + speechResult;
        result.querySelector("p").remove();
      } else {
        //creative p with class interim if not already there
        if (!document.querySelector(".interim")) {
          const interim = document.createElement("p");
          interim.classList.add("interim");
          result.appendChild(interim);
        }
        //update the interim p with the speech result
        document.querySelector(".interim").innerHTML = " " + speechResult;
      }
      downloadBtn.disabled = false;
    };
    recognition.onspeechend = () => {
      speechToText();
    };
    recognition.onerror = (event) => {
      stopRecording();
      if (event.error === "no-speech") {
        alert("No speech was detected. Stopping...");
      } else if (event.error === "audio-capture") {
        alert(
          "No microphone was found. Ensure that a microphone is installed."
        );
      } else if (event.error === "not-allowed") {
        alert("Permission to use microphone is blocked.");
      } else if (event.error === "aborted") {
        alert("Listening Stopped.");
      } else {
        alert("Error occurred in recognition: " + event.error);
      }
    };
  } catch (error) {
    recording = false;

    console.log(error);
  }
}

recordBtn.addEventListener("click", () => {
  if (!recording) {
    speechToText();
    recording = true;
  } else {
    stopRecording();
  }
});

function stopRecording() {
  recognition.stop();
  recordBtn.querySelector("p").innerHTML = "Record";
  recordBtn.classList.remove("recording");
  recording = false;
}

function download() {
  const text = result.innerText;
  const filename = "speech.txt";

  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

downloadBtn.addEventListener("click", download);

clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
  downloadBtn.disabled = true;
});