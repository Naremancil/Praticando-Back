Vou criar um passo a passo e descrever meus pensamentos aqui 😀
playlist do projeto: https://open.spotify.com/playlist/2bM2em7ANvzROEeOY1YyzW?si=cd4042c35d0648fd

💭 edit 1: eu esqueci de fazer um .gitignore pra não importar a quantidade absurda de arquivos que tem no projeto graças ao npm install, o arquivo .env também não é enviado junto pro git, não esquecer disso!

Primeiro instalar as dependências:
    nodemon             - reinicia o servidor após o save em algum arquivo do projeto
    mongoose OU mysql2  - banco de dados, escolha o que seu coração mandar
    express             - Gerencia o servidor do node pra rodar a API
    dotenv              - Seta as variáveis de ambiente que podem ser colocadas no projeto

* Criar um script dentro do Package.json pra usar o NPM como iniciador, vou dar um nome bem criativo.

* Criar arquivo do servidor e do app dentro de src
    - importar dependências pro app, criar a variável app e exportar ela.
    - fazer o express usar o modo JSON
    - criar o servidor e deixar ele no modo 'listen' para uma porta, depois testar ela 🤗

💭 Aqui já da pra eu criar o arquivo .env e deixar ele com a variável de PORT criada né...

* Criar o arquivo .env
    - Escolher uma porta pra ele e já colocar isso no servidor
    - usar a função config() pra acessar as variáveis

💬 algo deu de errado quando iniciei ele...
💬 Okay, é preciso exportar o servidor no app

* Com o servidor criado e testado, precisa ser estabelecida a rota e testada pelo metodo GET
    - Criar um arquivo routes
    - Importar o express novamente para usar a função express.Router()
    - criar a rota get no Endpoint '/' somente pra testar pelo navegador

💬 Vou abrir o insomnia pra dar as requets já
💬 Passei moh tempo tentando achar o que tava dando de errado, faltou um () no app.use(express.json'()')

após fazer tudo isso, vamos começar a pavimentar a estrada da rota 'post', o que vai ser a maior parte do trabalho graças a necessidade de um banco de dados e uma validação dos requisitos mínimos pra trabalhar com a rota. 😅

💭 Escutar eletro pra programar é muito bom cara....

* Criar a pasta de modules e controllers
    - A pasta module é onde os processos são construidos e o acesso ao banco de dados e o retorno das query's ao banco de dados
        - No arquivo de conexão, criar uma variavel pra armazenar o banco de dados.
        - usar a função "mysql.createPool()" pra definir como será o acesso ao banco
        - exportar a variável que está segurando o acesso ao banco 💸
        - o Model é responsável por puxar as requisiçõoes do banco de dados
    - A pasta controllers é onde (💭 pausa pro almoço... voltando) será feito o controle das requisições do front com o back e o envio do response ao front

💬 Numa hierarquia geral, o Controller é o primeiro a fazer contato, ele é quem recebe a mercadoria, da o OKAY pra quem pediu e faz a movimentação.
💬 O Module é que está responsável por pegar as informações recebidas ou reencaminhar as informações.

* O module tem várias funções que serão usadas no arquivo router. A primeira função que deve ser criada é o GET que retorna todas as informações do banco de dados.
    - Criar o get no Models pra um retorno genérico
    - A função que necessita esperar um retorno de algo que tem processamento externo precisa ser uma função "async", porque ocorrem em tempos diferentes. Dessa forma, a função que é criada precisa receber um "await" na frente, pedindo pra esperar o retorno do software que fará o processamento. É como se alguém no balcão estivesse esperando o empacotador fechar a embalagem e trazer pra ele 😗

💭 Eu não criei o banco de dados ainda..........moh burrão

    * Criando banco de dados:
        - Independente do jeito que vai ser acessado, seja docker, local ou servidor de domínio, precisa ter o banco, eu tenho no docker
        - comando pra subir o container no docker:
            - docker run --name [nome_do_container] -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
                --name -> da um nome ao container
                -e     -> da um valor a alguma variável
                -p     -> faz um espelho de uma porta do container com alguma do seu computador, não necessáriamente precisa ser a mesma 😁
                -d     -> Roda a inicialização do container em segundo plano, se não tiver a flag, acaba que você meio que "perde" o terminal e precisa abrir outro...
        - Depois de criar o container, precisa acessar ele e fazer as tabelas de maneira que condiza a como a API vai pegar ou armazenar as informações
    
💭 Devo dizer que esta é a primeira vez que consigo integrar o programa de maneira que algo acesse o back e o front, e é muito dahora cara.....

☀🌑

💭 Dia 2, vamo lá...
Playlist: https://open.spotify.com/playlist/37i9dQZF1DZ06evO3TFPH2?si=f82f0f7fe7ee4f63

* Pontos a serem feitos aqui:
    - Eu encontrei vários problemas no caminho que não anotei aqui, mas vou deixar eles nessa sessão.
    - Não esquecer de ao dar o require no sql2, deixar ele como /promise, somente assim funciona o await e o async
    - controller é o segundo passo, e o models é o terceiro, quem é chamado primeiro é o controller pelo arquivo router
    
💭 Se você realmente leu tudo isso até aqui, eu te digo que neste momento estou ouvindo uma música chamada "against the wall" da banda Seether, acoustic version. Escute-a, ela é linda mas é muito triste, porém vale a pena 😁

* Aqui vamos para a segunda rota depois de testado toda a criação da rota Get, essa é a parte mais trabalhosa mas é o que mais ensina sobre como serão gerados, pegos e tratados os dados.
    - Criar a rota post no Router ➡
    - Chamar o controller, fazer o armazenameno na variável passando o body do json para o Model e retornar status com mensagem
    - Criar o Model pro controle fazer o processo
        - a princípio, só precisa preencher o Titulo, o status e a data. A data precisa usar a classe Date, instanciar ela e passar como parametro pro construtor dela o método Date.Now(), após isso usar a função .toUTCString pra deixar ela no formato correto pro banco de dados que aceita apenas horários que sejam feitos em UTC 🕐

