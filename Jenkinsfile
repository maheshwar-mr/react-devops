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
        stage('Read FIle'){
            steps{
             export readJSON = readJSON file:'package.json'
             export version = readJSON.version
             echo $version
            }
        }
        stage('Artifact Upload'){
            steps{
               sh 'cd /var/lib/jenkins/workspace/React_Pipeline/'
               //sh 'export temp=$[temp+1]'
               //sh 'mkdir $temp/'
               //sh 'zip -r $temp/build.zip build/'
               /* withCredentials([usernamePassword(credentialsId:'Nexus_Credentials',usernameVariable:'username',passwordVariable:'password')]){
               sh 'curl -v -u $username:$password --upload-file build.zip http://18.224.155.110:8081/nexus/content/repositories/devopstraining/hexagon6/'
                }*/
            }
        }
      /*stage('Serve') {
            steps {
                sh 'pm2 start npm -- run build-serve --watch'
            }
        }*/
    }
}
