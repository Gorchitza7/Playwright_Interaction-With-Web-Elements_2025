# Автотесты Playwright

### Шаг 1 - Установка и инициализация проекта

```bash
npm init playwright@latest --force
```

Эта команда запускает **официальный установщик Playwright**, который создаёт локальную структуру проекта, добавляет зависимости и конфигурационные файлы для начала автоматизированного тестирования.

---

### ⚙️ В процессе установки выберите следующие параметры:

- **Where to put your end-to-end tests?** → `tests`  
  *(Папка, где будут храниться тесты)*

- **Add a GitHub Actions workflow? (y/N)** → `false`  
  *(Можно добавить позже вручную)*

- **Install Playwright browsers? (Y/n)** → `true`  
  *(Сразу устанавливаем все необходимые браузеры: Chromium, Firefox, WebKit)*

---

После завершения установки ты получишь готовую структуру проекта, с которой можно работать в **VS Code** или любом другом редакторе.

---

### Шаг 2 - Развернуть проект локально:

```bash
npm start
```

---

### Ngx-Admin Angular 14 application from akveo.com

This is modified and more lightweight version of original application to practice UI Automation with Playwright.

The original repo is here: https://github.com/akveo/ngx-admin

______

# Playwright Timeout Configuration Tips

## Recommended Settings

Советы по настройке:

Для стабильных тестов увеличивайте таймауты (особенно в CI)

Для медленных приложений можно установить:

`timeout`: 30000,
`expect`: { timeout: 5000 },
`navigationTimeout`: 10000  

`actionTimeout` лучше не переопределять - используйте значения по умолчанию
