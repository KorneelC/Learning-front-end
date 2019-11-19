let button = document.getElementById('shopbtn')
console.log(button);
button.addEventListener('click', Clicky);
//spinner
let spinner = document.createElement('i')
//booleanValue random
let booleanValue = false
//field where you type your grocery
let input = document.getElementById('inpt');
console.log(input);
//table with grocery
let table = document.getElementById('table')
console.log(table);
// gets the childs of the table
let nodes = document.getElementById('table').childNodes
console.log(nodes);


function Clicky() {
    button.insertBefore(spinner, button.childNodes[0]);
    removeClicky();


    if (input.value == "") {
        alert('Error fill in the field')
    }
    else if (input.value != "") {
        
       
        let tr = document.createElement('tr');
        tr.classList.add('grocery')
        table.append(tr);
        

        let td = document.createElement('td');
        tr.append(td)
        td.append(input.value);
        
        let cross = document.createElement('i');
        cross.classList.add('fa')
        cross.classList.add('fa-close')
        tr.append(cross);


        let CrossGet = document.querySelectorAll('.fa-close');
        for (let i = 0; i < CrossGet.length; i++) {
            CrossGet[i].addEventListener('click',RemoveGrocery);
            
        }
        let edit = document.createElement('button');
        edit.innerText = "Edit"
        edit.classList = "Edit"
        tr.append(edit);

        EditEve = document.querySelectorAll('.Edit');
        for (let i = 0; i < EditEve.length; i++) {
            EditEve[i].addEventListener('click', transform);

        }
        

        function transform () {
            let input = document.createElement('input');
            input.value = td.innerText
            tr.innerText = "";
            tr.append(input,cross,edit)
        }

        


        input.value ='';
        button.innerText = 'Add to shopping list('+nodes.length +')'

    }
    setTimeout(removeClicky, 500);
}


let tr = document.querySelectorAll('.grocery');


function RemoveGrocery() {
    
    let i = tr.rowIndex;
    document.getElementById("table").deleteRow(i);
    button.innerText = 'Add to shopping list(' + nodes.length + ')'
}



function removeClicky() {
    spinner.classList.toggle('fa')
    spinner.classList.toggle('fa-spin')
    spinner.classList.toggle('fa-spinner')
}


let saveBtn = document.getElementById('savebtn');
saveBtn.addEventListener('click',save)



function save() {
    
    let x = document.querySelectorAll('.grocery');
    for (let i = 0; i < x.length; i++) {
        localStorage.setItem('Grocery', x[i].innerText);
        console.log(localStorage);
    }
}

