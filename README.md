# react-course
repo w/ react course content

# GIT commands
git checkout develop - move para a develop
git checkout -b feature/update-your-new-branch-name - cria uma branch para trabalhar
git push --set -upstream origin feature/update-layout-color - passa para o repo remoto

Como enviar para o repo remoto:
1. git add .
2. git commit -m "message"
3. git push

3 tipos de repositórios locais:
1. workspace
2. staging
3. local repository

git add envia para o staging
git commit envia para o local repo
git push envia para o remoto

Como descartar o último commit:
git reset HEAD~1 (volta para o workspace)
git reset --soft HEAD~1 (volta para o staging)

Como descartar um staging:
git restore --staged <file_path>

Como descartar do workspace:
git restore <file_path>

git fetch - traz as atualizações mais recentes, embora não faça o merge com o seu repo local
git pull - traz as atualizações mais recentes e faz o merge com o repo local

rebase: executar somente em um repositório local. não cria um novo commit.
    git rebase master/main

Merge: Se você está trabalhando em uma branch chamada 'dev' e gostaria de fazer o merge em uma branch chamada 'new-features', comando seria:
    git merge new-features
    obs: deve ter sido realizado o commit de todas as atualizações no branch atual - caso contrário faça o commit ou stash

Stash:
    git stash # adiciona as mudanças ao stash
    git stash pop # obtém as alterações de volta a sua árvore de trabalho

