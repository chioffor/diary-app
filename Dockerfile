FROM node

WORKDIR /home

RUN apt-get -yqq update

ADD . /home/
RUN npm run build && npm install -g serve

CMD ["serve", "-s", "build"]


