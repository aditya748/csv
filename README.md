1)Open the Dockerfile and replace "/app" with your directory location
2)Upload/Paste your csv file data in project main directory with name csvFile.csv
3)Go to the project directory and build docker image using command "docker build {projectDirectory} -t {ImageName}" where "projectDirectory" is the location of the dockerfile and "ImageName" is the name of image of the project to be created
3)After successful compelition of 3rd step run command with your image file name "docker run -p 8080:3000 {ImageName}"
4)Run the api on localhost://8080/:key,where key is random key that can be passed to the API
