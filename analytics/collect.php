<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Allow: POST'); http_response_code(405); exit; }
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 2048) { http_response_code(413); exit; }
try {
    require __DIR__.'/core.php';
    $raw = file_get_contents('php://input', false, null, 0, 2049);
    if (strlen($raw) > 2048) { http_response_code(413); exit; }
    $body = json_decode($raw, true, 8, JSON_THROW_ON_ERROR);
    if (!is_array($body)) throw new InvalidArgumentException('Body');
    $config = require dirname(__DIR__).'/analytics-config.php';
    $event = normalizeEvent($body, $_SERVER, $config, clockNow());
    if ($event) saveEvent(database($config), $event);
    http_response_code(204);
} catch (InvalidArgumentException|JsonException $e) { http_response_code(400);
} catch (Throwable $e) { error_log('Analytics collection unavailable: '.get_class($e)); http_response_code(503); }
