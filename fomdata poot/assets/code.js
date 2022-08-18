var api_url = "https://pokeapi.co/api/v2/pokemon"
var consumo = fetch(api_url)
consumo.then(res => res.json())
.then((pokemon)=>{
    for (const pokemon1 of pokemon.results) {
        var picachu = fetch(pokemon.url)
        then((picachu1)=> fetch(picachu.sprites))
        
    }
})