<?php
// db_connection.php

require_once 'db_config.php';

try {
    // Cria uma nova instância do PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Configura o modo de erro do PDO para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Exibe um erro se a conexão falhar
    die("Erro de conexão: " . $e->getMessage());
}
?>
