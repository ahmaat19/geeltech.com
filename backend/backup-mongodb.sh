export CONTAINER_NAME="geeltech_db_1"
export DATABASE_NAME="geeltech"
export BACKUP_LOCATION="/root/backups"
export TIMESTAMP=$(date +'%Y%m%d%H%M%S')
docker exec -t ${CONTAINER_NAME} mongodump --out /data/db/${DATABASE_NAME}-backup-${TIMESTAMP} --db ${DATABASE_NAME}
docker cp ${CONTAINER_NAME}:/data/db/${DATABASE_NAME}-backup-${TIMESTAMP} ${BACKUP_LOCATION}