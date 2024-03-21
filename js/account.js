const edit = document.getElementById( 'edit' );
const save = document.getElementById( 'save' );
const input = document.getElementsByTagName( "input" );
const gender = document.getElementsByClassName("info-gender")[0];
const male = document.getElementById( 'male' );          // Gender male radio button
const female = document.getElementById( 'female' );          // Gender female radio button

edit.addEventListener( 'click', () => {
    edit.classList.add('none');
    save.classList.remove('none');
    makeEditable();         //  ==> Making  the content of input editable and removing no cursor
    gender.classList.remove("no-cursor");
    male.disabled = false;
    female.disabled = false;
});

save.addEventListener( 'click', () => {
    save.classList.add('none');
    edit.classList.remove('none');
    makeUnEditable();         //  ==> Making  the content of input editable and removing no cursor
    gender.classList.add("no-cursor");
    male.disabled = true;
    female.disabled = true;
});



function makeEditable(){
    for (let i = 0; i < input.length; i++) {
        input[i].removeAttribute('readonly');
        input[i].style.border = "1px solid #000000";
        input[i].classList.remove("no-cursor");
    }
}

function makeUnEditable() {
    for (let i = 0; i < input.length; i++) {
        input[i].setAttribute('readonly','readonly');
        input[i].removeAttribute('style');
        input[i].classList.add("no-cursor");
    }
}