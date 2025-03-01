# **Expansion**

### Endpoint

```
/masters/types
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
        iconUrl: string;
        color: string;
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
        iconUrl: string;
        color: string;
        createdAt: string;
        updatedAt: string;
    }
  ```

### 3. POST

- Request

  ```
    {
        name: string;
        iconUrl: string;
        color: string;
    }
  ```

- Response

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

### 4. PUT

- Params

  ```
  id: number;
  ```

- Request

  ```
    {
        name: string;
        iconUrl: string;
        color: string;
    }
  ```

- Response

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

### 5. DELETE

- Params

  ```
    id: number;
  ```
