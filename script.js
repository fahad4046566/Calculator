let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", function(e) {
        let buttonValue = e.target.innerHTML;
        
        // PEHLE special functions check karo
        if(buttonValue == "AC"){
            string = "";
            input.value = "0";
            return;
        }
        else if(buttonValue == "DEL"){
            string = string.substring(0, string.length - 1);
            input.value = string || "0";
            return;
        }
        else if(buttonValue == "%") {
            if(string !== "") {
                string = (eval(string) / 100).toString();
                input.value = string;
            }
            return;
        }
        
        // PHIR operator conversion karo
        if(buttonValue == "×") buttonValue = "*";
        if(buttonValue == "÷") buttonValue = "/"; 
        if(buttonValue == "−") buttonValue = "-";
        
        // Last mein = aur other buttons handle karo
        if(buttonValue == "=") {
            try {
                string = eval(string);  
                input.value = string;   
            } catch(error) {
                input.value = "Error";
                string = "";
            }
        } 
        else {
            //  LEADING ZERO FIX 
            if(string === "" || string === "0") {
                // Agar string empty hai ya sirf "0" hai
                if(buttonValue === ".") {
                    // Decimal point hai to "0." ban jayega
                    string = "0.";
                } else if(!isNaN(buttonValue)) {
                    // Number hai to replace kar do
                    string = buttonValue;
                } else {
                    // Operator hai to "0" ke saath add kar do
                    string += buttonValue;
                }
            } else {
                // Normal case - directly add kar do
                string += buttonValue;
            }
            
            input.value = string;
        }
    });
}); 
