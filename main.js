let form = document.querySelector("form")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")
let h4 = document.querySelector("h4")
let h5 = document.querySelector("h5")
let h6 = document.querySelector("h6")
let img = document.querySelector("img")
let h7 = document.querySelector("h7")

   async function getData(e){
    e.preventDefault()
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=f51f29953c464d83a1380518232802&q=${input.value}&aqi=yes`)
    const data = await res.json() 
    h3.innerText=data.location.name
    h2.innerText=data.location.region
    h1.innerText=data.location.country
    h4.innerText=data.current.temp_c
    let icon ='https:' + data.current.condition.icon
    img.setAttribute("src" , icon)
    img.style.height = "50%"
    img.style.width = "50%"
    h5.innerText=data.current.condition.text
    h6.innerText=data.location.localtime
    h7.innerText=data.current.last_updated
    form.reset()
}
form.addEventListener("submit",getData)
 
