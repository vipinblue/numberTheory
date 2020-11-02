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
#### Generate CSV file
change no of rows according to your need 
change variable countRows in utils/countRows.js(line no 7)
```
cd numbertheorynode && npm install &&  cd utils && node createCSV.js
```
this will generate a output.csv file in utils folder

#### Run Project
go to root folder and run below command
```
docker-compose up
```
#### Task 1
