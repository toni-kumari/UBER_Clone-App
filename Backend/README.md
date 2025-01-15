# Backend API Documentation

## `/users/register` Endpoint

### Description
Creates a new user account with the provided information.

### HTTP Method

`POST`

### Request Body
The request body should be in JSON format
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string", 
}
```

### Required Fields
- `name`: User's full name
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_generated_jwt_token",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "_id": "user_id",
        "email": "john.doe@example.com",
    "password": "securepassword123"
    }
}
```

## `/users/login` Endpoint

### Description
Authenticates a user and returns a JWT token.

### HTTP Method

`POST`

### Request Body
The request body should be in JSON format
```json
{
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_generated_jwt_token",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "_id": "user_id",
        "email": "john.doe@example.com"
    }
}
```

## `/users/profile` Endpoint

### Description
Fetches the profile of the authenticated user.

### HTTP Method

`GET`

### Headers
- `Authorization`: Bearer token

### Example Request
```http
GET /users/profile HTTP/1.1
Authorization: Bearer your_generated_jwt_token
```

### Example Response
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "_id": "user_id",
    "email": "john.doe@example.com"
}
```

## `/users/logout` Endpoint

### Description
Logs out the authenticated user by invalidating the JWT token and blacklist the token provided in cookie or headers.

### HTTP Method

`GET`

### Headers
- `Authorization`: Bearer token

### Example Request
```http
GET /users/logout HTTP/1.1
Authorization: Bearer your_generated_jwt_token
```

### Example Response
```json
{
    "message": "Logged out successfully"
}
```
