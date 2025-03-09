# **Pokemon**

### Endpoint

```
/pokemon
```

#### TYPE _( from master )_

```
  {
    id: number;
    name: string;
    iconUrl: string;
    color: string;
    createdAt: string;
    updatedAt: string;
  }
```

### Stage

```
BASIC | STAGE 1 | STAGE 2
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
        stage: STAGE;
        evolvedFromId?: number;
        evolvedFrom: Pokemon;
        imageUrl?: string;
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
    stage: STAGE;
    evolvedFromId?: number;
    evolvedFrom: Pokemon;
    imageUrl?: string;
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
    imageUrl?: string;
    stage: STAGE;
    evolvedFromId?: number;
  }
  ```

- Response

  ```
  {
    id: number;
    name: string;
    typeId: number;
    stage: STAGE;
    evolvedFromId?: number;
    imageUrl?: string;
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
    imageUrl?: string;
    stage: STAGE;
    evolvedFromId?: number;
  }
  ```

- Response

  ```
  {
    id: number;
    name: string;
    typeId: number;
    stage: STAGE;
    evolvedFromId?: number;
    imageUrl?: string;
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
/pokemon/all
```

- Response

  ```
  [{
    id: number;
    name: string;
  }]
  ```

### 6. GET DEFAULT

#### Endpoint

```
/pokemon/default
```

- Response

  ```
  [{
    id: number;
    name: string;
    typeId: number;
    stage: STAGE;
    evolvedFromId?: number;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
  }]
  ```
