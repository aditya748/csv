1)Open the Dockerfile and replace "/app" with your directory location
2)Go to the project directory and build docker image using command "docker build -t test"
3)After successful compelition of 2nd step run command with your image file name "docker run -p 8080:3000 test"
4)Run the api on localhost://8080/:key,where key is random key that can be passed to the API
