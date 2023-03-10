const searchValue=document.querySelector(".input");
const submitBtn=document.querySelector('.search');
const containerInfo=document.querySelector('.container');
console.log(submitBtn)
const fetchCountryData=(country)=>{
   fetch(`https://restcountries.com/v3.1/name/${country}`).
   then(response=>{
    if(!response.ok) throw new Error('Country not Found')
   return  response.json()}).
   then((data)=>{
    
    const html=`<img src=${data[0].flags.png} alt="">
            <div class="info">
                <h3>Capital:<span>${data[0].capital[0]}</span></h3>
                <h3>Region:<span>${data[0].region}</span></h3>
                <h3>Population:<span>${data[0].population}</span></h3>
                <h3>Currency:<span>${Object.values(data[0].currencies)[0].name}</span></h3>
                <h3>CommonLanguages:<span>${Object.values(data[0].languages)[0]}</span></h3>


            </div>`
               containerInfo.innerHTML=html;

   }).catch(error=>{
    const html=`<div class="error">
           ${error}
            </div>`
            containerInfo.innerHTML=html;
   }).finally(()=>{
                containerInfo.style.opacity=1;

   })
}
submitBtn.addEventListener('click',(e)=>{
                containerInfo.style.opacity=0;
    e.preventDefault();
    if(searchValue.value.trim()===''){
            const html=`<div class="error">
             Input mustn't be Empty
            </div>`
            containerInfo.innerHTML=html
            containerInfo.style.opacity=1;
            return
    }
    fetchCountryData(searchValue.value)

})