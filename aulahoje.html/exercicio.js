let idade = Number(prompt("insira sua idade"))
    if(idade>=18 && idade<=69){
        alert("voto obrigatório")
    }
      else if(idade<=16 && idade<=17 ||idade>=70){
         alert("voto opcional")
      } else {
        alert("não pode votar")
      }
    
