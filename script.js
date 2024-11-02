//Animações da Página
AOS.init();

//Formulario 
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}
function esconderform(){
    form.style.left = "-410px"
    form.style.transform = "translatex(0%)"
    mascara.style.visibility = "hidden"

}

//Calendario

const buttonCalender = document.querySelector(".btn-calendar");
const mascaraCalendar = document.querySelector(".mascara-calender");
//Função para o calendario aparecer
function ClickBtnCalendar(){
    calendarEl.style.left = "50%"
    calendarEl.style.transform = "translatex(-50%)"
    mascaraCalendar.style.visibility = "visible"


  
}
function HideCalendar(){
    calendarEl.style.left = "-470px"
    calendarEl.style.transform = "translatex(0%)"
    mascaraCalendar.style.visibility = "hidden"

}

var calendarEl = document.getElementById('calendar');
let selectedDate; // Variável global para armazenar a data selecionada




document.addEventListener('DOMContentLoaded', function() { 
    var calendarEl = document.getElementById('calendar');
    const date = document.querySelector(".dateCalendar")

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            selectedDate = info.dateStr; // Armazenar a data selecionada
            date.innerHTML = formatDate(selectedDate); // Formata a data para exibir
            
        }
    });

    calendar.render();
});

// Função para formatar a data
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-'); // Divide a data
    return `${day}/${month}`; // Retorna no formato DD/MM
}

function ScheduleTime() {
    // Informações do Cliente
    const name = document.querySelector(".name").value;
    const time = document.querySelector(".time").value;

    // Verifica se a data foi selecionada
    const dateMessage = selectedDate ? formatDate(selectedDate) : 'não selecionada'; // Formata a data

    // Usar a data armazenada
    let message = `
    Olá, tudo bem?
    Gostaria de agendar um horário para cortar o cabelo na Barbearia, 
    se possível para o dia ${dateMessage}, no horário ${time}. 
    Tem algum horário disponível?
    
    Aguardo sua resposta. Obrigado!
    Atenciosamente,
    ${name}.
    `;
    
    // Aqui você pode fazer o que quiser com a mensagem
    console.log(message); // Por exemplo, imprimir no console

    //Codifica a mensagem para ser usada na URL
    const encodeMessage = encodeURIComponent(message);

    //Cria a URL do Whatasapp com a mensagem pré-preenchida
    const whatasappURL = `https://wa.me/5586994906155?text=${encodeMessage}`

    window.open(whatasappURL,'_blank');

};
