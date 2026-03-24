pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = "sudarshan2244"
        IMAGE_NAME = "devops-app"
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo "No tests yet"
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_HUB_USERNAME/$IMAGE_NAME .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
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
