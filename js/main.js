$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		e.preventDefault();
		let searchText = $('#searchText').val();
		getMovies(searchText);
	});
});

function getMovies(searchText){
	var apiKey = 'c834411f';
	axios.get('http://www.omdbapi.com/?apikey='+apiKey+'&s='+searchText)
		.then((response) => {
			console.log(response.data.Search[0].Title);
			console.log(response.data.Search[0].Type);
			console.log(response.data.Search[0].Year); 
		})
		.catch((err) => {
			console.log(err);
		});
}		