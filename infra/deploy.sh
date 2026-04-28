#!/usr/bin/env bash
# Deploy-Script für Infra-Stack auf ~/augur/
set -euo pipefail

DEPLOY_DIR="$HOME/augur"

echo "==> Kopiere Konfiguration nach $DEPLOY_DIR ..."
mkdir -p "$DEPLOY_DIR/traefik"
cp "$(dirname "$0")/docker-compose.infra.yml" "$DEPLOY_DIR/"
cp "$(dirname "$0")/traefik/traefik.yml"      "$DEPLOY_DIR/traefik/"

if [ ! -f "$DEPLOY_DIR/.env" ]; then
  cp "$(dirname "$0")/.env.example" "$DEPLOY_DIR/.env"
  echo "ACHTUNG: $DEPLOY_DIR/.env angelegt — bitte Passwörter setzen!"
fi

echo "==> Stoppe alten Stack ..."
cd "$DEPLOY_DIR"
docker compose -f docker-compose.infra.yml down 2>/dev/null || true

echo "==> Entferne altes acme.json (Neuzertifizierung) ..."
docker volume rm augur_traefik-letsencrypt 2>/dev/null || true

echo "==> Starte Stack neu ..."
docker compose -f docker-compose.infra.yml up -d

echo ""
echo "==> Status:"
docker compose -f docker-compose.infra.yml ps

echo ""
echo "==> Traefik-Logs (letzte 50 Zeilen):"
docker logs traefik --tail 50
