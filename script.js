async function submitForm() {
  if (validateForm()) {
    await generatePDF().then(() => {
      document.getElementById("pdfForm").submit();
    });
  }
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Name validation
  var namePattern = /^[A-Za-z0-9\s]+$/;
  if (!namePattern.test(name)) {
    alert("Invalid name. Please enter an alphanumeric name.");
    return false;
  }

  // Email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email. Please enter a valid email address.");
    return false;
  }

  // Phone number validation
  var phonePattern = /^\+\d{1,3}\s?\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert(
      "Invalid phone number. Please enter a phone number with country code."
    );
    return false;
  }
  return true;
}

function generatePDF() {
  var element = document.getElementById("container");
  html2pdf(element);
}
