export const getFilenameFromPath = (path: string) => {
    return new URL(path).pathname.replace(/(.*\/).*?/, "");
};
