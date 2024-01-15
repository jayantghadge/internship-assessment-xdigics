<?php
$servername = "localhost";
$username = "root";
$password = "root123";
$dbname = "xdigics";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
    $text_field = isset($_POST["textField"]) ? mysqli_real_escape_string($conn, $_POST["textField"]) : '';

    // SQL query to insert data into the database
    $sql = "INSERT INTO users (name, email, phone, text_field) VALUES ('$name', '$email', '$phone', '$text_field')";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
