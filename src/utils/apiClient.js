import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

import {WebSocketLink} from '@apollo/client/link/ws';
import {SubscriptionClient} from 'subscriptions-transport-ws';

export class ApolloSub {
  static client = null;
  static init() {
    this.client = new ApolloClient({
      link: new WebSocketLink({
        uri: 'https://hasura.io/learn/graphql',
        options: {
          reconnect: true,
          connectionParams: {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYzYmQ2NWEzNGE5MGIyZTk4YjZmNmQ5MyJ9LCJuaWNrbmFtZSI6Imthc2h5YXAubG9naWN3aW5kIiwibmFtZSI6Imthc2h5YXAubG9naWN3aW5kQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81M2YwNTQ5MjgzODNkY2M0YjUzYzA1OGIwNGRiNGYwNT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmthLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIzLTAxLTEwVDEzOjE4OjI5LjA0N1oiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2JkNjVhMzRhOTBiMmU5OGI2ZjZkOTMiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY3MzQ5ODc3OSwiZXhwIjoxNjczNTM0Nzc5LCJhdF9oYXNoIjoiZ0hjc055ZFd0Z3NrLW9WVWYwZGlPZyIsInNpZCI6IjFzOWhJbUVra3l6QXZHWUN5c0RqM1Y5aTRIb09fNExrIiwibm9uY2UiOiJuckk0RHRkbmo4aDlxaEd1S3FIODNkcEhWbS5IZlZ6MSJ9.N5dI8gbjef4oxWcGMapfaNY7H-94VZ37VPWTJPnyAYsQGuo9aNCL8H-tCDc7k0f0XkVTI47IBQnjkNMQSsXOcVY2VMpTabwDa1sDPfcPPz3zj3IlLBl5KFP765p7ocJMI6F8KsaXOVEFmN5rz8Pqb71rayYNY2dTpQ8t6uPRa9tOf4xR5QYZNgXmeSXi11ul2yLTQjk3_B4B6oy6G1EIDOifWu6BzAI4Y2Dt2Fin75lr0Q8ZHYg75S5CtOc6MrnBGtJaO2K5eFedyrurOclwig7JWboZGmnMaLRJyB3Al4ZeG7IFmFB8vHgTPNx_RYOj8Jobepa1RUOgEkBceclnYA',
            },
          },
        },
      }),
      cache: new InMemoryCache(),
    });
    return this.client;
  }
}

export class ApolloClientApi {
  static clients = null;

  //   uri: 'https://countries.trevorblades.com/graphql',
  // uri: 'https://fruits-api.netlify.app/graphql',
  static init() {
    this.clients = new ApolloClient({
      uri: 'https://rickandmortyapi.com/graphql',
      cache: new InMemoryCache(),
    });
    return this.clients;
  }
}

// export class fruitApolloClientApi {
//   static fClient = null;

//   //   uri: 'https://countries.trevorblades.com/graphql',
//   // uri: 'https://rickandmortyapi.com/graphql',
//   static init() {
//     this.fClient = new ApolloClient({
//       uri: 'https://fruits-api.netlify.app/graphql',
//       cache: new InMemoryCache(),
//     });
//     return this.fClient;
//   }
// }
