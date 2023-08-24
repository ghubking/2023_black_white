const sub = document.querySelectorAll('.sub')
    const gnb_title = document.querySelectorAll('.gnb_title')
    const header = document.querySelector('header')
    const headerHeight = header.getBoundingClientRect().height;
    console.log(sub, gnb_title, header)
    for(let i of sub){
        i.style.display = 'none'}
        for(let i of gnb_title){
            i.addEventListener('mouseover',function(){
                i.lastElementChild.style.display = 'flex'
                console.log(header)
                header.style.backgroundColor = '#000'
            })
            i.addEventListener('mouseout',function(){
                i.lastElementChild.style.display = 'none'
                header.style.background = 'none'
            })
            window.addEventListener("scroll", () => {
                if (window.scrollY > headerHeight) {
                header.setAttribute("style", "background: #000;");
            } else {
                
            header.setAttribute("style", "background: transparent;");
            }
        });
        }
    gsap.to('.bnr1 .bnr_txt',{
        scrollTrigger:'.bnr1',
        duration:2,
        y:-100, opacity:1
    })
    gsap.to('.bnr2 .bnr_txt',{
        scrollTrigger:'.bnr2',
        duration:2,
        y:-100, opacity:1
    })
    gsap.to('.bnr3 .bnr_txt',{
        scrollTrigger:'.bnr3',
        duration:2,
        y:-100, opacity:1
    })
    gsap.to('.bnr4 .bnr_txt',{
        scrollTrigger:'.bnr4',
        duration:2,
        y:-100, opacity:1
    })
    gsap.to('.bnr5 .bnr_txt',{
        scrollTrigger:'.bnr5',
        duration:2,
        y:-100, opacity:1
    })
    