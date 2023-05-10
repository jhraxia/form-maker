const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'textfield': appendTextField(label)
            break
        case 'radio': appendRadioButton(label);
            break;
    }

}

const appendText = (label = "Default") => {

    let elem = document.createElement('div')
    let input = document.createElement('input')
    let removeBtn = document.createElement('button')

    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control mt-2')
    removeBtn.setAttribute('class', 'btn btn-outline-danger remove-btn ms-2 mt-2 mb-2')
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', () => {
        removeElement(elem)
    })

    elem.appendChild(input)
    elem.appendChild(removeBtn)

    document.querySelector('#display').append(elem)

    addRemoveButtonContainer()
}

const appendButton = (label = "Default") => {

    let elem = document.createElement('div')
    let button = document.createElement('button')
    let removeBtn = document.createElement('button')

    button.setAttribute('class', 'btn btn-info form-control mt-2')
    button.textContent = label
    removeBtn.setAttribute('class', 'btn btn-outline-danger remove-btn ms-2 mt-2 mb-2')
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', () => {
        removeElement(elem)
    })

    elem.appendChild(button)
    elem.appendChild(removeBtn)

    document.querySelector('#display').append(elem)

    addRemoveButtonContainer()
}

const appendTextField = (label = "Default") => {

    let elem = document.createElement('div')
    let input = document.createElement('input')
    let removeBtn = document.createElement('button')

    input.setAttribute('textfield', label)
    input.setAttribute('class', 'form-control mt-2')
    removeBtn.setAttribute('class', 'btn btn-outline-danger remove-btn ms-2 mt-2 mb-2')
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', () => {
        removeElement(elem)
    })

    elem.appendChild(input)
    elem.appendChild(removeBtn)

    document.querySelector('#display').append(elem)

    addRemoveButtonContainer()
}

const appendRadioButton = (label = "Default") => {
    let elem = document.createElement('div');
    let radio = document.createElement('input');
    let radioLabel = document.createElement('label');
    let removeBtn = document.createElement('button');

    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'radio-group');
    radioLabel.textContent = label;
    removeBtn.setAttribute('class', 'btn btn-outline-danger remove-btn ms-2 mt-2 mb-2');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        removeElement(elem);
    });

    elem.appendChild(radio);
    elem.appendChild(radioLabel);
    elem.appendChild(removeBtn);

    document.querySelector('#display').append(elem);

    addRemoveButtonContainer();
};

const removeElement = (element) => {
    element.remove()
    let removeButtons = document.querySelectorAll('.remove-btn')
    
    if (removeButtons.length === 0) {
        let removeButtonContainer = document.querySelector('#remove-buttons-container')
        removeButtonContainer.innerHTML = ''
    }
}
const addRemoveButtonContainer = () => {
    let removeButtonContainer = document.querySelector('#remove-buttons-container')

    if (!removeButtonContainer) {
        removeButtonContainer = document.createElement('div')
        removeButtonContainer.setAttribute('id', 'remove-buttons-container')
        removeButtonContainer.setAttribute('class', 'd-flex justify-content-end') // Add this line
        document.querySelector('.card.mt-2').appendChild(removeButtonContainer)
    }
    let removeButtons = document.querySelectorAll('.remove-btn')
    if (removeButtons.length === 0) {
        removeButtonContainer.innerHTML = ''
    } else {
        let removeAllBtn = document.createElement('button')
        removeAllBtn.setAttribute('class', 'btn btn-danger')
        removeAllBtn.setAttribute('style', 'margin-left: auto;') // Add this line
        removeAllBtn.textContent = 'Remove All'
        removeAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.remove-btn').forEach(btn => btn.click())
        })
        removeButtonContainer.innerHTML = ''
        removeButtonContainer.appendChild(removeAllBtn)
    }
}
