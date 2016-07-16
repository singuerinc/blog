# BLOG

## Serve the blog inside a Docker container

```sh
docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll -it -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll s
open 'http://localhost:4000'
```

## SSL Certificate

- Run the letsencrypt Docker container

Read before: [https://about.gitlab.com/2016/04/11/tutorial-securing-your-gitlab-pages-with-tls-and-letsencrypt/](https://about.gitlab.com/2016/04/11/tutorial-securing-your-gitlab-pages-with-tls-and-letsencrypt/)

```sh
docker run -it --rm -p 443:443 -p 80:80 --name certbot -v $PWD/letsencrypt/etc/letsencrypt:/etc/letsencrypt -v $PWD/letsencrypt/var/lib/letsencrypt:/var/lib/letsencrypt quay.io/letsencrypt/letsencrypt:latest certonly -a manual --email nahuel.scotti@gmail.com -d blog.singuerinc.com
```

- Follow the instructions
- Upload the verification file
- Continue with the verification
- Upload Certificate to GitLab
- Verificate: [https://www.ssllabs.com/ssltest/analyze.html?d=blog.singuerinc.com&latest](https://www.ssllabs.com/ssltest/analyze.html?d=blog.singuerinc.com&latest)