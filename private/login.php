<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Verifica se o método de requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pega os dados enviados do formulário
    $data = json_decode(file_get_contents("php://input"), true); 
    $email = $data['email'] ?? ''; 
    $password = $data['password'] ?? '';

    // Verifica se os campos foram preenchidos
    if (empty($email) || empty($password)) {
        http_response_code(400); // Código HTTP para erro de requisição
        echo json_encode(["message" => "Preencha todos os campos"]);
        exit();
    }

    // Verifica se o email e senha são os esperados
    if ($email === "senactito@gmail.com" && $password === "1234") {
        // Se as credenciais estiverem corretas, retorna sucesso
        echo json_encode(["message" => "Login bem-sucedido", "redirect" => "/minha-conta"]);
    } else {
        // Credenciais incorretas
        http_response_code(401); // Código HTTP para não autorizado
        echo json_encode(["message" => "Email e/ou senha não coincidem"]);
    }
}
?>
