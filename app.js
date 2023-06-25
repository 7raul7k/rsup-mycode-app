let add = document.querySelector("button");



add.addEventListener("click",()=>{
    let text = document.querySelector("input");

    let ul  = document.getElementById("invitedList");

    let li = createNewCard(text);

     ul.appendChild(li);

     text.value = '';
    
  
});



let list = document.querySelector("#invitedList");

list.addEventListener("click", function(e) {
  let target = e.target;
  let item = target.parentElement;
  let span = item.querySelector('span');
  let input = span.querySelector('input');

  let newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.classList.add("save");


  span.textContent = "";
  target.textContent = "save";
  span.appendChild(newInput);

 
  if (input ) {
    span.textContent = input.value;
    target.textContent = "edit";
    span.removeChild(newInput);
  }
});








function createNewCard(text){

    let newCard = document.createElement('li');

    let span = document.createElement('span')

     span.textContent = text.value;

    newCard.appendChild(span);

    let label = document.createElement('label');

    label.textContent = "Confirmed";

    let input = document.createElement('input');

    input.type = 'checkbox';

    label.appendChild(input);

    newCard.appendChild(label);

    let editButton = document.createElement('button');

     editButton.textContent = "edit";

    newCard.appendChild(editButton);

    let removeButton = document.createElement('button');

    removeButton.textContent = "remove";

     newCard.appendChild(removeButton);


     return newCard;


}
