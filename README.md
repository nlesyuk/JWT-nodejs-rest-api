# JWT NodeJS ExpressJS

[Access token](https://www.bezkoder.com/node-js-jwt-authentication-postgresql/)
[Refresh token](https://bezkoder.com/jwt-refresh-token-node-js/)

The Client typically attaches JWT in Authorization header with Bearer prefix:
`Authorization: Bearer [header].[payload].[signature]`
Or only in x-access-token header:
`x-access-token: [header].[payload].[signature]`


| Methods | Urls             | Actions                    |
| ------- | ---------------- | -------------------------- |
| POST    | /api/auth/signup | signup new account         |
| POST    | /api/auth/signin | login an account           |
| GET     | /api/test/all    | retrieve public content    |
| GET     | /api/test/user   | access User’s content      |
| GET     | /api/test/mod    | access Moderator’s content |
| GET     | /api/test/admin  | access Admin’s content     |



# PG (postgres)
*pg for PostgreSQL and pg-hstore for converting data into the PostgreSQL hstore format.









# test

{
    "username": "test",
    "email": "test@gmail.com",
    "password": "123",
    "roles": ["user"]
}

{
    "username": "test",
    "password": "123",
}

{
  "id": 1,
  "username": "test",
  "email": "test@gmail.com",
  "roles": [
    "ROLE_USER"
  ],
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU4MTY3NTI1LCJleHAiOjE2NTgyNTM5MjV9.PSQSLdT3bNauZLv2feNiBzC25R9syRr5YeulQ6PoVZU"
}