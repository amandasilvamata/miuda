<?php

// check_email.php

require_once '../connect/db_connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; // Permite requisições OPTIONS
}

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

// Verifica se o email existe no banco de dados
$stmt = $pdo->prepare("SELECT idDadosAcesso FROM tb_dadosacesso WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user) {
    echo json_encode([
        "exists" => true,
        "idDadosAcesso" => $user['idDadosAcesso'], // Retorna o ID do usuário
    ]);
} else {
    echo json_encode(["exists" => false]);
}

?>
