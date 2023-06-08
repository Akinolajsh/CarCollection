import express, { Request, Response } from "express";

import axios from "axios";

const url = `http://localhost:1110`;

export const getCars = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const car = await axios.get(`${url}/api/car/`).then((res: any) => {
      return res.data;
    });
    return res.status(200).json({
        message: "Cars Details",
        data: car
    })
  } catch (error) {
    return res.status(404).json({
      message: "Cant fetch Cars",
    });
  }
};
