pipeline {
  agent {
    docker {
      image 'node:11-alpine'
      args '-p 5000:5000'
    }

  }
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh '''cd 
backend 

&& npm install'''
          }
        }
        stage('') {
          steps {
            sh 'cd frontend && npm install'
          }
        }
      }
    }
  }
}