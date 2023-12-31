var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML = Content;

}

if(Content =="take my selfie")
{
    console.log("taking selfie ---");
    speak();
}


function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
}, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
 });
}

function save ()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ; 
    link.href = image;
    link.click();
}

function take_snapshot()
{

    console.log(img_id)

    Webcam.snp(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("results1").innerHTML = '<img id="selfie1" src="'+data_uri'">'
        }
        
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri'">'
        }

        if(img_id=="selfie3"){
            document.getElementById("results3").innerHTML = '<img id="selfie3" src="'+data_uri'">'
        }
 });
}

setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speck_data = "Take your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speck_data);
        synth.speck(utterThis);
},5000);