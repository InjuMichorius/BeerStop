const users = []

//Join user to chat
function userJoin(id, username, roomId) {
    const user = { id, username, roomId }

    users.push(user)
    return user
}

//Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id)
}

module.exports = {
    userJoin,
    getCurrentUser
}