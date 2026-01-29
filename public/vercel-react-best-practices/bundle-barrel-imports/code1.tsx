// Avoid Barrel File Imports
// ❌ Wrong: This approach has performance issues

import { Check, X, Menu } from "lucide-react";
// Loads 1,583 modules, takes ~2.8s extra in dev
// Runtime cost: 200-800ms on every cold start

import { Button, TextField } from "@mui/material";
// Loads 2,225 modules, takes ~4.2s extra in dev
