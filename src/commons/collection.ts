export interface Collection {
    isEmpty(): Promise<boolean>;
    size(): Promise<number>;
};

export type Container = {
    width: number;
    height: number;
    depth: number;

    x: number;
    y: number;
    z: number;
};
