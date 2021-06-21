var ancora = document.querySelectorAll('.ancor');

ancora.forEach (item => {
    item.addEventListener('click', scrollClick);
})

function scrollClick(event) {
    const element = event.target;
    const classe = element.getAttributte('img.btn-ancor');    
    console.log(event);
}