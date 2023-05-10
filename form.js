const insert = () => {

   let type = document.querySelector('#type').value 
   let label = document.querySelector('#label').value 

   switch(type){
       case 'text': appendText(label)
           break
       case 'button': appendButton(label)
           break
   }

}

const appendText = (label = "Default") => {

   let elem = document.createElement('input')

   elem.setAttribute('placeholder', label)
   elem.setAttribute('class', 'form-control mt-2')

   document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {

   let elem = document.createElement('button')

   elem.setAttribute('class', 'btn btn-primary form-control mt-2')
   elem.textContent = label

   document.querySelector('#display').append(elem)

}