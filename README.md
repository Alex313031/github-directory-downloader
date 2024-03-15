A 0-dependency fork of github-directory-downloader also adding an exluded files option

# github-directory-downloader

Download just a sub directory from a GitHub repo

Node.js port for [`download-directory.github.io`](https://github.com/download-directory/download-directory.github.io)

Recursively (with subdirectories) downloads files only from specified directory via https://raw.githubusercontent.com/
 

```sh
npm i git+https://github.com/Milkshiift/github-directory-downloader.git
```

## Usage

#### Programmatic

```typescript
import download from 'github-directory-downloader';
import { resolve } from 'path';

// Will download content inside docs/manual into "../temp"
// excluding all files named "Color-management.html"
await download(
    'https://github.com/mrdoob/three.js/tree/dev/docs/manual',
    resolve(__dirname, '../temp'),
    ["Color-management.html"] // Optional: Excluded files
);
```

You can also pass options as a third argument:
```typescript
{
    /** GitHub API token */
    token?: string;

    /** Max number of async requests at the same time. 10 by default.
     * download-directory.github.io has no limit, but it can lead to IP blocking
     */
    requests?: number;

    /** Disable console logs */
    muteLog?: boolean;
}
```