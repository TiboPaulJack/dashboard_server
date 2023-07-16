import {taskDatamapper} from "../datamappers/taskDatamapper";


export interface Task {

    id: number,
    title: string,
    content: string,
    color: string,
    status: string,
    user_Id: number,
    user: string,


}




export const taskController = {



    getAllTasks: async (req: any, res: any) => {

            try {
                const tasks: Task[] = await taskDatamapper.getAllTasks();
                res.status(200).json(tasks);
            } catch (error) {
                res.status(500).json(error);
                console.log(error);
            }

    },


    createTask: async (req: any, res: any) => {

            try {
                const task: Task = req.body;
                const newTask: void = await taskDatamapper.createTask(task);
            } catch (error) {
                res.status(500).json(error);
                console.log(error);
            }
    },


    updateTask: async (req: any, res: any) => {

            const id: number = req.params.id;
            const task: Task = req.body;

            try {
                const task: Task = req.body;
                const updatedTask: void = await taskDatamapper.updateTask(id, task);
            } catch (error) {
                res.status(500).json(error);
                console.log(error);
            }
    },


    deleteTask: async (req: any, res: any) => {

            const id: number = req.params.id;

            try {
                const deletedTask: void = await taskDatamapper.deleteTask(id);
                res.status(200)
            } catch (error) {
                res.status(500).json(error);
                console.log(error);
            }
    }
}