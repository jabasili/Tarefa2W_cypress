Efetuado o exercício solicitado usando o Site https://automationintesting.online
onde foi feita a validação de ROATING

É um teste simples onde não há um cadastro e aproveitamento de massa, pois é apenas um envio de mensagem ao site, ao estilo "fale conosco"
foi feita a validação do XHR na chamada post usando o cy.server e cy.route, e fazendo a validação junto com cy.wait

Tenho por costume colocar no arquivo package.json os scripts abaixo para facilitação na abertura do Cypress e para rodar sem a parte grafica:

"scripts": { "cypress:open": "./node_modules/.bin/cypress open", "cypress:run": "./node_modules/.bin/cypress run"

Então para abrir o Cypress use o comando "npm run cypress:open"
