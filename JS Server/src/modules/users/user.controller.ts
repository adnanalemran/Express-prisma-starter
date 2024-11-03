// src/controllers/user.controller.ts
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { hashPassword, generateToken, verifyPassword } from "../../utils/auth";

const prisma = new PrismaClient();

const Registration = catchAsync(async (req: Request, res: Response) => {
    const { name, email, password, phoneNumber, freeTrial } = req.body;
    let profileImageUrl = null;

    if (req.file) {
        profileImageUrl = `/uploads/${req.file.filename}`;
    }

    try {
        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: { 
                name, 
                email, 
                password: hashedPassword, 
                phoneNumber, 
                freeTrial: freeTrial === "true", // Convert string to boolean if needed
                profileImage: profileImageUrl 
            },
        });

        const token = generateToken(user.id);
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'User could not be created' });
    }
});

const Login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isValidPassword = await verifyPassword(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = generateToken(user.id);
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

export const UserController = {
    Registration,
    Login
};
