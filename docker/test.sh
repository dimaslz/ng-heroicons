version=$1

docker rm -f angular-ng-heroicons-container && docker rmi -f angular-ng-heroicons-image && docker build . -f docker/Dockerfile.$1 -t angular-ng-heroicons-image && docker run --name angular-ng-heroicons-container angular-ng-heroicons-image