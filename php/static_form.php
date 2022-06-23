<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name_static_form'])) {$name_static_form = $_POST['name_static_form'];}
    if (isset($_POST['tel_static_form'])) {$tel_static_form = $_POST['tel_static_form'];}

    $to = "mr.mudretsov@mail.ru";
    $sendfrom   = "qupers@gmail.com";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "ЗАЯВКА С САЙТА QUPERS";
    $message = "
        <b>ФИО:</b> $name_static_form<br>
        <b>Телефон:</b> $tel_static_form<br>
    ";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<p class="success" style="padding-left: 0; text-align: start; color: #fc6e0d; font-size: 16px;">Ваша заявка отправлена успешно!<br>C Вами свяжутся в ближайшее время!</p>
    <style>
    .section_5 .width > p{
        display:none;
    }
    .section_5 .width p{
        margin-bottom:0;
    }
    </style>
    ';
    }
    else 
    {
    echo '<center><p class="success" style="">Ошибка, заявка не отправлена!<br>Лучше - позвоните :)</p></center>
    <style>
    .section_5 .width > p{
        display:none;
    }
    .section_5 .width p{
        margin-bottom:0;
    }
    </style>
    ';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>
