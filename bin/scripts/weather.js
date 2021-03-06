document.addEventListener("DOMContentLoaded", ready);

var l = document.getElementById('refr');
if (l){
	l.addEventListener('click', ready);
}

function ready() {
	var weather = document.querySelector(".weather");
	weather.innerHTML = '';
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		go(myArr);
		}
	};
	request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Baykal&appid=5325475136e23949cd75b5c424b5c31d");
	request.send();	
	
	function go (data) {
		weather.innerHTML += 'Погода: <b>'+data.weather[0].main+'</b><br>';
		weather.innerHTML += '<p style="text-align: center"><img src="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></p>';
		weather.innerHTML += 'Температура: <b>'+Math.round(data.main.temp-273)+'&#176;C</b><br>';
		weather.innerHTML += 'Влажность: <b>'+data.main.humidity+'%</b><br>';
		weather.innerHTML += 'Давление: <b>'+Math.round(data.main.pressure*0,00750063755419211*100)+'мм.рт.ст.</b><br>';
		weather.innerHTML += 'Видимость: <b>'+(data.visibility/1000)+'км</b><br>';
	}
}
