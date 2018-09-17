FROM node:7
#/app should be your full project directory 
ENV workdir /app  
WORKDIR ${workdir}
COPY package.json ${workdir}
RUN npm install
COPY . ${workdir}
CMD npm start
EXPOSE 3000