//Create function to call API. Endpoint decides what data to fetch
const fetch = require('node-fetch')
module.exports = async function fetchData() {    
    const dataset = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const json = await dataset.json();
    console.log(json.deck_id)
    
    return json
}