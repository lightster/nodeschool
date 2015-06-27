'use strict';

function generateDependencyHash(tree, dependencies) {
    if (!dependencies) {
        dependencies = {}
    }
    if (!tree || !tree.dependencies) {
        return dependencies
    }

    Object.keys(tree.dependencies).forEach(function (dependencyName) {
        var dependency = tree.dependencies[dependencyName]
        dependencies[dependencyName + '@' + dependency.version] = dependency
        generateDependencyHash(dependency, dependencies)
    })
    return dependencies
}

function getDependencies(tree) {
    var dependencyHash = generateDependencyHash(tree)
    var dependencyList = []
    Object.keys(dependencyHash).forEach(function (dependency) {
        dependencyList.push(dependency)
    })
    dependencyList.sort()
    return dependencyList
}

module.exports = getDependencies
