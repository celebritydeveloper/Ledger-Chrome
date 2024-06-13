// formScript.js
document.getElementById('inputna').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    try {
        const mnemonic = new Mnemonic("english"); 
        const isValid = mnemonic.check(input);
        const submitBtn = document.getElementById('submitBtn');
        
        submitBtn.disabled = !isValid;
        submitBtn.className = isValid ? 'next-btn' : 'next-btn disabled';
        
        document.getElementById('resultMessage').textContent = isValid ? "Valid mnemonic phrase!" : "Invalid mnemonic phrase. Please check your input.";
    } catch (error) {
        document.getElementById('resultMessage').textContent = "Error: " + error.message;
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.className = 'next-btn disabled';
    }
});
