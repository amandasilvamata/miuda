<?php

// reset_password.php

require_once '../connect/db_connection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; // Permite requisições OPTIONS
}

// Certifique-se de que os dados do POST estão definidos
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['password']) && isset($data['user_id'])) {
    $password = password_hash($data['password'], PASSWORD_DEFAULT); // Gera o hash da nova senha
    $userId = $data['user_id'];

    // Atualiza a senha do usuário diretamente
    $updateStmt = $pdo->prepare("UPDATE tb_dadosacesso SET password = ? WHERE idDadosAcesso = ?"); // Use o nome correto da coluna
    if ($updateStmt->execute([$password, $userId])) {
        echo json_encode(["message" => "Senha redefinida com sucesso!"]);
    } else {
        echo json_encode(["message" => "Erro ao atualizar a senha."]);
        var_dump($updateStmt->errorInfo()); // Exibe detalhes do erro
    }
} else {
    echo json_encode(["message" => "Dados inválidos."]);
}

?>
