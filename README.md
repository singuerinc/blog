# BLOG

## Serve the blog inside a Docker container

```sh
docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll -it -p 127.0.0.1:4000:4000 jekyll/jekyll jekyll s
open 'http://localhost:4000'
```
