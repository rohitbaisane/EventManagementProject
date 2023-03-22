RANDOM_TAG=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 10 | head -n 1)

export RANDOM_TAG

docker compose -f docker-compose.build.yaml build

docker push rohitbaisane/backend-service:$RANDOM_TAG

docker push rohitbaisane/api-service:$RANDOM_TAG

docker push rohitbaisane/mongodb-service:$RANDOM_TAG

docker push rohitbaisane/auditlog-service:$RANDOM_TAG

docker push rohitbaisane/rabbitmq-service:$RANDOM_TAG

docker push rohitbaisane/mongointerface-service:$RANDOM_TAG

