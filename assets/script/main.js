function sliderInit(){
    const box = document.querySelector('.slider-img');
    const img = document.querySelectorAll('.slider-img img');

    let contador = 0;
    
    function slider(contador) {
    
        // Se ultrapassar o número de imagens, volta ao início
        if (contador > img.length - 3 || contador < 0) {
            contador = 0;
        }
    
        // Move a caixa de imagens para a esquerda
        box.style.transition = 'transform 2s ease';
        box.style.transform = `translateX(${-contador * (100 / 3)}%)`;
    }

    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');

    function next(){
        contador++;
        if(contador > 3 || contador < 0){
            contador = 0;
        }
        slider(contador);
    }

    function prev(){
        contador--;
        if(contador > 3 || contador < 0){
            contador = 0;
        }
        slider(contador);
    }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    setInterval(next, 3500);
}
sliderInit();

function dayFooter(){
    let time = new Date;
    let day = time.getDay();

    const dayWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado',];

    let element = document.querySelector('.banner-text h1');
    let estilo = window.getComputedStyle(element);

    function changeDay(){
        let container = document.querySelectorAll('.hour div');
        let containerDay = document.querySelectorAll('#day');

        container.forEach((element, index) => {
            if (index === day) {
                if(index === 0){
                    element.style.color = 'red';
                }else{
                    element.style.color = '#F2FF00';
                }
            }
        });
    }
    changeDay();

    // CHANGE THE FOOTER YEAR
    function copyRight(){
        let year = time.getFullYear();

        let copyYear = document.querySelector('#copyYear');

        function verify(){
            if(year === 2024){
                copyYear.innerHTML = `${year} `;
            }else{
                copyYear.innerHTML = `2024 - ${year} `;
            }
        }
        verify();
    }
    copyRight();
}
dayFooter();