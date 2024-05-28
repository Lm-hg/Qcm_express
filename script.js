
async function envoi(url = "",data = {}) {
    const span=document.querySelector('span')
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), 
    });
    return response

  }
const form1=document.querySelector('#form1')
const form2=document.querySelector('#form2')
const form3=document.querySelector('#form3')
const form4=document.querySelector('#form4')
const form5=document.querySelector('#form5')
const good= document.querySelector('#Good')
form1.addEventListener('submit', async function(e){
    e.preventDefault();
    const error=form1.querySelector('span')
    const res1 = document.querySelector('input[name="q1"]:checked')?.value;
    const data ={res1}
    const result=await envoi("http://localhost:8000/form1",data)
    if(result.status==200){
        form2.style.display='block';
        error.style.display='none'

    }else{
        error.style.display='block'
        error.style.color='red'

    }
})
form2.addEventListener('submit', async function(e){
    e.preventDefault();
    const error=form2.querySelector('span')
    const res1 = document.querySelector('input[name="q2"]:checked')?.value;
    const data ={res1}
    const result=await envoi("http://localhost:8000/form2",data)
    if(result.status==200){
        form3.style.display='block';
        error.style.display='none'

    }else{
        error.style.display='block'
        error.style.color='red'

    }
})
form3.addEventListener('submit', async function(e){
    e.preventDefault();
    const error=form3.querySelector('span')
    const res1 = document.querySelector('input[name="q3"]:checked')?.value;
    const data ={res1}
    const result=await envoi("http://localhost:8000/form3",data)
    if(result.status==200){
        form4.style.display='block';
        error.style.display='none'

    }else{
        error.style.display='block'
        error.style.color='red'

    }
})
form4.addEventListener('submit', async function(e){
    e.preventDefault();
    const error=form4.querySelector('span')
    const res1 = document.querySelector('input[name="q4"]:checked')?.value;
    const data ={res1}
    const result=await envoi("http://localhost:8000/form4",data)
    if(result.status==200){
        form5.style.display='block';
        error.style.display='none'

    }else{
        error.style.display='block'
        error.style.color='red'

    }
})
form5.addEventListener('submit', async function(e){
    e.preventDefault();
    const error=form1.querySelector('span')
    const res1 = document.querySelector('input[name="q5"]:checked')?.value;
    const data ={res1}
    const result=await envoi("http://localhost:8000/form5",data)
    if(result.status!==200){

        error.style.display='block'
        error.style.color='red'

    }else{
        good.style.display='block'
    }
})