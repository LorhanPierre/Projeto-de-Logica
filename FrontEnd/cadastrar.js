const Ititulo = document.querySelector("#title-pt");
const Iorientacao = document.querySelector("#orientation-pt");
const Itipo = document.querySelectorAll(".checkbox-group input[type='checkbox']");
const saveButton = document.querySelector("#save-button");

function cadastrarOrientacao() {
    fetch("http://localhost:8081/orientacoes", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            titulo_orient: Ititulo.value,
            orient: Iorientacao.value,
            tipo: Array.from(Itipo)
                .filter(cb => cb.checked)
                .map(cb => cb.value)
                .join(",")
        })
    })
    .then(async res => {
        if (!res.ok) {
            const error = await res.text();
            throw new Error(`Erro ${res.status}: ${error}`);
        }
        return res.json();
    })
    .then(data => {
        console.log("Salvo com sucesso:", data);
        alert("Orientação salva com sucesso!");
    })
    .catch(err => {
        console.error("Erro ao salvar:", err);
        alert("Erro ao salvar. Verifique o console.");
    });
}

saveButton.addEventListener('click', cadastrarOrientacao);
