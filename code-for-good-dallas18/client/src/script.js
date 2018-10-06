import {RequestAuthorizationToken} from "./microsoft.cognitiveservices.speech.sdk.bundle.js";
function recognition() {
    var phraseDiv;
    var startRecognizeOnceAsyncButton;

    var subscriptionKey, regionKey;
    var authorizationToken;
    var SpeechSDK;
    var recognizer;
    setTimeout(function(){

      startRecognizeOnceAsyncButton = document.getElementById("startRecognizeOnceAsyncButton");
      subscriptionKey = "703399ff25d248b0b3359338b0f813e4";
      regionKey = "westus";
      phraseDiv = document.getElementById("phraseDiv");

      startRecognizeOnceAsyncButton.addEventListener("click", function () {
        startRecognizeOnceAsyncButton.disabled = true;
        phraseDiv.innerHTML = "";

        var speechConfig;
        if (authorizationToken) {
          speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(authorizationToken, regionKey);
        } else {
          if (subscriptionKey === "" || subscriptionKey === "subscription") {
            alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
            return;
          }
          speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, regionKey);
        }

        speechConfig.language = "en-US";
        var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

        recognizer.recognizeOnceAsync(
          function (result) {
            startRecognizeOnceAsyncButton.disabled = false;
            phraseDiv.innerHTML += result.text;
            window.console.log(result);

            recognizer.close();
            recognizer = undefined;
          },
          function (err) {
            startRecognizeOnceAsyncButton.disabled = false;
            phraseDiv.innerHTML += err;
            window.console.log(err);

            recognizer.close();
            recognizer = undefined;
          });
      });

      if (!!window.SpeechSDK) {
        SpeechSDK = window.SpeechSDK;
        startRecognizeOnceAsyncButton.disabled = false;

        if (typeof RequestAuthorizationToken === "function") {
            RequestAuthorizationToken();
        }
      }
    }, 3000);
  }

  export default recognition