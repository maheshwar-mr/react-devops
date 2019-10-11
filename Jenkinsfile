  
pipeline {
    agent any
    stages {
        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }
         stage('Start App') {
            steps {
                sh 'npm '
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
