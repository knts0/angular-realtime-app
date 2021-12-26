/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateChatByFromId: OnCreateChatByFromIdSubscription;
  onCreateChat: OnCreateChatSubscription;
  onUpdateChat: OnUpdateChatSubscription;
  onDeleteChat: OnDeleteChatSubscription;
  onCreateCustomer: OnCreateCustomerSubscription;
  onUpdateCustomer: OnUpdateCustomerSubscription;
  onDeleteCustomer: OnDeleteCustomerSubscription;
  onCreateOperator: OnCreateOperatorSubscription;
  onUpdateOperator: OnUpdateOperatorSubscription;
  onDeleteOperator: OnDeleteOperatorSubscription;
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
};

export type CreateChatInput = {
  id?: string | null;
  fromId: string;
  toId: string;
  message: string;
};

export type ModelChatConditionInput = {
  fromId?: ModelIDInput | null;
  toId?: ModelIDInput | null;
  message?: ModelIDInput | null;
  and?: Array<ModelChatConditionInput | null> | null;
  or?: Array<ModelChatConditionInput | null> | null;
  not?: ModelChatConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Chat = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChatInput = {
  id: string;
  fromId?: string | null;
  toId?: string | null;
  message?: string | null;
};

export type DeleteChatInput = {
  id: string;
};

export type CreateCustomerInput = {
  id?: string | null;
  name: string;
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Customer = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerInput = {
  id: string;
  name?: string | null;
};

export type DeleteCustomerInput = {
  id: string;
};

export type CreateOperatorInput = {
  id?: string | null;
  name: string;
};

export type ModelOperatorConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelOperatorConditionInput | null> | null;
  or?: Array<ModelOperatorConditionInput | null> | null;
  not?: ModelOperatorConditionInput | null;
};

export type Operator = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOperatorInput = {
  id: string;
  name?: string | null;
};

export type DeleteOperatorInput = {
  id: string;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null;
  fromId?: ModelIDInput | null;
  toId?: ModelIDInput | null;
  message?: ModelIDInput | null;
  and?: Array<ModelChatFilterInput | null> | null;
  or?: Array<ModelChatFilterInput | null> | null;
  not?: ModelChatFilterInput | null;
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection";
  items: Array<Chat | null>;
  nextToken?: string | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection";
  items: Array<Customer | null>;
  nextToken?: string | null;
};

export type ModelOperatorFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelOperatorFilterInput | null> | null;
  or?: Array<ModelOperatorFilterInput | null> | null;
  not?: ModelOperatorFilterInput | null;
};

