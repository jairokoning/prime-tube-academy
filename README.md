# Turborepo starter

## Documentação UML

### Casos de Uso
![usecase](https://www.plantuml.com/plantuml/png/TP31RXCn48RlynIZtBiDsoHDgh1g2ToeG20uSN7jIMfXUv37NeI0X-cpzCMwkwgZJQIz_Pdlyp-JlPMaOihUGRB94RwtwX2LLxXJmeA6y9imEDedJ8pH7XuJ6Xj99yi1vASDlrJdezA9uzVqnn6gtoJi2U2HbA48sps7X9eTnxUHJFFfGQgRxMK_RU23HqD2eMNNMayXSGKKpEjJ66fnjkCWsLl3SOPAK9VvFNUMwiQNTyRRC40Fq9-dmi4Hxd8K5lmBY5b8Ao6StHchBGSLKVTqU9Jrcx7oqKegN5w5UYoyowBF2gvEThJAsJDXCHRkLJmMe6RFk5SjHvkAlPoyfvZ7orPZzND-SFRyjkknyOLqbZDXVIfuRkbKs8o5xnJjVbWYr4tpyrEq_2EGfESdL3bHI1qrnqzRmty0ZHSN_OyIwXAkIbYKi2nX1RuB_nhKG-Z_IGdh4ZRGbM9LDSEc6znkRT0k6seQw3edoNAIh2R9zIHPJvBD184zSwA8yxgQhwjwNY_WbeB9thq0)

![usecase](https://www.plantuml.com/plantuml/png/PP71RjH038RlVWfhJt1eMD85eIf4HL0XJaXKvMuotgqXCqOUPob2F4oVfI-6Txkf8d5p_7_-zKLpMPtCfpo2Yu-C7uHsHfdmFLMjc1XlgiB8MqTNDDdTEYOn7boqGFqXvIS5ZpIushN_ZWhwnLKp0zmo9JRejbeS1ntLtXgd_lEtsbnqBmxR7guo9gvSzZhk9NDnRO1BEft2iHPNDtLwk3VH5LB5QTw-IrcAL3TAQiU800vgL7RXCH_X7q2SAWzK6LTN9NWBdOmVLODxx1nUBg5h4iD4GHKdV1Q6e-x8df_OTi66XGoY9Jgp9dvo2UnyYNtXh7l-7zeieQziifKXkk9hcls_FzmZtqdrsVNrykPJgN5bJ_Y9UGL_0IOyEplyspoqG8_3-Jni869iclvGUu5T9sKOfyHz3z61NNDyycPE-Swvf1efR5MT3TTjitxJjEjs0vSHJNdy1m00)

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
