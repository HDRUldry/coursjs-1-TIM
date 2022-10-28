// Option fonction anonyme
(async() => {
	const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&facet=banking&facet=bonus&facet=status&facet=contract_name");
    const contenuJson = await contenu.json()
    console.log(contenuJson)

    //contenuJson.records.forEach(element => console.log(element.fields.address));

    for(let i in contenuJson.records) {
      console.log("test : " + contenuJson.records[i].fields.address)
    }

})()