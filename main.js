function formatDateString() {
  var data = new Date()
  var dia = data.getDate()
  var mes = data.getMonth() + 1
  var ano = data.getFullYear()
  // dd/mm/yyyy
  var dateFormat = dia + '/' + mes + '/' + ano

  return dateFormat
}

function handleNewNote(event) {
  event.preventDefault()
  console.log('teste')
  var date = formatDateString()

  //color são as classes do nosso CSS
  var colors = [
    'color-purple',
    'color-red-light',
    'color-orange',
    'color-green-light'
  ]

  //pega o numero automatico e dinamico
  var randomNumber = Math.floor(Math.random() * 3)

  //recuperando a TAG INPUT
  var elementNote = document.querySelector('#note')
  //console.log(elementNote.value);

  //recuperando a TAG MAIN
  var elementNotes = document.querySelector('#notes')
  //console.log(elementNotes);

  if (elementNote.value == '') {
    alert('preencha o campo notas')
    return
  }

  var newElement = document.createElement('div')
  newElement.textContent = elementNote.value
  var newElementDivInternal = document.createElement('div')
  var newElementSpan = document.createElement('span')
  newElementSpan.textContent = date
  var newElementImg = document.createElement('img')
  newElementImg.src = 'assets/trash-bin.png'
  newElementImg.addEventListener('click', function () {
    var resposta = confirm('Deseja realmente excluir?'); 

    if(resposta){
      //remove a DIV VÔ da img de exclusao
      elementNotes.removeChild(newElement)
    }
    
  })

  newElementDivInternal.appendChild(newElementSpan)
  newElementDivInternal.appendChild(newElementImg)

  newElement.appendChild(newElementDivInternal)

  //cor automatico da nossa varial COLOR
  newElement.classList.add(colors[randomNumber])

  elementNotes.appendChild(newElement)

  elementNote.value = ''
}

function theme() {
  var elementThemeAlt = document.querySelector('#theme')
  if (elementThemeAlt.alt === 'dark') {
    var elementBody = document.querySelector('body')
    elementBody.style.backgroundColor = '#fff'

    var elementImgTheme = document.querySelector('#theme')
    elementImgTheme.src = 'assets/light.png'
    elementImgTheme.alt = 'light'

    var elementInput = document.querySelector('#note')
    elementInput.style.border = '1px solid #252525'
    elementInput.style.color = '#252525'

    var elementH = document.querySelector('#tag-h')
    elementH.style.color = '#252525'
  } else {
    var elementBody = document.querySelector('body')
    elementBody.style.backgroundColor = '#252525'

    var elementImgTheme = document.querySelector('#theme')

    elementImgTheme.src = '/assets/dark.png'
    elementImgTheme.alt = 'dark'

    var elementInput = document.querySelector('#note')
    elementInput.style.border = '1px solid #fff'
    elementInput.style.color = '#fff'

    var elementH = document.querySelector('#tag-h')
    elementH.style.color = '#fff'
  }
}
