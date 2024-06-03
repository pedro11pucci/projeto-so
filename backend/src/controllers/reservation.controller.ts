import { Request, Response } from "express";
import { Reservation } from "../infra/entities/reservation.entity";
import ReservationServices from "../services/reservation.services";

export default class ReservationController {

    public constructor(
        private readonly reservationServices: ReservationServices
    ){ }

    public async createReservationController(req: Request, res: Response) {
        const { name, location, date, startTime, endTime, responsible, reason, info, guests } = req.body
        if(!name || !location || !date || !startTime || !endTime || !responsible || !reason || !info || !guests) return res.sendStatus(400)
        try{
            const newReservation = await this.reservationServices.createReservation(req, req.body)
            return res.status(201).send(newReservation)
        }catch(error){
            console.error(error)
            return res.status(500).send(error)
        }
    }
}