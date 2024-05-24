function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function toggleChildren() {
    var children = document.querySelectorAll('.testimonial-item');
    let evenTurn = 1;
    for (let i = 0; i < children.length; i++) {

        if (evenTurn === 1){
            if (i%2 === 1){
                children[i].classList.toggle('show');
                children[i].classList.add('invisible');
            }
            else{
                children[i].classList.toggle('invisible');
                children[i].classList.add('show'); 
            }
            evenTurn = 0;
        }

        else{ //is oddTurn
            if(i%2===0){
                children[i].classList.toggle('show');
                children[i].classList.add('invisible');
            }
            else{
                children[i].classList.toggle('invisible');
                children[i].classList.add('show'); 
            }

            evenTurn = 1;
        }
    }
}