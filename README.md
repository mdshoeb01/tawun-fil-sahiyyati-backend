# tawun-fil-sahiyyati-backend
This project is for management of an Non profit Organisation which provides health care services specially to lower middle class group in our society



#### user setup for migration

CREATE USER 'venkat'@'localhost' IDENTIFIED BY 'venkat';

grant all privileges on health_care.* to 'venkat'@'localhost';

#### Setting up mysql container

> cd local-mysql

#### Setting up node container

Locate to project directory 

##### Build a docker image

> docker build . -t venkat/node-health 

##### Run a container from the image in detached mode

> docker run -p 4020:4020 -d venkat/node-health



