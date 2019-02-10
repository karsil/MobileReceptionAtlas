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
            steps {
                dir('backend') {
                    sh 'npm config ls'
                    sh '''npm install'''
                }
            }
        }

        stage('Testing') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
    }
}