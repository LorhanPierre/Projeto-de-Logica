

        const valores = document.querySelectorAll("form");
        const Ititulo = document.querySelector("#title-pt");
        const Iorientacao = document.querySelector("#orientation-pt");
       const Itipo =  document.querySelectorAll(".checkbox-group input[type='checkbox']");

       function cadastrarOrientacao() {

            fetch("localhost:8081/orientPt",{

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST" ,
                body: JSON.stringify({
                    
                titulo: Ititulo.value,
                orientacao: Iorientacao.value,
                tipo: Array.from(Itipo).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value)

                })
       })
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log(res)});
       };

       valores.addEventListener('submit', function (event) {
            event.preventDefault();
            cadastrarOrientacao();
       });