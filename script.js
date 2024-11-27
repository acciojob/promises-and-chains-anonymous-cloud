document.getElementById("ageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Retrieve inputs
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;

    // Validation: Check for empty fields
    if (!name || !age) {
        alert("Name and age cannot be empty.");
        return;
    }

    // Convert age to a number
    const ageNumber = parseInt(age);

    // Validate age input
    if (isNaN(ageNumber)) {
        alert("Age must be a valid number.");
        return;
    }

    // Create a promise for age validation
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNumber > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handle the promise
    promise
        .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));
});
