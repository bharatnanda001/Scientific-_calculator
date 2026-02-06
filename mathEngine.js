let isDegree = true;

function toRadian(x) {
    return x * Math.PI / 180;
}

function factorial(n) {
    if (n < 0) return NaN;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

function sanitizeExpression(expr) {
    expr = expr.replace(/π/g, "Math.PI");
    expr = expr.replace(/e/g, "Math.E");

    expr = expr.replace(/sin\(/g, "Math.sin(");
    expr = expr.replace(/cos\(/g, "Math.cos(");
    expr = expr.replace(/tan\(/g, "Math.tan(");

    expr = expr.replace(/log\(/g, "Math.log10(");
    expr = expr.replace(/ln\(/g, "Math.log(");
    expr = expr.replace(/√\(/g, "Math.sqrt(");

    expr = expr.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
    expr = expr.replace(/(\d+)!/g, "factorial($1)");
    // Percentage handling
    expr = expr.replace(/(\d+)%/g, "($1/100)");

// Reciprocal
    expr = expr.replace(/1\/(\d+)/g, "(1/$1)");


    if (isDegree) {
        expr = expr.replace(/Math\.sin\(([^)]+)\)/g, "Math.sin(toRadian($1))");
        expr = expr.replace(/Math\.cos\(([^)]+)\)/g, "Math.cos(toRadian($1))");
        expr = expr.replace(/Math\.tan\(([^)]+)\)/g, "Math.tan(toRadian($1))");
    }

    return expr;
}
