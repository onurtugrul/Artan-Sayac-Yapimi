const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounters = () => {
        const target = Number(counter.getAttribute("data-target"))

        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounters, 1)
        }else{
            counter.innerText = target

        }
        
    }
    updateCounters();
});