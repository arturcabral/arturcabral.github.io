

// Modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Keypresed R
document.addEventListener('keydown', function(e) {
    if(e.key == "r"){
      console.log('pressed R ');
      gotMovieName();
    }

    if(e.key == "f"){
      console.log('pressed F ');
      openFullscreen();
    }
});


//FullScreen
var elem = document.documentElement;

	function openFullscreen() {
		if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.webkitRequestFullscreen) { /* Safari */
		    elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE11 */
		    elem.msRequestFullscreen();
		  }

	}


//DoGet Json function
	

	const doGet = (url) => {
		const promiseCallback = (resolve, reject) => {
			fetch(url)
				.then((response) => {
					if (!response.ok) throw new Error('Erro ao executar!' + response.status);
					return response.json();
					})
					.then(resolve)
					.catch(reject);
			}
			return new Promise(promiseCallback);
		}

//DataMovie
	
	function gotDataMovie(movieName) {
		console.log("Getting Poster");
		
	
	doGet('https://api.themoviedb.org/3/search/movie?api_key=b22d8d39515f3aaf92c6a71ad59eea95&language=en-US&query=' + movieName +'&page=1&include_adult=false').then((response) => {
		console.log(response);
		urlposter = 'https://image.tmdb.org/t/p/original' + response.results[0].poster_path;
		
		document.getElementById("posterimg").src = urlposter;

	}).catch((erro) => {
		console.log('Erro ao encontrar filme' + erro);
	});		
}

//List of Movie

	function gotMovieName() {
		console.log("Getting list");
		
		doGet('https://spreadsheets.google.com/feeds/list/1nfJ26rMD2EWy6l6ut4ZZV-6laNUYtByPDLSo5PwW4Z4/od6/public/values?alt=json').then( (response) => {

			listLength = response.feed.entry.length;
			var randomNumber = Math.floor(Math.random() * listLength);
			console.log(randomNumber);
			movieName = response.feed.entry[randomNumber].gsx$nomedofilme.$t;
			console.log(movieName);
			
			document.getElementById("posterimg").alt = movieName;

			gotDataMovie(movieName);

				}
 			).catch( erro => { console.log("Ocorreu um erro " + erro)});		
	}