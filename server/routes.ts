import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since this is a static site for GitHub Pages, we don't need any API routes
  // All data is included directly in the frontend components

  const httpServer = createServer(app);

  return httpServer;
}
