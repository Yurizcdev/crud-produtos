function adicionar() {
    let produto = document.getElementById("produto").value;

    let li = document.createElement("li");
    li.innerText = produto;

    document.getElementById("lista").appendChild(li);

    document.getElementById("produto").value = "";
}
