pipeline {
  agent none
  stages {
    stage('Build') {
      parallel {
        stage('Build backend') {
          agent {
              dockerfile {
                  filename 'dockerfile'
                  dir './backend'
              }
          }
          steps {
            sh '''npm install'''
          }
        }
      }
    }
  }
}