export type ModelOperatorConnection = {
  __typename: "ModelOperatorConnection";
  items: Array<Operator | null>;
  nextToken?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type CreateChatMutation = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChatMutation = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteChatMutation = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateOperatorMutation = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOperatorMutation = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOperatorMutation = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type GetChatQuery = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type ListChatsQuery = {
  __typename: "ModelChatConnection";
  items: Array<{
    __typename: "Chat";
    id: string;
    fromId: string;
    toId: string;
    message: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetOperatorQuery = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListOperatorsQuery = {
  __typename: "ModelOperatorConnection";
  items: Array<{
    __typename: "Operator";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateChatByFromIdSubscription = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateChatSubscription = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateChatSubscription = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteChatSubscription = {
  __typename: "Chat";
  id: string;
  fromId: string;
  toId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOperatorSubscription = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOperatorSubscription = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOperatorSubscription = {
  __typename: "Operator";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateChat(
    input: CreateChatInput,
    condition?: ModelChatConditionInput
  ): Promise<CreateChatMutation> {
    const statement = `mutation CreateChat($input: CreateChatInput!, $condition: ModelChatConditionInput) {
        createChat(input: $input, condition: $condition) {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChatMutation>response.data.createChat;
  }
  async UpdateChat(
    input: UpdateChatInput,
    condition?: ModelChatConditionInput
  ): Promise<UpdateChatMutation> {
    const statement = `mutation UpdateChat($input: UpdateChatInput!, $condition: ModelChatConditionInput) {
        updateChat(input: $input, condition: $condition) {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChatMutation>response.data.updateChat;
  }
  async DeleteChat(
    input: DeleteChatInput,
    condition?: ModelChatConditionInput
  ): Promise<DeleteChatMutation> {
    const statement = `mutation DeleteChat($input: DeleteChatInput!, $condition: ModelChatConditionInput) {
        deleteChat(input: $input, condition: $condition) {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChatMutation>response.data.deleteChat;
  }
  async CreateCustomer(
    input: CreateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!, $condition: ModelCustomerConditionInput) {
        createCustomer(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerMutation>response.data.createCustomer;
  }
  async UpdateCustomer(
    input: UpdateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<UpdateCustomerMutation> {
    const statement = `mutation UpdateCustomer($input: UpdateCustomerInput!, $condition: ModelCustomerConditionInput) {
        updateCustomer(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerMutation>response.data.updateCustomer;
  }
  async DeleteCustomer(
    input: DeleteCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!, $condition: ModelCustomerConditionInput) {
        deleteCustomer(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerMutation>response.data.deleteCustomer;
  }
  async CreateOperator(
    input: CreateOperatorInput,
    condition?: ModelOperatorConditionInput
  ): Promise<CreateOperatorMutation> {
    const statement = `mutation CreateOperator($input: CreateOperatorInput!, $condition: ModelOperatorConditionInput) {
        createOperator(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOperatorMutation>response.data.createOperator;
  }
  async UpdateOperator(
    input: UpdateOperatorInput,
    condition?: ModelOperatorConditionInput
  ): Promise<UpdateOperatorMutation> {
    const statement = `mutation UpdateOperator($input: UpdateOperatorInput!, $condition: ModelOperatorConditionInput) {
        updateOperator(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOperatorMutation>response.data.updateOperator;
  }
  async DeleteOperator(
    input: DeleteOperatorInput,
    condition?: ModelOperatorConditionInput
  ): Promise<DeleteOperatorMutation> {
    const statement = `mutation DeleteOperator($input: DeleteOperatorInput!, $condition: ModelOperatorConditionInput) {
        deleteOperator(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOperatorMutation>response.data.deleteOperator;
  }
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async GetChat(id: string): Promise<GetChatQuery> {
    const statement = `query GetChat($id: ID!) {
        getChat(id: $id) {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChatQuery>response.data.getChat;
  }
  async ListChats(
    filter?: ModelChatFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChatsQuery> {
    const statement = `query ListChats($filter: ModelChatFilterInput, $limit: Int, $nextToken: String) {
        listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            fromId
            toId
            message
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChatsQuery>response.data.listChats;
  }
  async GetCustomer(id: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
        listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomersQuery>response.data.listCustomers;
  }
  async GetOperator(id: string): Promise<GetOperatorQuery> {
    const statement = `query GetOperator($id: ID!) {
        getOperator(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOperatorQuery>response.data.getOperator;
  }
  async ListOperators(
    filter?: ModelOperatorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOperatorsQuery> {
    const statement = `query ListOperators($filter: ModelOperatorFilterInput, $limit: Int, $nextToken: String) {
        listOperators(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOperatorsQuery>response.data.listOperators;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateChatByFromIdListener(
    fromId: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChatByFromId">>
  > {
    const statement = `subscription OnCreateChatByFromId($fromId: ID!) {
        onCreateChatByFromId(fromId: $fromId) {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      fromId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateChatByFromId">
      >
    >;
  }

  OnCreateChatListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChat">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateChat {
        onCreateChat {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChat">>
  >;

  OnUpdateChatListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChat">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChat {
        onUpdateChat {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChat">>
  >;

  OnDeleteChatListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChat">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChat {
        onDeleteChat {
          __typename
          id
          fromId
          toId
          message
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChat">>
  >;

  OnCreateCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCustomer">>
  >;

  OnUpdateCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomer {
        onUpdateCustomer {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCustomer">>
  >;

  OnDeleteCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomer {
        onDeleteCustomer {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCustomer">>
  >;

  OnCreateOperatorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOperator">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOperator {
        onCreateOperator {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOperator">>
  >;

  OnUpdateOperatorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOperator">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOperator {
        onUpdateOperator {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOperator">>
  >;

  OnDeleteOperatorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOperator">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOperator {
        onDeleteOperator {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOperator">>
  >;

  OnCreateRestaurantListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  >;

  OnUpdateRestaurantListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  >;

  OnDeleteRestaurantListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  >;
}
