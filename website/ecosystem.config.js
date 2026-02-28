module.exports = {
    apps: [
        {
            name: "elevare-web",
            script: "C:\\Users\\benja\\Elevare Consulting\\website\\node_modules\\next\\dist\\bin\\next",
            args: "dev",
            cwd: "C:\\Users\\benja\\Elevare Consulting\\website",
            interpreter: "node",
            env: {
                NODE_ENV: "development",
                PORT: 3000,
            },
            watch: false,
            autorestart: true,
        },
    ],
};
