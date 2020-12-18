let buttonAlert = document.getElementById("alert");
let buttonSomme = document.getElementById("somme");

buttonAlert.addEventListener("click", () =>{
    alert("Hello World");
})

buttonSomme.addEventListener("click", () =>{
    let div = document.createElement("div");
    div.innerHTML = "5 + 6 = " + (5 + 6);
    document.body.appendChild(div);
})