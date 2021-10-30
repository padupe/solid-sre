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
git clone https://github.com/padupe/solid-sre
```

2 Instale as dependências
```bash
yarn install
```

3 Suba o Banco de Dados com Docker
```bash
docker-compose up
```

4 Rode as Migrations
```bash
yarn typeorm migration:run
```

5 Popule o Banco de Dados
```bash
yarn seed
```

6 Inicie a Aplicação
```bash
yarn dev
```

#

### Comandos Úteis

Formatação utilizando Prettier:
```bash
yarn format
```

#

### MER - Modelo Entidade Relacionamento

![img](https://github.com/padupe/solid-sre/blob/master/src/shared/images/solid.png)

#

### Credenciais de Acesso ao Banco de Dados
```bash
host:       localhost
username:   sre
password:   solid
database:   solid-sre
```
#

### Usuário Admin
```bash
E-mail:     admin@email.com
Password:   senha1234
```

#

### Documentação

Confira a Documentação para uso desta API em:
http://localhost:7777/docs
> **IMPORTANTE:** necessário rodar o comando <code>yarn dev</code> para iniciar o Servidor