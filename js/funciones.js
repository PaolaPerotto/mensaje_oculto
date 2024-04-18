function funcion() {
    let contenido = document.getElementById("inputtext").value;
    alert(reverseParentheses(contenido));
}

function reverseParentheses(s) {
    while (s.includes('(')) {
        let start = s.lastIndexOf('(');
        let end = s.indexOf(')', start);
        let subStr = s.substring(start + 1, end).split('').reverse().join('');
        s = s.substring(0, start) + subStr + s.substring(end + 1);
    }
    return s;
}
