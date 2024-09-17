// Exercicio - 1. Acessando Propriedades de Objetos

let carro = {
    marca: 'BYD',
    modelo: 'Dolphin',
    ano: 2023,
    cor: 'Prata'
  };
  
  for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }

  // Exercicio - 2. Verificando Propriedades

let livro = {
    titulo: 'O Silmarillion',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1977,
    genero: 'Fantasia'
  };
  
  let editoraExiste = false;
  
  for (let propriedade in livro) {
    if (propriedade === 'editora') {
      editoraExiste = true;
      break;
    }
  }
  
  if (!editoraExiste) {
    livro.editora = 'Editora Arqueiro';
  }
  
  console.log(livro);
  
  // Exercicio - 3. Filtrando Propriedades de Objetos
  
  let produto = {
    nome: 'notebook',
    preco: 2000,
    peso: 2,
    estoque: 10,
    desconto: 250
  };
  
  function filtrarPropriedades(obj, valorMinimo) {
    let novoObjeto = {};
    for (let propriedade in obj) {
      if (obj[propriedade] > valorMinimo) {
        novoObjeto[propriedade] = obj[propriedade];
      }
    }
    return novoObjeto;
  }
  
  console.log(filtrarPropriedades(produto, 1000));
  
  // Exercicio - 4. Iterando Sobre Arrays de Objetos

  let pessoas = [
    { nome: 'Dorival', idade: 25, cidade: 'São Paulo' },
    { nome: 'Ana', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 35, cidade: 'Curitiba' }
  ];
  
  for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  
  // Exercicio - 5. Calculando Valores em Arrays de Objetos

  let alunos = [
    { nome: 'Ana', nota1: 8, nota2: 7 },
    { nome: 'Carlos', nota1: 9, nota2: 6 },
    { nome: 'Julia', nota1: 7, nota2: 8 }
  ];
  
  for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
  }
  
  // Exercicio - 6. Filtrando Arrays de Objetos

  let funcionarios = [
    { nome: 'Leonardo', cargo: 'Caixa', salario: 3000 },
    { nome: 'Paulo', cargo: 'Designer', salario: 4500 },
    { nome: 'Ana', cargo: 'Gerente', salario: 5000 }
  ];
  
  let salarioMinimo = 4000;
  
  for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Funcionário: ${funcionario.nome}, Salário: ${funcionario.salario}`);
    }
  }
  
  // Exercicio - 7. Modificando Objetos em um Array

  let produtos = [
    { nome: 'Camisa', preco: 50, desconto: 0 },
    { nome: 'Calça', preco: 100, desconto: 0 },
    { nome: 'Tênis', preco: 150, desconto: 0 }
  ];
  
  produtos.forEach(produto => {
    produto.preco = produto.preco * 0.9;
    console.log(`${produto.nome}, Novo Preço: ${produto.preco}`);
  });
  
  // Exercicio - 8. Criando Novos Arrays a Partir de Objetos

  let filmes = [
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Matrix', diretor: 'Wachowskis', anoLancamento: 1999 }
  ];
  
  let titulos = [];
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);
  
  // Exercicio - 9. Contabilizando Elementos com uma Condição

  let clientes = [
    { nome: 'Laura', idade: 25, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 32, cidade: 'Rio de Janeiro' },
    { nome: 'Ana', idade: 40, cidade: 'Belo Horizonte' }
  ];
  
  let contador = 0;
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Clientes com mais de 30 anos: ${contador}`);
  
  // Exercicio - 10. Criando Relatórios com Objetos e Arrays

  let vendas = [
    { produto: 'Celular', quantidade: 2, valor: 1500 },
    { produto: 'Laptop', quantidade: 1, valor: 3000 },
    { produto: 'Tablet', quantidade: 3, valor: 1000 }
  ];
  
  let valorTotal = 0;
  
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total de vendas: ${valorTotal}`);
  
  // Exercicio - 11. Agrupando Elementos com forEach

  let pedidos = [
    { cliente: 'Alice', produto: 'Camiseta', quantidade: 2 },
    { cliente: 'Bruno', produto: 'Tênis', quantidade: 1 },
    { cliente: 'Alice', produto: 'Calça', quantidade: 3 }
  ];
  
  let totalPorCliente = {};
  
  pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]) {
      totalPorCliente[pedido.cliente] = 0;
    }
    totalPorCliente[pedido.cliente] += pedido.quantidade;
  });
  
  console.log(totalPorCliente);
  
  // Exercicio - 12. Atualizando um Array de Objetos

  let estoque = [
    { produto: 'Celular', quantidade: 5, minimo: 10 },
    { produto: 'Tablet', quantidade: 8, minimo: 7 },
    { produto: 'Laptop', quantidade: 2, minimo: 5 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
  });
  
  console.log(estoque);
  
  // Exercicio - 13. Implementando um Carrinho de Compras

  let carrinho = {
    itens: [
      { nome: 'Camiseta', quantidade: 2, precoUnitario: 50 },
      { nome: 'Calça', quantidade: 1, precoUnitario: 100 },
      { nome: 'Tênis', quantidade: 1, precoUnitario: 150 }
    ]
  };
  
  let totalCarrinho = 0;
  
  carrinho.itens.forEach(item => {
    totalCarrinho += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Valor total do carrinho: ${totalCarrinho}`);
  
  // Exercicio - 14. Manipulando Objetos Complexos

  let empresa = {
    departamentos: [
      { nome: 'TI', funcionarios: ['Ana', 'Carlos'] },
      { nome: 'RH', funcionarios: ['Laura', 'Pedro'] }
    ]
  };
  
  for (let departamento of empresa.departamentos) {
    for (let funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
  }
  
  // Exercicio - 15. Filtrando e Somando Valores

  let transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saida', valor: 200 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saida', valor: 300 }
  ];
  
  let saldoFinal = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldoFinal += transacao.valor;
    } else {
      saldoFinal -= transacao.valor;
    }
  });
  
  console.log(`Saldo final: ${saldoFinal}`);
  