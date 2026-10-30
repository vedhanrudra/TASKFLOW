const mongoose = require("mongoose")

const taskSchema = new mongoose.schema({

    title: {
        type : String,
        required : true
    },
    completed : {
        type: boolean,
        default : false,
    },
    },
{
    timestamps: true
  }
) 

const Task = mongoose.model("Task",taskSchema);

module.exports = Task;