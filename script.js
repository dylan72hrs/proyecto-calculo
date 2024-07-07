var num1 = 0;
var num2 = 0;
var opera;

function darNumero(numero) {
    if (num1 == 0 && num1 !== '0.') {
        num1 = numero;
    } else {
        num1 += numero;
    }
    refrescar();
}

function darComa() {
    if (num1 == 0) {
        num1 = '0.';
    } else if (num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

function darC() {
    num1 = 0;
    num2 = 0;
    refrescar();
}

function operar(valor) {
    if (num1 == 0) {
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    opera = valor;
}

function esIgual() {
    num1 = parseFloat(num1);
    switch (opera) {
        case 1:
            num1 += num2;
            break;
        case 2:
            num1 = num2 - num1;
            break;
        case 3:
            num1 *= num2;
            break;
        case 4:
            if (num1 != 0) {
                num1 = num2 / num1;
            } else {
                num1 = "ZeroDivisionErr ";
            }
            break;
        case 5:
            if (num2 == 0 && num1 == 0) {
                num1 = "Math ERROR";
            } else {
                num1 = Math.pow(num2, num1);
            }
            break;
        case 6:
            if (num2 > 0 && num1 >= 0) {
                num1 = Math.pow(num1, (1 / num2));
            } else {
                num1 = "Math ERROR";
            }
            break;
        case 7:
            num1 = Math.sin(num1 * Math.PI / 180);
            break;
        case 8:
            num1 = Math.cos(num1 * Math.PI / 180);
            break;
        case 9:
            num1 = Math.tan(num1 * Math.PI / 180);
            break;
        case 10:
            num1 = Math.log10(num1);
            break;
        case 11:
            num1 = ":)";
            break;
        case 12:
            num1 = 1 / num1;
            break;
        case 13:
            num1 = factorial(num1);
            break;
        case 14:
            num1 = Math.log(num1);
            break;
    }
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }
}

function refrescar() {
    document.getElementById("valor_numero").value = num1;
}
