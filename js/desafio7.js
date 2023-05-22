

const intervalo = setInterval(
  () => {
    const intl = Intl.DateTimeFormat('sp-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit'})

    let reloj = document.getElementById('clock')
    reloj.innerHTML = intl.format(new Date())
  }, 1000
    
)

function cambiarTema(){
  var container = document.getElementById('container')
  var reloj = document.getElementById('reloj-container')

  container.classList.toggle("dark-container")
  reloj.classList.toggle("dark-reloj")
}