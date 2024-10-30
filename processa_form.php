<?php
// Configurações do e-mail (substitua pelos seus dados)
$to = 'rosana@gmail.com';
$subject = 'Novo contato do site';

// Recebe os dados do formulário
$data = json_decode(file_get_contents('php://input'), true);

// Monta o corpo do e-mail
$body = "Nome: " . $data['name'] . "\n";
$body .= "E-mail: " . $data['email'] . "\n";
$body .= "Mensagem:\n" . $data['message'];

// Envia o e-mail
if (mail($to, $subject, $body)) {
    echo json_encode(['message' => 'Mensagem enviada com sucesso!']);
} else {
    echo json_encode(['message' => 'Erro ao enviar a mensagem.']);
}