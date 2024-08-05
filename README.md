# ▶️ Prime Tube Academy

**🔧 Em desenvolvimento 🧩**
Projeto full-stack (Node, Nest, React, Next) que reúne os melhores cursos de desenvolvimento de software e tecnologia disponíveis no Youtube, facilitando a busca de forma organizada.

## 📑 Documentação UML
**⚠️ Sujeito a atualizações ⚠️**

### Casos de Uso
![usecase](https://www.plantuml.com/plantuml/png/TP31RXCn48RlynIZtBiDsoHDgh1g2ToeG20uSN7jIMfXUv37NeI0X-cpzCMwkwgZJQIz_Pdlyp-JlPMaOihUGRB94RwtwX2LLxXJmeA6y9imEDedJ8pH7XuJ6Xj99yi1vASDlrJdezA9uzVqnn6gtoJi2U2HbA48sps7X9eTnxUHJFFfGQgRxMK_RU23HqD2eMNNMayXSGKKpEjJ66fnjkCWsLl3SOPAK9VvFNUMwiQNTyRRC40Fq9-dmi4Hxd8K5lmBY5b8Ao6StHchBGSLKVTqU9Jrcx7oqKegN5w5UYoyowBF2gvEThJAsJDXCHRkLJmMe6RFk5SjHvkAlPoyfvZ7orPZzND-SFRyjkknyOLqbZDXVIfuRkbKs8o5xnJjVbWYr4tpyrEq_2EGfESdL3bHI1qrnqzRmty0ZHSN_OyIwXAkIbYKi2nX1RuB_nhKG-Z_IGdh4ZRGbM9LDSEc6znkRT0k6seQw3edoNAIh2R9zIHPJvBD184zSwA8yxgQhwjwNY_WbeB9thq0)

![usecase](https://www.plantuml.com/plantuml/png/PP71RjH038RlVWfhJt1eMD85eIf4HL0XJaXKvMuotgqXCqOUPob2F4oVfI-6Txkf8d5p_7_-zKLpMPtCfpo2Yu-C7uHsHfdmFLMjc1XlgiB8MqTNDDdTEYOn7boqGFqXvIS5ZpIushN_ZWhwnLKp0zmo9JRejbeS1ntLtXgd_lEtsbnqBmxR7guo9gvSzZhk9NDnRO1BEft2iHPNDtLwk3VH5LB5QTw-IrcAL3TAQiU800vgL7RXCH_X7q2SAWzK6LTN9NWBdOmVLODxx1nUBg5h4iD4GHKdV1Q6e-x8df_OTi66XGoY9Jgp9dvo2UnyYNtXh7l-7zeieQziifKXkk9hcls_FzmZtqdrsVNrykPJgN5bJ_Y9UGL_0IOyEplyspoqG8_3-Jni869iclvGUu5T9sKOfyHz3z61NNDyycPE-Swvf1efR5MT3TTjitxJjEjs0vSHJNdy1m00)

### Diagrama de classes

**Entidades de domínio**

```mermaid
classDiagram
  class Course {
    id String
    title String
    description String
    url String
    status String
    year Number
    channel String
    added_by String
    add()
    publish()
    remove()
  }

  class Tag {
    id String
    name String
  }

  class User {
    id String
    name String
    email String
    token String
    create()
  }

  class Consumer {

  }

  class Moderator {

  }

  class Administrator {
    addModerator()
    removeModerator
  }

  Course o-- Tag
  Course ..> User
  User <|-- Consumer
  User <|-- Moderator
  User <|-- Administrator
```

### Diagrama de atividades 

**Fluxo geral da jornada do usuário**

```mermaid
flowchart
  id1([Inicio])
  id1-->id2(Lista de Cursos)
  id2-->id3{Opcional}
  id3-->id4(Entrar com conta do Google)
  id2-->id5{Autenticado}
  id5-->id16(Ação)
  id16-->id7{Moderador<br>Admin}
  id5-->id6(Adicionar Curso)  
  id7-->id8(Publicar Curso)
  id7-->id9(Recusar Curso)
  id7-->id10(Remover Curso)
  id16-->id11(Favoritar Curso)
  id16-->id12(Avaliar Curso)
  id5-->id13{Admin}
  id13-->id19(Lista de Usuários)
  id19-->id14(Adicionar Moderador)
  id19-->id18(Remover Moderador)
  id5-->id15(Conta)
  id15-->17(Sair)
```

### Diagrama de sequencia

**Publicar Video**

```mermaid
sequenceDiagram
autonumber
actor user as Moderador<br>Administrador
participant front as FRONT-END
participant back as BACK-END

activate user
user->>front: (Page: Listar Cursos)<br>Filtrar cursos por status = PENDENTE
activate front
front->>back: Consultar cursos pendentes
activate back
back-->>front: [cursos]
deactivate back
front-->>user: Listar Cursos
user->>front: Clicar no botão Ações
front->>front: Modal Ações
activate front
user->>front: Clicar no botão Publicar
front->>back: Course.publish()
activate back
back-->>front: return 204
deactivate back
front-->> user: return success
deactivate front

deactivate front
deactivate user
```

### Diagrama de estado

**Status do Curso**

```mermaid
stateDiagram
  [*] --> PENDING: Curso adicionado
  PENDING --> PUBLISHED: Moderador aprovou o curso
  PENDING --> REFUSED: Moderador reprovou o curso
  PUBLISHED --> [*]: Curso disponível na Lista
  REFUSED --> [*]
```
