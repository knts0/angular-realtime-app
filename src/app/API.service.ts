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
  message?: ModelStringInput | null;
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

export type ModelChatFilterInput = {
  id?: ModelIDInput | null;
  fromId?: ModelIDInput | null;
  toId?: ModelIDInput | null;
  message?: ModelStringInput | null;
  and?: Array<ModelChatFilterInput | null> | null;
  or?: Array<ModelChatFilterInput | null> | null;
  not?: ModelChatFilterInput | null;
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection";
  items: Array<Chat | null>;
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
}
