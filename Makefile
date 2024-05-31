dev.upgrade:
	pnpm upgrade --latest
	pnpm i --save-dev eslint@^8.57.0
	node ./readme.mjs >> README.md

dev.build: 
	docker compose -f "docker-compose.dev.yml" build --pull --no-cache

dev.down:
	docker compose -f "docker-compose.dev.yml" down

dev.up:
	docker compose -f "docker-compose.dev.yml" up 

dev.log:
	docker compose -f "docker-compose.dev.yml" logs -f

prod.build: 
	docker compose -f "docker-compose.prod.yml" build --pull --no-cache --progress=plain

prod.down:
	docker compose -f "docker-compose.prod.yml" down

prod.up:
	docker compose -f "docker-compose.prod.yml" up -d

prod.log:
	docker compose -f "docker-compose.prod.yml" logs -f

prod.network:
	docker network create traefik.public