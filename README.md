# BLOG

## Serve the blog inside a Docker container

```sh
docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll -it -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll s
open 'http://localhost:4000'
```

## SSL Certificate

- Run the letsencrypt Docker container

```sh
docker run -it --rm -p 443:443 -p 80:80 --name certbot -v $PWD/letsencrypt/etc/letsencrypt:/etc/letsencrypt -v $PWD/letsencrypt/var/lib/letsencrypt:/var/lib/letsencrypt quay.io/letsencrypt/letsencrypt:latest certonly -a manual --email nahuel.scotti@gmail.com -d blog.singuerinc.com
```

- Follow the instructions
- Upload the verification file
- Continue with the verification
- Upload Certificate to GitLab