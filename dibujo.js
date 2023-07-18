function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  
  function preload() {
  
  
    classifier = ml5.imageClassifier('DoodleNet');
  }
  
  
  
  function clearCanvas() {
  
    background("white");
  }
  
  function draw() {
  
    // Establece el grosor del stroke (trazo) a 13.
    strokeWeight(13);
    // Establece el color del stroke (trazo) a negro.
    stroke(0);
    // Si el mouse está presionado, dibuja una línea entre la posición previa y la actual del mouse.
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
  }
  function gotResult(error,resultado){
if (error) {
console.log(error)    
} else {
console.log(resultado)
document.getElementById('a').innerHTML = 'Etiqueta: ' + results[0].label;
 document.getElementById('e').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%'; utterThis = new SpeechSynthesisUtterance(results[0].label); synth.speak(utterThis);

}
  }
function numero() {
  background("white");
}
  