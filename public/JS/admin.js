const form = document.querySelector("form");
const formButton = document.querySelector("#formsubmit");

const formUpdate = document.querySelector(".formupdate");
const formsubmitUpdate = document.querySelector("#formsubmitupdate");

const formDelete = document.querySelector(".formdelete");
const formsubmitDelete = document.querySelector("#formsubmitdelete");


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

formsubmitUpdate.addEventListener("click", async (e) => {
    e.preventDefault();
  
    //form values
    const TITTEL = formUpdate.TITTELupdate.value
    const MODELL = formUpdate.MODELLupdate.value
    const MERKE = formUpdate.MERKEupdate.value
    const PRIS = formUpdate.PRISupdate.value
    const ARTIKKELNUMMER = formUpdate.ARTIKKELNUMMERupdate.value
  
  
  
    try {
          //sender data som lager bruker
          const res = await fetch('/update',{
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

  formsubmitDelete.addEventListener("click", async (e) => {
    e.preventDefault();
  
    //form values
    const ARTIKKELNUMMER = formDelete.ARTIKKELNUMMERdelete.value
  
  
  
    try {
          //sender data som lager bruker
          const res = await fetch('/delete',{
              method: 'post',
              body: JSON.stringify({artikkelnummer: ARTIKKELNUMMER}),
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