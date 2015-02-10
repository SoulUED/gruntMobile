/**
 * Created by qinghui on 14/8/21.
 */
"use strict";

exports.description = "Create PC template";

exports.after = "Now,the file is watched";

exports.notes = "npm install and bower install";


exports.template = function (grunt, init, done) {
    init.process({},[
        init.prompt("name"),
        init.prompt("description"),
        init.prompt("version"),
        init.prompt("homepage"),
        init.prompt("licenses", "MIT"),
        init.prompt("authorName"),
        init.prompt("authorEmail")
    ], function (err, props) {
        var files = init.filesToCopy(props);

        props.author = {
            name: props.authorName,
            email: props.authorEmail
        };

        init.copyAndProcess(files, props);

        init.writePackageJSON("package.json", {
            name: props.name,
            version: props.version,
            description: props.description,
            homepage: props.homepage,
            author: props.author,
            engines: {
                "node": ">= 0.8.0"
            },
            devDependencies: {
                "grunt": "*",
                "grunt-depconcat": "*",
                "grunt-depcombo": "*",
                "grunt-contrib-copy": "*",
                "grunt-contrib-compass": "*",
                "grunt-contrib-cssmin": "*",
                "grunt-contrib-coffee": "*",
                "grunt-contrib-uglify": "*",
                "grunt-contrib-watch": "*",
                "grunt-contrib-clean": "*",
                "grunt-data-uri": "*",
                "grunt-browserify": "*"
            }
        });

        init.writePackageJSON("bower.json", {
            name: props.name,
            version: props.version,
            description: props.description,
            homepage: props.homepage,
            author: {
                "name": props.authorName,
                "email": props.authorEmail
            },
            repository: {
                "type": "git",
                "url": ""
            },
            devDependencies: {}
        });

        done();
    })
};


