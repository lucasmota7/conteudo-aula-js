// Exemplo de If Else
   // const hora = new Date().getHours();
   // const minutos = new Date().getMinutes();
   // const horario = String(hora) + ':' + String(minutos);
   // let saudacao;

   // if (horas > 18) {
   //    saudacao = 'Boa noite.';
   // } else {
   //    saudacao = 'Bom dia.';
   // }

   // document.getElementById('ex1').innerHTML = saudacao;
   // document.getElementById('ex2').innerHTML = 'Agora são: ' + horario;
   // document.getElementById('ex2').innerHTML = 'Agora são: ${horario}';

   //Exemplo If Else If
   const horas = 14;
   const minutos = new Date.getMinutes();
   const horario = String(hora) + ':' + String(minutos);
   let saudacao;

   if (hora > 18) {
      saudacao = 'Boa noite.';
   } else if (hora > 12) {
      saudacao = 'Boa tarde.';
   } else {
      saudacao = 'Bom dia.';
   }

   document.getElementById('ex1').innerHTML = saudacao;
   //document.getElementById('ex2').innerHTML = 'Agora são: ' + horario
   document.getElementById('ex2').innerHTML = 'Agora são ${horario}';