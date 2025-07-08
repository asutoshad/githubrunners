#!/bin/sh

set -e

host="$DB_HOST"
port="$DB_PORT"

echo "Waiting for PostgreSQL at $host:$port..."

while ! nc -z "$host" "$port"; do
  sleep 1
done

echo "PostgreSQL is up - running migrations..."
yarn migrate
exec yarn start
