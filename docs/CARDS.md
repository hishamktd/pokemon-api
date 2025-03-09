# **Pokemon**

### Endpoint

```
/cards
```

#### TYPE _( from master )_

```
  {
    id: number;
    name: string;
    iconUrl: string;
    color: string;
  }
```

#### POKEMON _( from pokemon )_

```
  {
    id: number;
    name: string;
    typeId: number;
    stage: STAGE;
    imageUrl?: string;
  }
```

#### EXPANSION _( from master expansion )_

```
{
  id: number;
  name: string;
  totalCards: number;
  points?: string;
  imageUrl?: string;
}

```

### CARD_TYPE

```
POKEMON | SUPPORTER | ITEM | POKEMON_TOOL | ITEM_FOSSIL
```

### Methods

### 1. GET PAGINATED

- Params

  ```
  page: number;
  size: number;
  query: string;
  sortBy: string;
  order: ASC | DESC;
  ```

- Response

  ```
  {
     data: [{
        id: number;
        name: string;
        type: TYPE;
        typeId: number;
        cardType: CARD_TYPE;
        pokemonId?: number;
        Pokemon?: Pokemon;
        expansionId: number;
        expansion: EXPANSION;
        description?: string;
        thumbnailUrl?: string;
        createdAt: string;
        updatedAt: string;
     }],
     meta: {
        page: number,
        size: number,
        itemCount: number,
        pageCount: number,
        hasPreviousPage: Boolean,
        hasNextPage: Boolean
     }
  }
  ```

### 2. GET

- Params

  ```
  id: number;
  ```

- Response

  ```
  {
    id: number;
    name: string;
    type: TYPE;
    typeId: number;
    cardType: CARD_TYPE;
    pokemonId?: number;
    Pokemon?: Pokemon;
    expansionId: number;
    expansion: EXPANSION;
    description?: string;
    thumbnailUrl?: string;
    createdAt: string;
    updatedAt: string;
  }
  ```

### 3. POST

- Request

  ```
  {
    name: string;
    typeId: number;
    cardType: CARD_TYPE;
    pokemonId?: number;
    description?: string;
    thumbnailUrl?: string;
    expansionId: number;
  }
  ```

- Response

  ```
  {
    id: number;
    name: string;
    typeId: number;
    cardType: CARD_TYPE;
    pokemonId?: number;
    description?: string;
    thumbnailUrl?: string;
    expansionId: number;
    createdAt: string;
    updatedAt: string;
  }
  ```

### 4. PUT

- Params

  ```
  id: number;
  ```

- Request

  ```
  {
    name: string;
    typeId: number;
    cardType: CARD_TYPE;
    pokemonId?: number;
    description?: string;
    thumbnailUrl?: string;
    expansionId: number;
  }
  ```

- Response

  ```
  {
    id: number;
    name: string;
    typeId: number;
    cardType: CARD_TYPE;
    pokemonId?: number;
    description?: string;
    expansionId: number;
    thumbnailUrl?: string;
    createdAt: string;
    updatedAt: string;
  }
  ```

### 5. DELETE

- Params

  ```
    id: number;
  ```

### 6. GET ALL

#### Endpoint

```
/cards/all
```

- Response

  ```
  [{
    id: number;
    name: string;
  }]
  ```

### 7. GET DEFAULT

#### Endpoint

```
/pokemon/default
```

- Response

  ```
  {
    id: number;
    name: string;
    type: null;
    typeId: null;
    cardType: CARD_TYPE;
    pokemon: null;
    pokemonId?: null;
    expansionId: null;
    expansion: null;
    description?: string;
    thumbnailUrl?: string;
    createdAt: string;
    updatedAt: string;
  }
  ```
