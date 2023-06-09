import express, { Request, Response } from "express";

import moment from "moment";
import crypto from "crypto";
import DataBase from "../Utils/DataBase";
import { iData } from "../Utils/interface";

export const viewTask = (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({ message: "List of Tasks", data: DataBase });
  } catch (error) {
    return res.status(404).json({ message: "Task not found", error });
  }
};

export const createTask = (req: Request, res: Response): Response => {
  try {
    const { title } = req.body;
    const ID = crypto.randomUUID();
    let date = new Date();
    let Task: iData = {
      id: ID,
      date: moment(date).format("LLL"),
      time: moment(date).fromNow(),
      title,
      complete: false,
    };
    DataBase.push(Task);

    return res.status(201).json({ message: "Created Task", data: Task });
  } catch (error) {
    return res.status(404).json({ message: "Can't create Task", error });
  }
};

export const deleteTask = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;
    const task = DataBase.filter((el: iData) => {
      return el.id !== id;
    });
    return res.status(200).json({ message: "Deleted task", data: task });
  } catch (error) {
    return res.status(404).json({ message: "Can't delete Task", error });
  }
};

export const getSingleTask = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;
    const task = DataBase.filter((el: iData) => {
      return el.id === id;
    });
    return res.status(200).json({ message: "Single Task gotten", data: task });
  } catch (error) {
    return res.status(404).json({ message: "Can't find Task", error });
  }
};

export const updateTask = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;
    const task = DataBase.filter((el: iData) => {
      return el.id === id ? (el.complete = true) : null;
    });
    return res.status(201).json({ message: "Task completed", data: task });
  } catch (error) {
    return res.status(404).json({ message: "Can't update Task", error });
  }
};
