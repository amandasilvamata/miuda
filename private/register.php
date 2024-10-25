<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Inclui o arquivo de conexão com o banco de dados
require_once '../connect/db_connection.php';

// Verifica se o método de requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pega os dados enviados do formulário
    $data = json_decode(file_get_contents("php://input"), true); // Captura o JSON enviado
    $email = $data['email'] ?? ''; // Captura o email
    $password = $data['password'] ?? ''; // Captura a senha
    $confirmPassword = $data['confirmPassword'] ?? ''; // Captura a confirmação da senha

    // Valida se as senhas são iguais
    if ($password !== $confirmPassword) {
        die("As senhas não correspondem.");
    }

    // Criptografa a senha antes de armazenar no banco
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepara e executa a inserção dos dados no banco de dados
    try {
        $stmt = $pdo->prepare("INSERT INTO tb_dadosacesso (email, password) VALUES (:email, :password)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->execute();
        echo "Cadastro realizado com sucesso!";
    } catch (PDOException $e) {
        die("Erro ao cadastrar: " . $e->getMessage());
    }
} 
?>
