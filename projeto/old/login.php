<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Inclui o arquivo de conexão com o banco de dados
require_once '../connect/db_connection.php';

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

    try {
        // Prepara a consulta para verificar o usuário no banco de dados
        $stmt = $pdo->prepare("SELECT idDadosAcesso, password FROM tb_dadosacesso WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        // Verifica se algum usuário foi encontrado
        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Verifica se a senha está correta
            if (password_verify($password, $user['password'])) {
                // Se a senha estiver correta, retorna sucesso
                echo json_encode(["message" => "Login bem-sucedido", "redirect" => "/minha-conta"]);
            } else {
                // Senha incorreta
                http_response_code(401); // Código HTTP para não autorizado
                echo json_encode(["message" => "Senha incorreta"]);
            }
        } else {
            // Nenhum usuário encontrado com o email informado
            http_response_code(404); // Código HTTP para não encontrado
            echo json_encode(["message" => "Usuário não encontrado"]);
        }
    } catch (PDOException $e) {
        // Retorna erro em caso de falha na consulta
        http_response_code(500); // Código HTTP para erro interno do servidor
        echo json_encode(["message" => "Erro no servidor: " . $e->getMessage()]);
    }
}
?>
