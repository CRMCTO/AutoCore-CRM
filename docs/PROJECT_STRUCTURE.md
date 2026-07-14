# Структура проекта AutoCore-CRM

## Директории

### `/backend`
API и бизнес-логика приложения

```
backend/
├── src/
│   ├── config/          # Конфигурация приложения
│   ├── controllers/      # Обработчики запросов
│   ├── models/          # Модели данных
│   ├── routes/          # Маршруты API
│   ├── services/        # Бизнес-логика
│   ├── middlewares/     # Middleware
│   ├── utils/           # Утилиты
│   ├── validators/      # Валидация данных
│   └── app.js           # Точка входа
├── migrations/          # Миграции базы данных
├── seeds/               # Начальные данные
├── tests/               # Тесты
├── package.json
└── Dockerfile
```

### `/frontend`
Реакт приложение

```
frontend/
├── src/
│   ├── components/      # React компоненты
│   ├── pages/           # Страницы приложения
│   ├── hooks/           # Кастомные хуки
│   ├── services/        # API клиенты
│   ├── store/           # Redux store
│   ├── styles/          # Глобальные стили
│   ├── utils/           # Утилиты
│   ├── App.jsx
│   └── main.jsx
├── public/              # Статические файлы
├── tests/               # Тесты
├── vite.config.js
├── package.json
└── Dockerfile
```

## Основные сущности

### Customer (Клиент)
- ID
- ФИО
- Телефон
- Email
- Адрес
- Дата создания
- Статус

### Vehicle (Автомобиль)
- ID
- Customer ID
- Марка/Модель
- Год выпуска
- VIN
- Номерной знак
- История обслуживания

### Order (Заказ)
- ID
- Customer ID
- Vehicle ID
- Дата создания
- Статус (новый, в работе, готов, завершён)
- Услуги
- Стоимость
- Дата завершения

### Service (Услуга)
- ID
- Название
- Описание
- Цена
- Время выполнения
- Категория

### Employee (Сотрудник)
- ID
- ФИО
- Должность
- Телефон
- Email
- Статус
- График работы

### Schedule (Расписание)
- ID
- Employee ID
- Дата
- Время начала/окончания
- Статус (свободно, занято, выходной)

### Payment (Платёж)
- ID
- Order ID
- Сумма
- Метод оплаты
- Дата
- Статус

## Workflow разработки

1. Создание issue с описанием задачи
2. Создание ветки: `feature/issue-number-description`
3. Разработка
4. Pull Request с описанием
5. Code Review
6. Merge в main
7. Deployment
