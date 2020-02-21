---
title: Hello
layout: default
---

<html>
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
</html>

