# AutoCore-CRM

Система управления взаимоотношениями с клиентами (CRM) для автосервиса.

## Описание

AutoCore-CRM - это комплексное решение для управления операциями автосервиса:
- 👥 Управление клиентами и историей обслуживания
- 🚗 Учёт автомобилей и техническое обслуживание
- 📋 Управление заказами и услугами
- 👨‍🔧 Расписание сотрудников и планирование работ
- 💰 Учёт платежей и финансовые отчёты
- 📊 Аналитика и статистика
- 📱 Мобильная поддержка

## Структура проекта

```
AutoCore-CRM/
├── backend/          # API и бизнес-логика
├── frontend/         # Веб-интерфейс
├── mobile/           # Мобильное приложение (опционально)
├── docs/             # Документация
└── docker-compose.yml # Контейнеризация
```

## Технологический стек

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL 14+
- **ORM**: Sequelize / TypeORM
- **Authentication**: JWT
- **API Docs**: Swagger/OpenAPI

### Frontend
- **Framework**: React 18+
- **UI Library**: Material-UI / Ant Design
- **State Management**: Redux Toolkit
- **Build Tool**: Vite

## Быстрый старт

### Требования
- Node.js 18+
- PostgreSQL 14+
- Docker & Docker Compose (опционально)

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/CRMCTO/AutoCore-CRM.git
cd AutoCore-CRM

# Установка зависимостей backend
cd backend
npm install

# Установка зависимостей frontend
cd ../frontend
npm install
```

### Конфигурация

1. Создайте `.env` файлы в папках `backend` и `frontend`
2. Настройте переменные окружения (см. `.env.example`)
3. Инициализируйте базу данных

### Запуск

```bash
# Backend (порт 5000)
cd backend
npm run dev

# Frontend (порт 3000)
cd frontend
npm run dev

# Или с Docker Compose
docker-compose up
```

## API Endpoints (планы)

### Клиенты
- `GET /api/customers` - Список клиентов
- `POST /api/customers` - Создание клиента
- `GET /api/customers/:id` - Детали клиента
- `PUT /api/customers/:id` - Обновление клиента
- `DELETE /api/customers/:id` - Удаление клиента

### Заказы
- `GET /api/orders` - Список заказов
- `POST /api/orders` - Создание заказа
- `GET /api/orders/:id` - Детали заказа
- `PUT /api/orders/:id` - Обновление статуса

### Автомобили
- `GET /api/vehicles` - Список автомобилей
- `POST /api/vehicles` - Добавление автомобиля
- `GET /api/vehicles/:id` - История обслуживания

### Сотрудники
- `GET /api/employees` - Список сотрудников
- `POST /api/employees` - Добавление сотрудника
- `GET /api/schedule` - Расписание работ

## Лицензия

MIT

## Автор

CRMCTO