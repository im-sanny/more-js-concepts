function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')
    try {
        const age = parseInt(ageText);

        if (isNaN(age)) {
            throw "Please enter a number";
        }else if (age < 18) {
            throw "Kids are not allowed"
        }else if (age > 30) {
            throw 'bommers not allowed'
        }
        errorTag.innerHTML = '';
    } catch (error) {
        console.log('ERROR:', error)
        errorTag.innerHTML = 'ERROR', + error;
    }
    finally{
        console.log('all done inside try catch')
    }
    console.log(1111111)
}