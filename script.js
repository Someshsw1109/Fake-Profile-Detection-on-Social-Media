document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    let isFake = detectFakeProfile(name, email, age);
    
    const resultElement = document.getElementById('result');
    if (isFake) {
        resultElement.innerText = 'This profile is likely fake!';
    } else {
        resultElement.innerText = 'This profile seems legitimate.';
    }
});
function detectFakeProfile(name, email, age) {
    if (name.includes('fake') || email.includes('fake') || age < 10) {
        return true;
    } 
    return false;
}