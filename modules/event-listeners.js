import {moreInfo} from './more-info.js'

export function setEventListeners(allBeers){
    
    document.querySelectorAll(".read_more").forEach((read)=>{
        read.addEventListener("click", (e)=>{
            let id = (e.target.id).replaceAll("-", " ")
            console.log(id)
            let beer = allBeers.filter((beer)=>{if(beer.name === id){return beer}})
         moreInfo(id, beer[0])
        })
    })
}