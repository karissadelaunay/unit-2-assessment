const todos = []

module.exports = {
    getAll: function() {
        return todos;
    },
    create: function(todo) {
        todos.push(todo);
    }
};


// {
//     todo: {
//         type: String
//     },
//     done: {
//         type: Boolean,
//         default: false
//     }
// }