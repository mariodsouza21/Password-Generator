const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p = document.getElementById("Password")
let p1 = document.getElementById("Password1")

function password(){
    const arr = []
    for(i=0; i<15; i++){
        // console.log(i)
        const randomBoxOne = Math.floor( Math.random() * characters.length )
        arr.push(characters[randomBoxOne])

    }
     return arr.join("")
}

function generate(){
    // let randomBoxOne = Math.floor( Math.random() * characters.length )
    // let randomBoxTwo = Math.floor( Math.random() * characters.length )
    // let three = Math.floor( Math.random() * characters.length )
    // let four = Math.floor( Math.random() * characters.length )
    // let five = Math.floor( Math.random() * characters.length )
    // let six = Math.floor( Math.random() * characters.length )
    // p.textContent = characters[randomBoxOne] + characters[randomBoxTwo] + characters[three] + characters[four] + characters[five] + characters[six]  
    // p1.textContent = characters[randomBoxTwo]

    p.textContent = password()
    p1.textContent = password()

}


