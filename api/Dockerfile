# This image will be based on the oficial iojs docker image
FROM node:latest

# Commands will run in this directory
WORKDIR /home/api

# Add all our code inside that directory that lives in the container
ADD . /home/api

# Install dependencies and generate production dist
RUN npm update -g npm
RUN npm install 
RUN ["chown", "-R", "daemon", "."]


# Tell Docker we are going to use this port
EXPOSE 8080

# The command to run our app when the container is run
#CMD [ "/bin/bash","-c", "chmod +x /home/api/wait_mongo_start.sh && /home/api/wait_mongo_start.sh"]
CMD ["npm", "run", "start-prod"]
