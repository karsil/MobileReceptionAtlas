pipeline {
    agent {
        dockerfile {
            filename 'dockerfile'
            dir './backend'
        }
    }
    environment {
        ENV = 'CI'
    }
    stages {
        stage('Build') {
            stage('Build backend') {
                steps {
                    sh 'npm config ls'
                    sh '''npm install'''
                }
            }
        }

        stage('Testing') {
            stage('Test Backend') {
                steps {
                    sh 'npm test'
                }
            }
        }
    }
}