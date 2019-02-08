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
            environment {
                DATABASE_URL = 'mongodb://nilsjung.de:32807'
                DATABASE_NAME = 'test'
                NODE_ENV = 'test'
            }
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
    }
}