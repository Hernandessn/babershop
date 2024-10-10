AOS.init();

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}
function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translatex(0%)"
    mascara.style.visibility = "hidden"

}
function ScheduleTime(){
    //Informacoes do Cliente
    const name = document.querySelector(".name").value
    const data = document.querySelector(".data").value
    const time = document.querySelector(".time").value
    const messageInput = document.querySelector(".messageInputs").value
    let message = `
   Olá, tudo bem?
    Gostaria de agendar um horário para cortar o cabelo na R.W.J Barbearia, 
    se possível para o dia ${data},no horário ${time}. 
    Tem algum horário disponível?

Aguardo sua resposta. Obrigado!

Atenciosamente,
${name}.

    `
    //Codifica a mensagem para ser usada na URL
    const encodeMessage = encodeURIComponent(message);

    //Cria a URL do Whatasapp com a mensagem pré-preenchida
    const whatasappURL = `https://wa.me/5586995114003?text=${encodeMessage}`

    window.open(whatasappURL,'_blank');

};
