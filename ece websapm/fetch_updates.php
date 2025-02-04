<?php
$servername = "localhost"; // Change if necessary
$username = "root"; // Your MySQL username
$password = "30Mar2005%"; // Your MySQL password
$dbname = "ec_department"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT date, title, description FROM updates ORDER BY date DESC";
$result = $conn->query($sql);

$updates = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $updates[] = $row;
    }
}

$conn->close();
header('Content-Type: application/json');
echo json_encode($updates);
?>
