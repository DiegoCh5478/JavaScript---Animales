(function(){
    const slider = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;
    arrowNext.addEventListener('click', ()=> ChangePosition(1));
    arrowBefore.addEventListener('click', ()=> ChangePosition(-1));

    function ChangePosition(change){
        const currentElemente = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElemente;
        value += change;
        if(value == 0 || value == slider.length+1){
            value = value === 0 ? slider.length : 1;
        }
        slider[currentElemente-1].classList.toggle('slider__body--show');
        slider[value-1].classList.toggle('slider__body--show');

    }
})()