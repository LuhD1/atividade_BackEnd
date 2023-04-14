# atividade_BackEnd
# DOC Postman: https://documenter.getpostman.com/view/26815390/2s93Xx1jxd #

Atividade Back-end SoulCode

# Este é um código em JavaScript que utiliza o framework Express para criar um servidor web. Ele define uma rota GET e uma rota POST para manipular dados de alunos armazenados em um arquivo JSON.

# O arquivo começa importando as dependências necessárias (Express, Colors, e FS). Em seguida, é definida uma função chamada novoJson() que escreve os dados de alunos em um arquivo chamado "db.json".

# Depois, é criado um servidor Express usando app = express(). O servidor utiliza o middleware express.json() para analisar o corpo das solicitações em formato JSON.

# A primeira rota GET é "/alunos", que retorna uma lista de alunos. Se forem fornecidos parâmetros de consulta, a rota filtra a lista com base nesses parâmetros e, em seguida, chama a função novoJson() para salvar as alterações em "db.json".

# A segunda rota POST é "/alunos/novo", que cria um novo aluno. Se o corpo da solicitação não contiver informações suficientes, a rota retorna um código de status 400 (Bad Request). Caso contrário, a rota adiciona o novo aluno à lista de alunos e chama a função novoJson() para salvar as alterações em "db.json".

# A terceira rota DELETE é "/alunos/:index", que remove um aluno com base em seu índice na lista de alunos. Se o índice não for válido, a rota retorna um código de status 400 (Bad Request). Caso contrário, a rota remove o aluno e chama a função novoJson() para salvar as alterações em "db.json".

# A quarta rota POST é "/alunos/atualizar/:index", que atualiza as informações de um aluno com base em seu índice na lista de alunos. Se o índice não for válido ou o corpo da solicitação não contiver informações suficientes, a rota retorna um código de status 400 (Bad Request). Caso contrário, a rota atualiza as informações do aluno e chama a função novoJson() para salvar as alterações em "db.json".

# Finalmente, o servidor começa a escutar na porta 3000 e exibe uma mensagem informando que o servidor foi iniciado com sucesso.
