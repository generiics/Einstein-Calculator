// Wait for DOM to be ready before attaching any functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded successfully");
});

function appendValue(val) {
    const display = document.getElementById("display");
    display.value += val;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
    document.getElementById("message").innerHTML = "Ready...";
    document.getElementById("result").innerHTML = "";
}

function calculate() {
    const display = document.getElementById("display");
    
    let messages = [
        "Initializing AI core...",
        "Connecting to NASA servers...",
        "Contacting aliens...",
        "Decrypting Area 51 files...",
        "Mining Bitcoin...",
        "Training GPT-10...",
        "Calculating..."
    ];

    let i = 0;

    let interval = setInterval(function(){
        document.getElementById("message").innerHTML = messages[i];
        i++;

        if(i === messages.length){
            clearInterval(interval);
            document.getElementById("message").innerHTML = "";

            let answer;

            try{
                answer = eval(display.value);

                let extra = "";

                if(answer == 69)
                    extra = " 😏 Nice";
                else if(answer == 404)
                    extra = " 🤯 Brain not found";
                else if(answer == 420)
                    extra = " 🚔 FBI has been notified";

                document.getElementById("result").innerHTML = answer 
        
            }
            catch(e){
                document.getElementById("result").innerHTML =
                "⚠ Universe.exe stopped working ☠";
            }
        }
    },500);
}