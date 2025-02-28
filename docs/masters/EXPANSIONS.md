# **Expansion**

### Endpoint

```
/masters/expansions
```

### Methods

### 1. GET ALL

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
      totalCards: number;
      points?: string;
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
    totalCards: number;
    points?: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
  }
  ```

### 3. POST

- Request

  ```
  {
    id: number;
    name: string;
    totalCards: number;
    points?: string;
    imageUrl?: string;
  }
  ```

- Response

  ```
  {
    id: number;
    name: string;
    totalCards: number;
    points?: string;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
  }
  ```

### 4. PUT

- Request

  ```
  {
    id: number;
    name: string;
    totalCards: number;
    points?: string;
    imageUrl?: string;
  }
  ```

- Response

  ```
  {
    id: number;
    name: string;
    totalCards: number;
    points?: string;
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
