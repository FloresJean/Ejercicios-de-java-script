class tarea{
    //1) Sumar dos numeros siempre cuando el primero sea mayor al segundo
    ejer1(){
        console.warn(`1) Sumar dos numeros siempre cuando el primero sea mayor al segundo`)
        let num1=5, num2=3, suma=0
        if(num1>num2){
            suma=num1+num2
            console.log(`${num1} + ${num2} = ${suma} `)
        }else{
            console.log(`el primero no es mayor al segundo`)
        }
    }

    //2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
    ejer2(){
        console.warn(`2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo`)
        let num1=4, num2=2,suma=0,resta=0,mult=1,divi=1,reciduo=1
        suma=num1+num2
        resta=num1-num2
        mult=num1*num2
        divi=num1/num2
        reciduo=num1%num2
        console.log(`${num1} y ${num2}:  suma=${suma}, resta=${resta}, multiplicacion=${mult}, divicion=${divi}, reciduo=${reciduo},`)
    }

    //3) Presentar el mayor de dos numeros
    ejer3(){
        console.warn(`3) Presentar el mayor de dos numeros`)
        let num1=100, num2=50
        if(num1<num2){
            console.log(`El numero mayor es ${num2}`)
        }else{
            console.log(`El numero mayor es ${num1}`)
        }
    }

    //4) Dado un nombre presentarlo
    ejer4(){
        console.warn(`4) Dado un nombre presentarlo`)
        let nombre=["jean"]
        console.log(`${nombre}`)
    }

    //5) Dado un valor de compra presentar el total considerando un 12% de iva
    ejer5(){
        console.warn(`5) Dado un valor de compra presentar el total considerando un 12% de iva`)
        let num1=30, iva=0.12, valoriva=0, total=0
        valoriva=num1*iva
        total=num1+valoriva
        console.log(`total considerando el iva= $${total}`)
    }
    
    //6) Presentar 5 veces un nombre
    ejer6(){
        console.warn(`6) Presentar 5 veces un nombre`)
        let nombre=["jean"], c=0
        for(c=1;c<6;c++){
            console.log(`${c}  ${nombre}`)
        }
    }

    //7) Presentar los numeros multiplos de 3 del 3 al 21
    ejer7(){
        console.warn(`7) Presentar los numeros multiplos de 3 del 3 al 21`)
        let c=0
        for(c=3;c<=21;c++){
            if(c%3 == 0){
                console.log(`#multiplo de 3: ${c}`)
            }
        }
    }

    //8) Presentar los numeros multiplos de 3 del 21 al 3
    ejer8(){
        console.warn(`8) Presentar los numeros multiplos de 3 del 21 al 3`)
        let c=0
        for(c=21;c>=3;c--){
            if(c%3==0){
                console.log(`#multiplo de 3: ${c}`)
            }
        }
    }

    //9) Dados dos nombres indicar si son iguales o diferentes
    ejer9(){
        console.warn(`9) Dados dos nombres indicar si son iguales o diferentes`)
        let nombre1="Jean",nombre2="Jean"
        if(nombre1==nombre2){
            console.log(`son iguales`)
        }else{
            console.log(`no son iguales`)
        }
    }

    //10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
    ejer10(){
        console.warn(`10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres`)
        let arreglo=["10","20","500","10000","50","102030","120"],c=0 , l=0
        let longitud=arreglo.length
        while(c<longitud){
            l=arreglo[c].length
            if(l<5){
                console.log(`arreglo[${c}] ${arreglo[c]}`)
            }
            c=c+1
        }
    }

    //11) Dado un arreglo presentar sus elementos
    ejer11(){
        console.warn(`11) Dado un arreglo presentar sus elementos`)
        let arreglo=[1,2,3,4,5], c=0
        let log=arreglo.length
        while(c<log){
            console.log(`arreglo[${c}]= ${arreglo[c]}`)
            c=c+1
        }    
        
    }

    //12) Dado un arreglo de numeros presentar los menores a 10
    ejer12(){
        console.warn(`12) Dado un arreglo de numeros presentar los menores a 10`)
    let arreglo=[10,2,30,60,1,3],c=0,log=arreglo.length
     while(c<log){
        if(arreglo[c]<10){
            console.log(`arreglo[${c}]=${arreglo[c]}`)
        }
        c=c+1
     }
    }
    
    //13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
    ejer13(){
        console.warn(`13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares`)
        let arreglo=[1,3,5,2,4,6],c=0,log=arreglo.length,par=0
        for(c=0;c<log;c++){
            if(arreglo[c]%2!=0){
                console.log(`impares= ${arreglo[c]}`)
            }else{
                par=par+arreglo[c]
            }
        }
        console.log(`suma de pares=${par}`)
    }

    //14) Presentar el primero el medio y el ultimo valor de un arreglo
    ejer14(){
        console.warn(`14) Presentar el primero el medio y el ultimo valor de un arreglo`)
        let arreglo=[1,2,3,4,5],c=0,log=arreglo.length
        while(c<log){
            if(c==log/log-1){
                console.log(`primero: ${arreglo[c]}`)
            }else{
                if(c==Math.floor(log/2)){
                    console.log(`medio: ${arreglo[c]}`)
                }else{
                    if(c==log-1){
                        console.log(`ultimo: ${arreglo[c]}`)
                    }
                }
            }
            c=c+1
        }
        
    }

    //15) Calcular el vuelto de un a compra dado el costo y el pago
    ejer15(){
        console.warn(`15) Calcular el vuelto de un a compra dado el costo y el pago`)
        let costo=15.50 , pago=20.00 , vuelto=0
        vuelto=pago-costo
        console.log(`pague $${pago} y costaba $${costo} entonces el vueto es: $${vuelto}`)

    }
}

