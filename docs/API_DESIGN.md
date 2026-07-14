# API Design для AutoCore-CRM

## Базовая информация

- **Base URL**: `http://localhost:5000/api/v1`
- **Authentication**: JWT в заголовке `Authorization: Bearer <token>`
- **Format**: JSON
- **Encoding**: UTF-8

## Стандартные ответы

### Успешный ответ
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Ошибка
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  }
}
```

## Endpoints (Пример структуры)

### Authentication
```
POST /auth/register       - Регистрация
POST /auth/login          - Вход
POST /auth/refresh        - Обновить токен
POST /auth/logout         - Выход
```

### Customers
```
GET    /customers         - Список с пагинацией и фильтром
POST   /customers         - Создание
GET    /customers/:id     - Детали
PUT    /customers/:id     - Обновление
DELETE /customers/:id     - Удаление
GET    /customers/:id/vehicles - Автомобили клиента
GET    /customers/:id/orders   - Заказы клиента
```

### Vehicles
```
GET    /vehicles          - Список
POST   /vehicles          - Добавить
GET    /vehicles/:id      - Детали с историей
PUT    /vehicles/:id      - Обновление
DELETE /vehicles/:id      - Удаление
```

### Orders
```
GET    /orders            - Список с фильтром по статусу
POST   /orders            - Создать заказ
GET    /orders/:id        - Детали заказа
PUT    /orders/:id        - Обновить статус/детали
DELETE /orders/:id        - Отмена заказа
POST   /orders/:id/services - Добавить услугу
DELETE /orders/:id/services/:serviceId - Удалить услугу
```

### Services
```
GET    /services          - Список доступных услуг
POST   /services          - Создать услугу (админ)
GET    /services/:id      - Детали
PUT    /services/:id      - Обновление (админ)
DELETE /services/:id      - Удаление (админ)
```

### Employees
```
GET    /employees         - Список
POST   /employees         - Добавить (админ)
GET    /employees/:id     - Детали
PUT    /employees/:id     - Обновление
DELETE /employees/:id     - Удаление (админ)
GET    /employees/:id/schedule - Расписание
```

### Payments
```
GET    /payments          - История платежей
POST   /payments          - Новый платёж
GET    /payments/:id      - Детали
PUT    /payments/:id      - Обновить статус
```

### Reports
```
GET    /reports/revenue   - Доход
GET    /reports/orders    - Статистика заказов
GET    /reports/customers - Анализ клиентов
GET    /reports/employees - Производительность
```

## Query Parameters

### Пагинация
```
page=1&limit=20&skip=0
```

### Сортировка
```
sort=created_at&order=desc
```

### Фильтр
```
status=completed&date_from=2024-01-01&date_to=2024-12-31
```

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Unprocessable Entity
- `500` - Internal Server Error
