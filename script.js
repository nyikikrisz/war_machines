
document.getElementById("pollForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const selectedColor = document.querySelector('input[name="color"]:checked');

    if (selectedColor) {
        document.getElementById("result").style.display = 'block';

        
        document.getElementById("resultText").textContent = `You voted for: ${selectedColor.value}`;
        
       
        document.getElementById("pollForm").style.display = 'none';
    } else {
        alert("Please select a color to vote!");
    }
});