let deber = new tarea
deber.ejer1() 
deber.ejer2() 
deber.ejer3() 
deber.ejer4() 
deber.ejer5() 
deber.ejer6() 
deber.ejer7() 
deber.ejer8() 
deber.ejer9() 
deber.ejer10() 
deber.ejer11() 
deber.ejer12() 
deber.ejer13() 
deber.ejer14() 
deber.ejer15() 


class ciclo{
    //16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
    ejer16(){
        console.warn(`16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12`)
        let tabla=0, mult=5, r=0
        for(tabla=1;tabla<=12;tabla++){
        r=mult*tabla
        console.log(`${mult}x${tabla}=${r}`)
        }
    }

    //17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
    ejer17(){
        console.warn(`17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas`)
        let num=5, mult=3, c=0, r=0
        for(c=1;c<=mult;c++){
            r=r+num
        }
        console.log(`${num}x${mult}=${r}`)
    }

    //18) Realizar la division de dos numeros por medio de restas sucesivas
    ejer18(){
        console.warn(`18) Realizar la division de dos numeros por medio de restas sucesivas`)
        let num1=6,num2=3,c=0,r=num1
        if(num1>=num2){
            while(num1>=num2){
                num1=num1-num2
                c=c+1
            }
        }else{
            console,log(`poner los numerso de mayor a menor`)
        }
        console.log(`${r}/${num2}=${c}`)
    }

    //19)Calcular el factorial de un numero
    ejer19(){
        console.warn(`19)Calcular el factorial de un numero`)
        let num1=4,c=num1,r=1
        while(num1>0){
            r=(num1)*r
            num1=num1-1
        }
        console.log(`el factorial de ${c} es: ${r}`)
    }

    //20)Calcular el exponente de un numero
    ejer20(){
        console.warn(`20)Calcular el exponente de un numero`)
        let num1=4, exp=3,resl=1,c=0
        for(c=1;c<=exp;c++){
            resl=resl*num1
        }
        console.log(`${num1}^${exp}=${resl}`)
    }

    //21)Calcular la serie de fibonacci dado un numero
    ejer21(){
        console.warn(`21)Calcular la serie de fibonacci dado un numero`)
        let a=0, b=1, c=1, cont=3,n=8
        console.log(a,b,c)
        while(cont<n){
            a=b; b=c; c=a+b
            console.log(c)
            cont=cont+1
        }
    }

    //22)Dado un numero invertirlo
    ejer22(){
        console.warn(`22)Dado un numero invertirlo`)
        let num=23, resd=0 
        while(num>0){
            resd=num%10
            num=Math.floor(num/10)
            console.log(`${resd}`)
        }

    }

    //23)Presentar los divisores de un numero
    ejer23(){
        console.warn(`23)Presentar los divisores de un numero`)
        let num=8, acu=num-1
        while(acu>=1){
            if(num%acu==0){
                console.log(`el numero ${num} es divisible para ${acu}`)
            }
            acu=acu-1
        }
    }

    //24)Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
    //divisores incluidos el 1 y excluido el propio numero dada igual al numero)
    ejer24(){
        console.warn(`24)Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
            divisores incluidos el 1 y excluido el propio numero dada igual al numero)`)
        let num=496, acu=num-1,c=0
        while(acu>=1){
            if(num%acu==0){
                c=c+acu
            }
            acu=acu-1
        }
        if(num==c){
           console.log(` el numero si es perfecto ${num}=${c}`)
        }else{
            console.log(` el numero no es perfecto ${num}≠${c}`)
        }
    }

    //25)Verfificar si un numero es primo o no(Primo cuando solo es divsivible 
    //para 1 y el propio numero, es decir no tenga divisores)
    ejer25(){
        console.warn(`25)Verfificar si un numero es primo o no(Primo cuando solo es divsivible 
            para 1 y el propio numero, es decir no tenga divisores)`)
        let num=5, acu=0,c=0
        for(c=1;c<=num;c++){
            if(num%c==0){
                acu=acu+1
            }
        }
        if(acu==2){
            console.log(`${num} si es un numero primo`)
        }else{
            console.log(`${num} no es un numero primo`)
        }
        
    }
}

let ciclopre = new ciclo
ciclopre.ejer16()
ciclopre.ejer17()
ciclopre.ejer18()
ciclopre.ejer19()
ciclopre.ejer20()
ciclopre.ejer21()
ciclopre.ejer22()
ciclopre.ejer23()
ciclopre.ejer24()
ciclopre.ejer25()