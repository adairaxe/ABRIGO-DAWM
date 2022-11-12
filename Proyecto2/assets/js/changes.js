let chargeCharacter = () => {
//private key: 42416b2c3441dce44d69b9df67095c69aed6c294
//public key: 04eb9758fce0aa91a2212ee1718dd548
    /* 142416b2c3441dce44d69b9df67095c69aed6c29404eb9758fce0aa91a2212ee1718dd548 */
    let url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=04eb9758fce0aa91a2212ee1718dd548&hash=019206c22d7ce533af2815a7d32a4004";
    let container = document.querySelector("#mainpane");
    let contHTML = "";
    let etSelect = document.querySelector(".custom-select");
    fetch(url)
        .then(resp => resp.json())

        .then(datos => {
            
            for (const character of datos.data.results){
                console.log(character);
                let namecharacter = character.name;
                let numstories = character.series.items.length;
                
                contHTML += `
                    <div class="col-lg-3 col-sm-6">
                        <div class="item">
                            <img class="images" src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="">
                            <h4 class="names">${namecharacter}<br><span></span></h4>
                            <ul>
                                <li><i class="fa fa-star numberOfComics"></i>${numstories}</li>
                            </ul>
                        </div>
                    </div>
                    `;
                
                let option = document.createElement("option");
                let idcharacter = character.id;
                option.innerHTML = namecharacter;
                option.setAttribute("value", idcharacter);
                etSelect.appendChild(option);
            }
            container.innerHTML = contHTML;
        })

        .then(final => {
            $(document).ready(function(){
                $(".item img").click(function(){
                    let infoSeries = document.querySelector(".item");
                        console.log("Se dio en el valor: "+$(this).text());
              })
            })
        })
        .catch(console.error);
}

/* let showSeries = () => {
    let etSelect = document.querySelector(".custom-select");
    etSelect.addEventListener("change" , (Event) => {
        let resultado = event.target.value;
        console.log(resultado);
        let url = "https://gateway.marvel.com:443/v1/public/characters/5/comics?ts=1&apikey=04eb9758fce0aa91a2212ee1718dd548&hash=019206c22d7ce533af2815a7d32a4004";
        fetch(url)
            .then(response => response.json())
            .then(datos => {
                console.log(datos);
            })
    });

} */



chargeCharacter();
showSeries();