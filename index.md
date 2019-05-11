---
title: Hello
layout: default
---

<html>
<head>
	<title>Hello Word</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Cutive|Cutive+Mono" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<script src="../textShuffle.js"></script>
	<script src="../jquery.textShuffle.js"></script>
	<script>
$(function() {
  var textShuffle = $('.shuf').textShuffle();
  
  // Remove me, it's an autoplay
  var play = function () {
    var chars = ['1 0 1 0', '█ ▓ ▒ ░', '01#/&%$?_-%*'];
    textShuffle.setChars(chars[Math.floor(Math.random() * 3 - 0.01)]);
    textShuffle.play();
   play();
  }
  
  play();
});
	</script>
</head>
<body>

	<section id="main">
	<header class="mainHeader">
	<img src="images/sticker.png">
	<p><b>ARTUR_CABRAL</b> </p>
	<p> *\louco com tendências tecnofilistas não passivas Lorem ipsum dolor sit amet consectetur adipiscing elit Integer aliquam risus ligula nec mattis ex sollicitudin sed. Vestibulum auctor diam ut enim tristique fringilla./*    Hover me to shuffle!
</p>
	<p>	<br>
	<a href="">BIO</a>
	<a href="">CV</a>
	<a href="">TXT</a>

	</p>
	<p><br>	
	<a href="">arturcabral[at]gmail.com</a></p>
	</header>
	<content class="content">
	{% for post in site.posts limit:9 %}
	<div class="col-sm-4">
	<div class="card">
	{% if post.thumbnail %}
	<img src="{{ post.thumbnail }}" style="height: 200px;" align="center" /> 
	{% else %}
	<img src="/images/thumbnail.png" style="height:200px;" align="center" />
	{% endif %}
	<span style="height: 100px;writing-mode: vertical-rl;width: 10px;"><a style="text-decoration: none;" href="{{ BASE_PATH }}{{ post.url }}" class="shuf">{{ post.title }}</a></span>
	<p><br></p>
	</div>
	</div>
	{% endfor %}	   
</content>


<footer class="mainFooter">FOOTER</footer>

</section>

</body>
</html>


