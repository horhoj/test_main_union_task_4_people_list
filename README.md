# Интеграция с бекендом

Использовал "АПИ звездных войн", так как там есть пагинация и поиск

ДЕМО: https://test-main-union-task-4-people-list.vercel.app/list-of-people


# Используется: 

vite, react, typescript, redux-tookit, docker(docker-compose), nginx (для раздачи статики билда), eslint + prettier

# запуск

npm i

npm run dev

# запуск в докере (протестировано только на линукс, нужны make, docker, docker-compose)

запуск в режиме разработки (порт 3000)

make docker-ddev

запуск в режиме раздачи билда через nginx (порт 80)

make docker-init


разумеется порты можно поменять в настройках
