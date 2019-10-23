window.addEventListener('load' , () => {
    let latitude,longitude;
    const degree = document.getElementsByClassName('degree')[0];
    const description = document.getElementsByClassName('temperature-description')[0];
    const timezoneText = document.getElementsByClassName('timezone-text')[0];

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            //fetch the latitude and longtitude , send it to dark sky api & get the weather information
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            //get the api key
            const secret = '14b090580918a4e4d8dcbedabe3b490d';
            const fetchApi = async (latitude , longitude) => {
                let response = await fetch(`${proxy}https://api.darksky.net/forecast/${secret}/${latitude},${longitude}`);
                let data = await response.json();
                return data;
            }
            fetchApi(latitude , longitude).then(data => {
                const timezone = data.timezone;
                const {temperature , summary} = data.currently;
                // take these variables and display it on html
                degree.textContent = temperature;
                description.textContent = summary;
                timezoneText.textContent = timezone;
            });
        });
    }
});