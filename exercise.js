function saveSelection(variable, value) {
	window[variable] = value;
  }
  fetchExercises();
  async function fetchExercises() {
	const url = 'https://musclewiki.p.rapidapi.com/exercises/attributes';
	const response = await fetch(url, {
	  method: 'GET',
	  headers: getHeaders()  
	});
	const data = await response.json();

	populateDropdown('categoryDropdown', data.categories);
	populateDropdown('difficultyDropdown', data.difficulties);
	populateDropdown('forceDropdown', data.forces);
	populateDropdown('muscleDropdown', data.muscles);

  }
  function getHeaders() {
	return {
	  'X-RapidAPI-Key': '885fb42166msh42252d84b68715fp11ffbajsnb0f9b1444506',
	  'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
	};
  }

  function populateDropdown(id, options) {
	const dropdown = document.getElementById(id);
	options.forEach(option => {
	  const opt = document.createElement('option');
	  opt.value = option;
	  opt.textContent = option;
	  dropdown.appendChild(opt);
	});
  }
  document.getElementById('searchBtn').addEventListener('click', async () => {
	let url = 'https://musclewiki.p.rapidapi.com/exercises?';
	if(window['selectedCategory']) {
	  url += `category=${window['selectedCategory']}&`;
	}
	if(window['selectedDifficulty']) {
	  url += `difficulty=${window['selectedDifficulty']}&`;
	}
	if(window['selectedForce']) {
	  url += `force=${window['selectedForce']}&`;
	}
	if(window['selectedMuscle']) {
	  url += `muscle=${window['selectedMuscle']}`;
	}
	const response = await fetch(url, {
	  method: 'GET',
	  headers: getHeaders()
	});
	const data = await response.json();
	document.getElementById('output').innerHTML = JSON.stringify(data);
  });