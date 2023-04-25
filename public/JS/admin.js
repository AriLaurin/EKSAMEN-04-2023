const form = document.querySelector("form");
const nutcont = document.querySelector(".nut-container");
const formButton = document.querySelector("#formsubmit");
const productCont = document.querySelector(".product-cont");


formButton.addEventListener("click", async (e) => {
  e.preventDefault();

  //form values
  const TITTEL = form.TITTEL.value
  const MODELL = form.MODELL.value
  const MERKE = form.MERKE.value
  const PRIS = form.PRIS.value
  const ARTIKKELNUMMER = form.ARTIKKELNUMMER.value

  try {
        //sender data som lager bruker
        const res = await fetch('/',{
            method: 'post',
            body: JSON.stringify({tittel: TITTEL, modell: MODELL, merke: MERKE, pris: PRIS, artikkelnummer: ARTIKKELNUMMER}),
            headers: {'Content-Type': 'application/json'}
        })
        const shoe = await res.json();

        nutcont.innerHTML += 
        `
        <div class="product-cont">
        <h3>${TITTEL}</h3>
        <p>${MODELL}</p>
        <p>${MERKE}</p>
        <p>${PRIS}kr</p>
        <p>${ARTIKKELNUMMER}</p>
        </div>
        `           
        console.log(user);

    } catch (err) {
        console.log(err)
    }

})