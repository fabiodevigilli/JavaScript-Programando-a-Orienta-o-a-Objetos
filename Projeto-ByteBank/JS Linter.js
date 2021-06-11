// JS Linter

// eslint é usado nas dependências de desenvolvimento e não em produção

// Digitar o seguinte código no terminal:
// npx eslint --lint

// selecionar pelo menos as duas últimas opções:
// - To check syntax and find problems
// - To check syntax, find problems, and enforce code style
// aqui estaremos selecionando a última opção.

// aparecerá para escolher: What type of modules does your projetc use?
// selecionamos a seguinte:
// - JavaScript modules (import/export)

// aparecerá para escolher: Which framework does your project use?
// no curso, foi selecionado:
// - React

// aparecerá para escolher: Does your project user TypeScript?
// Selecionamos: No

// aparecerá para escolher: Where does your code run?
// Selecionamos: Browser

// aparecerá para escolher: How would you like to define a style for your project?
// - Use a popular style guide; (vai nos dar 3 opções de style guides bem famosos)
// - Answer questions about style; (vai nos passar perguntas para responder, para configurar)
// - Inspect your JavaScript file(s); (em um projeto existente podemos navegar pelos arquivos, sendo usada esta terceira opção)

// selecionamos a primeira opção: Use a popular style guide;

// aparecerá para escolher: Wich style guide do you want to folow?
// - Airbnb: https://github.com/airbnb/javascript
// - Standard: https://github.com/standard/standard
// - Google: https://github.com/google/eslint-config-google

// selecionamos a primeira opção: Airbnb: https://github.com/airbnb/javascript;

// aparecerá para escolher: What format do you want your config file to be in?
// - JavaScript
// - YAML
// - JSON

// selecionamos a primeira opção: JavaScript;

// Would you like to install them now with npm? (Y/n)
// - Selecionamos Y

// podemos ver que foi criado o arquivo .eslintcr.js

// instalar a extensão ESLINT 2.1.7 => Integrates /ESLint JavaScriptInto VS Code => Dirk Baeumer

// para solucionar os problemas existente do eslint, podemos acessar ctrl+F1 => (> auto) ESLint:Fix all auto-fixable Problems

// Ao identificar um problema, que o fix all não resolve, podemos mudar as Rule Options
// passamos o mouse sobre a linha com o problema, vai abrir uma caixa com os detalhes do 
// problema identificado, clicamos em eslint(nome do problema), abre uma caixa de info do VS Code, clicamos em Open,
// vai abrir pagina do eslint dos detalhes do problema
// podemos copiar a regra para ajustar o problema
// com este código, podemos abrir o arquivo .eslintcr.js e em "rules", podemos incluir o código
// permitindo utilizarmos o fix all, para corrigir o problema, que não era possivel corrigir anteriormente.


