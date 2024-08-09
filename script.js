document.getElementById('form-reserva').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const nome = document.getElementById('nome').value;
    const carro = document.getElementById('carro').value;
    const data = document.getElementById('data').value;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3>Reserva Confirmada!</h3>
                           <p>Nome: ${nome}</p>
                           <p>Carro: ${carro}</p>
                           <p>Data de Início: ${data}</p>`;
});
