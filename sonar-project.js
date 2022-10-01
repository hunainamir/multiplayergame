const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://192.168.50.112:9000',
       options : {
       'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
