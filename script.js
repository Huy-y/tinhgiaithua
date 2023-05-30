function calculateFactorial() {
    var numberInput = document.getElementById('numberInput');
    var resultTextarea = document.getElementById('result');

    var number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultTextarea.value = 'Vui lòng nhập một số hợp lệ.';
        return;
    }

    if (number < 0) {
        resultTextarea.value = 'Vui lòng nhập một số không âm.';
        return;
    }

    var factorial = calculateLargeFactorial(number);

    resultTextarea.value = 'Giai thừa của ' + number + ' là:\n\n' + factorial;
}

function calculateLargeFactorial(number) {
    var result = "1";

    for (var i = 2; i <= number; i++) {
        result = multiplyStrings(result, i.toString());
    }

    return result;
}

function multiplyStrings(a, b) {
    var maxLength = a.length + b.length;
    var product = Array(maxLength).fill(0);

    for (var i = a.length - 1; i >= 0; i--) {
        for (var j = b.length - 1; j >= 0; j--) {
            var digitA = parseInt(a.charAt(i));
            var digitB = parseInt(b.charAt(j));

            var currentProduct = digitA * digitB + product[i + j + 1];
            product[i + j + 1] = currentProduct % 10;
            product[i + j] += Math.floor(currentProduct / 10);
        }
    }

    while (product[0] === 0) {
        product.shift();
    }

    return product.join("");
}

var calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateFactorial);
