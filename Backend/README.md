# Backend API Documentation

## `/users/register` Endpoint


### Description
Creates a new user account with the provided information.

### HTTP Method

`POST`

### Request Body
The request body shold be in JSON format
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
        "_id": "user_id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```
