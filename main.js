const button = document.getElementById('button');

button.onclick = function(event){
    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;

    let ripple = document.createElement('span');
    ripple.classList = 'ripple'
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    

    this.appendChild(ripple);
    console.log(ripple)
    setTimeout(() => {
        ripple.remove()
    }, 1000);
}