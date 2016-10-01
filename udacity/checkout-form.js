var fullnameInput = document.querySelector('#fullname');
var emailInput = document.querySelector('#email');
var countryInput = document.querySelector('#country');
var ccNumberInput = document.querySelector('#cc-number');
var ccExpiryDateInput = document.querySelector('#cc-exp');
var ccCvcInput = document.querySelector('#cc-cvc');
var submit = document.querySelector('#submit');
var progressBar = document.querySelector('.progress-bar');

var fields = new Array(6); // Stores the form's progress

var progress = 0;

/*
I'm using this IssueTracker to help me format my validation messages.
 */
function IssueTracker() {
  this.issues = [];
}

IssueTracker.prototype = {
  add: function add(issue) {
    this.issues.push(issue);
  },
  retrieve: function retrieve() {
    var message = "";
    switch (this.issues.length) {
      case 0:
        // do nothing because message is already ""
        break;
      case 1:
        message = "Please correct the following issue:\n" + this.issues[0];
        break;
      default:
        message = "Please correct the following issues:\n" + this.issues.join("\n");
        break;
    }
    return message;
  }
};

submit.onclick = function() {
  var fullname = fullnameInput.value;
  var email = emailInput.value;
  var country = countryInput.value;
  var ccNumber = ccNumberInput.value;
  var ccExpiryDate = ccExpiryDateInput.value;
  var ccCvc = ccCvcInput.value;

  var fullnameIssueTracker = new IssueTracker();
  var ccExpiryDateIssueTracker = new IssueTracker();

  function checkRequirements() {
    if (fullname.length < 6) {
      fullnameIssueTracker.add('fewer than 6 characters');
    }
    else if (fullname.length > 40) {
      fullnameIssueTracker.add('greater than 6 characters');
    }

    var fullnameIllegalGroup = fullname.match(/[^A-z\s]/g);
    if (fullnameIllegalGroup) {
      fullnameIllegalGroup.forEach(function illegalGroup(illegalChar) {
        fullnameIssueTracker.add('includes illegal character: ' + illegalChar);
      });
    }

    var ccExpiryDateMatch = ccExpiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/);
    var year = (new Date).getFullYear().toString().slice(-2);
    if (!ccExpiryDateMatch) {
      ccExpiryDateIssueTracker.add('Invalid Expiry Date');
    }
    else if(ccExpiryDateMatch[2] < year) {
      ccExpiryDateIssueTracker.add('Check your Credit Card Expiry Date');
    }
  }

  if (fullname && email && country && ccNumber && ccExpiryDate && ccCvc) {
    checkRequirements();
  }

  var fullnameIssues = fullnameIssueTracker.retrieve();
  var ccExpiryDateIssues = ccExpiryDateIssueTracker.retrieve();

  fullnameInput.setCustomValidity(fullnameIssues);
  ccExpiryDateInput.setCustomValidity(ccExpiryDateIssues);

  if (fullnameIssues.length === 0) {
    fields[0] = 16.67;
  }
  else {
    fields[0] = 0;
  }

  if (emailInput.checkValidity()) {
    fields[1] = 16.67;
  }
  else {
    fields[1] = 0;
  }

  if (country.match(/[a-zA-Z]{2,}/)) {
    fields[2] = 16.67;
    countryInput.setCustomValidity('');
  }
  else {
    countryInput.setCustomValidity('Enter a Valid Country');
    fields[2] = 0;
  }

  if (ccNumber.match(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/)) {
    fields[3] = 16.67;
    ccNumberInput.setCustomValidity('');
  }
  else {
    fields[3] = 0;
    ccNumberInput.setCustomValidity('Enter a Valid Credit Card Number');
  }

  if (ccExpiryDateIssues.length === 0) {
    fields[4] = 16.67;
  }
  else {
    fields[4] = 0;
  }

  if (ccCvcInput.checkValidity()) {
    fields[5] = 16.67;
  }
  else {
    fields[5] = 0;
  }

  progress = fields.map(Number);
  progressBar.style.width = progress.reduce(function(a, b) {
    return a + b;
  }) + '%';

  if (parseInt(progressBar.style.width) >= 100) {
    alert('Your Order was Successful!');
  }
}

// Regex for ccnum
// https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html
