let massage = prompt("Не желаешь протестировать мой канькулятор?(да или нет)")
if (massage == "да" || massage == "ДА" || massage == "Да" || massage == "дА" ){
   let vibor = prompt("Отлично! НЕ желаешь узнать описание пользования?(да или нет)")
   if (vibor == "да" || vibor == "ДА" || vibor == "Да" || vibor == "дА" ){
       alert("Писать число и  в чистов виде. 0-остановить")
       while(znak != "0"){
        let znachok = prompt("Выбрете знак: +-плюс -минус *умножение /диление (0-остановить)")
        if (znachok == "+"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a + b)
        }
        if(znachok == "-"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a - b)
        }
        if(znachok == "*"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a * b)
        }
        if(znachok == "/"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a / b)
        }
        if(znachok == "0"){
            break
        }
    }
   }
   else{
    alert("Начть!")
    let znak = prompt("Нажмите 0 если хотите прекратить. Если нето то нажмите Enter")
    while(znak != "0"){
        let znachok = prompt("Выбрете знак: +-плюс -минус *умножение /диление (0-остановить)")
        if (znachok == "+"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a + b)
        }
        if(znachok == "-"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a - b)
        }
        if(znachok == "*"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a * b)
        }
        if(znachok == "/"){
            let a = Number(prompt("Введите число"))
            let b = Number(prompt("Введи ешё раз"))
            alert (a / b)
        }
        if(znachok == "0"){
            break
        }
    }
    
}  
}