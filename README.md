# SOLID - O que é?

**S**ingle Responsibility Principle (_Princípio da Responsabilidade Única_)<br>
**O**pen Closed Principle (_Princípio Aberto/Fechado_)<br>
**L**iskov Substitution Principle (_Princípio da substituição de Liskov_)<br>
**I**nterface Segregation Principle (_Princípio da Segregação da Interface_)<br>
**D**ependency Inversion Principle (_Princípio da Inversão da Dependência_)<br>

---

## Aplicação Utilizando os princípios de SOLID

### Requisitos
- Node.js v.14
- Docker

#

### Utilizando a Aplicação

1 Clone o Repositório
```bash
git clone ...
```

2 Instale as dependências
```
yarn install
```

#

### Comandos Úteis

Iniciando a Aplicação:
```bash
yarn dev
```

Formatação utilizando Prettier:
```bash
yarn format
```

Subir o Banco de Dados com Docker:
```bash
docker-compose up
```

#

## Dados de Acesso ao Banco de Dados
```javascript
host:       localhost
username:   sre
password:   solid
database:   solid-sre
```
#

## Usuário Admin
paulo.peixoto@madeiramadeira.com.br
senha123