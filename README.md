# Lista de Tarefas — React Native

Aplicativo mobile de lista de tarefas desenvolvido em React Native como projeto acadêmico. O sistema permite o cadastro e a autenticação de usuários, além do gerenciamento completo de tarefas, incluindo criação, visualização, edição e exclusão.

## 📱 Visão Geral

Este projeto foi desenvolvido no contexto acadêmico com o objetivo de aplicar e consolidar conhecimentos em desenvolvimento mobile utilizando React Native.

A aplicação oferece uma interface simples e intuitiva para a organização de tarefas diárias, reunindo funcionalidades essenciais de um sistema de gerenciamento pessoal.

## Funcionalidades

* **Autenticação de usuários:** cadastro e login com validação de credenciais;
* **Gerenciamento de tarefas:** criação, visualização, edição e exclusão de tarefas;
* **Interface responsiva:** layout adaptado para dispositivos móveis;
* **Navegação entre telas:** fluxo de navegação estruturado entre as telas de login, cadastro e lista de tarefas.

## Estrutura do Projeto

```text
ListaDeTarefas_ReactNativa/
├── src/
│   ├── screens/          # Telas da aplicação
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   └── TodoScreen.js
│   └── routes/           # Configuração das rotas
│       └── AppRoutes.js
├── assets/               # Recursos estáticos (imagens, ícones etc.)
├── App.js                # Componente principal
├── index.js              # Ponto de entrada da aplicação
├── app.json              # Configurações do Expo
├── package.json          # Dependências do projeto
└── README.md             # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

* **React Native:** framework utilizado para o desenvolvimento da aplicação mobile;
* **Expo:** plataforma utilizada para desenvolvimento e execução do projeto;
* **React Navigation:** biblioteca utilizada para a navegação entre as telas;
* **JavaScript (ES6+):** linguagem de programação utilizada no desenvolvimento da aplicação.

## 🚀 Como Executar

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js;
* npm ou Yarn;
* Expo;
* Aplicativo Expo Go no celular, para testes em dispositivo físico, ou um emulador configurado.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/Arturqueiiroz/ListaDeTarefas_ReactNativa.git
   cd ListaDeTarefas_ReactNativa
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npx expo start
   ```

4. Abra o aplicativo no seu dispositivo físico utilizando o Expo Go ou execute-o em um emulador configurado.

## 📚 Contexto Acadêmico

Este projeto foi desenvolvido como parte de atividades acadêmicas, com foco na aplicação prática de conceitos relacionados ao desenvolvimento mobile.

Durante o desenvolvimento, foram trabalhados os seguintes conhecimentos:

* Prática de desenvolvimento mobile com React Native;
* Aplicação de conceitos de componentes, estado e props;
* Implementação de navegação e fluxos entre telas;
* Organização do código em uma estrutura modular;
* Desenvolvimento de funcionalidades de cadastro, autenticação e gerenciamento de tarefas.

## 👨‍💻 Autor

**Artur Queiroz**

GitHub: [@Arturqueiiroz](https://github.com/Arturqueiiroz)

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e está disponível para estudo e contribuições.

---

*Projeto desenvolvido no contexto acadêmico para aprendizado e prática de desenvolvimento mobile com React Native.*
