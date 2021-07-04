module.exports = {
  apps: [{
    name: 'project-x-fe',
    script: './node_modules/nuxt/bin/nuxt.js',
    env: {
      NODE_ENV: 'development',
      PORT: 4444,
    },
    watch: '.',
  }],
  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
