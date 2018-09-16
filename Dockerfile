FROM node:7
WORKDIR /Users/aditya/Desktop/Aditya/practise/svg
COPY package.json /Users/aditya/Desktop/Aditya/practise/svg
RUN npm install
COPY . /Users/aditya/Desktop/Aditya/practise/svg
CMD npm start
EXPOSE 3000