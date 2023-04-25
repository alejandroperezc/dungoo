export default function handler(request, response){
    let pin = request.query.pin
    fetch(`https://dungee-252d3-default-rtdb.europe-west1.firebasedatabase.app/pins/PIN${pin}.json`)
    .then(datos => datos.json())
    .then(json => response.json(json))
}