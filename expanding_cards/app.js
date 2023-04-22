const panels = document.querySelectorAll('.panels')

panels.forEach(panel => {

    panel.addEventListener('click', (e)=>{
        console.log(e.target)

        panels.forEach(panel => {
        panel.classList.remove('active')
        console.log(panel)

        e.target.classList.add('active')

    })
    })
    
})

