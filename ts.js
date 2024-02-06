/*На странице есть поле для ввода температуры. Если температура меньше 0, 
в выпадающем списке должно быть "мороз", а картинка "зима". Если температура между 0 и +10 - это весна. 
Если между 10 и 20 это осень, Больше - лето*/
window.addEventListener(
    'load',
    () => {
        ses.addEventListener(
            'change',
            (sobytie)=>{
                console.log("получилось",sobytie.target.value);
                s.setAttribute('src','photos/'+ sobytie.target.value +'.png');
            }
        )
    }
);