function userNameInput () {
    var firstName = document.getElementById('firstName').value;
    var threeMonthGoal = document.getElementById('threeMonthGoal').value;
    var result = document.getElementById('result');
  
    if (firstName.length < 3) {
         result.textContent = 'Name must contain at least 3 characters';
         //alert('Username must contain at least 3 characters');
     } else {
         result.textContent = firstName +'-'+ threeMonthGoal+'.html';
         //alert(nameField);
     }
  }
  
  submitButton.addEventListener('click', userNameInput, false);
  