function validar() {
    // Nome
    const nome = document.forms["formPrincipal"]["nome"].value;
    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    // E-mail
    const email = document.forms["formPrincipal"]["email"].value;
    if (!email.includes("@") || !email.includes(".")) {
        alert("O e-mail deve ter os caracteres @ e .");
        return false;
    }

    // Comentário
    const comentario = document.forms["formPrincipal"]["comentario"].value;
    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    // Pesquisa
    const opcaoSelecionada = document.forms["formPrincipal"]["pesquisa"].querySelector("input[type='radio']:checked");
    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma opção na pesquisa.");
        return false;
    }

    // Limpar formulário
    document.forms["formPrincipal"].reset();

    return true;
}
