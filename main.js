function verificar() {
    let salario = document.querySelector("#Valor__um").value;
    let emprestimo = document.querySelector("#Valor__dois").value;
    let result = document.querySelector(".resultado__valor");
  
    let porcentagem = (salario * 30) / 100;
    let valorDisponivel = parseFloat(salario) + parseFloat(porcentagem); 
  
    if (parseFloat(emprestimo) <= valorDisponivel) {
      result.style.display = "block";
      result.style.backgroundColor = "var(--valor-true)";
      result.style.color = "var(cor-resultado-true)"
      result.textContent = `O valor de ${emprestimo} está disponível`;
    } else {
      result.style.display = "block";
      result.style.backgroundColor = "var(--valor-false)";
      result.style.color = "var(--cor-resultado)"
      result.textContent = `O valor de ${emprestimo} não está disponível`;
    }
  }