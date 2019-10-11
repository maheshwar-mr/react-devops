  
pipeline {
    agent any
    stages {
        stage('Kill Processes') {
            steps {
                sh 'pm2 kill'
            }
        }
         stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
      stage('Serve') {
            steps {
                sh 'pm2 start npm -- run build-serve'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
