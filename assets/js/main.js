
/*======== FUNÇÃO DE FECHAR A PÁGINA DE ENTRADA ================*/
function closeJoinPage() {
    document.querySelector(".join-page").classList.add("hidden");
}

/*======== FUNÇÃO DE ABRIR O MENU =============================*/
function openMenu() {
    document.querySelector(".menu").classList.add("active");
    document.querySelector(".blur").classList.add("show");
}

/*======== FUNÇÃO DE FECHAR O MENU ===========================*/
function closeMenu() {
    document.querySelector(".menu").classList.remove("active");
    document.querySelector(".blur").classList.remove("show");
}

/*======== FUNÇÃO DE SELECIONAR O CONTATO ====================*/
function selectContact(element) {
    let click = element.querySelector(".contact>div>img");
    let was_Clicked = document.querySelector(".contact>div>.checked");
    if (was_Clicked !== null) {
        was_Clicked.classList.remove("checked");
    }
    click.classList.add("checked");
}

/*======== FUNÇÃO DE SELECIONAR A PRIVACIDADE ================*/
function selectPrivacy(element) {
    let click = element.querySelector(".privacy>div>img");
    let was_Clicked = document.querySelector(".privacy>div>.checked");
    if (was_Clicked !== null) {
        was_Clicked.classList.remove("checked");
    }
    click.classList.add("checked");
}

/*======== FUNÇÕES E VARIÁVEIS PARA A API ====================*/

let nome;
let nomes;

/*======== FUNÇÃO DE CADASTRO NO NOME DE ENTRADA =============*/

function joinUser() {
    nome = document.querySelector(".join-page>input").value;
    let cadastro_Nome = 
    {
        name: nome
    }

    let promisse = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants ', cadastro_Nome);

    promisse.then(verifyEntrance)
    promisse.catch(verifyError)
    
}

/*======== FUNÇÃO DE VERIFICAR A ENTRADA ================*/

function verifyEntrance(answer) {
    let verify = answer.status;
    console.log(verify);
    closeJoinPage();
    getUsers();
    seeUsers();
}

/*======== FUNÇÃO DE VERIFICAR ERRO ================*/

function verifyError(error) {
    let verify = error.response.status;
    console.log(verify);
    if (verify === 400) {
        alert("Escolha outro nome!");
    }
}

function getMessages() {
    axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    .then(response => {
        //console.log(response.data)
    })
    .catch(error => console.log(error))
}
getMessages();

function getUsers() {
    let promisse = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
    promisse.then(seeUsers)
}

function seeUsers(answer) {
    nomes = answer.data;
    addUserToList();
}

function addUserToList() {
    let elemento = document.querySelector(".contact");
    for(let i = 0; i < nomes.length; i++){
        elemento.innerHTML += 
        `            <div class="wrap" onclick="selectContact(this)">
                        <div>
                            <img src="assets/img/person-circle 1.svg" alt="">
                            <h3>${nomes[i].name}</h3>
                        </div>
                        <img class="" src="assets/img/check.svg" alt="">
                    </div>`
    }
}

