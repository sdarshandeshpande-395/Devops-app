pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = "sudarshan2244"
        IMAGE_NAME = "devops-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/sdarshandeshpande-395/Devops-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo "No tests added yet"
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_HUB_USERNAME/$IMAGE_NAME .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([string(credentialsId: 'docker-pass', variable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_HUB_USERNAME --password-stdin'
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push $DOCKER_HUB_USERNAME/$IMAGE_NAME'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop devops-container || true
                docker rm devops-container || true
                docker run -d -p 3000:3000 --name devops-container $DOCKER_HUB_USERNAME/$IMAGE_NAME
                '''
            }
        }
    }
}
