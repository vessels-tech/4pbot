
labels:
"traefik.port=8080"
"traefik.docker.network=base-network"
"traefik.frontend.rule='Host:4pbot-server.vessels.tech'"
"traefik.protocol=http"



## Examples
curl localhost:8080/next_date?zip=1234


curl -X GET 'http://localhost:8080/payment?elementary_school_children=1&expecting_baby=false&high_school_children=1&young_children=1'
