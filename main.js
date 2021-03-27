prediction1 = "";
prediction2 = "";
Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_uri + '"/>';
    });
}
console.log('ml5 version :', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/alEugbh5F/model.json', modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
    
}
function check(){
    img = document.getElementById('captured_image');
classifier.classify(img,gotresult);
}
/*function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "the first prediction is" + prediction1;
    speak_data2 = "and the second prediction is" + prediction2;
    var utterthis = new SpeechSynthesisUtterance (speak_data1 + speak_data2);
    synth.speak(utterthis);
}*/
function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label; 
        prediction2 = results[1].label;
        //speak();
        if (results[0].label == "Gun"){
            document.getElementById("update_emoji").innerHTML = "&#128073;";
        }
        if (results[0].label == "THUMBS UP"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "Peace"){
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
    }
}