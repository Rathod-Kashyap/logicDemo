import {gql} from '@apollo/client';
import React, {Component} from 'react';
import {ApolloClientApi, ApolloSub} from '../../utils/apiClient';

export const upDateFruit = gql`
  mutation (
    $id: ID!
    $fruit_name: String!
    $sci: String!
    $tree_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    updateFruit(
      id: $id
      fruit_name: $fruit_name
      scientific_name: $sci
      tree_name: $tree_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      fruit_name
      tree_name
      bloom
    }
  }
`;

export const p = new Promise((resolve, reject) => {
  ApolloClientApi.client
    .mutate({
      mutation: upDateFruit,
      variables: {
        id: 201,
        fruit_name: 'Tomato!!',
        sci: 'Tomato!!',
        tree_name: 'MANGOO!!',
        family: 'MANGOO!!',
        origin: 'MANGOO!!',
        description: 'MANGOO!!',
        bloom: 'MANGOO!!',
        maturation_fruit: 'MANGOO!!',
        life_cycle: 'MANGOO!!',
        climatic_zone: 'MANGOO!!',
      },
    })
    .then(result => {
      return resolve(result);
      // console.log(result.data.updateFruit);
      // this.setData(result.data.updateFruit);
      // this.handleEnd(false);
    })
    .catch(err => {
      return reject(err);
      // console.log('Error', err);
      // this.handleEnd(false);
    });
});

export const AddFruit = gql`
  mutation (
    $id: ID!
    $fruit_name: String!
    $sci: String!
    $tree_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    addFruit(
      id: $id
      fruit_name: $fruit_name
      scientific_name: $sci
      tree_name: $tree_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      fruit_name
      tree_name
      bloom
    }
  }
`;

export const pAdd = new Promise((resolve, reject) => {
  ApolloClientApi.client
    .mutate({
      mutation: AddFruit,
      variables: {
        id: 201,
        fruit_name: 'MANGOO!!',
        sci: 'MANGOO!!',
        tree_name: 'MANGOO!!',
        family: 'MANGOO!!',
        origin: 'MANGOO!!',
        description: 'MANGOO!!',
        bloom: 'MANGOO!!',
        maturation_fruit: 'MANGOO!!',
        life_cycle: 'MANGOO!!',
        climatic_zone: 'MANGOO!!',
      },
    })
    .then(e => {
      return resolve(e);
    })
    .catch(error => {
      return reject(error);
    });
});

export const rick = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        ...nameInfo
        id
        image
        status
        species
        origin {
          name
        }
      }
    }
    charactersByIds(ids: 1) {
      ...nameInfo
    }
  }
  fragment nameInfo on Character {
    name
    created
  }
`;

// export const subTodo = new Promise((resolve, reject) => {
//   ApolloSub.client
//     .subscribe({
//       subscription: subValue,
//     })
//     .then(result => {
//       return resolve(result);
//       // console.log(result.data.updateFruit);
//       // this.setData(result.data.updateFruit);
//       // this.handleEnd(false);
//     })
//     .catch(err => {
//       return reject(err);
//       // console.log('Error', err);
//       // this.handleEnd(false);
//     });
// });

export const subValue = gql`
  subscription {
    users {
      name
    }
  }
`;
