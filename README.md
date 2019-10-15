# subastas-app

Web application "Subastas App", it is a React-Meteor app and have also it is connect to a MongoDB with information of auctions.

![](https://firebasestorage.googleapis.com/v0/b/proyectodiana-b940e.appspot.com/o/app.PNG?alt=media&token=814630b9-b982-4874-8544-896384ae96c7)

<hr>

## Running the website

Since this application is not a static application, you should have some thinks to do before you can start.

<hr>

### Requirements

#### Node.js

It is not necesary to have Node.js installed but it is recommended. If you don't have Node.js installed, just go to the following page and continue with the instructions: <a href="https://nodejs.org/es/download/"> Node.js WebSite </a>

#### MongoDB

Meteor.js have an internal MongoDB, but it is also recommended to install MondoDB. To install it just go to: <a href="https://www.mongodb.com/download-center/community">MongoDB Community Server</a>

To run it:

```
mongod
```

Because Meteor.js run its own data base, you can access it using ```meteor mongo``` in the root directory of the application.
 
#### Meteor 
OSX / LINUX: Run the following command in your terminal to install the latest official Meteor release:  
`curl https://install.meteor.com/ | sh`

Windows: First install Chocolatey, then run this command using an Administrator command prompt:  
`choco install meteor`

For more information about the installation of it go: <a href="https://www.meteor.com/install">Meteor.js Installation</a>

### Important information

You need to create a
`.env`
File in root of the proyect, in this file you should add the
`DATABASE_URL=<yourDatabaseURL>`

For example `DATABASE_URL=mongodb://localhost/subastas-app`

If you don't do this step, Meteor.js will automatically deploy the MongoDB in the port 3001.

So the program will know where is the data base. If you have access to an Atlas Cluster you can add it also there, that information will never get into a repository at least you change de `.gitignore` file.

## Start

### If you have Node.js

```bash
# Go to root directory
cd subastas-app
# Install dependencies
npm install
# Start aplication
meteor
# Client on http://localhost:3000
```

### If you don't have Node.js

```bash
# Go to root directory
cd subastas-app
# Install dependencies
meteor npm install
# Start aplication
meteor
# Client on http://localhost:3000
```


<hr>

## Author

[Camilo Beltran](https://github.com/cabeltran10) and [Carlos Mendoza](https://github.com/carlosmendoza)

<hr>

## Link

<a href="https://subastas-app.herokuapp.com/">SubastasApp Web Application</a>

<hr>

<h2>Licence</h2>
<p>The MIT License (MIT)</p>
<p>Copyright (c) Camilo Beltran and Carlos Mendoza</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

<hr>

## Software Version Used in this project

It is possible that in the moment that you see this code the versions may not be the same ones. In many cases it doesn't matter but if you have any kind of problems you can try using the specific version:

```bash
# NodeJS
v10.16.3
# MeteorJS
Meteor 1.8.1
#MondoDB
v4.2.0
```