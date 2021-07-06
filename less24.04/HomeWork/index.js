var modal = document.getElementById('myModal');
var btn = document.getElementById('btn_modal_window');
var close = document.getElementById('closeModalWindow');

btn.onclick = function() {
    modal.style.display = 'block';
}

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}