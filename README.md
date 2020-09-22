# back-end

https://expat-journalp16.herokuapp.com/

POST /api/auth/register

Expects an object with the following key constraints

| name        | type   | required | Unique |
| ------------| ------ | -------- | ------ | 
| `username`  | String | Yes      | Yes    | 
| `password`  | string | Yes      | No     |
| `firstname` | String | yes      | No     |
| `location`  | String | yes      | No     |


Possible status codes

201 User created
409 Username Already Taken
400 Missing username, password, firstname, or location (Error Message should indicate which one)
500 Server Issue


POST /api/auth/login

Expects an object with the following key constraints

| name       | type   | required |
| ---------- | ------ | -------- | 
| `Username` | String | Yes      | 
| `Password` | string | Yes      |

Possible status codes

200 `Welcome ${user.username}`
401 Invalid credentials
400 Password or Username is Missing
500 server error
