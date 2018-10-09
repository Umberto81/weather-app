/**
 * Created by goffr on 16/08/2018.
 */


    document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    //variabile dinamica per la città
    let city = document.getElementById('città').value;
    //variabili per la data
    let now = new Date();
    let giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    let mese = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    let nome_mese = mese[now.getMonth()];
    let giorno = giorni[now.getDay()];
    let numero_giorno = now.getDate();


    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&lang=it&units=metric&APPID=INSERT_YOUR_API_KEY", true);
    xhr.onload = function(){
        let output;
        if (this.status === 200) {
            var meteo = JSON.parse(this.responseText);
            //variabili per la lista
            var pressione = meteo.main.pressure;
            var umidità = meteo.main.humidity;
            var temperatura = meteo.main.temp;
            var temp_max = meteo.main.temp_max;
            const temp_min = meteo.main.temp_min;
            var vento = meteo.wind.speed;
            var nuvole = meteo.clouds.all;
            //ciclo per le icone
            for (i in meteo.weather) {
                var meteo1 = meteo.weather[i].id;
            }

            switch (meteo1) {
                case 200:
                case 201:
                case 202:
                case 210:
                case 211:
                case 212:
                case 221:
                case 230:
                case 231:
                case 232:
                    document.getElementById('meteo').innerHTML = '<i class="wi wi-day-sleet-storm wi-fw icon"></i>' + ' rovesci';
                    break;

                case 300:
                case 301:
                case 302:
                case 310:
                case 311:
                case 312:
                case 313:
                case 314:
                case 321:
                    document.getElementById('meteo').innerHTML = '<i class="wi wi-day-rain-mix wi-fw icon"></i>' + 'pioggierellina';
                    break;

                case 500:
                case 501:
                case 502:
                case 503:
                case 504:
                case 511:
                case 520:
                case 521:
                case 522:
                case 531:

                    document.getElementById('meteo').innerHTML = '<i class="wi wi-rain wi-fw icon"></i>' + ' pioggia';
                    break;

                case 600:
                case 601:
                case 602:
                case 611:
                case 612:
                case 615:
                case 616:
                case 620:
                case 621:
                case 622:

                    document.getElementById('meteo').innerHTML = '<i class="wi wi-snow wi-fw "></i>' + ' neve';
                    break;

                case 701:
                case 711:
                case 721:
                case 731:
                case 741:
                case 751:
                case 761:
                case 762:
                case 771:
                case 781:

                    document.getElementById('meteo').innerHTML = '<i class="wi wi-windy"></i>' + ' atmosfera';
                    break;

                case 800:

                    document.getElementById('meteo').innerHTML = '<i class="wi wi-day-sunny"></i>' + ' sereno';
                    break;

                case 801:
                case 802:
                case 803:
                case 804:

                    document.getElementById('meteo').innerHTML = '<i class="wi wi-day-cloudy"></i>' + ' nuvoloso';
                    break;


                default:

            }
            //display della data
            document.getElementById('date').innerHTML = `${giorno} ${numero_giorno} ${nome_mese} `;
            //display della temperatura
            document.getElementById('temp').innerHTML = `${temperatura}<i class="wi wi-celsius"></i>`;
            //variabile della lista
            output = `<ul>
      <li>Pressione: ${pressione}hpa</li>
      <li>Umidità: ${umidità}%</li>
      <li>Temp max: ${temp_max}</li>
      <li>Temp min: ${temp_min}</li>
      <li>Nuvolosità: ${nuvole}%</li>
      <li>Vento: ${vento}m/s</li>
      </ul>

        `;
            //display della lista
            document.getElementById('vedo').innerHTML = output;
        }
    };
    xhr.send();
}
