  
pipeline {
    agent any
    tools {nodejs "Books"}
    stages {
      stage('Echo'){
        steps{
          echo "Testing Webhook"
        }
      }
      stage('Install Node Modules') {
            steps {
                sh 'npm install'
            }
        }
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
                sh 'pm2 start npm -- run build-serve --watch'
            }
        }
    }
}
