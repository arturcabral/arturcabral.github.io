var osc;
var playing = true;
let i = 0 ;

function setup() {
	canvas = createCanvas(800,600);
	//getAudioContext().resume()
	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.amp(0.5);

}

function draw() {
	oscilador();
}

function mousePressed() { getAudioContext().resume() }

function notas() {
var numero = Math.round();
	switch (numero) {
		case 0:
		osc.freq(200);
		break;
		case 1:
		osc.freq(225);
		break;
		case 2:
		osc.freq(250);
		break;
		case 3:
		osc.freq(300);
		break;
		case 4:
		osc.freq(333.3);
		break;
		case 5:
		osc.freq(400);
		break;
		case 6:
		osc.freq(450);
		break;
		case 7:
		osc.freq(500);
		break;
		case 8:
		osc.freq(600);
		break;
		case 9:
		osc.freq(666.6);
	} 
}

function oscilador(){
	osc.freq(440);
	if (playing) {
		osc.start();
		console.log("Começou");
		playing = false;

	} 
	if (i == 50) {
		osc.stop();

	}

	if ( i == 500) {
		playing = true;
		i = 0;
		console.log("Acabou");

	}
	
	i++
}