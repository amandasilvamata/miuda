<?php
// Configurações do banco de dados
$host = 'localhost'; // Endereço do servidor MySQL
$dbname = 'db_miuda'; // Nome do banco de dados
$username = 'root'; // Nome de usuário do MySQL (padrão do XAMPP)
$password = ''; // Senha do MySQL (geralmente vazia no XAMPP)

// Conexão com o banco de dados usando PDO
try {
    // Cria uma nova instância do PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Configura o modo de erro do PDO para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Exibe um erro se a conexão falhar
    die("Erro de conexão: " . $e->getMessage());
}

// Verifica se os dados foram enviados via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pega os dados enviados do formulário
    $email = $_POST['email'] ?? ''; // Captura o email
    $password = $_POST['password'] ?? ''; // Captura a senha
    $confirmPassword = $_POST['confirm_password'] ?? ''; // Captura a confirmação da senha

    // Verifica se os campos estão preenchidos
    if (!empty($email) && !empty($password) && !empty($confirmPassword)) {
        // Verifica se a senha e a confirmação da senha coincidem
        if ($password !== $confirmPassword) {
            echo json_encode(['status' => 'error', 'message' => 'As senhas não coincidem.']);
            exit; // Sai do script
        }

        // Verifica se o e-mail já está cadastrado
        $stmt = $pdo->prepare("SELECT * FROM tb_dadosacesso WHERE email = ?");
        $stmt->execute([$email]); // Executa a consulta

        // Se o e-mail já estiver cadastrado
        if ($stmt->rowCount() > 0) {
            echo json_encode(['status' => 'error', 'message' => 'Email já cadastrado.']);
            exit; // Sai do script
        }

        // Criptografa a senha antes de armazenar
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insere o usuário no banco de dados
        $stmt = $pdo->prepare("INSERT INTO tb_dadosacesso (email, password) VALUES (?, ?)");
        if ($stmt->execute([$email, $hashedPassword])) {
            echo json_encode(['status' => 'success', 'message' => 'Cadastro realizado com sucesso.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Erro ao cadastrar.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Preencha todos os campos.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método inválido.']);
}
?>













<?php
/*
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Configurações do banco de dados
$host = 'localhost'; // Endereço do servidor MySQL
$dbname = 'db_miuda'; // Nome do banco de dados
$username = 'root'; // Nome de usuário do MySQL (padrão do XAMPP)
$password = ''; // Senha do MySQL (geralmente vazia no XAMPP)

// Conexão com o banco de dados usando PDO
try {
    // Cria uma nova instância do PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Configura o modo de erro do PDO para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Exibe um erro se a conexão falhar
    die("Erro de conexão: " . $e->getMessage());
}

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
    */
?>

