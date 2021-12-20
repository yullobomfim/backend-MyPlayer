# BACKEND Do App My Players

## 📃 Sobre

Este Aplicativo móvel ** My Players **  faz parte da 2ª avaliação da disciplina de Programação Móvel da Universidade Federal da Bahia IFBA- Vitória da Conquista ministrada pelo Professor Luis Paulo da Silva Caravlho, este projeto é estritamente didático e o código com as informações são de Autoria do Discente Yullo Costa Bomfim.
Nesta aplicação mobile, apresento o backend da aplicação que foi construida em nodejs e o seu frontend também está disponivel em meu repositório no GitHub.
O **objetivo** deste projeto é de conectar pessoas que desejam fazer consultas aos nomes dos jogadores, nome do clube, país de origem e foto dos principais jogadores de futebol da história.
Este sistema possui a **interface mobile**, com Feed dos jogadores, tela de Favoritos e tela de Pesquisa por nome do atleta. Nela, os usuários tem a possibilidade de realizar consultas e selecionar os seus atletas favoritos.
Este ** Aplicativo para dispositivos móveis** (Android e iOS), foi desenvolvido em **React Native**, e na página inicial é possível visualizar uma lista completa com todos os atletas cadastrados no banco de dados populado aleatóriamente.
Além disso, os usuários que acessarem o aplicativo, podem adicionar a marcação Favoritos em seus atletas preferidos.
Este projeto foi desenvolvido para fins de estudo e aprendizado próprio, com foco na linguagem JavaScript e as demais ferramentas, portanto, será atualizado constantemente. 

## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:
- [**Visual Studio Code**](https://code.visualstudio.com/): um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, recomendado para o desenvolvimento de aplicações web;
- [**Node.js**](https://nodejs.org/en/): um interpretador de JavaScript assíncrono com código aberto orientado a eventos;
- [**Docker**](https://www.docker.com/): O Docker elimina as tarefas de configuração rotineiras e repetitivas e é usado em todo o ciclo de vida de desenvolvimento para o desenvolvimento de aplicativos rápido, fácil e portátil - desktop e nuvem

## 📟 Layout e Análise da aplicação
O FrontEnd desta aplicação **My Players** está disponivel GitHub [**yullobomfim**](https://github.com/yullobomfim/soccerApp.git/).
Já este BackEnd, esta disponivel no GitHub [**yullobomfim**](https://github.com/yullobomfim/backend-MyPlayer).
Este app foi desenvolvido por mim e não tem a pretensão de ser definitiva, mas apenas atender aos critérios da avaliação desta disciplina. Este projeto também possui um vídeo autoral explicando as principais funcionalidades e foi enviado pelo google class diretamente ao professor.


## 🔧 Instalação e Execução

Para você poder instalar e executar esta aplicação, terá que instalar em sua máquina o [**Git**](https://git-scm.com/) e o [**Node.js**](https://nodejs.org/en/) e o Docker[**Docker**](https://www.docker.com/).
Em seguida, no terminal execute os seguintes comandos segundo as instruções:  
- Para executar a aplicação em um mobile, você deve utilizar um aparelho celular, Android ou IOS, e instalar o aplicativo **Expo** disponível na [**Google Play**](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [**App Store**](https://apps.apple.com/br/app/expo-client/id982107779). Este aplicativo permite que você visualize o App em seu próprio celular. 

### BackEnd (Mobile)

1. Vá até a pasta raíz do repositório:
    ```bash
    $ cd backend
    ```
2. Inicie com o Docker Compose up para criar e buildar a aplicação:
    ```bash
    $ docker-compose up --build
    ```
    >Inicialize o container e Abra a Bash do container para inicializar o Expo
       ```bash
       $ docker-compose exec app bash
       ```
3. Execute a aplicação :
    ```bash
    $ expo start
    ```

- Ao executar a API com **``expo start``**, aguarde o carregamento dos scripts. Será aberto uma interface do **Expo** em seu navegador com o título: _**"SoccerApp on Expo Developer Tools"**_. Aqui é possível visualizar o status de Metro Builder, configurações de conexão e outras opções como:
  
  >* Run on Android device/emulator
  >* Run on iOS simulator
  >* Run in web browser
  >* Send link with email…
  >* Publish or republish project…

- Após o **Expo** estar instalado em seu celular, abra-o, escaneie o QR Code e a API será executada.
- Caso queira executar a API pelo computador, você pode utilizar o caminho Run in web browser(atalho 'w' no console do terminal), seguido da tecla de atalho F12 para abrir o painel "devTools" do navegador de internet e abrir o Toggle Device toolbar, utilizando o atalho CTRL+SHIFT+ M para apresentar a versão utilizando um mobile;
ou instalando algum **emulador Android/iOS**.


## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## 📲 Contato

Entre em contato comigo pelo meu LinkedIn:
https://www.linkedin.com/in/yullo-bomfim-50434627/


## 📝 Licença

Esse projeto foi desenvolvido para atender os críterios da disciplina Programação Móvel e possuem carater didático com fotos sob licença creative communs disponiveis na plataforma Google, e os dados fícticios para melhor compreensão da tecnologia.

***