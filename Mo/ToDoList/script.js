


// function createTask(){
//     let input = document.getElementById('input');
//     let section = document.getElementById('section');
//     let paragraph = document.createElement('p');
//     let span = document.createElement('span');
//     section.appendChild(paragraph);
//     paragraph.appendChild(span);
//     paragraph.innerHTML = input.value;
//     span.innerText='X';
//     span.classList.add('float');
//     input.value='';

// }

//  let input = document.querySelector('input');
//  let btn = document.querySelector('button');
//  let section = document.querySelector('section');
//  let form = document.querySelector('form');


  form.addEventListener('submit',function(event){
    event.preventDefault();
    let input = document.getElementById('input');
    let section = document.getElementById('section');
    let text = input.value;
    let paragraph = document.createElement("p");
    let spanCloseButton = document.createElement("span");
    spanCloseButton.classList.add("float");
    spanCloseButton.innerText = "X";
    paragraph.innerText = text;
    paragraph.appendChild(spanCloseButton);
    section.appendChild(paragraph);
    input.value = "";

    spanCloseButton.addEventListener("click", function (ev) {
      let paragraphToBeRemoved = ev.target.parentElement;
      section.removeChild(paragraphToBeRemoved);
  });


// })




