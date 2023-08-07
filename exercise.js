const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://musclewiki.p.rapidapi.com/exercises');
xhr.setRequestHeader('X-RapidAPI-Key','69b5c25eecmsh72d9f07fc3dfc60p148098jsn8c6634af6304');
xhr.setRequestHeader('X-RapidAPI-Host','musclewiki.p.rapidapi.com');
xhr.onreadystatechange = () => {
	if(xhr.readyState == 4 && xhr.status == 200) 
	{
		const response = JSON.parse(xhr.responseText)
		console.log(response)
		
	}
}
xhr.send();