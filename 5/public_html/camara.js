/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

function hasGetUserMedia() {

    if (navigator.getUserMedia) {
        console.log("Camara soportada");
        imagen();
    } else {
        alert('getUserMedia() no soportado por el navegador');
    }
}


function imagen() {

    var errorCallback = function (e) {
        console.log('Error', e);
    };

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
//    var video = document.createElement("VIDEO");
    video = document.getElementById("video");

    navigator.getUserMedia({video: true}, function (localMediaStream) {

        console.log(localMediaStream);
        if (navigator.mozGetUserMedia) {
            video.mozSrcObject = localMediaStream;
        } else {
            var vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(localMediaStream);
        }
        video.play();
        context.drawImage(video, 0, 0, 640, 480);
        var data = canvas.toDataURL('image/png');
        console.log(data);
        console.log(video);

    }, errorCallback);
}