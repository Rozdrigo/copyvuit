# VUITCOPY


![image 1.png](assets/BANNER.png)


### Como rodar:


1.0 - Preparando dados:


1.1 - Acesse a pasta do projeto `copyvuit\vuit.api\data` lá será possível identificar dois arquivos onde estão os dados que serão renderizados na tela.


1.2 - Com esses arquivos, usando o MongoCompass basta importá-los e sua base de dados está pronta.


2.0 - Instalando dependências:


2.1 - Ambas pastas `vuit.api` e `vuit.web` são projetos distintos e precisam que suas dependências sejam instaladas. Para isso basta acessar cada uma das pastas via **Comand Line** e executar o seguinte comando `npm i` após isso os dois projetos estarão prontos para a execução.


3.0 - Rodando o projeto:


3.1 - Com os passos anteriores compridos basta usar do seguinte comando em sua ferramenta de **Comand Line** em ****cada um dos projetos: `npm run dev` .


3.2 -  Vale lembrar que talvez alterações de **Strings de Conexão** sejam necessárias a depender das configurações nas quais os serviços necessários foram instalados. Para manipular a **String de Conexão** com o **MongoDB** acesse o arquivo `\vuit.api\src\database\dbcontext.js` para mais informações acesse:


[Connection Strings](https://www.mongodb.com/docs/manual/reference/connection-string/)


Para modificar o acesso do projeto **WEB** a **API**, basta acessar o seguinte `\vuit.web\src\services \api.js` colocando assim a nova **String URL** de acesso a **API**.