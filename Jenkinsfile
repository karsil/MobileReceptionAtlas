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
                sh 'npm config ls'
                sh '''npm install'''
            }
        }

        stage('Testing') {
            steps {
                sh 'npm test'
            }
        }
    }
}