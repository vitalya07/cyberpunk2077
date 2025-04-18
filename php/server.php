<?php
    // Получаем данные из входящего JSON
    $data = json_decode(file_get_contents('php://input'), true);

    // Проверяем, успешно ли декодировался JSON
    if ($data) {
        // Обрабатываем данные (например, выводим их в консоль)
        error_log(print_r($data, true));
        
        // Отправляем ответ обратно в формате JSON
        echo json_encode(['status' => 'success', 'data' => $data]);
    } else {
        // Если произошла ошибка
        echo json_encode(['status' => 'error', 'message' => 'Неверный формат данных']);
    }
?>