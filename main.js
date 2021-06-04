stream => {
const mediaRecorder= new MediaRecorder(stream);
}

audioo=0;

function start() {
navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {
    mediaRecorder= new MediaRecorder(stream);
    mediaRecorder.start();

    const audioChunks=[];
    mediaRecorder.addEventListener("dataavailable",event =>{
       audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop",() =>{
        const audioBlob= new Blob(audioChunks);
        const audioURL= URL.createObjectURL(audioBlob);
        console.log(audioURL);
        audioo=audioo+1;
        document.getElementById("audio-clips").innerHTML=document.getElementById("audio-clips").innerHTML+'<br><hr><h1 id="info">Audio-'+audioo+'</h1> <audio controls="controls"><source src="'+audioURL+'"></audio>'
        const audio= new Audio(audioURL);
        audio.play();
    });
});
}

function stop() {
    mediaRecorder.stop();
}

function mahaop() {
    mediaRecorder.stop();
}

