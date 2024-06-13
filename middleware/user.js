const { User } = require('../db');

async function UserMiddleware(req, res, next) {
    const name = req.headers.name;
    const password = req.headers.password;
    
    try {
        const user = await User.findOne({ name, password });
        
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        
        next();
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred',
        });
    }
}

module.exports = UserMiddleware;
