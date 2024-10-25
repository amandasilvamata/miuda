<?php
// recover_password.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../connect/db_connection.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';

if (empty($email)) {
    http_response_code(400);
    echo json_encode(['message' => 'Email é obrigatório.']);
    exit();
}

try {
    // Verifica se o e-mail existe no banco de dados
    $stmt = $pdo->prepare("SELECT idDadosAcesso FROM tb_dadosacesso WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo json_encode(['message' => 'Email encontrado.']);
    } else {
        http_response_code(404);
        echo json_encode(['message' => 'Email não encontrado.']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Erro no servidor.']);
}
?>
