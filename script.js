async function submitForm() {
  if (validateForm()) {
    try {
      const formData = new FormData(document.getElementById("pdfForm"));
      const response = await fetch("database.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await generatePDF();
      } else {
        console.error("Error in database operation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

function generatePDF() {
  return new Promise((resolve, reject) => {
    try {
      var element = document.getElementById("container");
      html2pdf(element, function (pdf) {
        resolve();
      });
      alert("User Added to Database Successfully");
    } catch (error) {
      reject(error);
    }
  });
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

async function runJsFile() {
  console.log("JS file executed");
}
