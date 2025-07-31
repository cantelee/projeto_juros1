function calcular(){ let capital = parseInt(document.getElementById('capital').value);
    
    let porcentagem = parseInt(document.getElementById('porcentagem').value);
      let tempo = parseInt(document.getElementById('tempo').value);
       let taxa = porcentagem / 100;
        let juros = capital*taxa*tempo;
         let montante = capital + juros;
    document.getElementById('total').textContent=' e o montante de ' + montante;
    document.getElementById('total1').textContent=' e o juros de ' + juros;
         }