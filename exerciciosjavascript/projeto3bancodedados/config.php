<?php
$dbhost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbname = 'formulario-teste';

$conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbname);

    if($conexao->connect_errno)
    {
        echo "Erro";
    }
    else
    {
        echo "Conexão efetuada com sucesso";
    }
    
    ?>