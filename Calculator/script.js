const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btn = e.currentTarget; // ensures the button itself is used, even if image is clicked
        let value = btn.dataset.value || btn.innerText.trim(); // use data-value if exists

        // Delete button
        if(value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
            return;
        }

        // Equal button
        if(value === "=") {
            try {
                // Replace symbols with JS operators
                let tempExpr = expression.replace(/÷/g, "/").replace(/×/g, "*");
                expression = eval(tempExpr);
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
            return;
        }

        // Clear button
        if(value === "C") {
            expression = "";
            input.value = "";
            return;
        }

        // Normal numbers/operators
        expression += value;
        input.value = expression;
    });
});



