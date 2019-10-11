  
pipeline {
    agent any
    tools {nodejs "Books"}
    stages {
        stage('Kill Processes') {
            steps {
                sh 'pm2 kill'
            }
        }
    }
}
