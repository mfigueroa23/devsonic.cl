FROM nginx:1.27.5
COPY ./dist/devsonic.cl/browser/ /usr/share/nginx/html/
COPY ./devsonic-cl.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
