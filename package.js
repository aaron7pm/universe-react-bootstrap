Package.describe({
    name: 'universe:react-bootstrap',
    version: '0.25',
    summary: 'ReactBootstrap project wrapped for Meteor with Universe:modules',
    git: 'https://github.com/aaron7pm/universe-react-bootstrap',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'react-runtime',
        'universe:modules'
    ]);

    api.addFiles([
        'bower_components/react-bootstrap/react-bootstrap.js',
        'main.import.jsx',
        'system-config.js'
    ]);
});
