window.addEventListener('load' , () => {
   let latitude,longitude;

   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            //get the api key
            const secret = '14b090580918a4e4d8dcbedabe3b490d';
            //fetch the latitude and longtitude , send it to dark sky api & get the weather information
            let api = `https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/${latitude},${longtitude}`;
        });
        const userAction = async () => {
            const response = await fetch('http://example.com/movies.json');
            const myJson = await response.json(); //extract JSON from the http response
            // do something with myJson
          }
   }
});