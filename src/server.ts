import cors from "cors";
import express, { Request, Response } from "express";
import { StripeRoute } from "./modules/stripe/stripe.route";

import { UserRoute } from "./modules/users/user.route";
import path from "path";
import { BusnessCardRoute } from "./modules/busnessCard/card.route";

const app = express();
const port = 3014;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api", StripeRoute);

app.use("/api", UserRoute);
app.use("/api", BusnessCardRoute);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the CardX API");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});
