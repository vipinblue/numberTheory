# Number Theory Dashboard Setup

To run this project, follow these steps.
Prerequest => [Docker](https://www.docker.com/ "Docker") required
port => 5003(client), 5001(server) (you may change )

## Overview

Backend => Expressjs, SocketIo
Frontend => NextJs, Redux, axios, bootstrap 4

### Installation
folder structure 
```
numbertheorynode > server folder
numbertheroyreact > client folder
```

#### Copy ENV file in app
```
cd numbertheorynode && cp .example.env .env && cd ..
cd numbertheroyreact && cp .example.env .env
```


#### Run Project
go to root folder and run below command
```
docker-compose up
```
#### Task 1

visit [http://localhost:5003/](http://localhost:5003/ "http://localhost:5003/") page of client (showing random data)

to check real time change hit server API end point ([http://localhost:5001/api/v1/change/dashboard](http://localhost:5001/api/v1/change/dashboard "http://localhost:5001/api/v1/change/dashboard"))

now you able to see real time change dashboard

#### Task 2

##### Generate CSV file
change no of rows according to your need 
change variable countRows in utils/countRows.js(line no 7)
```
cd numbertheorynode && npm install &&  cd utils && node createCSV.js
```
this will generate a output.csv file in utils folder
visit [http://localhost:5003/users](http://localhost:5003/users "http://localhost:5003/users") page of client 
