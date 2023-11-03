function abrirJanela() {
    // Obtém o valor do curso selecionado
    const curso = document.getElementById("cursos").value;

    // Cria uma caixa de diálogo de confirmação
    const confirmacao = confirm("Deseja abrir a janela com informações sobre o curso " + curso + "?");

    // Se o usuário confirmar, abre a janela
    if (confirmacao) {
        const novaJanela = window.open("curso.html?curso=" + curso, "Janela do curso", "width=600,height=300");

        // Verifica se a janela foi aberta com sucesso
        if (!novaJanela) {
            alert("Não foi possível abrir a janela.");
        }
    }
}
