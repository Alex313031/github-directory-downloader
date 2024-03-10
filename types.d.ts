export interface Config {
    /** GitHub token for authorization in private repositories */
    token?: string;

    /** Max number of async requests at the same time. 10 by default.
     * download-directory.github.io has no limit, but it can lead to IP blocking
     */
    requests?: number;

    /** Disable console logs */
    muteLog?: boolean;
}

export interface TreeItem {
    path: string;
    mode: string;
    type: string;
    sha: string;
    size: number;
    url: string;
}

export interface Stats {
    files: Record<string, string>;
    downloaded: number;
    success: boolean;
    error?: any;
}

export declare function download(source: string, saveTo?: string, config?: Config): Promise<Stats>;