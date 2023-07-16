function atualizarRelogio() {
    const elementoHoras = document.querySelector(".horas");
    const elementoMinutos = document.querySelector(".minutos");
    const elementoSegundos = document.querySelector(".segundos");

    const atual = new Date()
    const horas = atual.getHours().toString().padStart(2, "0");
    const minutos = atual.getMinutes().toString().padStart(2, "0");
    const segundos = atual.getSeconds().toString().padStart(2, "0");

    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
}

setInterval(atualizarRelogio, 1000);
