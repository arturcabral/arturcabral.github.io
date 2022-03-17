var dataTempo;
let nuvens;
var sunset;
var sunsetFormat;
var sunrise;
var sunriseFormat;
let CurTime;
let sol;





function gotData(data) {
	nuvens = data.clouds.all;
	dataTempo = data;
	sunrise = data.sys.sunrise;
	sunset = data.sys.sunset;



}

function setup() {
	colorMode(HSB,100);
	createCanvas(window.innerWidth, window.innerHeight);
	createGraphics(window.innerWidth, window.innerHeight);
	background(51);
	loadJSON('https://api.openweathermap.org/data/2.5/weather?lat=-16.01159783662048&lon=-48.06873001796087&appid=4dfbf7b221d785f41ac1a9b7d9447cb7', gotData);


}


function draw() {
		//20% da visibilidade 
		let nuvens30 = map(nuvens, 0, 100, 0, 30);
		//print('AGORA');
		CurTime = new Date();
		//print(CurTime.getTimezoneOffset());
		print('sat ' + str(100 - Ctempo(sunset,sunrise)));

		background(10,100 - Ctempo(sunset,sunrise) ,70 +  nuvens30);
		print('nuvens');
		print(nuvens);
		
		print('sol' + str(Ctempo(sunset,sunrise) - int(nuvens30)));
		//print(sol);

}



window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;  
	canvas.size(w,h);
	width = w;
	height = h;
};

function Ctempo(pS, nS) {
	let resultado;
	let curTime = new Date();
	let InminutsC = (curTime.getHours() * 60) + curTime.getMinutes() ;

	let curTimeinBSB = (InminutsC - CurTime.getTimezoneOffset()) + 180;
 	print(curTimeinBSB);

	let InminutsPOR = ((new Date(pS * 1000).getHours()) * 60) + (new Date(pS * 1000).getMinutes()) ;
	let InminutsNAS = ((new Date(nS * 1000).getHours()) * 60) + (new Date(nS * 1000).getMinutes()) ;

 	if (curTimeinBSB > 720) {
	print('por do sol ');
	print(InminutsPOR); //1105 (385) --- 0 

	resultado = InminutsPOR - curTimeinBSB;
		if ( resultado < 0) {
			resultado = 0;
		}
	//resultado = 1105 - 1105;
	resultado = map(resultado, 0, 385, 0, 100)

	}

	else {
	print('nascer sol'); //720 - mascer do sol 
	print(InminutsNAS); // 375
	resultado = (720 - InminutsNAS) - (curTimeinBSB - InminutsNAS);
	resultado = map(resultado, 0, 385, 100, 0)
	}



	
 
 	print(' tempo para sol');
 	print(resultado);
 	return int(resultado);
 	//print(map(resultado, 0, 385, 100, 0) );



}
