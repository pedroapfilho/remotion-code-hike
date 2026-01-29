// Avoid Barrel File Imports
// ✅ Right: Imports only what you need

import Check from "lucide-react/dist/esm/icons/check";
import X from "lucide-react/dist/esm/icons/x";
import Menu from "lucide-react/dist/esm/icons/menu";
// Loads only 3 modules (~2KB vs ~1MB)

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// Loads only what you use
