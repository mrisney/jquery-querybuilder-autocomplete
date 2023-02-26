#### Example of JQuery QueryBuilder using selectize with autocomplete
This example is a simple demo, using the https://querybuilder.js.org/ ui with the selectize plugin, and providing autocomplete functionality.

#### Files

There are 2 example demo's one with a local array of name objects 
```
[{ id:  '1', name:  'andrew' },
 { id:  '2', name:  'bob' },
 { id:  '3', name:  'charles' },
 { id:  '4', name:  'david' },
 { id:  '5', name:  'emily' },
 { id:  '6', name:  'frank' },
 { id:  '7', name:  'george' },
 { id:  '8', name:  'harry' },
 { id:  '9', name:  'isabelle' },
 { id:  '10', name:  'jerry' }]
```
And a remote example with a simple node.js app that returns a matching collection of name objects, that matches any part of the name value

#### Using node.js for remote data autocomplete searching
 - Step 1: Initialize npm using the following command 
 ```
	 npm init -y
 ```
 - Step 2: install express and cors
 ```
	 npm install express
	 npm install cors
	 npm install --global http-server
```
 - Step 3: run the  simple application using the following command. this should start a server, and the console should confirm the port the express REST service is running
 ```
	node app.js
	Server listening on PORT 8080
```	 

 - Step 4: confirm  the service is running, in the browser or using curl, query the service with a single character, there should be a JSON response of candidates
```
	curl http://localhost:8080/suggest?q=a
	  [{"id": "3","name": "Charles"},
	    {"id": "4","name": "David"},
	    {"id": "6","name": "Frank"},
	    {"id": "8","name": "Harry"},
	    {"id": "9","name": "Isabelle"}]
```

![image](https://raw.githubusercontent.com/mrisney/jquery-querybuilder-autocomplete/main/suggest-screenshot.png)

####  Test the jquery query builder
When you select the surname, it will preload, and as you type in characters the list will show candidates

![image](https://raw.githubusercontent.com/mrisney/jquery-querybuilder-autocomplete/main/screenshot.png)

