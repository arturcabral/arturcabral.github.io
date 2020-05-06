var canvas;
let cidades = [];
let casos;
let obtos;
let dados;
var osc;
var playing = true;
var estadoSom = false;
let i = 0 ;
let page = 1;
let dadoGeral;

let dadosCidade = [];
let dadosPerhabit = [];
let dadosMortes = [];
let dadosEstado = [];
let dadosPopulacao = [];
let ativo = false; 


function chamajson(page) {
	loadJSON('https://brasil.io/api/dataset/covid19/caso/data?format=json&page=' + page, gotData);

}

function gotData(data) {
		dados = data.results;
		
}

function setup() {
	canvas = createCanvas(1080, 720);
	circulo = createGraphics(1080, 720);
	texto = createGraphics(800,600);
	circulo.colorMode(HSB, 360, 100, 100);
	circulo.noStroke();
	osc = new p5.Oscillator();
	reverb = new p5.Reverb();
  	reverb.process(osc, 5, 1);
	osc.setType('sine');
	osc.amp(1.0);
	osc.fade(0.6,0.3);
	text("CLIQUE PARA INICIALIZAR", 250, 100);



}


function draw() {
	estadoSom = true;
	
	if (ativo == true) {
		background(255);
	text("INICIANDO...", 250, 100);


	i ++;
	

	chamajson(page);

	try {
	dadoGeral = Object.values(dados);
	}
	
	catch (e) {
   // declarações para manipular quaisquer exceções
	}

	if (dadoGeral != null) {


		dadosCidade[i] = dadoGeral[i].city;
		dadosPerhabit[i] = dadoGeral[i].confirmed_per_100k_inhabitants;
		dadosMortes[i] = dadoGeral[i].deaths;
		dadosEstado[i] = dadoGeral[i].state;
		dadosPopulacao[i] = dadoGeral[i].estimated_population_2019;
		

		if ( i == (dadoGeral.length -1)) {
			if (page == 54) {
				page = 1;
				print(" ####### FIM DAS PAGINA");

			}
			print(" ####### MUDOU DE PAGINA ");
			page ++
			i = 0 ;
		}
		//print(i , dadosCidade[i], dadosEstado[i], dadosMortes[i], dadosPerhabit[i]);
		oscilador(i);
		estadoSom = true;
		circulo.background(255);
		circulosPop(i);
		circulosMortes(i);
		circulosCasos(i);

		circulo.filter(BLUR, 20);
		image(circulo, 0 , 0);
		fill(0);
		textFont('monospace');
		translate(width / 2, height / 2);
		rotate(PI / 2.0);

		try {
		text(dadosCidade[i], 70, 100);
		text(dadosEstado[i], 30, 80);
	 	text("casos/100k " + dadosPerhabit[i].toString(), 30, 60);
	 	text("óbtos " + dadosMortes[i].toString(), 30, 40);
		}
		catch (e) {}
	

	}


}


}

function touchStarted() { 
	ativo = true;
	getAudioContext().resume() }

function oscilador(interador){
	notas(interador);
	if (playing) {
		osc.start();
		console.log("Começou");
		playing = false;

	} 
	

	if (estadoSom) {
		osc.stop(1.0);
		estadoSom = false;
		playing = true;
		console.log("Acabou");

	}
	
}

function notas(interador) {
	let numero = parseInt(map(dadosPerhabit[interador], 0, 172.54293, 0, 9));
	console.log(numero);
		switch (numero) {
			case 0:
				console.log("0");
				osc.freq(200);
				break;
			case 1:
				console.log("1");
				osc.freq(225);
				break;
			case 2:
				console.log("2");
				osc.freq(250);
				break;
			case 3:
				console.log("3");
				osc.freq(300);
				break;
			case 4:
				console.log("4");
				break;
			case 5:
				console.log("5");
				osc.freq(100);
				break;
			case 6:
				console.log("6");
				osc.freq(112.5);
				break;
			case 7:
				console.log("7");
				osc.freq(125);
				break;
			case 8:
				console.log("8");
				osc.freq(150);
				break;
			default:
				console.log("9");
				osc.freq(166.65);
		} 
	}


	function circulosCasos(interador) {
		let casoPer100 = map(dadosPerhabit[interador], 0, 172.54293, 85, 360);

		circulo.fill(casoPer100, 100 , 100);
		//hue max 360 min 85 
		//circulo.ellipse(250, 250, 250, 250);
		circulo.ellipse(250 + random(-30, 30) , 200 + random(-30, 30) , 200, 200);
	//console.log(plantaM , "planta " , planta);

	}
	function circulosMortes(interador) {
			let mortes = map(dadosMortes[interador], 0, 1801, 85, 360);

			circulo.fill(mortes, 100 , 100);
			circulo.ellipse(250 + random(-30, 30) , 200 + random(-30, 30) , 200, 200);
	}

	function circulosPop(interador) {
			let populacao = map(dadosPopulacao[interador], 0, 12252023, 0, 360);

			circulo.fill(populacao, 100 , 100);
			circulo.ellipse(250 + random(-30, 30) , 200 + random(-30, 30) , 200, 200);
	}