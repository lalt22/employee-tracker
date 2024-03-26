export const getAutocomplete = () => {
    let requestOptions = {
        method: 'GET',
    };

    fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=8158d576c5f743eb86f3262b8a8f3dad", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
