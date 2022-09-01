const dia = document.querySelector("#days");
const hora = document.querySelector("#hours");
const minuto = document.querySelector("#minutes");
const segundo = document.querySelector("#seconds");

const countdown = () => {
  const lancamento = new Date("may 7, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = lancamento - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDay = Math.floor(gap / days);
  const texthours = Math.floor((gap % days) / hours);
  const textminutes = Math.floor((gap % hours) / minutes);
  const textseconds = Math.floor((gap % minutes) / seconds);

  dia.innerHTML = textDay;
  hora.innerHTML = texthours;
  minuto.innerHTML = textminutes;
  segundo.innerHTML = textseconds;
};

setInterval(countdown, 1000);
