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
        }
         stage('Build') {
            steps {
                sh 'npm run build'
            }
        }*/
        stage('Artifact Upload'){
            steps{
               sh 'cd /var/lib/jenkins/workspace/React_Pipeline/'
               sh 'zip -r build.zip build/'
               sh 'curl -v -u $username:$password --upload-file build.zip http://18.224.155.110:8081/nexus/content/repositories/devopstraining/hexagon/'
            }
        }
      /*stage('Serve') {
            steps {
                sh 'pm2 start npm -- run build-serve --watch'
            }
        }*/
    }
}
