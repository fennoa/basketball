# Tervetuloa Fennoa Expo GO/React Native tehtävään 👋
Tämä yksinkertainen mobiilisovellus on aloituspiste, jonka päälle sinun tulee koodata tehtäväksiannossa määritetyt tehtävät.

## Näin pääset alkuun

### Työkalut
* Projekti on ns. Expo GO sovellus, joka on yksinkertaisesti tehty Expon default templaten päälle
* Koodieditorina on `Visual Studio Code`, jossa tämä dokumentti on auki
* Projektissa on käytössä `yarn` pakettimanageri, mm. projektin skriptien ajoa varten
* Backendinä toimii Rest API, jonka osoite löytyy .env.local tiedoston ympäristömuuttujasta EXPO_PUBLIC_API_URL

### Sovelluksen ajaminen
Tämä sovellus on ns. Expo GO sovellus, joten sovelluksen voi käynnistää

iOS simulaattorissa:
```
yarn ios
```
TAI Android emulaattorissa:
```
yarn android
```

Tämä käynnistää projektin totutusti watch-tilan ja voit tehdä muutoksia koodiin, tallentaa ja nähdä tulokset heti simulaattorissa/emulaattorissa. Sekä iOS simulaattori että Android emulaattorit ovat valmiina auki työpöydällä ja sovellus on niissä jo ajossa.
