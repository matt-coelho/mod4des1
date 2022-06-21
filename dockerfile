FROM node
WORKDIR G:\Downloads\#BrowserDownload\IGTI\vs-code\modulo4\mod4des1
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8090
CMD ["node", "index.js"]