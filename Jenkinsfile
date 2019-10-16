pipeline {
    agent any
    tools {nodejs "Books"}
    stages {
     // stage('Install Node Modules') {
           // steps {
               // sh 'npm install'
           // }
       // }
        /*stage('Kill Processes') {
            steps {
                sh 'pm2 kill'
            }
        }*/
         stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Artifact Upload'){
            steps{
               sh 'cd /var/lib/jenkins/workspace/React_Pipeline/'
               sh 'zip build.zip build'
               sh 'curl --upload-file http://18.224.155.110:8081/nexus/devopstraining/Hexgon_React'
            }
        }
      /*stage('Serve') {
            steps {
                sh 'pm2 start npm -- run build-serve --watch'
            }
        }*/
    }
}
