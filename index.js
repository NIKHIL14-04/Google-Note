const addnewbotton =document.querySelector('#add');

const updateLSData =()=>{
    const textareadat = document.querySelectorAll('textarea');

    const notes =[];
    textareadat.forEach((note)=>{
        return notes.push(note.value);
    });
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote =(text ='')=>{

    const note = document.createElement('div');
    note.classList.add('note');

    //  To add HTMLData in java script 
    const htmldata=`
    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main  ${text ? "":"hidden"}"></div>
<textarea class=" ${text ? "hidden":""}"></textarea> 
</div>`;

//   To add data in note

note.insertAdjacentHTML('afterbegin',htmldata);
// console.log(note);


// getting refrance to action

const addingbutton = note.querySelector('.edit');

const removingbutton = note.querySelector('.delete');

const maindiv = note.querySelector('.main');

const textarea = note.querySelector('textarea');


// deleteing not using note icon

removingbutton.addEventListener('click',()=>{
    note.remove();
});

     // toggle icon using 

addingbutton.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
});

//    saving data on main div using texrarea

textarea.addEventListener('change',(event)=>{
    const value = event.target.value;
    maindiv.innerHTML= value;

    updateLSData();

})

    //  showing note in your display
document.body.appendChild(note);

}

addnewbotton.addEventListener('click',()=> addNewNote());