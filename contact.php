<?php

// configure
$from = 'Contact Form @ your domain <noreply@domain.com>';
$sendTo = 'Demo Contact form <info@sahhallc.com>';
$subject = 'New Contact Form for your domain';
$fields = array('name' => '<br /><br /> <b>Name</b>', 'email' => '<br /><br /> <b>Email Id</b>', 'phone' => '<br /><br /> <b>Phone</b>', 'msg' => '<br /><br /><b>Message</b>'); // array variable name => Text to appear in the email
$okMessage = '<span class="thanku"> Thank you</span> <br /> One of our Client Support Manager will contact you soon.';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    $emailText = "You have New Contact Form from  website <br /> ============================= <br />";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
