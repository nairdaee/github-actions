const config = {
    branches: ['main'], // For releasing stuff
    plugins: [
        '@semantic-release/commit-analyzer', // Increments versions, based on commit messages
        '@semantic-release/release-notes-generator', // Generates release notes
        ["@semantic-release/git", {
            "assets": ["dist/*.js",'dist/*.js.map'],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        '@semantic-release/github',
    ]
};

module.exports = config;