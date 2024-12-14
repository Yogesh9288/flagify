const input=document.querySelector('#input');
const btn=document.querySelector('#btn');
const img = document.querySelector('.info img');
const cname=document.querySelector('#name');
const capital=document.querySelector('#capital');
const population=document.querySelector('#population');
const currency=document.querySelector('#currency');
const country_code=document.querySelector('#country_code');
const info=document.querySelector('.info');
const error=document.querySelector('.error');
const link=document.querySelector('a');
const loader=document.querySelector('.loader');
btn.addEventListener('click',()=>{
    const text = input.value.trim().toLowerCase();
    display(text);
})
function display(text)
{
    loader.style.display='block';
    info.style.display='none';
    const url=`https://restcountries.com/v3.1/name/${text}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const country = data[0];
      img.src = country.flags.png; 
      loader.style.display='none';
      cname.innerHTML=country.name.common;
      capital.innerHTML=country.capital[0];
      population.innerHTML=country.population;
      currency.innerHTML=`${country.currencies[Object.keys(country.currencies)[0]].name} (${country.currencies[Object.keys(country.currencies)[0]].symbol})`;
      country_code.innerHTML=country.idd.root+country.idd.suffixes[0];
      error.style.display='none';
      info.style.display='block';
      link.href=`https://en.wikipedia.org/wiki/${cname.innerHTML}`
      console.log(data); 
    })
    .catch(err => {
        info.style.display='none';
        error.style.display='block';
        loader.style.display='none';
    });
}
