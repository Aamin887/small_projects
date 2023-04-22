const allKeys = document.querySelectorAll('.key')
const display = document.querySelector('.screen')

allKeys.forEach(key => {
    key.addEventListener('click', (e)=>{

        let inputValue = e.target.dataset.num

        if(inputValue == '='){
            let expression = display.value.split('')
            
            let operator = expression.filter(val => {
                if(isNaN(val)){
                    return val;
                }
            })
            
            if(operator == '÷') {
                let inputValue = display.value.split('÷')
                let firstValue = inputValue[0]
                let secondValue = inputValue[1]

                console.log(secondValue, firstValue)


                display.value = eval(firstValue / secondValue)

            }

            // console.log(expression)
            display.value = eval(display.value)
            return
        }

        if(inputValue == 'del'){
            let values =display.value
            display.value = values.slice(0, -1)
            return
        }

        
        if(display.value == 0 ){
            display.value  = ''
            display.value +=inputValue 
        }else {
            display.value += inputValue
        }
    })
})
