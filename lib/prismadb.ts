import { PrismaClient } from "@prisma/client";
import exp from "constants";

const client=global.prismadb || new PrismaClient;
if(process.env.NODE_ENV==="production") global.prismadb=client;

export default client;