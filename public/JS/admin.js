const form = document.querySelector("form");
const formButton = document.querySelector("#formsubmit");


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
           
        console.log(shoe);

        if (shoe.shoes){ //if user data has been posted
            location.assign("/"); //send them to adminpage
        }

    } catch (err) {
        console.log(err)
    }

})