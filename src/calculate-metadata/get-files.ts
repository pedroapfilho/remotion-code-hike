import { getStaticFiles } from "@remotion/studio";

export type PublicFolderFile = {
  filename: string;
  value: string;
};

export type SnippetInfo = {
  id: string;
  name: string;
  folderPath: string;
};

export type OriginFolder = {
  name: string;
  snippets: SnippetInfo[];
};

/**
 * Discovers all nested folders in public/ that contain code files.
 * Supports structure: origin-folder/snippet-folder/code-files
 * Returns organized folder hierarchy.
 */
export const getFolders = (): OriginFolder[] => {
  const files = getStaticFiles();
  const origins = new Map<string, Set<string>>();

  for (const file of files) {
    const parts = file.name.split("/");
    // Check for nested structure: origin/snippet/codeX.tsx
    if (parts.length === 3 && parts[2].startsWith("code")) {
      const [origin, snippet] = parts;
      if (!origins.has(origin)) {
        origins.set(origin, new Set());
      }
      origins.get(origin)!.add(snippet);
    }
  }

  return Array.from(origins.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([originName, snippets]) => ({
      name: originName,
      snippets: Array.from(snippets)
        .sort()
        .map((snippetName) => ({
          id: `${originName}--${snippetName}`,
          name: snippetName,
          folderPath: `${originName}/${snippetName}`,
        })),
    }));
};

/**
 * Fetches code files from the public folder.
 * @param folderPath - Full folder path (e.g., "origin/snippet") to fetch files from.
 */
export const getFiles = async (folderPath?: string): Promise<PublicFolderFile[]> => {
  const files = getStaticFiles();

  const codeFiles = files.filter((file) => {
    if (folderPath) {
      // Match files like "origin/snippet/code1.tsx"
      const prefix = `${folderPath}/code`;
      return file.name.startsWith(prefix);
    }
    // Match root-level code files (no slash in name)
    return file.name.startsWith("code") && !file.name.includes("/");
  });

  // Sort files by name to ensure correct order (code1, code2, code3, etc.)
  codeFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  const contents = codeFiles.map(async (file): Promise<PublicFolderFile> => {
    const response = await fetch(file.src);
    const text = await response.text();

    return { filename: file.name, value: text };
  });

  return Promise.all(contents);
};
