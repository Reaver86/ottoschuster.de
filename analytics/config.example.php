<?php
// Install outside httpdocs: <domain>/private/analytics-config.php, chmod 0600.
return [
 'site' => 'ottoschuster.de',
 'dsn' => 'mysql:host=mysqle8e6.netcup.net;dbname=REPLACE;charset=utf8mb4',
 'user' => 'REPLACE', 'password' => 'REPLACE',
 'secret' => 'REPLACE_WITH_32_RANDOM_BYTES_OR_MORE',
 'recipients' => ['alexander.schuster86@gmail.com', 'otto.schuster@ottoschuster.de'],
 'sender' => 'analytics@ottoschuster.de',
 'started' => '2026-10-19',
];
