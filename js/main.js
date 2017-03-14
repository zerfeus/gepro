function notify_contact() {

   var request = new XMLHttpRequest();

   var subject = "[Formulario Website] - " + document.getElementById("subject").value;
   var body = "Nome:" + document.getElementById("name").value + "<br>";
   body += "E-mail:" + document.getElementById("email").value + "<br>";
   body += "Telefone:" + document.getElementById("phone").value + "<br>";
   body += "Mensagem:" + document.getElementById("message").value + "<br>";

   request.open("GET", "//notify.gepro.com.br/api/send?subject=" + subject + "&text=" + body, true);
   request.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
   request.send();

   document.getElementById("feedback").innerHTML = "Mensagem enviada com sucesso! Aguarde o nosso contato."; //request.responseText;

   document.getElementById("subject").value = "Selecione o Assunto";
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("message").value = "";
   document.getElementById("phone").value = "";

   return false;

}

function notify_trial() {

   var request = new XMLHttpRequest();

   var subject = "[Solicitacao de Trial]";
   var body = "Escritorio:" + document.getElementById("company").value + "<br>";
   body += "Responsavel:" + document.getElementById("name").value + "<br>";
   body += "E-mail:" + document.getElementById("email").value + "<br>";
   body += "Telefone:" + document.getElementById("phone").value + "<br>";
   body += "Plano Escolhido:" + document.getElementById("plan").value + "<br>";
   body += "Como nos Conheceu?:" + document.getElementById("channel").value + "<br>";

   request.open("GET", "//notify.gepro.com.br/api/send?subject=" + subject + "&text=" + body, true);
   request.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
   request.send();

   document.getElementById("feedback").innerHTML = "Solicitação enviada com sucesso! Aguarde o nosso contato."; 
   document.getElementById("company").value = "";
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("phone").value = "";
   document.getElementById("plan").value = "Informe o plano de interesse";
   document.getElementById("channel").value = "Como nos conheceu?";

   return false;

}
