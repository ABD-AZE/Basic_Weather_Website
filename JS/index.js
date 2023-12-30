let searchbar=document.getElementById('searchbar');
let citydiv=document.getElementById('city');

async function changecity(){
    let weatherapi = 'https://api.openweathermap.org/data/2.5/weather?';
    let city=searchbar.value;
    if(city===''){
        alert('Please enter a city name');
    }
    else{
        searchbar.value="";
        weatherapi=weatherapi+`q=${city}&appid=59a1f804077e3199e813dc76e3dd342a`;
        let data= await fetch(weatherapi);
        let datajson = await data.json();
        if(datajson.name===undefined){
            alert('Please Enter a valid city name');
        }
        else{
            citydiv.querySelector('p').innerHTML=datajson.name;
            console.log(datajson);
            document.getElementById('visibility').innerHTML=datajson.visibility/1000+'km';
            document.getElementById('humidity').innerHTML=datajson.main.humidity+'%';
            document.getElementById('pressure').innerHTML=datajson.main.pressure+'hPa'; 
            document.getElementById('temp').innerHTML=Math.round((datajson.main.temp-273))+'&deg;C';
            document.getElementById('windspeed').innerHTML=datajson.wind.speed+'m/s';
            let i=document.getElementById('weather');
            let wc=datajson.weather[0].main;
            switch(wc){
                case 'Clear':
                    i.src='IMG/clear.png';
                    break;
                case 'Clouds':
                    i.src='IMG/clouds.png';
                    break;
                case 'Mist':
                    i.src='IMG/mist.png';
                    break;
                case 'Drizzle':
                    i.src='IMG/drizzle.png';
                    break;
                case 'Rain':
                    i.src='IMG/rain.png';
                    break;
                case 'Snow':
                    i.src='IMG/snow.png';
                    break;
                default:
                    i.src='IMG/clear.png';
            }
        }        
    }

}

function checkenter(event){
    if(event.key==='Enter'){
        changecity();
        event.preventDefault();
    }
}



