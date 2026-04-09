function adicionar() {
    let produto = document.getElementById("produto").value;

    let li = document.createElement("li");
    li.innerText = produto;

    li.onclick = function() {
        let novo = prompt("Editar produto:", li.innerText);
        if (novo) {
            li.innerText = novo;
        }
    };

    document.getElementById("lista").appendChild(li);

    document.getElementById("produto").value = "";
}
