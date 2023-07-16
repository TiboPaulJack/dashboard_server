import {userController} from "../controllers/userController";
import {productController} from "../controllers/productController";
import {categoriesController} from "../controllers/categoriesController";
import {colorController} from "../controllers/colorController";
import {taskController} from "../controllers/taskController";
import {searchController} from "../controllers/searchController";

const express = require("express");

const router = express.Router();


// User routes
router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.post("/user", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

// Product routes
router.get("/products", productController.getAllProducts);
router.post("/product", productController.createProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

// Task routes
router.get("/tasks", taskController.getAllTasks);
router.post("/task", taskController.createTask);
router.patch("/task/:id", taskController.updateTask);
router.delete("/task/:id", taskController.deleteTask);

// Categories & Colors routes
router.get("/categories", categoriesController.getAllCategories);
router.get("/colors", colorController.getAllColors);

// Search route
router.get("/search/:search", searchController.search);


// 404
router.use((req: any, res: any) => {
    res.status(404).json({
        message: "Not Found"
    })
})



export default router;
