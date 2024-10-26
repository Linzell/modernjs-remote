
    export type RemoteKeys = 'remote/Image' | 'remote/Button';
    type PackageType<T> = T extends 'remote/Button' ? typeof import('remote/Button') :T extends 'remote/Image' ? typeof import('remote/Image') :any;