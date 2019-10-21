pipeline {
    agent any
    tools {nodejs "Books"}
    stages {
    /* stage('Install Node Modules') {
            steps {
                sh 'npm install'
            }
        }
         stage('Build') {
            steps {
                sh 'npm run build'
               
            }
        }*/
        stage('Test'){
            steps{
                sh 'npm run test'
            }
        }
         stage('Sonar Analysis'){
            steps{
                script {
             scannerHome = tool 'sonarScanner';
                        }
                 withSonarQubeEnv('SonarQube'){
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Quality Gate'){
            steps
            {
                scripts
                {
                    when (waitForQualityGate.status != "OK") {
                    echo "Hello"
                }
                   /*timeout(time: 5, unit: 'SECONDS'){
                    waitForQualityGate abortPipeline:false  */
                }
            }
        }
        stage('Artifact Upload'){
            steps{
               sh 'cd /var/lib/jenkins/workspace/React_Pipeline/'
               sh 'zip -r $BUILD_NUMBER.zip build/'
               withCredentials([usernamePassword(credentialsId:'Nexus_Credentials',usernameVariable:'username',passwordVariable:'password')]){
               sh 'curl -v -u $username:$password --upload-file $BUILD_NUMBER.zip http://18.224.155.110:8081/nexus/content/repositories/devopstraining/hexagon6/'
                }
            }
        }/*
        
        stage('Deploy to Ansible'){
            steps{
                sh 'scp -i ~/home/jenkins/.ssh/id_rsa.pub /var/lib/jenkins/workspace/React_Pipeline/$BUILD_NUMBER.zip ansadmin@172.31.20.16:/home/ansadmin'
                sh 'rm -r $BUILD_NUMBER.zip'
            }
        }
        */
      /*stage('Serve') {
            steps {
                sh 'pm2 start npm -- run build-serve --watch'
            }
        }*/
    }
}
