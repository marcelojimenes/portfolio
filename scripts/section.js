let sectionIndex = "sobre-mim"
const navItems = document.querySelectorAll('nav ul li'); // seleciona todas as tags nav ul e li
const sections = document.querySelectorAll('section'); // seleciona todas as tags section

//função para exibir uma determinada seção pelo id
function showSection(sectionId) {
    //removemos a classe ativa da section caso ela não seja igual ao id informada no parâmetro.
    //isso é feito para exibir apenas uma section por vez
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });

    //aqui seguimos a mesma lógica acima, porém os itens da nav bar no header
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
}

//quando um item da nav bar é clicado, pegamos o data-section correspondente dele e adicionamos um ouvinte de evento
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        //quando o evento é disparado chamamos o metodo showSection com o id que está no valor do attr data-section
        const sectionId = event.currentTarget.getAttribute('data-section');
        showSection(sectionId);
    });
});